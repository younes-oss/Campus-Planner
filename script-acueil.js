const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const dark = document.getElementById('dark');
const clair = document.getElementById('clair');
const sombreApp = document.getElementById('sombre-app');
const clairApp = document.getElementById('clair-app');

let theme = localStorage.getItem("theme");

function updateTheme() {

    if (theme === "sombre") {
        clairApp.classList.remove('flex');
        clairApp.classList.add('hidden');

        sombreApp.classList.remove('hidden');
        sombreApp.classList.add('flex');

        clair.classList.remove('bg-blue-700');
        dark.classList.add('bg-blue-700');

        document.documentElement.classList.add('dark');

    } else if (theme === "clair") {

        sombreApp.classList.remove('flex');
        sombreApp.classList.add('hidden');

        clairApp.classList.remove('hidden');
        clairApp.classList.add('flex');

        dark.classList.remove('bg-blue-700');
        clair.classList.add('bg-blue-700');

        document.documentElement.classList.remove('dark');


    } else {

    }
}


dark.addEventListener('click', function () {
    clair.classList.remove('bg-blue-700');
    dark.classList.add('bg-blue-700');
    document.documentElement.classList.add('dark');

    clairApp.classList.remove('flex');
    clairApp.classList.add('hidden');

    sombreApp.classList.remove('hidden');
    sombreApp.classList.add('flex');

    localStorage.setItem("theme", "sombre");




});

clair.addEventListener('click', function () {
    dark.classList.remove('bg-blue-700');
    clair.classList.add('bg-blue-700');
    document.documentElement.classList.remove('dark');

    sombreApp.classList.remove('flex');
    sombreApp.classList.add('hidden');

    clairApp.classList.remove('hidden');
    clairApp.classList.add('flex');

    localStorage.setItem("theme", "clair");


});

clairApp.addEventListener('click', function () {

    clairApp.classList.remove('flex');
    clairApp.classList.add('hidden');

    sombreApp.classList.remove('hidden');
    sombreApp.classList.add('flex');

    clair.classList.remove('bg-blue-700');
    dark.classList.add('bg-blue-700');

    document.documentElement.classList.toggle('dark');

    localStorage.setItem("theme", "sombre");

});

sombreApp.addEventListener('click', function () {

    sombreApp.classList.remove('flex');
    sombreApp.classList.add('hidden');

    clairApp.classList.remove('hidden');
    clairApp.classList.add('flex');

    dark.classList.remove('bg-blue-700');
    clair.classList.add('bg-blue-700');

    document.documentElement.classList.toggle('dark');

    localStorage.setItem("theme", "clair");

});

menu.addEventListener('click', function () {
    const x = navLinks.querySelector('.x');
    const ul = navLinks.querySelector('.ul-links');

    x.classList.remove('hidden');
    x.classList.add('block');

    ul.classList.remove('hidden');
    ul.classList.add('block');
});

navLinks.querySelector('.x').addEventListener('click', function () {
    const x = navLinks.querySelector('.x');
    const ul = navLinks.querySelector('.ul-links');

    x.classList.remove('block');
    x.classList.add('hidden');

    ul.classList.remove('block');
    ul.classList.add('hidden');
});

const lienImage = ["image-statique/im5.jpg", "image-statique/im2.jpg", "image-statique/im4.jpg", "image-statique/im7.jpg"];
let indexImage = 0;

function changerImage() {
    if (indexImage === lienImage.length) {
        indexImage = 0
    }
    // document.getElementById('section-image').innerHTML = "";
    // document.getElementById('section-image').innerHTML = `<img src="${lienImage[indexImage]}" alt="">`;
    // document.getElementById('section-image').classList.add(`bg-[url("${lienImage[indexImage]}")]`);
    const section = document.getElementById('section-image');
    section.style.backgroundImage = `url(${lienImage[indexImage]})`;
    section.style.backgroundSize = 'cover';    
    section.style.backgroundPosition = 'center'; 

    indexImage++;

}

document.addEventListener('DOMContentLoaded', updateTheme);
document.addEventListener('DOMContentLoaded', changerImage);
setInterval(changerImage, 1500);