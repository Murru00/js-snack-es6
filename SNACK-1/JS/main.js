// //Snack 1:
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// const vips = [
//   'Dwayne Johnson',
//   'Brad Pitt',
//   'Johnny Depp',
//   'Lady Gaga',
//   'Cristiano Ronaldo',
//   'Georgina Rodriguez',
//   'Chiara Ferragni',
//   'Fedez',
//   'George Clooney',
//   'Amal Clooney',
//   'Maneskin',
// ];
// La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell'ospite,
// posto occupato.
// Generiamo e stampiamo in console l'array di oggetti per i segnaposto.


const vips = [
      'Dwayne Johnson',
      'Brad Pitt',
      'Johnny Depp',
      'Lady Gaga',
      'Cristiano Ronaldo',
      'Georgina Rodriguez',
      'Chiara Ferragni',
      'Fedez',
      'George Clooney',
      'Amal Clooney',
      'Maneskin',
    
];


//GENERIAMO IL NUMERO DEL TAVOLO E LO ASSEGNAMO 
const vipsList = vips.map((vip, tableNum) => {
    let vipsList  = {
        nomeTavolo: 'tavoloVip',
        vip: vip,
        numeroTavolo: tableNum + 1,

    };
    return vipsList ;

});
// STAMPO LA TABELLA DEI VIP CON I POSTI ASSEGNATI
console.table(vipsList );