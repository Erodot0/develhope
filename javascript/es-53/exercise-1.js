function sum(...num) {
    tot = 0;
    for(let i=0; i < num.length; i++){
       tot += num[i];
    }
    return tot
}

console.log(sum(1, 2, 3, 4, 5));