// function addition(a, b){
//     return a + b 
// }

// console.log(addition(18,10));

// var soustration = function(a, b){
//     return a-b 
// }

// console.log(soustration(18,5));

// var cube = function(n){
//     return n*n*n;
// }

//console.log(cube(2));

// console.log(cube())

// var add = function(a = 0, b = 1 ) {
//     return a + b;
// }

// console.log(add(5,6));

// function checkNumber(x){
//     if (typeof x === 'number') {
//         return console.log(x +" est un nombre");
//     }else{
//         return console.log("oops ce n'est pas un nombre");
//     }
// }
// checkNumber("14");


// function decodeColor( code ) {
//     if ( code === 1 ) {
//         console.log( 'Red' );
//     } else if ( code === 2 ) {
//         console.log( 'Yellow' );
//     } else if ( code === 3 ) {
//         console.log( 'Green' );
//     } else {
//         console.log( 'Unknown code' );
//     }
// }

// decodeColor(3);

// function test(mois){
//     switch(mois){
//         case "janvier":
//             return "winter";
//         case "Fevrier":
//             return 'Winter';
//         case "mars":
//             return 'spring';
//         case "april":
//             return 'spring';
//         case "mai":
//             return 'spring';
//         default:
//            return "Retourne pas de mois";
//     }
// }

// console.log(test("janvier"));

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;

// for (var i in numbers) {
//     if ( i % 2 == 0 ) 
//     sum +=numbers[i];    
// }

// console.log(sum);

// var test = {
//     nom: "Touré",
//     prenom: "Yanan",
//     weapon: "axe",
//     greet:function(){
//         return "Bonjour à tous";
//     }
// }

// console.log(test);

// function addition(num){
//     return num +=1;
// }
// console.log(addition(9));
//arr = [80, 5, 100];
// function getFirstValue(arr) {
// 	return arr[0];
// }

// console.log(getFirstValue([1, 2, 3]));

// function nextEdge(side1, side2) {
// 	return (side1 + side2) - 1 ;
// }

// console.log(nextEdge(8,10));

// function howManySeconds(hours) {
// 	return hours*3600;
// }

// function rectanglePerimetre(longueur, largeur){
//     return ( longueur + largeur)*2;
// }

function lessThanOrEqualToZero(num) {
	if(num <=0){
        return true;
    }else{
        return false;
    }
}

console.log(lessThanOrEqualToZero(5));