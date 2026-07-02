function calculateSum(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

const ans = calculateSum(1000);
console.log("Sum 1-1000:", ans);