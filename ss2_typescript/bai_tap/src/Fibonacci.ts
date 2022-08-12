function Fibonacci(n: number): number {
    if(n==1||n==2){
        return 1;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}
let sum=0;
let k=10;
console.log("Số Fibonacci thứ 10: "+ Fibonacci(k));
for(let i=1; i<=k; i++){
    console.log("Số Fibonacci thứ "+(i)+":"+ Fibonacci(i));
    sum+=Fibonacci(i);
}
console.log("Tổng 10 số Fibonacci đầu tiên: "+ sum);
