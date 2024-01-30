//SEGUIRE L ARRAY DELLA TRACCIA E INSERIRE SCORE E FOUL CON NUMERI GENERATI RANDOM

const teams = [
    {
        name: 'Team Turtle',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Frog',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Penguin',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Hippopotamus',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Seal',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Crocodile',
        score: 0,
        foul: 0,
    },
    {
        name: 'Team Dolphin',
        score: 0,
        foul: 0,
    },
];

teams.forEach((team) => {
    team.score = randomNumbers(1, 100);
    team.foul = randomNumbers(1, 10);

});
console.log(teams);


// NUOVO ARRAY CON SCORE E FOUL CON DESTRUCTURING 

const aftArray = teams.map((team) => {
    const { name, foul } = team;
    console.log(name, foul);

    let newTeam = {
        name: name,
        foul: foul,
    };
    return aftArray;
});


//FUNZIONE GENERAZIONE NUMERI RANDOM

function randomNumbers(min, max) {
    let randNumb = Math.floor(Math.random() * (max - min + 1) + min);
    return randNumb;
}