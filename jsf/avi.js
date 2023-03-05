let cars = "Saab15 45Volvo 47BMW subaru65 Suzuki11 isUZu12 kiA55 miTsuBishi10",
carsArray = cars.split(" "),
carsNumbers = [],
carsStr = [],
// משתנים בשיביל אופציות 1 ו 2
Cunter =0,
longName ="",
longName2 ="",
// משתנים לאופציות 4 ו 5 
updatePRO,
newCar,
// משתנה לוייל
anser;

for (i in carsArray){
    carsNumbers.push(carsArray[i].match(/\d+/g))
    carsStr.push(carsArray[i].match(/[a-zA-Z]+/g))
    carsNumbers=carsNumbers.flat()
    carsStr=carsStr.flat()
 
}
while(true){
    anser =prompt(`שלום לפניך תפריט עם 6 אופציות
    לקבלת הרכב עם השם הגדול ביותר יש להקיש 1
    לקבלת המקט הגבוהה ביותר יש להקיש 2 
    להוספת רכב חדש יש להקיש 3
    לעדכון מקט של רכב קיים יש להקיש 4
    לעדכון מקט לרכב ספציפי יש להקיש 5
    ליציאה מהתפריט יש להקיש 6`)
    if (anser == 1){
        for (i in carsStr){
            if (carsStr[i].length>Cunter){
                Cunter=carsStr[i].length
                longName=carsStr[i]
                longName2=carsNumbers[i]
            }   
        }
        alert(longName2 +" " + longName)
        Cunter=0
        longName=""
    }
    else if (anser==2){
        for (i=0;i<carsNumbers.length;i++){
            if (carsNumbers[i]>Cunter){
                Cunter=carsNumbers[i]
                longName=carsStr[carsNumbers.indexOf(Cunter)]

            }    
        }
        alert(Cunter + " " + longName)
        Cunter=0
        longName=""
    }
    else if (anser==3){
        carsArray.unshift(prompt("הכנס רכב עם מספר רכב"))
        alert(carsArray)
        carsNumbers.unshift(carsArray[0].match(/\d+/g));
        carsStr.unshift(carsArray[0].match(/[a-zA-Z]+/g));
        carsNumbers=carsNumbers.flat();
        carsStr=carsStr.flat();

    }
    else if (anser==4){
        updatePRO=prompt("הכנס שם רכב")
        if (carsStr.includes(updatePRO)){
        newCar=prompt("הכנס שם ומספר רכב לעדכון")
        carsArray[carsStr.indexOf(updatePRO)]=newCar
        carsNumbers[carsArray.indexOf(newCar)] = newCar.match(/\d+/g);
        carsStr[carsArray.indexOf(newCar)] = newCar.match(/[a-zA-Z]+/g);
        alert(carsArray)
        carsArray= carsArray.flat()
        carsStr = carsStr.flat()
        carsNumbers=carsNumbers.flat()
        }
        else {alert("הרכב לא נמצא במאגר ")}
        
        
    }
    else if (anser==5){
        updatePRO=prompt("הכנס מספר רכב")
        if (carsNumbers.includes(updatePRO)){
        newCar= prompt("הכנס שם ומספר רכב לעדכון")
        carsArray[carsNumbers.indexOf(updatePRO)]=newCar
        carsStr[carsNumbers.indexOf(updatePRO)] = newCar.match(/[a-zA-Z]+/g);
        carsNumbers[carsNumbers.indexOf(updatePRO)] = newCar.match(/\d+/g);
        alert(carsArray)
        carsArray= carsArray.flat()
        carsStr = carsStr.flat()
        carsNumbers=carsNumbers.flat()
        }
        else {alert("הרכב לא נמצא במאגר ")}
        
    }
    else if (anser==6){
        alert("תודה רבה על שימושך בתפריט")
        break
    }
    else if (anser==7){
        alert(carsNumbers)
    }
    else if (anser==8){
        alert(carsStr)
    }
    else{alert("נא להקיש מספרים בין 1-6 בלבד")}
}