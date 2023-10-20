const str="This is a sunny day"
const a=str.split(' ');
for(let i=0;i<a.length;i++){
    a[i]=a[i].split('').reverse().join('');
}
const reversedsentence=a.join(' ');
console.log(reversedsentence);
                           