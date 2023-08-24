const myCountry = {
    country : "Indonesia",
    capital : "Jakarta",
    language : "Bahasa Indonesia",
    population : 275,
    neighbours : ["Malaysia" , "Singapore" , "Thailand" , "Japan" , "South Korea"]
}

console.log(`${myCountry.country} has ${myCountry.population + 2} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)