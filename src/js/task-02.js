const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector('#ingredients');

const items = ingredients.map(itemName => {
  const newListItem = document.createElement('li');
  newListItem.textContent = itemName;
  newListItem.classList.add('item');

  return newListItem;
});

mainList.prepend(...items);
