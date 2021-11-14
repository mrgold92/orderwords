const textarea = document.getElementById('palabras');
const btn = document.getElementById('btn');
const textResult = document.getElementById('text-result');
const btnlimp = document.getElementById('btn-limp');

const nombres = [
  'Ejemplo:\n', 
  'Maria',
  'Jose',
  'Francisco',
  'Antonio',
  'Manuel',
  'Luis',
  'David',
  'Jorge',
  'Miguel',
  'Sergio',
  'Alberto',
  'Juan',
  'José',
  'Javier',
  'Laura',
  'Ana',
  'María',
  'Kiko',
]


btn.addEventListener('click', () => {

  //ordenar el texto alfabeticamente descendente
  let arrayvalues = textarea.value.split('\n').sort();

  // quitar espacios en blanco al principio y al final
  arrayvalues = arrayvalues.map(item => item.trim().replace("',", '').replace("'", ''))

  //mostrar el resultado
  textResult.value = arrayvalues.join('\n');

});

btnlimp.addEventListener('click', () => {
  textarea.value = '';
  textResult.value = '';
});

// Añadir al textarea un placeholder con los nombres
textarea.placeholder = nombres.join('\n');