const neighbours = ["Malaysia", "Japan" , "Thailand" , "Singapore", "South Korea"];
neighbours.push("Utopia");
neighbours.pop();

if(neighbours.includes('Germany')){
    console.log("There is germany!");
} else {
    console.log("Probably not a central European country :D'")
}

neighbours[neighbours.indexOf('Thailand')] = "USA";
console.log(neighbours);

