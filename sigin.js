function userSignIn(form) {
  return new Promise((resolve, reject) => {
    const email = form.email.value;
    const password = form.psw.value;
    return auth.signInWithEmailAndPassword(email, password).then((result) => alert(result)).catch((err) => alert(err));
  });
}
function signup(form) {
  const email = form.email.value;
  const password = form.psw.value;
  return auth.createUserWithEmailAndPassword(email, password).then((result) => {
    alert('Successfully registered');
  }).catch((error) => {
    alert(`failed to register:${error}`);
  });
}
