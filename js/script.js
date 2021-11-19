
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


for (let i = 0; i < memberTeam.length; i++) {
    console.log(memberTeam[i].name);
    console.log(memberTeam[i].role);


    // for (let k in memberTeam) {
    // console.log(memberTeam[i].name);  
    // }
}




