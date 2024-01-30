//creare un arrey di oggetti  che descrive una bici e dare nome e peso

const bici = [
    {
        name: 'Trek',
        weight: 20,
    },
    {
        name: 'Lombardo',
        weight: 10,
    },
    {
        name: 'Scott',
        weight: 30,
    }, {
        name: 'Ktm',
        weight: 25,
    }, {
        name: 'Giant',
        weight: 18,
    }, {
        name: 'Cube',
        weight: 14,
    }, {
        name: 'Canyon',
        weight: 16,
    },

];


//STAMPO LA BICI COL PESO MINORES
let [ligtherBike] = bici;

bici.forEach((bike) => {
    if (bike.weight < ligtherBike.weight) ligtherBike = bike;
});
console.log(ligtherBike)