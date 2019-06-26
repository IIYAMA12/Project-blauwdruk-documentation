let print = console.log;

// const item1 = dataManager.addItem();
// const item1_1 = dataManager.addItem(item1);
// const item1_2 = dataManager.addItem(item1);

// const item2 = dataManager.addItem();
// const item2_1 = dataManager.addItem(item2);
// const item2_2 = dataManager.addItem(item2);


/*
const item = dataManager.addItem();
item.setData("data", 1);
const item2 = dataManager.addItem(item);
item2.setData("data", 2);
const item3 = dataManager.addItem(item);
item3.setData("data", 3);

// dataManager.moveToRoot(item3);

// const item4 = dataManager.addItem(item);
// item4.setData("data", 4);
// const item6 = dataManager.addItem(item4);
// item6.setData("data", 6);
const item5 = dataManager.addItem();
// dataManager.removeItem(item);

// print(dataManager.getIndex(item));
// print(dataManager.getIndex(item2));
print(dataManager.getIndex(item3));

// dataManager.removeItemByIndex(0);
// dataManager.removeItemByIndex(0);
// dataManager.removeItemByIndex(0);

item.setData("test", true);
// console.log(item.getData("test"));

// const exportData = dataManager.export();
// console.log(exportData);

// dataManager.import(exportData);

*/




(function () {

  const mainContainer = dataManager.addItem();
  mainContainer.container = true;

  const createAddButton = function (parent) {
    const container = document.createElement("div");
    container.classList.add("add-item-container");

    const button = document.createElement("button");
    button.classList.add("add-item");
    button.textContent = "+";
    container.appendChild(button);
    if (parent != undefined) {
      parent.appendChild(container);
    }
    button.addEventListener("click", addItem, false);
    return container;
  };

  const addProperty = function () {
    console.log("addProperty")
    const parentId = this.getAttribute("parent-id");
    
    if (parentId != undefined) {
      const parentElement = document.getElementById("item-id-" + parentId);
      console.log(parentElement, "item-id-" + parentId);
      if (parentElement != undefined) {
        
        const item = dataManager.getItemFromElement(parentElement);
        if (item != undefined) {

            const propertyList = parentElement.getElementsByClassName("property-list")[0];
            const group = document.createElement("div");
            group.classList.add("property");
            (function() {
              const inputModeContainer = document.createElement("div");
              const input = document.createElement("input");
              const label = document.createElement("label");
          
              inputModeContainer.classList.add("input-edit-mode");
              inputModeContainer.appendChild(label);
              inputModeContainer.appendChild(input);
              group.appendChild(inputModeContainer);
  
              inputModeContainer.addEventListener("click", function (e) {
                const source = e.target;
                if (source.tagName === "LABEL") {
                  this.classList.add("edit");
                  this.getElementsByTagName("input")[0].focus();
                }
              });
              input.addEventListener("input", function() {
                const parentId = this.getAttribute("parent-id");
                if (parentId != undefined) {
                  
                  const containerElement = document.getElementById("item-id-" + parentId);
                  const item = dataManager.getItemFromElement(containerElement);
                  
                  if (item != undefined) {
                    item.setData("property-" + this.id, this.value);
                  }
                }
              });
              
              input.addEventListener("blur", function() {
                const parentElement = this.parentElement;
                parentElement.classList.remove("edit");
          
                const parentId = this.getAttribute("parent-id");
                
                if (parentId != undefined) {
                  
                  const containerElement = document.getElementById("item-id-" + parentId);
                  
                  const item = dataManager.getItemFromElement(containerElement);
                  
                  if (item != undefined) {
                    parentElement.getElementsByTagName("label")[0].textContent = item.getData("property-" + this.id);
                  }
                }
              });

              const newId = dataManager.generateNewId();
              label.setAttribute("for", "property-id-" + newId);
              input.setAttribute("id", "property-id-" + newId);
              input.setAttribute("parent-id", item.id);
          
              label.textContent = "<kenmerknaam>";
            })();
            (function() {
              const inputModeContainer = document.createElement("div");
              const input = document.createElement("input");
              const label = document.createElement("label");
          
              inputModeContainer.classList.add("input-edit-mode");
              inputModeContainer.appendChild(label);
              inputModeContainer.appendChild(input);
              group.appendChild(inputModeContainer);
  
              inputModeContainer.addEventListener("click", function (e) {
                const source = e.target;
                if (source.tagName === "LABEL") {
                  this.classList.add("edit");
                  this.getElementsByTagName("input")[0].focus();
                }
              });
              input.addEventListener("input", function() {
                const parentId = this.getAttribute("parent-id");
                if (parentId != undefined) {
                  
                  const containerElement = document.getElementById("item-id-" + parentId);
                  const item = dataManager.getItemFromElement(containerElement);
                  
                  if (item != undefined) {
                    item.setData("property-" + this.id, this.value);
                  }
                }
              });
              
              input.addEventListener("blur", function() {
                const parentElement = this.parentElement;
                parentElement.classList.remove("edit");
          
                const parentId = this.getAttribute("parent-id");
                
                if (parentId != undefined) {
                  
                  const containerElement = document.getElementById("item-id-" + parentId);
                  
                  const item = dataManager.getItemFromElement(containerElement);
                  
                  if (item != undefined) {
                    parentElement.getElementsByTagName("label")[0].textContent = item.getData("property-" + this.id);
                  }
                }
              });

              const newId = dataManager.generateNewId();
              label.setAttribute("for", "property-id-" + newId);
              input.setAttribute("id", "property-id-" + newId);
              input.setAttribute("parent-id", item.id);
          
              label.textContent = "<kenmerk>";
            })();
            propertyList.appendChild(group);
        }
      }
    }
  };

  const createPropertyButton = function (parent) {
    const button = document.createElement("button");
    button.classList.add("add-property");
    button.textContent = "Kenmerk toevoegen";
    if (parent != undefined) {
      parent.appendChild(button);
    }
    button.addEventListener("click", addProperty, false);
    return button;
  };

  const inputUpdate = function () {
    const parentId = this.getAttribute("parent-id");
    if (parentId != undefined) {
      const parentElement = document.getElementById("item-id-" + parentId);
      if (parentElement) {
        const item = dataManager.getItemFromElement(parentElement);
        if (item != undefined) {
          item.setData("name", this.value);
        }
      }
    }
  };

  const addItem = function () {
    
    const parentElement = this.parentElement;

    const parent = dataManager.getItemFromElement(parentElement);
    
    const article = document.createElement("article");


    const item = dataManager.addItem(parent != undefined ? parent : mainContainer, 0);
    item.attachElement(article);

    const id = item.id;
    article.id = "item-id-" + id;
    

    const section = document.createElement("section");
    article.appendChild(section);
    section.classList.add("container");
    
    

    
    
    const header = document.createElement("header");
    section.appendChild(header);

    const propertyList = document.createElement("section");
    propertyList.classList.add("property-list");
    section.appendChild(propertyList);

    const footer = document.createElement("footer");
    createPropertyButton(footer).setAttribute("parent-id", id);
    propertyList.appendChild(footer);

    const aside = document.createElement("aside");
    const menu = document.createElement("ul");
    aside.appendChild(menu);
    const buttonItems = [
      {
        label: "instellingen",
        image: "settings",
      },
      {
        label: "breng item naar boven",
        image: "up",
      },
      {
        label: "breng item naar beneden",
        image: "down",
      },
      {
        label: "kopie",
        image: "copy",
      },
      {
        label: "verwijder",
        image: "remove",
      }

    ];
    for (let i=0; i < buttonItems.length; i++) {
      const buttonContainer = document.createElement("li");
      const button = document.createElement("button");
      const buttonData = buttonItems[i];
      button.setAttribute("image", buttonData.image);
      const buttonLabel = document.createElement("span");
      buttonLabel.textContent = buttonData.label;
      buttonLabel.classList.add("screen-reader-only");
      button.appendChild(buttonLabel);
      

      buttonContainer.appendChild(button);
      menu.appendChild(buttonContainer);
    }
    section.appendChild(aside);

    const inputModeContainer = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");

    inputModeContainer.classList.add("input-edit-mode");
    inputModeContainer.appendChild(label);
    inputModeContainer.appendChild(input);
    header.appendChild(inputModeContainer);
    inputModeContainer.addEventListener("click", function (e) {
      const source = e.target;
      if (source.tagName === "LABEL") {
        this.classList.add("edit");
        this.getElementsByTagName("input")[0].focus();
      }
    });
    
    input.addEventListener("blur", function() {
      const parentElement = this.parentElement;
      parentElement.classList.remove("edit");
      
      const parentId = this.getAttribute("parent-id");
      
      if (parentId != undefined) {
        
        const containerElement = document.getElementById("item-id-" + parentId);
        const item = dataManager.getItemFromElement(containerElement);
        if (item != undefined) {
          let name = item.getData("name");
          if (name == undefined || name.trim() === "") {
            name = "<naam>";
          }
          parentElement.getElementsByTagName("label")[0].textContent = name;
          
        }
      }
    });

    input.addEventListener("input", inputUpdate, false)

    label.setAttribute("for", "name-item-id-" + item.id);
    input.setAttribute("id", "name-item-id-" + item.id);
    input.setAttribute("parent-id", item.id);

    label.textContent = "<name>";


    createAddButton(article).setAttribute("parent-id",  item.id);
    
    // parentElement.insertAdjacentElement('afterbegin', article);
    parentElement.insertBefore(article, this.nextSibling);
    // parentElement.appendChild(article);
  };

  const addItemButtons = document.getElementsByClassName("add-item");
  for (let i= 0; i < addItemButtons.length; i++)  {
    addItemButtons[i].addEventListener("click", addItem, false)
  } 

  const testDatabase = document.getElementById("test-database");

})();