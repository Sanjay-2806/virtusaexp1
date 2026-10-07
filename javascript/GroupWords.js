function group(words) {

    let grouped = {};

    for (let word of words) {

        let first = word[0].toLowerCase();

        if (!grouped[first]) {
            grouped[first] = [];
        }

        grouped[first].push(word);
    }

    return grouped;
}

let words = ["Apple", "banana", "apricot", "Blueberry", "Cherry", "avocado", "cat"];

let result = group(words);

for (let letter in result) {
    console.log(letter.toUpperCase() + ": " + result[letter].join(", "));
}