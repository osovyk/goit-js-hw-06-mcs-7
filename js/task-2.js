class Storage {
    constructor(items) {
        this._items = items;
    }

    getItems() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
    }

    removeItem(item) {
        this._items = this._items.filter((el) => el !== item);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
