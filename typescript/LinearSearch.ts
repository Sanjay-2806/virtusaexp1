function linearSearch<T>(array: T[], target: T): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const numbers = [10, 20, 30, 40, 50];
const targetNumber = 30;
const index = linearSearch(numbers, targetNumber);

if (index !== -1) {
    console.log(`Element ${targetNumber} found at index: ${index}`);
} else {
    console.log(`Element ${targetNumber} not found in the array.`);
}
