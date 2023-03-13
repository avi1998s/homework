let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let txt2 = "PIG17, bear29, BiRd8" ;
let txt3 = "SNAKE39, donkey14";
let flag = true;
let arrayOfAll= txt1+txt2+txt3.split(",")
let arrayOfCoods = [];
let arrayOfStr = [];
for (i in arrayOfAll) {
    arrayOfCoods= arrayOfAll.match(/\d+/g);
    arrayOfStr= arrayOfAll.match(/[a-zA-Z]+/g).toString().toLocaleLowerCase().split(",");
}
function print (var1){
    console.log(var1);
}
function fun1 (coodToSerch,cood,str){
    let result ;
    for (i in arrayOfCoods) {
        if(coodToSerch==cood[i]){
           result="cood is: "+cood[i]+
            ", enamole is: "+str[i]
        }
        else {result="not funde";}
    }
    print(result);
}
function fun2(strToSearch,cood,str){
    for (i in str) {
        if (str[i].includes(strToSearch)){
            print("enamole is: "+str[i]+
            ", cood is: "+cood[i]);
            print("--------------------------------------------------------");
        }
    }
}
function fun3 (strToAdd,coodToAdd,cood,str){
    let result ="";
    let result2="" ;
    for (i in cood){
        if (strToAdd.match(/\d/g)|| strToAdd.match(" ")||strToAdd.match("")){
           result= "canot add number or empty space to name"
        }
        else if(coodToAdd.match(/[a-zA-Z]/g)|| coodToAdd.match(" ")|| coodToAdd.match("")){
            result2="canot add letter or empty space to animol code"
        }
        else if (str.includes(strToAdd) || cood.includes(coodToAdd)){
            print("The animal already exists");
            print("Please change name or code")
            break
        }
        
        else {
            cood.push(coodToAdd)
            str.push(strToAdd)
            break
        }
    
    }
    if (result=="canot add number or empty space to name"){
        print(result);
    }
    if (result2=="canot add letter or empty space to animol code"){
        print(result2);
    }
    print("the tadaBace now is: ")
    print(cood);
    print(str);
}
function fun4 (coodToDelete,cood,str){
    let resultAns4;
    for (i in cood){
        if (cood.includes(coodToDelete)){
            cood.splice(cood.indexOf(coodToDelete),1)
            str.splice(cood.indexOf(coodToDelete),1)
            break
        }
        else {
            resultAns4="not funde";
        }
    }
    if (resultAns4=="not funde"){
        print(resultAns4);
    }
    print("the tadaBace now is: ")
    print(cood);
    print(str);
}

while(flag){
    let anser=prompt("Enter your answer");
    if (anser==1){
        let ans1=prompt("הכנס קוד חיה");
        fun1(ans1,arrayOfCoods,arrayOfStr);
    }
    else if (anser==2){
        let ans2=prompt("הכנס שם או חלק משם של חיה")
        fun2(ans2,arrayOfCoods,arrayOfStr);
    }
    else if (anser==3){
        let ans3str=prompt("enter the name of the new animal");
        let ans3code=prompt("enter the code of the new animal");
        fun3(ans3str,ans3code,arrayOfCoods,arrayOfStr,arrayOfAll);
    }
    else if (anser==4){
       let ans4code=prompt("enter the code of the animal to delete");
       fun4(ans4code,arrayOfCoods,arrayOfStr); 
    }
    else if (anser==5){
        flag=false;
    }
    else{alert("הכנס מספרים בין 1-5 בלבד");}
}