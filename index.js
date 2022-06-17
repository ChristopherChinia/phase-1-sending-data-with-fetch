// Add your code here
const {Body} = require("node-fetch");
function submitData(name, email) {
  const formData = {
    name,
    email
  }
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(formData)
  })
    .then((response) => response.json())

    .then((jsonData) => {
      document.body.textContent = jsonData.id;
    })
    .catch(message => document.body.textContent = message)
}
