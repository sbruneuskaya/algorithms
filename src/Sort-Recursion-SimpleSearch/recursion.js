const factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

// console.log(factorial(8))


// Числа фибоначчи -  1,1,2,3,5,8,13,21

const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonachi(7)) //13
// F(7)= F(6)+F(5)===(8+5) =13
// ===> F(6)=F(5)+F(4)===(5+ 3) =8
// ===> F(5)=F(4)+F(3)==== (3+ 2) =5

// ===> F(4)=F(3)+F(2)====3
// ===> F(3)=F(2)+F(1)====2
// ===> F(2)=F(1)+F(0)====1
// ===> F(1)=F(1)+F(0)====1

