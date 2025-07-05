
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      alert('Oops! There was a problem. Please try again.');
    }
  }).catch(error => {
    alert('There was a problem submitting the form.');
  });
});
