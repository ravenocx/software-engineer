const myCountry = {
    country : "Indonesia",
    capital : "Jakarta",
    language : "Bahasa Indonesia",
    population : 275,
    neighbours : ["Malaysia" , "Singapore" , "Thailand" , "Japan" , "South Korea"],

    describe : function(){
        return `${this.country} has ${this.population + 2} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },

    checkIsland : function(){
        this.isIsland = this.neighbours.length > 0 ? true : false
        return this.isIsland
    }
}

console.log(myCountry.describe())
console.log(myCountry.checkIsland())
