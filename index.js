import personas from './personas.js'

const buscar = document.querySelector('#buscar');
const btnBuscar = document.querySelector('#btn-buscar')
const resultado = document.querySelector('#resultado');

btnBuscar.addEventListener('click', () => {
  resultado.innerHTML = ''
  const nombres = personas.filter(e => e.nombre.includes(buscar.value))
  setTimeout(() => {
    if (nombres.length === 0) {
      resultado.innerHTML = '<span>Usuario no encontrado</span>'
    }

    nombres.forEach(e => resultado.innerHTML += `<p><b>Nombre:</b> ${e.nombre}
                                                  <br/>
                                                  <b>Edad:<b/> ${e.edad} años
                                                </p>`)
  }, 500)
})