document.addEventListener('DOMContentLoaded', function(event) {

  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');

  signIn.addEventListener('click', function(event) {
    modal.style.display = 'block';
  });


});
