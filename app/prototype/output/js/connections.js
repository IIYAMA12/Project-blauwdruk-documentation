let svgToSpinView;
let svgTimeView;

/* 
  Inspiration from: https://www.d3-graph-gallery.com/graph/network_basic.html
*/
const margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 1336 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

let graphViewMode = "time";

const connectionGraphContainer = document.getElementById("connections-graph-container");
const svgRoot = d3.select(connectionGraphContainer)
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("xmlns", "http://www.w3.org/2000/svg");

svgRoot.node().setAttribute("viewBox","0 0 " + (width + margin.left + margin.right) +  " " +  (height + margin.top + margin.bottom));





  


const defs =  svgRoot.append("defs");

defs.append("marker")
    .attr("id", "svgheadarrow")
    .call(function (D3_element) {

      element = D3_element.node();
      element.setAttribute("viewBox","0 0 10 10");
      element.setAttribute("refX","1");
      element.setAttribute("refY","5");
      element.setAttribute("markerUnits","strokeWidth");
      element.setAttribute("markerWidth","10");
      element.setAttribute("markerHeight","10");
      element.setAttribute("orient", "auto");
    }).append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "rgb(41, 47, 50)")
;

defs.append("marker")
    .attr("id", "svgheadarrow-hover")
    .call(function (D3_element) {

      element = D3_element.node();
      element.setAttribute("viewBox","0 0 10 10");
      element.setAttribute("refX","1");
      element.setAttribute("refY","5");
      element.setAttribute("markerUnits","strokeWidth");
      element.setAttribute("markerWidth","3.333");
      element.setAttribute("markerHeight","3.333");
      element.setAttribute("orient", "auto");
    }).append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "red")
;

defs.append("marker")
    .attr("id", "svgheadarrow-white")
    .call(function (D3_element) {

      element = D3_element.node();
      element.setAttribute("viewBox","0 0 10 10");
      element.setAttribute("refX","1");
      element.setAttribute("refY","5");
      element.setAttribute("markerUnits","strokeWidth");
      element.setAttribute("markerWidth","3.333");
      element.setAttribute("markerHeight","3.333");
      element.setAttribute("orient", "auto");
    }).append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "white")
;


const svg = svgRoot
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

        // svg.call(function(D3_element) {
        //   console.log(D3_element);
        //   D3_element.node().setAttribute("marker-end","url(#svgheadarrow)");
        // })

// Draw the axis
let axis;

      
function renderConnectionGraph () {

  const data = {
    nodes: [],
    links: []
  };

  const connection = dataManager.getConnectionByName("connection-34y2tfwd");
  const rawConnectionChildren = dataManager.getConnectionItems(connection);
  let connectionInfo;
  const connectionChildren = [];
  for (let i = 0; i < rawConnectionChildren.length; i++) {
    const item = rawConnectionChildren[i];
    if (item.parent.getData("name") == "connections") {
      connectionInfo = item;
      
    } else {
      connectionChildren[connectionChildren.length] = item;
      console.log(item);
    }
  }

  const nodes = data.nodes;
  const links = data.links;

  const connectionIdToItem = {};

  for (let i = 0; i < connectionChildren.length; i++) {
    const item = connectionChildren[i];
    nodes[nodes.length] = {
      id: item.id,
      name: item.getData("name"),
      item: item
    };

    connectionIdToItem[item.getData("connection-id")] = item;

    let item2 = connectionChildren[i + 1];
    if (item2 == undefined) {
      item2 = connectionChildren[0];
    }
    if (i < connectionChildren.length - 1) {
      // links[links.length] = {
      //   "source": item.id,
      //   "target": item2.id
      // };
    }
  }

  const relations = connectionInfo.getData("connections-with").filter(function (d) {
    if (d.group == "connections") {
      return true;
    }
    return false;
  })[0].relations;
  
  if (typeof(relations) == "object") {
    for (let i = 0; i < relations.length; i++) {
      const relation = relations[i];
      console.log(relation);
      
      const item1 = connectionIdToItem[relation.a];
      const item2 = connectionIdToItem[relation.b];
      if (item1 != undefined && item2 != undefined) {
        links[links.length] = {
          name: relation.name,
          description: relation.description,
          source: item1.id,
          target: item2.id,
          item: relation,
        };
      }
    }
  }

  // Initialize the links
  const link = svg
    .selectAll("line")
    .data(data.links)
    .enter()
    .append("path")
    .attr("class", "bounding-box-line")
  ;
      // const getDataFromLine = function (e) {
      //   console.log(e.target);
      // };
  
  // const link = svg

  // link
  //   .each(function(d) {
  //     this.addEventListener("click", getDataFromLine, false);
  //   })
  // ;

  // Initialize the nodes
  const node = svg
    .selectAll("circle")
    .data(data.nodes)
    .enter()
    .append("g")
    .attr("class", "event-nodes")
    .style("fill", "#292F32");
  
  node
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", 0)
    .attr("class","time-bind-line")
  ;

  node
    .append("circle")
      .attr("r", 15)
  ;





  const labelType = svg
  .selectAll(".svg-type-label")
    .data(data.nodes)
    .enter()
    .append("text")
    .attr("class", "svg-type-label")
    .text("Gebeurtenis")
  ;

  const labelName = node
    // .selectAll(".svg-name-label")
      .append("text")
      .attr("class", "svg-name-label")
      .text(function (d) {
        return d.name;
      })
  ;



  // Let's list the force we wanna apply on the network
  const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
      .force("link", d3.forceLink()                               // This force provides links between nodes
            .id(function(d) { return d.id; })                     // This provide  the id of a node
            .links(data.links)                                    // and this the list of links
      )
      .force("charge", d3.forceManyBody().strength(-10000))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
      .force("center", d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
      .on("end", ticked);



  
  const distanceFromNode = 25;
  const distanceFromNodeArrow = 35;

  // This function is run at each iteration of the force algorithm, updating the nodes position.
  function ticked() {
    connectionGraphContainer.classList.remove("loading");




    link
    .attr("d",
      function(d) {
        let x1 = d.source.x;
        let y1 = d.source.y;
        let x2 = d.target.x;
        let y2 = d.target.y;
        const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
        const posX1 = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[0];
        const posY1 = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[1];
        const posX2 = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[0];
        const posY2 = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[1];
        return "M" + posX1 + "," + posY1 + " " + posX2 + "," + posY2; // M100,200 C100,100 400,100 400,200
      })

        // .attr("x1", 
        //   function(d) {
        //     let x1 = d.source.x;
        //     let y1 = d.source.y;
        //     let x2 = d.target.x;
        //     let y2 = d.target.y;
  
        //     const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
            
        //     const posX = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[0];
            
        //     return posX; 
        //   })
        // .attr("y1",
        // function(d) {
        //   let x1 = d.source.x;
        //   let y1 = d.source.y;
        //   let x2 = d.target.x;
        //   let y2 = d.target.y;

        //   const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
          
        //   const posY = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[1];
          
        //   return posY; 
        // })
        // .attr("x2", function(d) {
        //   let x1 = d.source.x;
        //   let y1 = d.source.y;
        //   let x2 = d.target.x;
        //   let y2 = d.target.y;

        //   const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
          
        //   const posX = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[0];
          
        //   return posX; 
        // })
        // .attr("y2", function(d) {
        //   let x1 = d.source.x;
        //   let y1 = d.source.y;
        //   let x2 = d.target.x;
        //   let y2 = d.target.y;

        //   const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
          
        //   const posY = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[1];
          
        //   return posY; 
        // })
        .on("click", function (d, i) {
          // use d
          if (d != undefined) {

            const activeElement = svgRoot.node().getElementsByClassName("active-element")[0];
            if (activeElement != undefined) {
              activeElement.classList.remove("active-element");
            }
            this.classList.add("active-element");

            const connectionDetails = document.getElementsByClassName("connection-details")[0];
            if (connectionDetails != undefined) {
              connectionDetails.classList.remove("hidden");
              if (connectionDetails.getElementsByClassName("connection-details__header")[0] != undefined) {
                connectionDetails.getElementsByClassName("connection-details__header")[0].textContent = d.name;
              }
              if (connectionDetails.getElementsByClassName("connection-details__description")[0] != undefined) {
                connectionDetails.getElementsByClassName("connection-details__description")[0].textContent = d.description;
              }
              const toInfoContainer = connectionDetails.getElementsByClassName("connection-details__to-info-container")[0];
              if (toInfoContainer != undefined) {
                toInfoContainer.classList.add("hidden");
              }

              const connectedContent = connectionDetails.getElementsByClassName("connected-content")[0];
              if (connectedContent != undefined) {
                connectedContent.innerHTML = "";
                const item = d.item;
                templateEngine.render(
                  [

                      {
                        content: templatingConnectedButtons,
                        type: "function",
                        data: item
                      }
                    
                    ], connectedContent);
              }

              connectionDetails.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
          } else {
            connectionDetails.classList.add("hidden");
          }
        })
      ;

    const domLinks = link.nodes();
    for (let i = 0; i < domLinks.length; i++) {
      const domLink = domLinks[i];
      
      const copyOfdomLink = domLink.cloneNode(false);

      domLink.parentElement.insertBefore(copyOfdomLink, domLink);
      domLink.parentElement.insertBefore(domLink, copyOfdomLink);

      copyOfdomLink.classList.add("line-effect");
      copyOfdomLink.classList.remove("bounding-box-line");
      const data = d3.select(domLink).data();
      data[0].copyOfdomLink = copyOfdomLink;
    }

    let connectionDetailsButton;
    (function() {
      const button =  document.getElementsByClassName("connection-details")[0].getElementsByClassName("connection-details__to-info")[0];
      button.addEventListener("click", function() {
        const item = dataManager.getItemFromElement(this);
        if (item != undefined) {
          scrollToTimelineElementByItem (item);
        }
      });
    })();
   

    node
        .each(
          function (d) {
            d3.select(this).select("circle")
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
          }
        )
        .on("click", function (d) {
          const item = d.item;
          if (d != undefined) {

            const activeElement = svgRoot.node().getElementsByClassName("active-element")[0];
            if (activeElement != undefined) {
              activeElement.classList.remove("active-element");
            }
            this.classList.add("active-element");

            const connectionDetails = document.getElementsByClassName("connection-details")[0];
            if (connectionDetails != undefined) {
              connectionDetails.classList.remove("hidden");
              if (connectionDetails.getElementsByClassName("connection-details__header")[0] != undefined) {
                connectionDetails.getElementsByClassName("connection-details__header")[0].textContent = d.name;
              }
              if (connectionDetails.getElementsByClassName("connection-details__description")[0] != undefined) {
                connectionDetails.getElementsByClassName("connection-details__description")[0].textContent = item.getData("description");
              }

              const toInfoContainer = connectionDetails.getElementsByClassName("connection-details__to-info-container")[0];
              if (toInfoContainer != undefined) {
                const parentName = item.parent.getData("name");
                console.log(parentName);
                if (parentName == "events") {
                  toInfoContainer.classList.remove("hidden");
                  const button = toInfoContainer.getElementsByClassName("connection-details__to-info")[0];
                  if (button != undefined) {
                    button.textContent = "Ga naar gebeurtenis in tijdlijn";
                    const previousItem = dataManager.getItemFromElement(button);
                    if (previousItem) {
                      dataManager.detachElement(button, previousItem);
                    }
                   
                    dataManager.attachElement(button, item);
                  }

                } else {
                  toInfoContainer.classList.add("hidden");
                }
              }
              const connectedContent = connectionDetails.getElementsByClassName("connected-content")[0];
              if (connectedContent != undefined) {
                connectedContent.innerHTML = "";
                templateEngine.render(
                  [

                      {
                        content: templatingConnectedButtons,
                        type: "function",
                        data: item
                      }
                    
                    ], connectedContent);
              }

              connectionDetails.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
          } else {
            connectionDetails.classList.add("hidden");
          }
        })
    ;
    

    
        


    labelName
      .attr("x", function (d) { return d.x; })
      .attr("y", function(d) { return d.y - 25; })
    ;

    labelType
      .attr("x", function (d) { return d.x; })
      .attr("y", function(d) { return d.y - 40; })
    ;
    if (graphViewMode == "time") {
      svgTimeView();
    }
  }

  svgToSpinView = function () {
    connectionGraphContainer.classList.remove("timeview");
    node
      .each(
        function (d) {
          d3.select(this).select("circle")
          .attr("cx", function (d) { return d.x; })
          .attr("cy", function(d) { return d.y; })
        }
      )
    ;

    link
      .attr("d",
      function(d) {
        let x1 = d.source.x;
        let y1 = d.source.y;
        let x2 = d.target.x;
        let y2 = d.target.y;
        const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
        const posX1 = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[0];
        const posY1 = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[1];
        const posX2 = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[0];
        const posY2 = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[1];
        const path = "M" + posX1 + "," + posY1 + " " + posX2 + "," + posY2; // M100,200 C100,100 400,100 400,200
        d.copyOfdomLink.setAttribute("d", path);
        return path;
      })
    // .attr("x1", 
    //   function(d) {
    //     let x1 = d.source.x;
    //     let y1 = d.source.y;
    //     let x2 = d.target.x;
    //     let y2 = d.target.y;

    //     const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
        
    //     const posX = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[0];
    //     d.copyOfdomLink.setAttribute("x1", posX);
    //     return posX; 
    //   })
    // .attr("y1",
    // function(d) {
    //   let x1 = d.source.x;
    //   let y1 = d.source.y;
    //   let x2 = d.target.x;
    //   let y2 = d.target.y;

    //   const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
      
    //   const posY = extendLine2D(x2, y2, x1, y1, distance - distanceFromNode)[1];
      
    //   d.copyOfdomLink.setAttribute("y1", posY);

    //   return posY; 
    // })
    // .attr("x2", function(d) {
    //   let x1 = d.source.x;
    //   let y1 = d.source.y;
    //   let x2 = d.target.x;
    //   let y2 = d.target.y;

    //   const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
      
    //   const posX = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[0];
    //   d.copyOfdomLink.setAttribute("x2", posX);

    //   return posX; 
    // })
    // .attr("y2", function(d) {
    //   let x1 = d.source.x;
    //   let y1 = d.source.y;
    //   let x2 = d.target.x;
    //   let y2 = d.target.y;

    //   const distance = getDistanceBetweenPoints2D(x2, y2, x1, y1);
      
    //   const posY = extendLine2D(x1, y1, x2, y2, distance - distanceFromNodeArrow)[1];
    //   d.copyOfdomLink.setAttribute("y2", posY);
    //   return posY; 
    // })
    labelName
        .attr("x", function (d) { return d.x; })
        .attr("y", function(d) { return d.y - 25; })
      ;

    labelType
      .attr("x", function (d) { return d.x; })
      .attr("y", function(d) { return d.y - 40; })
    ;


  }
  const posY = height * 0.6666;
  svgTimeView = function () {
    connectionGraphContainer.classList.add("timeview");
    const nodeCount = node.nodes().length;
    // width = 1336 - margin.left
    const spacing  = width / nodeCount;
    
    const dates = nodes.reduce(function (accumulator, currentValue, currentIndex, array) {
      accumulator[accumulator.length] = currentValue.item.getData("date");
      return accumulator;
    }, 
    []
    );

    const scaleTime = d3.scaleLinear()
      .domain([d3.min(dates), d3.max(dates)]);
      
      


    node
      .each(
        function (d) {
          const selectedNodes = d3.select(this);

          selectedNodes.select("circle")
          .attr("cx", function (d, i) { 
            return spacing * (nodeCount-1) * scaleTime(d.item.getData("date")) + spacing / 2; 
          })
          .attr("cy", posY);

          selectedNodes.select(".time-bind-line")
          .attr("x1", function (d, i) { 
            return spacing * (nodeCount-1) * scaleTime(d.item.getData("date")) + spacing / 2; 
          })
          .attr("x2", function (d, i) { 
            return spacing * (nodeCount-1) * scaleTime(d.item.getData("date")) + spacing / 2; 
          })
          .attr("y1", posY)
          .attr("y2", posY + 143)
        ;

        }
      )
    ;

    link
      .attr("d",
      function(d) {
        const posX1 = spacing * (nodeCount-1) * scaleTime(d.source.item.getData("date")) + spacing / 2;
        const posX2 = spacing * (nodeCount-1) * scaleTime(d.target.item.getData("date")) + spacing / 2;
        const bounce = 10 + Math.min((posX2 - posX1) * 0.3, 140);
        const path = "M" + posX1 + "," + posY + " C" + posX1 + "," + (posY + bounce) + " " + posX2  + "," + (posY + bounce) + " " + posX2 + "," + posY; // M100,200 C100,100 400,100 400,200
        d.copyOfdomLink.setAttribute("d", path);
        return path;
      })
      // .attr("x1", 
      //   function(d) {
      //     const posX = spacing * (nodeCount-1) * scaleTime(d.source.item.getData("date")) + spacing / 2
      //     d.copyOfdomLink.setAttribute("x1", posX);
      //     return posX; 
      //   })
      // .attr("y1",
      // function(d) {
      //   d.copyOfdomLink.setAttribute("y1", posY);
      //   return posY; 
      // })
      // .attr("x2", function(d) {
      //   const posX = spacing * (nodeCount-1) * scaleTime(d.target.item.getData("date")) + spacing / 2;
      //   d.copyOfdomLink.setAttribute("x2", posX);
      //   return posX; 
      // })
      // .attr("y2", function(d) {
      //   d.copyOfdomLink.setAttribute("y2", posY);
      //   return posY; 
      // })
    ;

    labelName
      .attr("x", function (d) { 
        // return d.x; 
        const box = this.getBBox();
        return spacing * (nodeCount-1) * scaleTime(d.item.getData("date")) + box.width / 2 + spacing / 2; 
      })
      .attr("y", function(d) { return posY - 20; })
      .style("transform-origin", function(d) {
        const box = this.getBBox();
        //
        
        const posX = spacing * (nodeCount-1) * scaleTime(d.item.getData("date")) + spacing / 2; 
        return posX + "px " + (posY - 20 + box.height) + "px" ;
      });
    ;

    

    labelType
      .attr("x", function (d) { return d.x; })
      .attr("y", function(d) { return posY - 40; })
    ;

    axis = svg
      .append("g")
      .attr("class", "time-line-axis");

    const axisScale = scaleTime.range([0, spacing * (nodeCount-1)]);       
    
    axis.call(d3.axisBottom(axisScale).tickFormat(d3.timeFormat("%d-%m-%Y"))); //d3.timeFormat("%Y-%m-%d")

    axis.attr("transform", "translate(" + (spacing / 2) + ", " + (posY + 150) + ")")

  }
}

document.getElementById("graph-view-mode").addEventListener("change", function(e) {
  const source = e.target;
    
  const value = source.options[source.selectedIndex].value;
  graphViewMode = value;
  console.log(graphViewMode);
  if (!connectionGraphContainer.classList.contains("loading")) {
    if (graphViewMode == "spin") {
      svgToSpinView();
    } else {
      svgTimeView();
    }
  }
});

