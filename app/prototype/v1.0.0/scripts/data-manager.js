// function importHierarchy (item, newItem, items, itemsList) {
//   const parentId = item.parent;
//   for (let i = 0; i < itemsList.length) {
//     if (items[i].id === parentId) {
//       const newParent = new dataManager.constructor.build(newItem);
//       if (newParent.parent !== undefined) {
//         return
//       } else {
        
//       }
//     }
//   }
// }

function importHierarchy (parent, items) {
  const id = parent.id;
  for (let i = items.length - 1; i > -1; i--) {
    const child = items[i];
    if (typeof(child) === "object" && id === child.parent) {

      const newChild = new dataManager.constructor.build(parent);
          
      newChild.parent = parent;
      newChild.data = child.data;
      newChild.id = child.id;
      newChild.children = [];


      parent[child.index] = newChild;
      importHierarchy(newChild, items);

      items.splice(i, 1);
    }
  }
}

const dataManager = {
  lastId: 1,
  import: function (items) {
    if (items !== undefined && typeof(items) === "object") {

      console.log(this.items.hierarchy);

      this.items.list = [];
      this.items.hierarchy =  {root: true, children: [], id: 0};

      const itemsList = this.items.list;
      const itemsHierarchy = this.items.hierarchy;



      // const result = items.reduce(importHierarchy, {list: [], hierarchy: []});

      // this.items.list = result.list;
      // this.items.hierarchy = result.hierarchy;


      for (let i = items.length-1; i > -1 ; i--) {

        const item = items[i];
        if (item.parent === 0) {
          const newItem = new dataManager.constructor.build(itemsHierarchy);
          
          newItem.parent = itemsHierarchy;
          newItem.data = item.data;
          newItem.id = item.id;
          newItem.children = [];

          itemsHierarchy.children[item.index] = newItem;

          items.splice(i, 1);
        }

        itemsList[itemsList.length] = item;
      }

      for (let i = 0; i < items.length; i++) {
        importHierarchy(items[i], items);
      }
      console.log(itemsHierarchy);
      

      // let index = 0;
      // do {
      //   const item = items[index];
        
      //   let parent = item.parent;
        
      //   if (parent === undefined) {
      //     parent = itemsList.find(function (item_) { 
      //       return item_.id === parent;
      //     });
          
      //   }

      //   if (typeof(parent) === "object") {
      //     const newItem = new dataManager.constructor.build(parent);
      //     newItem.data = item.data;
      //     newItem.id = item.id;
      //     if (parent.children === undefined) {
      //       parent.children = [];
      //     }
      //     console.log("parent.children", parent)
      //     parent.children[item.index] = newItem;
      //     itemsList[itemsList.length] = newItem;
      //     newItem.parent = parent;
      //     console.log("splice");
      //     items.children.splice(index, 1);
      //   }
      //   index++;
      //   if (index === items.length) {
      //     index = 0;
      //   }
      // } while (items[0] != undefined);
    }
  },
  export: function () {
    const list = this.items.list;
    const newList = [];

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const newItem = {};
      newList[i] = newItem;
      let parentFound;
      for (let key in item) {
        if (key == "parent") {
          const parent = item.parent;
          let index;
          for (let j = 0; j < parent.children.length; j++) {
            if (parent.children[j].id == item.id) {
              newItem.index = j;
              break;
            }
          }
          const id = parent.id;
          newItem.parent = id;
          parentFound = true;
        } else {
          const value = item[key];
          if (typeof(value) !== "function" && key !== "children") {
            newItem[key] = value;
          }
        }
      }
      if (!parentFound) {
        item.index = i;
      }

    }
    
    return newList;
  },
  constructor: {
    build: function (parent) {
      this.parent = parent;
      this.children = [];
      this.data = {};
      const methodsList = dataManager.constructor.methodsList;
      for (let i = 0; i < methodsList.length; i++) {
        const method = methodsList[i];
        this[method.key] = method.func;
      }
    },
    methodsList: [
      {
        func: function (key, data) {
          this.data[key] = data;
        },
        key: "setData"
      },
      {
        func: function (key) {
          return this.data[key];
        },
        key: "getData"
      },
      {
        func: function () {
          return dataManager.removeItem(this);
        },
        key: "remove"
      }
    ]
  },
  items: {
    list: [],
    hierarchy: {root: true, children: [], id: 0}
  },
  addItem: function (parent, index) {
    index = Number(index);
    if (parent == undefined ) {
      parent = this.items.hierarchy;
    }
    
    
    const itemsList = this.items.list;
    const item = new dataManager.constructor.build(parent);

    item.id = (dataManager.lastId++);
    itemsList[itemsList.length] = item;

    if (index == undefined) {
      parent.children[parent.children.length] = item;
    } else {
      parent.children.splice(index, 0, item);
    }

    return item;
    
  },
  removeChildren: function (item) {
    const children = item.children;
    if (children !== undefined && typeof(children) === "object") {
      for (let i = children.length - 1; i > -1; i--) {
        dataManager.removeItem(children[i]);
      }
    }
  },
  removeItemById: function (item, id) {
    const parent = item.parent;
    if (parent != undefined && id != undefined && !isNaN(id)) {

      // remove from the whole list
      const itemsList = this.items.list;
      for (let i = 0; i < itemsList.length; i++) {
        const item = itemsList[i];
        if (item.id === id) {
          itemsList.splice(i, 1);
          break;
        }
      }

      // remove from the parent
      for (let i = 0; i < parent.children.length; i++) {
        const item = parent[i];
        if (item.id === id) {
          parent.children.splice(i, 1);
          break;
        }
      }

      dataManager.removeChildren(item);


      return true;
    }
    return false;
  },
  removeItemByIndex: function (item, index) {
    const parent = item.parent;
    if (parent != undefined && index != undefined && !isNaN(index)) {
      const id = parent[index];
      // remove from the whole list
      const itemsList = this.items.list;
      for (let i = 0; i < itemsList.length; i++) {
        if (itemsList[i].id === id) {
          itemsList.splice(i, 1);
          break;
        }
      }

      // remove from the parent
      parent.children.splice(index, 1);


      dataManager.removeChildren(item);
      return true;
    }
  },
  removeItem: function (item) {
    let parent = item.parent;
    if (parent != undefined) {
    
      // remove from the whole list
      const itemsList = this.items.list;
      for (let i = 0; i < itemsList.length; i++) {
        const item_ = itemsList[i];
        if (item_.id === item.id) {
          itemsList.splice(i, 1);
          break;
        }
      }

      // remove from the parent
      for (let i = 0; i < parent.children.length; i++) {
        
        const item_ = parent.children[i];
        if (item_.id === item.id) {
          
          parent.children.splice(i, 1);
          break;
        }
      }
      console.log(item);
      dataManager.removeChildren(item);

      return true;
    }
  }
};

const item = dataManager.addItem();
item.setData("data", 1);
const item2 = dataManager.addItem(item);
item2.setData("data", 2);
const item3 = dataManager.addItem(item);
item3.setData("data", 3);
const item4 = dataManager.addItem(item);
item4.setData("data", 4);
const item6 = dataManager.addItem(item4);
item6.setData("data", 6);
const item5 = dataManager.addItem();
// dataManager.removeItem(item);

item.setData("test", true);
// console.log(item.getData("test"));

const exportData = dataManager.export();
console.log(exportData);

dataManager.import(exportData);