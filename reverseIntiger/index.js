function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt("-15684554"));

module.exports = reverseInt