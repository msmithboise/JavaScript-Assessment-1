//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};


me.name = 'Michael Smith'
me.age = 31
me['hair color'] = 'Beautiful'

console.log(me)

//2. Iterate over the object to console.log the propery or key names. 

      ///Key////Object
for (var key in me){
	console.log(key, me[key])
}