
const drivers = () => ['Sally', 'Bob', 'Freddy', 'Claudia']


let returnFirstTwoDrivers = function(drivers){
return drivers.slice(0, 2);
} 

console.log(returnFirstTwoDrivers);

let returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);
}
console.log(returnLastTwoDrivers);


let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

console.log(selectingDrivers[0]);


const createFareMultiplier = multiplier => function(fare) { return fare * multiplier };
const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3); 


let whateverFunc = returnFirstTwoDrivers
function selectDifferentDrivers(selectingDrivers, whateverFunc){
    return selectingDrivers;
}

selectDifferentDrivers(selectingDrivers, returnLastTwoDrivers)







// let num1 = 1
// let num2 = 2
// function createFareMultiplier(num1, num2) {
//     let z = num1 * num2
//     console.log(z)
//     return createFareMultiplier;
// }
// console.log(createFareMultiplier(z))