const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen(){
  const p = document.querySelector('p')
  p.style.color = '#bada55'
  p.style.fontSize = '50px'
}

// Regular
console.log('Uma mensagem')

// Styled
console.log('%c Uma mensagem estilizada', 'color: blue; background: gray;')

// warning!
console.warn('Um Alerta')

// Error :|
console.error('Error')

// Info
console.info('Informação')

// Testing
console.assert(1 === 2, 'Thats wrong')

// clearing
console.clear()

// Viewing DOM Elements
//console.log(p)

console.clear()
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} has ${dog.age} years old.`)
  console.log(`${dog.name} has ${dog.age*7} dog years old.`)
  console.groupEnd(`${dog.name}`)
})


// counting
console.count('wes')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
     .then(data => data.json())
     .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
     })

//table
console.table(dogs)
