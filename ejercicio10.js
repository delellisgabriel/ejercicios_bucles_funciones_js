// Ejercicio 10

// Desarrolla una función que reciba un país por parámetro y devuelva su capital.

// Utiliza un objeto para almacenar los países y sus capitales.

// La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  const normalizedCountryName =
    country[0].toUpperCase() + country.slice(1).toLowerCase()
  if (!capitals[normalizedCountryName]) {
    console.log(`${normalizedCountryName} no esta en la lista de paises`)
    return
  }

  console.log(
    `La capital de ${normalizedCountryName} es: ${capitals[normalizedCountryName]}`
  )
}

getCapital('Venezuela')
getCapital('Spain')
getCapital('Italy')
getCapital('spain')
getCapital('Ireland')
getCapital('ireland')
