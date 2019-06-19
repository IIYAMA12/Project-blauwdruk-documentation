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



const dataManager = {
	lastId: 1,

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
		methodsList: [{
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
		hierarchy: {
			root: true,
			children: [],
			id: 0
		}
	},

/////////////////////////////////////////////////////////////////////////////////////////////
////// hierarchy FUNCTIONS //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

	/*
	  Add item
	*/
	addItem: function (parent, index) {
		index = Number(index);
		if (parent == undefined) {
			parent = this.items.hierarchy;
		}


		const itemsList = this.items.list;
		const item = new dataManager.constructor.build(parent);

		item.id = (dataManager.lastId++);
		itemsList[itemsList.length] = item;

		if (isNaN(index)) {
			parent.children[parent.children.length] = item;
		} else {
			parent.children.splice(index, 0, item);
		}

		return item;
	},

	/*
	  Remove all children
	*/
	removeChildren: function (item) {
		const children = item.children;
		if (children !== undefined && typeof (children) === "object") {
			for (let i = children.length - 1; i > -1; i--) {
				dataManager.removeItem(children[i]);
			}
		}
	},

	/*
		Get the children of the item (sub items)
	*/
	getChildren: function (parent) {
		if (parent != undefined && index != undefined && !isNaN(index)) {
			return parent.children;
		}
	},

	getSiblings: function (item, withSelf) {
		const parent = item.parent;
		if (parent != undefined) {
			const children = parent.children; 
			if (children != undefined) {
				if (!withSelf) {
					const siblings = [];
					for (let i = 0; i < children.length; i++) {
						const sibling = children[i];
						if (item.id !== sibling.id) {
							siblings[siblings.length] = sibling;
						}
					}
					return siblings;
				} else {
					return children;
				}
			}
		}
	},

	/*
		Replace
	*/
	replaceBy: function (item1, item2) {
		const index = this.getIndex(item1);
		console.log(index);
	},

	/* 
		Move to root
	*/
	moveToRoot: function (item) {
		const parent = item.parent;
		const id = item.id;
		const children = parent.children;
		for (let i = 0; i < children.length; i++) {
			if (children[i].id === id)  {
				children.splice(i, 1);
				break;
			}
		}

		const hierarchy = this.items.hierarchy;
		item.parent = hierarchy;
		
		const hierarchyChildren = hierarchy.children;
		hierarchyChildren[hierarchyChildren.length] = item;

		return item;
	},
	

	/*
		Remove item
	*/
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

			dataManager.removeChildren(item);

			return true;
		}
	},

	mirror: function (item, parent) {


		// const mirror = dataManager:addItem();
		// item
		// mirror
	},

	unMirror: function (item) {

	},

	/*
		Remove item by Index 
	*/
	removeItemByIndex: function (index, parent) {
		let children;
		if (parent == undefined) {
			parent = this.items.hierarchy;
			children = parent.children;
		}
		if (index != undefined && !isNaN(index) && typeof (children) === "object") {
			const item = children[index];
			if (item != undefined) {
				const id = item.id;
				// remove from the whole list
				const itemsList = this.items.list;
				for (let i = 0; i < itemsList.length; i++) {
					if (itemsList[i].id === id) {
						itemsList.splice(i, 1);
						break;
					}
				}
				// remove from the parent
				children.splice(index, 1);

				dataManager.removeChildren(item);
				
				return true;
			}
		}
	},

	/*
		Get index
	*/
	getIndex: function (item) {
		const parent = item.parent;
		const id = item.id
		const parentChildren = parent.children;
		for (let i = 0; i < parentChildren.length; i++) {
			console.log(parentChildren[i]);
			if (parentChildren[i].id === id) {
				return i;
			}
		}
	},


	/*
	  Remove item by ID
	*/
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
	}

};