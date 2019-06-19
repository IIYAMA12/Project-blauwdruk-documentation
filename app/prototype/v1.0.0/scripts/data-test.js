let print = console.log;

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