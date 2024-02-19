function submitFeedback() {
  var selectedEmoticon = document.querySelector('.selected');
  var comment = document.getElementById('comment').value;

  if (selectedEmoticon) {
    var feedback = {
      score: selectedEmoticon.getAttribute('id'),
      comment: comment
    };
    console.log(feedback); // Aquí puedes enviar el feedback a Firebase
  } else {
    alert('Por favor, selecciona una calificación');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var emoticons = document.querySelectorAll('.emoticon');

  emoticons.forEach(function(emoticon) {
    emoticon.addEventListener('click', function() {
      emoticons.forEach(function(e) {
        e.classList.remove('selected');
      });
      this.classList.add('selected');
      document.getElementById('comment-section').style.display = 'block';
      document.getElementById('comment').focus();
    });
  });
});
