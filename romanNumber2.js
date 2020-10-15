function parseToRoman(number) {
    let result = '';
    if (number > 4999 || number < 1) {
        result = 'Vous devez entréer un nombre entre 1 et 4999';
    } else {
        // Tableaux de chiffres
        const units = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        const tens = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        const hundreds = ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
        const thousands = ['','M', 'MM', 'MMM', 'MMMM'];

        // Nombre de milliers
        const nbOfThousands = Math.trunc(number / 1000);
        const restOfThousands = number % 1000;

        // Nombre de centaines
        const nbOfHundreds = Math.trunc(restOfThousands / 100);
        const restOfHundreds = restOfThousands % 100;

        // Nombre de dizaines et d'unités
        const nbOfTens = Math.trunc(restOfHundreds / 10);
        const nbOfUnits = restOfHundreds % 10;

        // Résultat
        result = 'Le nombre ' + number + ' en numération romaine est ' + thousands[nbOfThousands] + hundreds[nbOfHundreds] + tens[nbOfTens] + units[nbOfUnits];

    }

    return result

}
// Entrez un nombre entre 1 et 4999
const nb = 449;
console.log(parseToRoman(nb));

