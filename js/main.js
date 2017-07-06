document.addEventListener('DOMContentLoaded', function(event) {

  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var input = document.querySelectorAll('input');

  signIn.addEventListener('click', function(event) {
    modal.style.display = 'block';
  });

  close.addEventListener('click', function(event) {
    modal.style.display = 'none';
  });

  submit.addEventListener('click', function(event) {
    event.stopPropagation();
    for (var i = 0; i < input.length; i++) {
      input[i].className = 'error';
    }
  });

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function(event) {
      event.stopPropagation();
      if (this.className = 'error') {
        this.style.outline = 'none';
      }
    });
  }

  modal.addEventListener('click', function(event) {
    modal.style.display = 'none';
  });

});
