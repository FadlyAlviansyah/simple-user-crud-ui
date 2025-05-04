const apiUrl = 'http://localhost:8000/api/users';

function getUsers() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const userList = document.getElementById('user-list');
      userList.innerHTML = '';
      data.data.forEach(user => {
        userList.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
              <button onclick="editUser(${user.id}, '${user.name}', '${user.email}', ${user.age})">Edit</button>
              <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    })
    .catch(error => console.error('Error:', error));
}

function createUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  if (!name || !email || !age) {
    alert("All fields are required");
    return;
  }

  const user = {
    name: name,
    email: email,
    age: age
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    getUsers();
    clearForm();
  })
  .catch(error => console.error('Error:', error));
}

function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      getUsers();
    })
    .catch(error => console.error('Error:', error));
  }
}

function editUser(id, name, email, age) {
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  document.getElementById('age').value = age;

  const button = document.querySelector('button');
  button.innerHTML = 'Update User';
  button.setAttribute('onclick', `updateUser(${id})`);
}

function updateUser(id) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  if (!name || !email || !age) {
    alert("All fields are required");
    return;
  }

  const user = {
    name: name,
    email: email,
    age: age
  };

  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    getUsers();
    clearForm();
    const button = document.querySelector('button');
    button.innerHTML = 'Add User';
    button.setAttribute('onclick', 'createUser()');
  })
  .catch(error => console.error('Error:', error));
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('age').value = '';
}

getUsers();