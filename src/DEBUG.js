var regex = /\d/g
console.log('145+'.match(regex).join(''),
            typeof('145+'.match(regex).join('')),
            '13-5'.match(regex),
            ''.match(regex),
            // 'None'.match(regex).join()
            ''.match(regex) == null, 
            ''.match(regex) === null
)

//NULL can't join 

var x = ['a', 'b', 'c', 'd']
//y change pointer but still the same object
var y = x
x.splice(1, 2)
y.splice(1, 1)
console.log(
    x,
    y
)