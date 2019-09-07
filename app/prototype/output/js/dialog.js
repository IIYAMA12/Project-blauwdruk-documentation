let openDialog;
(function () {
  const dialogWrapper = document.getElementById("dialog-wrapper");




  openDialog = function (e) {
    dialogWrapper.classList.remove("hidden");

    const item = dataManager.getItemFromElement(this);

    if (item != undefined) {
      const groupName = item.parent.getData("name");
      if (groupName == "sources") {
        const baseDialog = document.getElementById("source-dialog");

        /*
          header title
        */
        baseDialog.getElementsByClassName("dialog-header")[0].children[0].children[1].textContent = item.getData("name");

        /*
          Properties
        */
        const propertiesContainer = baseDialog.getElementsByClassName("properties-container")[0];
        propertiesContainer.innerHTML = "";
        const propertyList = [{
          key: "firstname",
          friendlyName: "Naam"
        }, {
          key: "email",
          friendlyName: "Email"
        }, {
          key: "phonenumber",
          friendlyName: "Telefoonnummer"
        }];
        const propertyTemplate = [];
        for (let i = 0; i < propertyList.length; i++) {
          const property = propertyList[i];
          const value = item.getData(property.key);

          if (value != undefined) {
            propertyTemplate[propertyTemplate.length] = {
              content: "div",
              type: "tag",
              children: [{
                  content: "p",
                  type: "tag",
                  data: {
                    attributes: [{
                      key: "class",
                      value: "p-label"
                    }]
                  },
                  child: {
                    content: property.friendlyName,
                    type: "text"
                  }
                },
                {
                  content: "p",
                  type: "tag",
                  child: {
                    content: value,
                    type: "text"
                  }
                }
              ]
            }
          }
        }
        templateEngine.render(propertyTemplate, propertiesContainer);

        const footer = baseDialog.getElementsByClassName("properties")[0].getElementsByTagName("footer")[0];
        const netwerkDBLink = item.getData("ftm-netwerk-database");
        console.log(netwerkDBLink);
        if (netwerkDBLink != undefined) {
          footer.getElementsByTagName("a")[0].textContent = netwerkDBLink;
          footer.classList.remove("hidden");
        } else {
          footer.classList.add("hidden");
        }

        /*
          references
        */

        const references = baseDialog.getElementsByClassName("references")[0];
        const referenceList = ["events", "connections", "research-questions"];

        for (let i = 0; i < referenceList.length; i++) {
          const referenceTemplate = [];
          const container = references.getElementsByClassName(referenceList[i])[0];
          const list = container.getElementsByTagName("ul")[0];

          list.innerHTML = "";
          const value = item.getData(referenceList[i]);
          if (typeof (value) === "object") {
            for (let j = 0; i < referenceList.length; i++) {}
          }
          if (referenceTemplate.length > 0) {
            templateEngine.render(referenceTemplate, list)
            container.classList.remove("hidden");
          } else {
            container.classList.add("hidden");
          }
        }

      } else if (groupName == "documents") {

      }

    }
    e.preventDefault();
  };

  const openButtons = document.getElementsByClassName("open-dialog");
  for (let i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", openDialog, false);
  }
  const closeDialog = function () {
    dialogWrapper.classList.add("hidden");
  };
  document.getElementById("close-dialog").addEventListener("click", closeDialog, false);
  dialogWrapper.addEventListener("click", function (e) {
    if (e.target === this) {
      dialogWrapper.classList.add("hidden");
    }
  }, false);
})();