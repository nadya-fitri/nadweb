function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const usernameBenar = "admin";
  const passwordBenar = "1234";

  if (username === usernameBenar && password === passwordBenar) {
    alert("Login berhasil!");
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah.");
  }
}
