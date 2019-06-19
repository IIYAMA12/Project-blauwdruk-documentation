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


dataManager.import = function (items) {
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
};