function areAnagrams(str1: string, str2: string): boolean {
  
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

   
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

   
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const word1 = "Listen";
const word2 = "Silent";

if (areAnagrams(word1, word2)) {
    console.log(`'${word1}' and '${word2}' are anagrams.`);
} else {
    console.log(`'${word1}' and '${word2}' are not anagrams.`);
}
