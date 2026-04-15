let inventory = [];

export function addItem(item) {
  inventory.push(item);
  console.log(`${item} added`);
}

export function removeItem(item) {
  inventory = inventory.filter(i => i !== item);
  console.log(`${item} removed`);
}

export function listItems() {
  console.log("Inventory:", inventory);
}