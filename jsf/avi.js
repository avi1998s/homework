const ages = ["Zvi32", "Avi33", "Eli16", "Bibi40",'[]}{&^0',"**&1",'%%$%2','-*/-+3'];
function splitNUM (test){
    let result = [];
    for (i in test){
        result[Number(test[i].match(/\d+/g))]= test[i].match(/[a-zA-Z]+|[\/\-+\(\)\*&^%\$\#\!]+/g) ;
    }
return result;
}
console.log(splitNUM(ages));
// all 
