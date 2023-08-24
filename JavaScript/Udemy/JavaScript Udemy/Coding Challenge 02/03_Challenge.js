const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,

    calcBMI : function(){
        this.bmiValue = this.mass / (this.height ** 2)
        return this.bmiValue
    } 
}

const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,

    calcBMI : function(){
        this.bmiValue = this.mass / (this.height ** 2)
        return this.bmiValue
    } 
}

mark.calcBMI()
john.calcBMI()

if(mark.bmiValue > john.bmiValue){
    console.log(`${mark.fullName} BMI(${mark.bmiValue})) is higher than ${john.fullName} (${john.bmiValue}`)
}else if (john.bmiValue > mark.bmiValue){
    console.log(`${john.fullName} BMI (${john.bmiValue}) is higher than ${mark.fullName} (${mark.bmiValue}))`)
}
