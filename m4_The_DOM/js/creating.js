document.addEventListener('DOMContentLoaded', init());

function init() {

    const para = document.createElement('p');
    para.textContent = 'new para';
    para.classList.add('special');
    console.log(para);

    const myImage = document.createElement('img');
    myImage.src = "https://picsum.photos/500";
    myImage.alt = "Nice photo";
    console.log(myImage);

    const div = document.createElement('div');
    div.classList.add('wrapper');
    console.log(div);

    document.body.appendChild(div);
    div.appendChild(para);
    div.appendChild(myImage);

}