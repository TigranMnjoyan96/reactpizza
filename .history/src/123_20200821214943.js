let text = 'this is some string'
let newText = text.split(' ')
let arr = []

for(let i = 0; i < newText.length; i++) {
    let a = newText[i][0].toLocaleUpperCase()
    arr.push(a)
}

console.log(arr)