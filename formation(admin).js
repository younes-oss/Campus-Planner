
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
