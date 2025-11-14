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

document.addEventListener('DOMContentLoaded', updateTheme);



fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('formationsContainer');
    container.innerHTML = "";

    data.forEach(f => {
      const card = `
        <div class="bg-white dark:bg-gray-800 shadow-md rounded-2xl  grid gap-3 p-6 mt-6 ">
          <h3 class="text-xl font-bold text-center text-black dark:text-white mb-4">Formation</h3>
          
          <div class="flex gap-5">
            <i class="fa-solid fa-graduation-cap text-[30px]"></i>
            <h3 class="text-xl dark:text-white font-bold">${f.theme}</h3>
          </div>
          
          <div class="flex gap-5">
            <i class="fa fa-calendar text-[30px]" aria-hidden="true"></i>
            <h3 class="text-xl font-bold dark:text-white">${f.duration} heures</h3>
          </div>
          
          <div class="flex gap-5">
            <i class="fa-solid fa-user text-[30px]"></i>
            <h3 class="text-xl font-bold dark:text-white">${f.trainer}</h3>
          </div>
          
          <button type="button" class="w-full bg-blue-600 dark:bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200">
            Participé
          </button>
        </div>`;
      container.innerHTML += card;
    });
  })
  .catch(err => console.error("Erreur lors du chargement du JSON :", err));