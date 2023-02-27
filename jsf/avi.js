let names = ["moshe", "nir", "aaavi", "nir", "liron", "yaakov", "naaaair"],
  pro = prompt("enrer letter"),
  cunter = 0,
  cunter2 = 0;
for (i in names) {
   cunter = 0;
  if (names[i].includes(pro)) {
    console.log(names[i]);
   //  סופר כמה פעמים מופיעה האות בכל שם במערך  
    for (j in names[i]) {
      if (pro == names[i][j]) {
        cunter++;
      }
    }
    console.log(pro + " exsits in " + cunter + " times" + " in " + names[i]);
   //   סופר כמה פעמים מופיעה האות מהקלט בכל המערך
    for (y of names[i]) {
      if (pro == y) {
        cunter2++;
      }
    }
  }
}
console.log("sum of " + pro + " : " + cunter2);
