
const memberTeam = [   // ***creo l'array object con i membri
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "img/wayne-barnett-founder-ceo.jpg"
        },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "img/angela-caroll-chief-editor.jpg"
        },
        {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "img/walter-gordon-office-manager.jpg"
    },
        {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "img/angela-lopez-social-media-manager.jpg"
    },
        {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "img/scott-estrada-developer.jpg"
    },
        {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "img/barbara-ramos-graphic-designer.jpg"
    },
]

console.log(memberTeam);

let card = '';

for (let i = 0; i < memberTeam.length; i++) {
    
    card += `
            <div class="team-card">
                <div class="card-image">
                    <img src="${memberTeam[i].image}" alt="${memberTeam[i].name}">
                </div>
                <div class="card-text">
                    <h3>${memberTeam[i].name}</h3>
                    <p>${memberTeam[i].role}</p>
                </div>
            </div>
        `; 

    // for (let k in memberTeam) {
    // console.log(memberTeam[i].name);  
    // }
}

document.querySelector(".team-container").innerHTML = card;

console.log(card);
