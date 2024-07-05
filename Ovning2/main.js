function getYearFromString(inputString) {
    return inputString.substring(0, 4);
}

let year = prompt("Skriv ett datum i formatet (YYYY-MM-DD)");
console.log(getYearFromString(year));