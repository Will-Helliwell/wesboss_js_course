console.log('file loaded');

// Adding an anonymous function doesn't work - because not called?
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('document loaded');
//         const p = document.querySelector('p');
//         console.log(`p = ${p}`);
// });

init = () => {
    console.log('document loaded');
    const p = document.querySelector('h2');
    console.log(p.innerText);
    console.log(p.textContent);

    const articleText = document.querySelector('p.pizza');
    console.log(`aT = ${articleText}`);
    for (let index = 0; index < 5; index++) {
        articleText.insertAdjacentText("beforeend", " pizza")
    }

};

document.addEventListener('DOMContentLoaded', init());

