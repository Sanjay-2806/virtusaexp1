let a = 12;
let b = 18;
let lcm = 0;
for (let i = Math.max(a, b); ; i++) {
    if (i % a === 0 && i % b === 0) {
        lcm = i;
        break;
    }
}
console.log(lcm);
