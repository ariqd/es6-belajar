// Ambil element User
const user = document.getElementById("user");

// Init variable
const user_logged_in = "Marcell";

// ES5
// user.innerHTML = "Selamat datang, " + user_logged_in;

// ES6
user.innerHTML = `Anda berhasil login, ${user_logged_in}`;
