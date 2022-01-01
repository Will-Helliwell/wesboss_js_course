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

    const body = document.querySelector('body');
    const image = document.querySelector('img');
    image.classList.toggle('round');
    // const nice_image = image;
    // const nice_image = image.classList.add('nice');
    // body.insertAdjacentElement('afterbegin', nice_image);

    function toggleImageBorder() {
        image.classList.toggle('round');
    };

    image.addEventListener('click', toggleImageBorder);

};

document.addEventListener('DOMContentLoaded', init());

