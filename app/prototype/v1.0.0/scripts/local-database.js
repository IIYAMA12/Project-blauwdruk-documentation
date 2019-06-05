function getItemLocalStorageAndParseJSON (key) {
  if ("localStorage" in window) {
    const dataJSON = localStorage.getItem(key);
    if (dataJSON != undefined && typeof(dataJSON) == "string") {
      return JSON.parse(dataJSON);
    }
  }
}


function setItemLocalStorageAndStringifyJSON (key, data) {
  if ("localStorage" in window) {
    if (data != undefined && typeof(data) == "string") {
      const dataJSON = JSON.stringify(data);
      localStorage.setItem(key, dataJSON);
      return true;
    }
  }
}