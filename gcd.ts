export function gcdBruteForce(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a === 0) return b;
    if (b === 0) return a;
    let min = Math.min(a, b);

    for (let i = min; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i; 
        }
    }
    return 1; 
}

export function gcdEuclid(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) return a;
    return gcdEuclid(b, a % b);
}