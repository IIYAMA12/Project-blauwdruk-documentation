function sortTimeline (oldNew) {
  const eventElements = document.getElementById("event-list").children;
  const eventList = [];
  for (let i = 0; i < eventElements.length; i++) {
    const eventElement = eventElements[i];
    eventList[eventList.length] = {
      element: eventElement,
      date: dataManager.getItemFromElement(eventElement) != undefined ? dataManager.getItemFromElement(eventElement).getData("date") : new Date()
    };
  }
  eventList.sort(function (a, b) {
    if (oldNew) {
      return a.date.getTime() > b.date.getTime();
    }
    return b.date.getTime() > a.date.getTime();
  });
  for (let i = 0; i < eventList.length; i++) {
    eventList[i].element.style.order = i;
  }
}

document.getElementById("order-timeline").addEventListener("change", function (e) {
  const source = e.target;
  
  const value = Number(source.options[source.selectedIndex].value);
  if (value === 0) {
    sortTimeline(true);
  } else {
    sortTimeline(false);
  }
});