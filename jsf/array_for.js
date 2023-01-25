let arrayOf =[[[123,223,854],[1,2,3,4,5,6],[1,9,9,1]],[[23,4897,89,6],
[123,284,56],[84,565,3125,2],[55,4,989,7,8,4,1], [55,555,55,55]],[[12,5432,5,0]],
[[1,5,8,7],[122,54],[125]],[[2,25,453,12],[8,765,133],[45,1,6,7,9,4,5],[100,100,100]]]
let cunterI = 0;
let allResults = []
for (let i = 0 ; i<arrayOf.length;i++){
    console.log("array position " + i )
    console.log("")
    cunterI = cunterI + arrayOf[i] 
    console.log ("araay position: "+i + " contains " + arrayOf[i])
    let cunterJ = 0;

    for (let j = 0;j < arrayOf[i].length; j++){
        cunterJ = cunterJ = arrayOf[i][j]
        console.log("araay position: "+i +" in position: "+j +" contains " + arrayOf[i][j] );
        let cunterK = 0;

        for (let k = 0; k<arrayOf[i][j].length; k++){
            cunterK =cunterK + arrayOf[i][j][k]
            console.log(`
            the number in araay position: `+i+` in position: `+j+`
            position: `+k+ ` = ` + arrayOf[i][j][k]  );
            
        }
        console.log("sum of array poisint " +i+ " in position: "+j + " is: " + cunterK );
        console.log(" ");
        allResults.push(cunterK)
    }
}

let sumAll = 0;
for (let p = 0;p<allResults.length;p++ ){
    sumAll += allResults[p]
}
console.log( "Summary of the array :" );
console.log("all the numbers in array is:  " + cunterI );
console.log("all the sum results from the array is:  " + allResults );
console.log("sum all results from the array is:  " + sumAll );


