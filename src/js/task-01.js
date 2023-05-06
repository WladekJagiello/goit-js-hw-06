const numberOfcategories = document.querySelector('#categories');
console.log('Number of categories:', numberOfcategories.children.length);

[...numberOfcategories.children].forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})
