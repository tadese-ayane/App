const signInForm = document.getElementById("sign-in-form");
const signInMessage = document.getElementById("sign-in-message");

const users = [
  { email: "user", password: "keyupapp@gmail.com" },
  { email: "user2", password: "password123" }
];

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(`Email: ${email}, Password: ${password}`);

  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    console.log("User found!");
    signInMessage.textContent = "Signed in successfully!";
    signInMessage.style.color = "green";
  } else {
    console.log("User not found!");
    signInMessage.textContent = "Invalid email or password";
    signInMessage.style.color = "red";
  }
});
