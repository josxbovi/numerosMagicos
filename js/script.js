document.getElementById('botonEmpezar').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('contenedor').style.display = 'block';

    document.getElementById('botonAdivinar').addEventListener('click', function() {
      let respuestaUser = parseInt(document.getElementById('inputAdivinar').value);

      if (respuestaUser === randomNumber) {
        alert('¡Adivinaste el número!');
      } else if (respuestaUser < randomNumber) {
        alert('El número que ingresaste es menor al número mágico.');
      } else {
        alert('El número que ingresaste es mayor al número mágico.');
      }
    });
  });