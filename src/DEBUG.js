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