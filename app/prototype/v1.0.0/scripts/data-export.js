dataManager.export = function () {
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
};