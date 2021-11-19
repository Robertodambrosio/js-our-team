
const memberTeam = [   // ***creo l'array object con i membri
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        },
        {
        "name": "Walter Gordon",
        "role": "Office Manager",
    },
        {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
    },
        {
        "name": "Scott Estrada",
        "role": "Developer",
    },
        {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
    },
]

console.log(memberTeam);

const card = '';

for (let i = 0; i < memberTeam.length; i++) {
    // console.log(memberTeam[i].name);
    // console.log(memberTeam[i].role);

    // card = document.createElement('div');
    // card.className = "team-card";
    // console.log(card);
    // cardText = document.createElement('div');
    // cardText.className = "card-text";
    // cardText.appendChild(card);
    
    card.innerHTML += `
            <div class="team-card">
                <div class="card-image">
                </div>
                <div class="card-text">
                    <h3>${memberTeam[i].name}</h3>
                    <p>${memberTeam[i].role}</p>
                </div>
            </div>
        `; 

        console.log(card);
    // for (let k in memberTeam) {
    // console.log(memberTeam[i].name);  
    // }
}




