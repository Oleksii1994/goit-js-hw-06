const liItemsClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItemsClass.length}`);
for (let liItem of liItemsClass) {
  console.log(`Categorie: ${liItem.firstElementChild.textContent}`)
  console.log(`Elements: ${liItem.lastElementChild.children.length}`)
}

