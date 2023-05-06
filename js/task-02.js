const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const itemsIngredientFun = array => {
  return array.map(element => {
    const itemEl = document.createElement('li');
    itemEl.textContent = element;
    itemEl.classList.add('item');
    return itemEl;
  });
};

const itemsIngredient = itemsIngredientFun(ingredients);

ingredientsList.append(...itemsIngredient);
