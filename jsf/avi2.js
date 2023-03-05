// let array = ["&","*","%","#","@","$","!","?",];
// let toto =Math.random()*array.length;
// let toto2 =Math.round(toto)
// function getIcons (){
//     for (i=1;i<7;i++){
//         console.log(array[toto2].repeat(i));
//     }
// }
// getIcons()

// פונקציה לבדיקת כוכביות במחרוזת
function test1 (str){
    let cunter1=0
    for (i of str){
        if (i == "*"){
            cunter1++
        }
    }
    return cunter1;
}
let a = test1(prompt("enter *"));
let b = test1(prompt("enter *"));
let c = test1("**&^%$^&hghgh***");
if (a>b && a>c){
    console.log("the first ster is biger")
}
else if (c>b){
    console.log("the third ster is biger")
}
else{console.log("the second ster is biger");}

