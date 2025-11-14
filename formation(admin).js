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



let formations = JSON.parse(localStorage.getItem("formations")) || [
  { theme: "Développement Web Moderne", duration: 30, trainer: "Sofia Karim" },
  { theme: "Introduction au Machine Learning", duration: 25, trainer: "Hassan El Mekki" }
];

const tableBody = document.getElementById("tableBody");
const modal = document.getElementById("modal");
const successPopup = document.getElementById("successPopup");

function renderTable() {
  tableBody.innerHTML = "";
  formations.forEach(f => {
    tableBody.innerHTML += `
      <tr class="border-b hover:bg-gray-50">
        <td class="px-6 py-4">${f.theme}</td>
        <td class="px-6 py-4">${f.duration} h</td>
        <td class="px-6 py-4">${f.trainer}</td>
        <td class="px-6 py-4">
          <a href="#" class="font-medium text-blue-600 hover:underline">Supprimé</a>
        </td>
      </tr>`;
  });
}
renderTable();



document.getElementById("openFormBtn").addEventListener("click", () => {
  modal.classList.remove("hidden");
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  modal.classList.add("hidden");
});



document.getElementById("addForm").addEventListener("submit", e => {
  e.preventDefault();

  const theme = document.getElementById("title").value.trim();
  const duration = parseInt(document.getElementById("duration").value);
  const trainer = document.getElementById("trainer").value.trim();

  if (!theme || !duration || !trainer) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const newFormation = { theme, duration, trainer };
  formations.push(newFormation);
  localStorage.setItem("formations", JSON.stringify(formations));

  modal.classList.add("hidden");
  successPopup.classList.remove("hidden");
  renderTable();
  document.getElementById("addForm").reset();
});

document.getElementById("confirmBtn").addEventListener("click", () => {
  successPopup.classList.add("hidden");
});
