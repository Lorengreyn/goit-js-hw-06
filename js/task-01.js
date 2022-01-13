const itemRes = document.querySelectorAll('.item');
console.log("Quantity of categories: ", itemRes.length);

itemRes.forEach(item => {
    const itemsTitle = item.querySelector('.item h2');
    console.log('Category: ', itemsTitle.textContent);
    const itemsLength = item.querySelectorAll('.item > ul > li');
    console.log('Elements: ', itemsLength.length);
});