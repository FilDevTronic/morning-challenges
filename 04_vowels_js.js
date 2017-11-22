// const returnVowels = (string) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     const matchingVowels = []
//     const splitString = string.split('')
//     for(i in splitString) {
//         if(vowels.includes(splitString[i])){
//             matchingVowels.push(splitString[i])
//         }
//     }
//     return matchingVowels;
// }
//
// console.log(returnVowels("The quick brown fox"))

const returnVowels2 = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const splitString = string.split('')
    return splitString.reduce((myArray, value) => {
        if(vowels.includes(value)){
            myArray.push(value)
        }
        return myArray
    }, [])
}

console.log(returnVowels2("The quick brown fox"));
