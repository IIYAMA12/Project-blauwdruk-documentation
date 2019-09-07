
const dataBaseRaw = [
  {
    key: "sources",
    elementId: "sources-container",
    items: [
      [
        {key:"connections-with", value: 
          [
            {
              group: "event",
              name: "event-345643"
            }
          ]
        },
        {key: "id", value: "0047268887"},
        {key:"name", value: "Jan van Doen"},
        {key:"firstname", value: "Jan"},
        {key:"email", value: "jan@gmail.com"},
        {key:"phonenumber", value: "06 201 244 264"},
        {key: "ftm-netwerk-database", value: "www.ftm/tag/jan-van-doen"},
        {key: "events", key: []},
        {key: "connections", key: []},
        {key: "research-questions", key: []},
      ],
      [
        {key:"connections-with", value: 
        [
          {
            group: "event",
            name: "event-345643"
          },
          {
            group: "event",
            name: "event-343443"
          }
        ]
      },
        {key: "id", value: "00437635887"},
        {key:"name", value: "Jaap van Dijk"},
        {key:"firstname", value: "Jaap"},
        {key:"email", value: "jaap@gmail.com"},
        {key:"phonenumber", value: "06 251 264 264"},
        {key: "ftm-netwerk-database", value: "www.ftm/tag/jaap-van-dijk"},
        {key: "events", key: []},
        {key: "connections", key: []},
        {key: "research-questions", key: []},
      ]
    ],
  },
  {
    key: "documents",
    elementId: "document-container",
    items: [
      [
        {key:"name", value: "Jaarverslag zorg 20-06-2018"},
        {key:"connections-with", value: 
          [
            {
              group: "event",
              name: "event-345643"
            }
          ]
        }
      ]
    ]
  },
  {
    key: "events",
    elementId: "event-list",
    items: [
      [
        {
          key:"name",
          value: "Faillissement bv. Zorggeld eters"
        },
        {
          key:"description",
          value: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators."
        },
        {
          key: "date",
          value: new Date(2018, 1, 1)
        },
        {key:"connections-with", value: 
          [
            {
              group: "event",
              name: "event-345643"
            }
          ]
        },
      ],
      [
        {
          key:"name",
          value: "Ontslag medewerkers"
        },
        {
          key:"description",
          value: "The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators."
        },
        {
          key: "date",
          value: new Date(2018, 1, 6)
        },
        {key:"connections-with", value: 
          [
            {
              group: "event",
              name: "event-343443"
            }
          ]
        },
      ],
      [
        {
          key:"name",
          value: "Lancering product"
        },
        {
          key:"description",
          value: "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. Are members of the same family."
        },
        {
          key: "date",
          value: new Date(2019, 1, 13)
        },
        {key:"connections-with", value: 
          [
            {
              group: "event",
              name: "event-325fsd345643"
            }
          ]
        },
      ]
    ]
  }
];


/*
  Process data
*/
const dataBase = {};


const outputContainer = dataManager.addItem();

for (let i=0; i < dataBaseRaw.length; i++) {
  const group = dataBaseRaw[i];
  
  const groupContainer = dataManager.addItem(outputContainer);
  dataBase[group.key] = groupContainer;
  groupContainer.setData("group", true);
  groupContainer.setData("name", group.key);
  if (true) {
    let parent;

    if (group.elementId != undefined) {
      parent = document.getElementById(group.elementId);
      dataManager.attachElement(parent, groupContainer);
    }

    const items = group.items;
    for (let j=0; j < items.length; j++){
      
      const item = items[j];

      const itemNew = dataManager.addItem(groupContainer);
      

      for (let k=0; k < item.length; k++){
        const properties = item[k];
        itemNew.setData(properties.key, properties.value);
      }

      const connectionData = itemNew.getData("connections-with");
      if (connectionData != undefined) {
        for (let k=0; k < connectionData.length; k++){
          let connection = dataManager.getConnectionByName(connectionData[k].name);
          if (connection == undefined) {
            connection = dataManager.createItemConnection(connectionData[k].name);
            dataManager.setConnectionGroup(connection, connectionData[k].group);
          }
          
          itemNew.joinConnection(connection);
        }
      }
    }
  }
}


/*
  Draw info
*/
for (let i=0; i < dataBaseRaw.length; i++) {
  if (true) {
    const group = dataBaseRaw[i];
    const groupContainer = dataBase[group.key];
    let parent;

    if (group.elementId != undefined) {
      parent = document.getElementById(group.elementId);
    }
    for (let j=0; j < groupContainer.children.length; j++){
      const item = groupContainer.children[j];

      if (group.key === "sources") {
        const template = [
          {
            content: "li",
            type: "tag",
            child: {
              content: "a",
              type: "tag",
              data: {
                attributes: [
                  {
                    key: "class",
                    value: "open-dialog"
                  },
                  {
                    key: "href",
                    value: "#"
                  }
                ]
              },
              child: {
                content: "figure",
                type: "tag",
                children: [
                  {
                    content: "img",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "src",
                          value: "assets/bron.svg"
                        },
                        {
                          key: "alt",
                          value: item.getData("name")
                        }
                      ]
                    }
                  },
                  {
                    content: "figcaption",
                    type: "tag",
                    child: {
                      content: item.getData("name"),
                      type: "text"
                    }
                  }
                ]
              }
            }
          }
        ];
        templateEngine.render(template, parent);
        dataManager.attachElement(template[0].elements[0], item);
        dataManager.attachElement(template[0].child.elements[0], item);
        template[0].child.elements[0].addEventListener("click", openDialog, false);
      } else if (group.key === "documents") {
        const template = [
          {
            content: "li",
            type: "tag",
            child: {
              content: "a",
              type: "tag",
              data: {
                attributes: [
                  {
                    key: "class",
                    value: "open-dialog"
                  },
                  {
                    key: "href",
                    value: "#"
                  }
                ]
              },
              child: {
                content: "figure",
                type: "tag",
                children: [
                  {
                    content: "img",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "src",
                          value: "assets/document.svg"
                        },
                        {
                          key: "alt",
                          value: item.getData("name")
                        }
                      ]
                    }
                  },
                  {
                    content: "p",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "class",
                          value: "format"
                        }
                      ]
                    },
                    child: {
                      content: "PDF",
                      type: "text"
                    }
                  },
                  {
                    content: "figcaption",
                    type: "tag",
                    child: {
                      content: item.getData("name"),
                      type: "text"
                    }
                  }
                ]
              }
            }
          }
        ];
        templateEngine.render(template, parent);
        dataManager.attachElement(template[0].elements[0], item);
        dataManager.attachElement(template[0].child.elements[0], item);
        template[0].child.elements[0].addEventListener("click", openDialog, false);
      } else if (group.key === "events") {
        const date = item.getData("date");
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const month = monthIndex + 1;
        const year = date.getFullYear();

        const template = [
          {
            content: "li",
            type: "tag",
            data: {
              attributes: [
                {
                  key: "class",
                  value: "time-line-item"
                }
              ]
            },
            children: [
              {
                content: "p",
                type: "tag",
                data: {
                  attributes: [
                    {
                      key: "class",
                      value: "time-line-item__date-year"
                    }
                  ]
                },
                child: {
                  content: year,
                  type: "text"
                }
              },
              {
                content: "article",
                type: "tag",
                data: {
                  attributes: [
                    {
                      key: "class",
                      value: "time-line-item__article"
                    }
                  ]
                },
                children: [
                  {
                    content: "img",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "class",
                          value: "time-line-item__arrow"
                        },
                        {
                          key: "aria-hidden",
                          value: "true"
                        },
                        {
                          key: "src",
                          value: "assets/tijd-line-pijl.svg"
                        }
                      ]
                    }
                  },
                  {
                    content: "p",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "class",
                          value: "time-line-item__full-date"
                        }
                      ],
                    },
                    child: {
                      content: "Datum: " + day + "-" + month + "-" + year,
                      type: "text"
                    }
                  },
                  {
                    content: "div",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "class",
                          value: "padding-box"
                        }
                      ],
                    },
                    children: [
                      {
                        content: "div",
                        type: "tag",
                        children: [
                          {
                            content: "h3",
                            type: "tag",
                            child: {
                              content: item.getData("name"),
                              type: "text"
                            }
                          },
                          {
                            content: "p",
                            type: "tag",
                            child: {
                              content: item.getData("description"),
                              type: "text"
                            },
                          }
                        ]
                      },
                      {
                        content: "section",
                        type: "tag",
                        data: {
                          attributes: [
                            {
                              key: "class",
                              value: "connected-content"
                            }
                          ],
                        },
                        child: {
                            content: function () {
                              const elements = [];

                              const connections = dataManager.getItemConnections(item);
                              const connectionsFoundRegister = {};
                              for (let i = 0; i < connections.length; i++) {
                                const connection = connections[i];
                                
                                
                                

                                const connectedItems = dataManager.getConnectionItems(connection);
                                for (let j = 0; j < connectedItems.length; j++) {
                                  const connectedItem = connectedItems[j];

                                  if (connectedItem !== item) {
                                    const typeOfData = connectedItem.parent.getData("name");
                                    if (connectionsFoundRegister[typeOfData] == undefined) {
                                      connectionsFoundRegister[typeOfData] = {
                                        count: 0,
                                        list:[]
                                      };
                                    }
                                    connectionsFoundRegister[typeOfData].count++;
                                    connectionsFoundRegister[typeOfData].list[connectionsFoundRegister[typeOfData].list.length] = connectedItem;

                                  }
                                }

                                for (var typeOfData in connectionsFoundRegister) {
                                  if (connectionsFoundRegister.hasOwnProperty(typeOfData)) {
                                    const connectedItems = connectionsFoundRegister[typeOfData].list;
                                    const count = connectionsFoundRegister[typeOfData].count;

                                    const container = document.createElement("div");
                                    container.classList.add("connected-content-button-wrapper", "close");

                                    const button = document.createElement("button");
                                    container.appendChild(button);

                                    button.setAttribute("type", "button");
                                    button.classList.add("connected-content-button");

                                    if (typeOfData == "sources") {
                                      button.classList.add("source");
                                    } else if (typeOfData == "documents") {
                                      button.classList.add("doc");
                                    }

                                    const screenReaderElement = document.createElement("span");
                                    const countElement = document.createElement("span");
                                    countElement.textContent = count + "x";
                                    button.appendChild(screenReaderElement);
                                    button.appendChild(countElement);

                                    const listElement = document.createElement("ul");
                                    for (let i = 0; i < connectedItems.length; i++) {
                                      const connectedItem = connectedItems[i];
                                      const itemElement = document.createElement("li");
                                      const button = document.createElement("button");
                                      button.classList.add("open-dialog");
                                      button.setAttribute("type", "button");
                                      button.textContent = connectedItem.getData("name");
                                      itemElement.appendChild(button);
                                      listElement.appendChild(itemElement);
                                      connectedItem.attachElement(button);
                                      button.addEventListener("click", openDialog, false);
                                    }
                                    container.appendChild(listElement);
                                    elements[elements.length] = container;
                                  }
                                }
                              }
                              return elements;
                          },
                          type: "function",
                        }
                      }
                    ]
                  },
                  {
                    content: "div",
                    type: "tag",
                    data: {
                      attributes: [
                        {
                          key: "class",
                          value: "connector"
                        }
                      ],
                    },
                    child: {
                      content: "div",
                      type: "tag",
                      data: {
                        attributes: [
                          {
                            key: "class",
                            value: "inner"
                          }
                        ],
                      },
                    }
                  }
                ]
              }
            ]
          }
        ];
        templateEngine.render(template, parent);

        
        dataManager.attachElement(template[0].elements[0], item);
        /*
         <li class="time-line-item">
                <p class="time-line-item__date-year">2018</p>
                <article class="time-line-item__article">
                  <img class="time-line-item__arrow" alt="" aria-hidden="true" src="assets/tijd-line-pijl.svg">
                  <p class="time-line-item__full-date">Datum: 01-01-2018</p>
                  <div class="padding-box">
                    <div>
                      <h3>Faillissement bv. Zorggeld eters</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in dolor in aliquam</p>
                    </div>
                    <section class="connected-content">
                      <button class="open-dialog connected-content-button source" type="button"><span class="screen-reader">Bronnen</span><span>2x</span></button><button class="open-dialog connected-content-button doc" type="button"><span class="screen-reader">Documenten</span><span>3x</span></button>
                    </section>
                  </div>
                  <div class="connector">
                      <div class="inner">
                      </div>
                  </div>
                </article>
              </li>
        */

      }
    }
  }
}



sortTimeline (true);

