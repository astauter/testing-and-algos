function largestPrimeFactor(num) {
    let val = flooredRoot(num);
    let factors = [];
    for (let i = val; i > 0; i--) {
        if (num % i === 0) {
            factors.push(num / i);
            factors.push(i);
        }
    }
    factors.sort((a, b) => {
        return a - b;
    })
    for (let i = factors.length - 1; i > 0; i--) {
        if (isPrime(factors[i])) {
            return factors[i];
        }
    }
    return -1;
}

function flooredRoot(num) {
    return Math.floor(Math.sqrt(num))
}

function isPrime(num) {
    let val = flooredRoot(num);
    let count = 0;
    for (let i = val; i > 0; i--) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count > 1) {
        return false;
    }
    return true;
}
