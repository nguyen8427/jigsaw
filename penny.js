//var penny = .01;
//for(var day = 0; day < 29; day++){
//        penny = penny + penny;
//}
//console.log("The amount being reward after 30 days is " + penny);

//How long would it take the servant to make $10,000?
var total = 10000;
var penny = .01;
var day = 0;

//while ( penny <= total){
//    day += 1;
//    penny = penny + penny;
//}
//console.log("It takes "+day+" days for the servant to make $10000");



while ( penny < Infinity){
    day += 1;
    penny = penny + penny;
}
console.log("It takes "+day+" days for the servant to make infinity $$$");


