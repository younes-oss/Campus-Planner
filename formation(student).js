fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('formationsContainer');
    container.innerHTML = "";

    data.forEach(f => {
      const card = `
        <div class="bg-white shadow-md rounded-2xl w-90 gap-3 p-6 mt-6 grid">
          <h3 class="text-xl font-bold text-center text-black mb-4">Formation</h3>
          
          <div class="flex gap-5">
            <i class="fa-solid fa-graduation-cap text-[30px]"></i>
            <h3 class="text-xl font-bold">${f.theme}</h3>
          </div>
          
          <div class="flex gap-5">
            <i class="fa fa-calendar text-[30px]" aria-hidden="true"></i>
            <h3 class="text-xl font-bold">${f.duration} heures</h3>
          </div>
          
          <div class="flex gap-5">
            <i class="fa-solid fa-user text-[30px]"></i>
            <h3 class="text-xl font-bold">${f.trainer}</h3>
          </div>
          
          <button type="button" class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200">
            Participé
          </button>
        </div>`;
      container.innerHTML += card;
    });
  })
  .catch(err => console.error("Erreur lors du chargement du JSON :", err));