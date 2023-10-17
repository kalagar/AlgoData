// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//     return str.split("").reduce((prev,cur)=>{
//             return cur + prev
//     },"")
// }

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverse;
