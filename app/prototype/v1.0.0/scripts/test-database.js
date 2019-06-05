const testDatabaseElement = document.getElementById("test-database");



// const builder = {
//   content: "ul",
//   type: "tag",
//   child: {
//       content: function (data, parent) {

//           const count = data.children.length;

//           const elementsWithData = [];
//           for (let i = 0; i < count; i++) {
//               elementsWithData[elementsWithData.length] = {element: document.createElement("li"), data: "p"};
//           }
//           return elementsWithData;
//       },
//       type: "function",
//       children: [
//         {
//             content: function (data, parent, instruction) {
//               console.log(instruction.parent);
//             },
//             type: "function",
//         }
//       ]
//   }
// };

// const theTemplate = [
//   builder
// ];


function startBuildingTemplate () {
  const theTemplate = [
    {
      content: "ul",
      type: "tag",
      children: []
    }
  ];

  const applyChildren = function (parent, newParent) {
    
    const children = [];
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children[i];
      console.log(child);

      const section = {
        content: "section",
        type: "tag",
      };

      const templateSegment = {
        content: "li",
        type: "tag",
        child: {
          content: "section",
          type: "tag",
          data: {
            data: child.getData("data"),
            id: child.id
          },
          children: [
            {
              content: "header",
              type: "tag",
              child: {
                content: "titel",
                type:"text"
              }
            },
            section,
            {
              content: "footer",
              type: "tag"
            }
          ]
        }
      };
      
      section.child = applyChildren(child, section);

      
      console.log(children)


      children[children.length] = templateSegment;
    }
    newParent.children = children;
  };

  const hierarchy = dataManager.items.hierarchy;
  const newHierarchy = [];
  applyChildren(hierarchy, newHierarchy);
  theTemplate[0].children = newHierarchy.children;

  console.log("theTemplate", theTemplate);
  templateEngine.render(theTemplate, testDatabaseElement);
}

startBuildingTemplate ();