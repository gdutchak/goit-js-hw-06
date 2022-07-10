const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createProduct = ingredients.map(ingredient => {
  const prodEl = document.createElement('li');
  prodEl.textContent = ingredient;
  prodEl.classList.add('item')
  return prodEl
})
const product = document.querySelector('ul')
product.append(...createProduct)

