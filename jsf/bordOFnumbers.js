// זה מה  שהצלחתי לעשות לבד 
console.log('did it alone');
for (let i=1;i<11;i++){
    let jd = []
    for (let j = 1;j<11;j++){
        jd.push(i*j)
}
console.log(jd);
}
// מצאתי באינטרנט 
console.log('---------------------------------------------------------------');
console.log('found how in internet');

let fd = ''
for (let i=1;i<11;i++){
    for (let j = 1;j<11;j++){
        fd += (i*j) + ' '
    }
    fd += '\n'
}
console.log(fd);
