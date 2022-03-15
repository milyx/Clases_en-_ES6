
import Impuestos from './Impuestos.js'
import Cliente from './Cliente.js'
var contador = 1
document.getElementById('myButton').addEventListener('click',(e)=>{
  e.preventDefault();
  
  //validar

  const nombre = document.getElementById("nombre").value
  const montoBrutoAnual = document.getElementById('montoBrutoAnual').value
  const deducciones = document.getElementById('deducciones').value

  const impuesto = new Impuestos(montoBrutoAnual,deducciones)
  const cliente = new Cliente(nombre, impuesto)

  const table = document.getElementById('pacientesId')
  table.innerHTML += `<tr>
    <td>${contador++}</td>
    <td>${cliente.__nombre()}</td>
    <td>${impuesto.__montoBrutoAnual()}</td>
    <td>${impuesto.__deducciones()}</td>
    <td>${cliente.calcularImpuesto()}</td>
  </tr>`
  
  document.getElementById("nombre").value = ''
  document.getElementById("montoBrutoAnual").value = ''
  document.getElementById("deducciones").value = ''


})