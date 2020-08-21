let text = 'this is some string'
let newText = text.split(' ')
let arr = []

for(let i = 0; i < newText.length; i++) {
     arr.push(newText[i][0] = newText[i][0].toUpperCase())
    
}

console.log(arr)