let names = ["moshe", "nir", ,"avi", "nir","liron", "yaakov", "nir"],
pro = prompt ("enter name"),
indexNum = names.indexOf(pro),
cunter=0;
while( indexNum>-1){
    cunter++;
    indexNum = names.indexOf(pro, indexNum+1)
}
 console. log(pro + " exsit "+ " : " +cunter + " times");
