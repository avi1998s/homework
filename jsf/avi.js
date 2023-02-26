// תרגיל 1
console.log("תרגיל מספר 1");
console.log(" ");
let names= ["nadav", "maya", "yonatan", "avi", "yossi", "bat el"],
names1 = names.toString().toUpperCase().split(",");
for(i of names1){
    if (i.length>3 && i.length<7){
        console.log("names of betwen 3-7 length is: " + i);
    }

    if(i.toString().includes(" ")){
        let a = i.split(" ")
        console.log("the position of two names is: " + i.indexOf());
        console.log("first name: " + a[0])
        console.log("last name num 2: " + i.slice(i.indexOf(" "),i.length));
        console.log("last name num 2: " + a[a.length-1])
    }
}
console.log("");

for(i =1;i< names1.length+1;i++){
    console.log(names1[i-1].concat(" *".repeat(i)));
}
console.log(" ");
console.log("תרגיל מספר 2 ");
// תרגיל מספר 2 
let txt = "ben##levi###kobi#yossi#avi####dan"
console.log(txt.toUpperCase().match(/[A-Z]/g).toString().replaceAll(",",""));
