function longest(text){
	let newtext = text.split(' ')
	array = []
	for(x=0; x<newtext.length ; x++){
	array.push(newtext[x])
}
	array.filter(e =>  array[e].length > array[e + 1].length)
		// if(newtext[x].length < newtext[x + 1].length) {
			
		// }
		// console.log(newtext[x + 1].length)
}
longest('Web Developmet Master')
