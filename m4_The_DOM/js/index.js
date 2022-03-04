// Adding an anonymous function doesn't work - because not called?
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('document loaded');
//         const p = document.querySelector('p');
//         console.log(`p = ${p}`);
// });

init = () => {    
    const p = document.querySelector('h2');
    const articleText = document.querySelector('p.pizza');
    const body = document.querySelector('body');
    const image = document.querySelector('img');

    for (let index = 0; index < 5; index++) {
        articleText.insertAdjacentText("beforeend", " pizza")
    }

    image.addEventListener('click', () => {
        toggleImageBorder();
        addPizza();
    }
    );

    function toggleImageBorder() {
        image.classList.toggle('round');
    };
    function addPizza() {
        articleText.insertAdjacentText('afterend', 'pizza ');
    };
};

document.addEventListener('DOMContentLoaded', init());

