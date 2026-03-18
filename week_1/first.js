const persons = ['John', 'Jane', 'Doe']

persons.push('Ethan')

const females = ['Ogochukwu', 'Uche', 'Nifemi']

console.log(persons)

persons.unshift('Boy')
console.log(persons)

//persons.unshift(...females)
//console.log(persons)

persons.pop()
console.log(persons)

persons.splice(2,0,'Daniel','Bunny')
console.log(persons)

persons.splice(2,1)
console.log(persons)