// Ejercicio 12

// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Buddy', power: 'regeneration' },
  { name: 'Elsa', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const mutantsWithPower = mutants
    .filter((mutant) => mutant.power === power)
    .map((mutant) => mutant.name)

  if (mutantsWithPower.length === 0) {
    return `no se ha encontrado un mutante con el poder: ${power}`
  }

  return `Se han encontrado ${
    mutantsWithPower.length
  } mutante(s) con el poder ${power}: ${mutantsWithPower.join(', ')}`
}

const mutantes1 = findMutantByPower(mutants, 'Pooping')
console.log(mutantes1)
const mutantes2 = findMutantByPower(mutants, 'regeneration')
console.log(mutantes2)
