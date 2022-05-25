function verifyEmail() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'g')
  const regexPass = new RegExp('[a-zA-Z0-9]');

  if ((regex.test(email)) && (regexPass.test(password))) {
    window.location.href = "map.html"
  } else {
    alert('Invalid login.')
  }
}

function justKidding() {
  let age = document.getElementById("age-select").value;
  let email = document.getElementById("email").value;
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'g')

  if (regex.test(email)) {
    if (age === "minor"){
      alert("Wait, what?  Why are you here?  Go away.");
    }
    else {
      alert("This doesn't actually contact me.  I can't believe you fell for that.")
    }
  }
  else {
    alert("That's no email...")
  }
}
