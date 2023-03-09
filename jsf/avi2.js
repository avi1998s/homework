let lowNum=3,highNum =12,length1=8,arrayNum = [1,2,3,4,5,6,7];
// פונקציה שמחזירה מספר רנדומאלי בין טווח שהמשתמש בוחר
function getRandomNums (min,max){
    let randomNum = Math.floor(Math.random()*max +1-min)+min
    while (randomNum> max || randomNum<min){
        randomNum =Math.floor(Math.random()*max +1-min)+min
    }
    return randomNum
}

console.log(`פונקציה שמחזירה מספר רנדומאלי בין טווח שהמשתמש בוחר
 ` + getRandomNums(lowNum,highNum));

// פונקציה שמחזירה מערך לפי גודל שמכיל מספרים רנדומלים בין טווח שהמשתמש בחר
function getArrayByNumbers (length,min,max){
    let array1 = []
    for (i=0;i<length;i++){
        array1[i]= getRandomNums(min,max)
    }
    return array1
}

console.log(`פונקציה שמחזירה מערך לפי גודל שמכיל מספרים רנדומלים בין טווח שהמשתמש בחר
 ` + getArrayByNumbers(length1,lowNum,highNum));

// פונקציה שמחזירה סה"כ של 2 מספרים
function getSum (num1,num2){
    return num1+num2
}

console.log(`פונקציה שמחזירה סה"כ של 2 מספרים
` + getSum(lowNum,highNum));

// פונקציה שמחזירה סה"כ של איברים במערך
function getSumOfArray(array){
    let sum =0;
    for (i=0;i<array.length;i++){
        sum=getSum(array[i],sum)
    }
    return sum
}

console.log(`פונקציה שמחזירה סה"כ של איברים במערך 
` + getSumOfArray(arrayNum));

// פונקציה כמו פונקציה 4 רק בלי לולאה 
function getSumOfArray2 (array){
   return array.reduce((num,num2) => num2+num )
}

console.log(`פונקציה כמו פונקציה 4 רק בלי לולאה 
` + getSumOfArray2(arrayNum))
