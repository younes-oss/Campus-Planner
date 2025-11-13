
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

        drawRemplissageChart();
        drawAgeDistributionChart();
        drawLocationTrafficChart();

    }else if(theme === "clair") {

        sombreApp.classList.remove('flex');
        sombreApp.classList.add('hidden');

        clairApp.classList.remove('hidden');
        clairApp.classList.add('flex');

        dark.classList.remove('bg-blue-700');
        clair.classList.add('bg-blue-700');

        document.documentElement.classList.remove('dark');

        drawRemplissageChart();
        drawAgeDistributionChart();
        drawLocationTrafficChart();

    }else{
        drawRemplissageChart();
        drawAgeDistributionChart();
        drawLocationTrafficChart();
    }
}


let remplissageChart;
let ageChart;
let trafficChart;

async function getFormationsData() {
    const res = await fetch("data-statique/formationsData.json");
    const data = await res.json();

    return data;
}

async function getUsersData() {
    const res = await fetch("data-statique/usersData.json");
    const data = await res.json();

    return data;
}

async function countryTrafficData() {
    const res = await fetch("data-statique/countryTrafficData.json");
    const data = await res.json();
    return data;
}

async function getEventData() {
    const res = await fetch("data-statique/eventData.json");
    const data = await res.json();

    document.getElementById('nbrEvent').textContent = data.length;
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

    drawRemplissageChart();
    drawAgeDistributionChart();
    drawLocationTrafficChart();


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

    drawRemplissageChart();
    drawAgeDistributionChart();
    drawLocationTrafficChart();
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

    drawRemplissageChart();
    drawAgeDistributionChart();
    drawLocationTrafficChart();
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

    drawRemplissageChart();
    drawAgeDistributionChart();
    drawLocationTrafficChart();
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


// const formationsData = [
//     { "id": "form_1", "theme": "Développement Web Moderne", "duration": 12, "trainer": "Sofia Karim", "capacity": 20, "participants": ["u1", "u2", "u3"] },
//     { "id": "form_2", "theme": "Introduction au Machine Learning", "duration": 16, "trainer": "Hassan El Mekki", "capacity": 25, "participants": [] },
//     { "id": "form_3", "theme": "UI/UX Design Basics", "duration": 8, "trainer": "Leïla Ben Amar", "capacity": 15, "participants": ["u4", "u5"] },
//     { "id": "form_4", "theme": "Docker & DevOps", "duration": 10, "trainer": "Nabil Rachid", "capacity": 18, "participants": ["u6", "u7", "u8", "u9", "u10"] },
//     { "id": "form_5", "theme": "Sécurité des Applications", "duration": 14, "trainer": "Claire Fontaine", "capacity": 12, "participants": [] },
//     { "id": "form_6", "theme": "Cloud Computing (AWS/Azure)", "duration": 20, "trainer": "Youssef Alaoui", "capacity": 40, "participants": ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"] },
//     { "id": "form_7", "theme": "Data Science avec Python", "duration": 24, "trainer": "Hassan El Mekki", "capacity": 30, "participants": ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "d14", "d15", "d16", "d17", "d18", "d19", "d20", "d21", "d22", "d23", "d24"] },
//     { "id": "form_8", "theme": "Soft Skills: Communication", "duration": 6, "trainer": "Amira Sadi", "capacity": 50, "participants": ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"] },
//     { "id": "form_9", "theme": "Développement Mobile (React Native)", "duration": 18, "trainer": "Sofia Karim", "capacity": 10, "participants": ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10"] },
//     { "id": "form_10", "theme": "Modélisation Financière avec Excel", "duration": 15, "trainer": "Pierre Dubois", "capacity": 22, "participants": ["f1"] },
//     { "id": "form_11", "theme": "Prise de Parole en Public", "duration": 8, "trainer": "Amira Sadi", "capacity": 35, "participants": ["p1", "p2", "p3", "p4", "p5"] },
//     { "id": "form_12", "theme": "Fondamentaux de la Cybersécurité", "duration": 16, "trainer": "Driss Benslimane", "capacity": 28, "participants": ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14"] },
//     { "id": "form_13", "theme": "Initiation à la Finance Personnelle", "duration": 6, "trainer": "Nadia Ghali", "capacity": 60, "participants": ["n1", "n2", "n3", "n4", "n5", "n6"] },
//     { "id": "form_14", "theme": "Bases de données Avancées (SQL)", "duration": 28, "trainer": "Samir El Idrissi", "capacity": 10, "participants": ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"] },
//     { "id": "form_15", "theme": "Méthodologie Agile et Scrum", "duration": 10, "trainer": "Nabil Rachid", "capacity": 20, "participants": ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16"] },
//     { "id": "form_16", "theme": "Vidéographie et Montage", "duration": 14, "trainer": "Khalid Sbai", "capacity": 25, "participants": ["v1", "v2", "v3", "v4", "v5", "v6", "v7"] },
//     { "id": "form_17", "theme": "Méthodes de Recherche UX", "duration": 22, "trainer": "Leïla Ben Amar", "capacity": 15, "participants": ["r1", "r2", "r3", "r4"] },
//     { "id": "form_18", "theme": "Introduction au Mandarin", "duration": 40, "trainer": "Mei Lin", "capacity": 80, "participants": ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10"] },
//     { "id": "form_19", "theme": "Développement de Jeux (Unity)", "duration": 32, "trainer": "Youssef Alaoui", "capacity": 18, "participants": ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10", "g11", "g12", "g13", "g14", "g15", "g16", "g17", "g18"] },
//     { "id": "form_20", "theme": "Gestion de Projet (PMP Basics)", "duration": 18, "trainer": "Fatima Zahra", "capacity": 30, "participants": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8", "z9", "z10", "z11", "z12", "z13", "z14", "z15", "z16", "z17", "z18", "z19", "z20", "z21", "z22", "z23"] }
// ];

// const EventData = [
//     {
//         "id": "evt_1",
//         "title": "Conférence: IA et Éducation",
//         "date": "2026-01-15",
//         "location": "Amphi A",
//         "type": "conférence",
//         "description": "Impact de l'IA sur les méthodes d'enseignement.",
//         "speaker": "Dr. Marie Dupont",
//         "duration": 60,
//         "registrationLink": "https://example.com/ia-education"
//     },
//     {
//         "id": "evt_2",
//         "title": "Atelier: Git & GitHub",
//         "date": "2025-12-10",
//         "location": "Salle 204",
//         "type": "atelier",
//         "description": "Pratique collaborative avec Git.",
//         "materials": "Ordinateur portable, Git installé",
//         "skillLevel": "débutant",
//         "maxParticipants": 25
//     },
//     {
//         "id": "evt_3",
//         "title": "Club: Coding Dojo",
//         "date": "2025-12-05",
//         "location": "Lab 3",
//         "type": "club",
//         "description": "Sessions de katas et revues de code.",
//         "frequency": "hebdomadaire",
//         "contact": "Alice Martin <alice@campus.edu>",
//         "membershipFee": 0
//     },
//     {
//         "id": "evt_4",
//         "title": "Soirée Hackathon Warmup",
//         "date": "2025-11-28",
//         "location": "Espace Innov",
//         "type": "autre",
//         "description": "Préparation au hackathon annuel.",
//         "customFieldLabel": "Dress code",
//         "customFieldValue": "Casual"
//     },
//     {
//         "id": "evt_5",
//         "title": "Conférence: Sécurité Web Moderne",
//         "date": "2026-02-02",
//         "location": "Amphi B",
//         "type": "conférence",
//         "description": "OWASP Top 10 et bonnes pratiques.",
//         "speaker": "Jean-Pierre Lefèvre",
//         "duration": 90,
//         "registrationLink": "https://example.com/sec-web"
//     }
// ]

async function drawRemplissageChart() {
    const ctx = document.getElementById('remplissageChart').getContext('2d');
    const isDark = document.documentElement.classList.contains('dark');
    const formationsData = await getFormationsData();

    document.getElementById('nbrFormations').textContent = formationsData.length;

    if (remplissageChart) {
        remplissageChart.destroy();
    }

    formationsData.sort((a, b) =>
        ((((b.participants.length / b.capacity) * 100) - (a.participants.length / a.capacity) * 100))
    );

    const formGroups = {};

    if (formationsData.length >= 5) {
        let totalParticipants = 0;
        let totalCapacity = 0;
        let moy = 0;

        for (let i = 0; i < 5; i++) {
            formGroups[formationsData[i].theme] = ((formationsData[i].participants.length / formationsData[i].capacity) * 100)
        }

        for (let i = 5; i < formationsData.length; i++) {
            totalParticipants += formationsData[i].participants.length;
            totalCapacity += formationsData[i].capacity;
        }

        if (totalCapacity !== 0) {
            moy = (totalParticipants / totalCapacity) * 100;
        }

        if (moy !== 0) {
            formGroups['autre'] = moy;
        }
    } else {
        formationsData.forEach(form => {
            formGroups[form.id] = ((form.participants.length / form.capacity) * 100)
        });
    }

    data = {
        labels: Object.keys(formGroups),
        datasets: [{
            data: Object.values(formGroups),
            borderColor: 'black',
            backgroundColor: ['#CCCCFF'],
            fill: true,
            tension: 0.3

        }]
    }

    const Config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            // maintainAspectRatio: false,

            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        drawBorder: false,
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        drawBorder: false,
                        display: false
                    }
                }
            },

            plugins: {
                legend: {
                    position: 'top',
                    display: false,
                    color: isDark ? 'white' : 'black'
                },
                title: {
                    display: true,
                    text: 'Remplissage des formations',
                    // color: 'balck',
                    color: isDark ? 'white' : 'black',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                },

                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let value = context.parsed.y;
                            return value + '%';
                        }
                    }
                }
            }
        }
    }

    remplissageChart = new Chart(ctx, Config);

}

async function drawAgeDistributionChart() {
    const ctx = document.getElementById('ageDistributionChart').getContext('2d');
    const isDark = document.documentElement.classList.contains('dark');

    if (ageChart) {
        ageChart.destroy();
    }

    // const usersData = [
    //     { id: 'u1', age: 20 }, { id: 'u2', age: 23 }, { id: 'u3', age: 25 },
    //     { id: 'u4', age: 19 }, { id: 'u5', age: 21 }, { id: 'u6', age: 27 },
    //     { id: 'u7', age: 30 }, { id: 'u8', age: 38 }, { id: 'u9', age: 40 },
    //     { id: 'u10', age: 46 }, { id: 'u11', age: 24 }, { id: 'u12', age: 32 },
    //     { id: 'u13', age: 28 }, { id: 'u14', age: 45 }, { id: 'u15', age: 25 }
    // ];

    const usersData = await getUsersData();

    const ageGroups = {
        '18 - 24 ans': 0,
        '25 - 34 ans': 0,
        '35 - 44 ans': 0,
        '45 + ans': 0
    };

    usersData.forEach(user => {
        if (user.age >= 18 && user.age <= 24) {
            ageGroups['18 - 24 ans']++;
        } else if (user.age >= 25 && user.age <= 34) {
            ageGroups['25 - 34 ans']++;
        } else if (user.age >= 35 && user.age <= 44) {
            ageGroups['35 - 44 ans']++;
        } else if (user.age >= 45) {
            ageGroups['45 + ans']++;
        }
    });

    const dataValues = Object.values(ageGroups);
    const total = dataValues.reduce((a, b) => a + b, 0);

    const data = {
        labels: Object.keys(ageGroups),
        datasets: [{
            label: 'Nombre d\'inscrits',
            data: Object.values(ageGroups),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0'
            ],
            hoverOffset: 8
        }]
    };

    const Config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,

            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distribution des Groupes d\'Âge du Campus',
                    color: isDark ? 'white' : 'black',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                },

                tooltip: {
                    callbacks: {
                        label: function (context) {
                            // const label = context.label || '';
                            const value = context.parsed;
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${percentage}%`;
                        }
                    }
                }
            }
        }
    };


    ageChart = new Chart(ctx, Config);
}

async function drawLocationTrafficChart() {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    const isDark = document.documentElement.classList.contains('dark');

    if (trafficChart) {
        trafficChart.destroy();
    }

    const countryTraffic = await countryTrafficData();

    const dataValues = Object.values(countryTraffic);
    const total = dataValues.reduce((a, b) => a + b, 0);

    const data = {
        labels: Object.keys(countryTraffic),
        datasets: [{
            data: Object.values(countryTraffic),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#00CCFF'
            ],
            hoverOffset: 8
        }]
    };

    const Config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,

            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Trafic par pays',
                    color: isDark ? 'white' : 'black',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                },

                tooltip: {
                    callbacks: {
                        label: function (context) {
                            // const label = context.label || '';
                            const value = context.parsed;
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${percentage}%`;
                        }
                    }
                }
            }
        }
    };

    trafficChart = new Chart(ctx, Config);
}


// document.addEventListener('DOMContentLoaded', drawAgeDistributionChart);
// document.addEventListener('DOMContentLoaded', drawRemplissageChart);
// document.addEventListener('DOMContentLoaded', drawLocationTrafficChart);

document.addEventListener('DOMContentLoaded', getEventData);
document.addEventListener('DOMContentLoaded', updateTheme);



