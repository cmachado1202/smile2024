// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBAjvvhA12x2m78OBNUR2jJclvSLHW2t2A",
  authDomain: "smile2024-69550.firebaseapp.com",
  projectId: "smile2024-69550",
  storageBucket: "smile2024-69550.appspot.com",
  messagingSenderId: "557359969936",
  appId: "1:557359969936:web:35ea56f7fb1542918b0a15",
  measurementId: "G-T7Y849RSGP"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos de Firebase
var database = firebase.database();

// Variable para almacenar la selección de emoticones
var selectedEmoticon = null;

// Función para enviar el feedback a Firebase
function submitFeedback() {
  if (selectedEmoticon) {
    // Obtener la fecha y hora actual
    var currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 3); // Ajustar la hora actual en tres horas
    
    var feedback = {
      score: selectedEmoticon,
      timestamp: currentDate.toISOString() // Convertir la fecha a una cadena ISO
    };

    // Guardar el feedback en Firebase
    database.ref('feedback').push(feedback)
      .then(function() {
        // Éxito al enviar el feedback
        console.log('Feedback enviado a Firebase:', feedback);
        // Redirigir a la página de comentarios (index2.html)
        window.location.href = 'index2.html';
      })
      .catch(function(error) {
        // Manejar errores
        console.error('Error al enviar el feedback:', error);
      });
  } else {
    alert('Por favor, selecciona un emoticon');
  }
}

// Función para seleccionar el tipo de feedback
function selectFeedback(feedbackType) {
  var buttons = document.querySelectorAll('#buttons button');
  buttons.forEach(function(button) {
    button.classList.remove('selected');
    if (button.getAttribute('data-feedback') === feedbackType) {
      button.classList.add('selected');
    }
  });
}

// Manejar clic en los emoticones
document.addEventListener('DOMContentLoaded', function() {
  var emoticons = document.querySelectorAll('.emoticon');

  emoticons.forEach(function(emoticon) {
    emoticon.addEventListener('click', function() {
      // Remover la clase 'selected' de todos los emoticones
      emoticons.forEach(function(emot) {
        emot.classList.remove('selected');
      });

      // Agregar la clase 'selected' al emoticon actual
      this.classList.add('selected');

      // Almacenar la selección del emoticon
      selectedEmoticon = this.getAttribute('id');
    });
  });
});