const itemEl = document.querySelectorAll(".item");
console.log('Number of categories: ', itemEl.length);

itemEl.forEach(function (elem) {
    const titleEl = elem.querySelector('h2');
    const listItemEl = elem.querySelectorAll('li');
    console.log('Category: ', titleEl.textContent)
    console.log('Elements: ', listItemEl.length)
})