const ages = ["zvi32", "avi33", "eli16", "bibi40"];
function splitNUM (test){
    let result = [];
    for (i in test){
        result[Number(test[i].match(/\d+/g))] = test[i].match(/[a-zA-Z]+/g) ;
    }
return result;
}
console.log(splitNUM(ages));
