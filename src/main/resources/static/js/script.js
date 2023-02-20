let url = 'http://localhost:8080/api/users/';
let headers = {'Accept': 'application/json', "Content-type": "application/json; charset=utf-8"};

getUser();
getAllUsers();

function getUser() {
    fetch(url.substring(0, url.length - 2), {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(user => {
            let userData = `$( <tr>
                                <td>${user.id}</td>
                                <td>${user.username}</td>
                                <td>${user.sex}</td>
                                <td>${user.age}</td>
                                <td>${user.roles.map(r => " " + r.name.substring(5))}</td>
                            </tr>)`;
            $('#userTable').html(userData);
        });
}

function getAllUsers() {
    let userData = '';
    fetch(url, {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                userData += `$( <tr>
                                <td>${user.id}</td>
                                <td>${user.username}</td>
                                <td>${user.sex}</td>
                                <td>${user.age}</td>
                                <td>${user.roles.map(r => " " + r.name.substring(5))}</td>

                                <td><a type="button" class="btn btn-info text-white" data-bs-toggle="modal"
                                data-bs-target="#editUser" onclick="getUpdateModal(${user.id})" id="btnEdit"
                                title="Click here to edit ${user.username}">Edit</a></td>

                                <td><a type="button" class="btn btn-danger text-white" data-bs-toggle="modal"
                                data-bs-target="#deleteUser" onclick="getDeleteModal(${user.id})" id="btnDelete"
                                title="Click here to delete ${user.username}">Delete</a></td>
                                </tr> )`;
                $('#usersTable tbody').html(userData);
            })
        });
}

function addNewUser() {
    let newUser = document.forms['newUserForm'];
    newUser.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                username: document.getElementById('username').value,
                sex: document.getElementById('sex').value,
                age: document.getElementById('age').value,
                password: document.getElementById('password').value,
                roles: getRoles(newUser)
            })
        })
            .then(response => response.json())
            .then(newUser.reset())
            .then(() => {
                getAllUsers()
            })
            .then(() => {
                document.getElementById('tab_usersTable').click()
            });
    });
}

async function getUpdateModal(id) {
    fetch(url + id, {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(user => {
            document.getElementById('modalEdit_id').value = user.id;
            document.getElementById('modalEdit_username').value = user.username;
            document.getElementById('modalEdit_sex').value = user.sex;
            document.getElementById('modalEdit_age').value = user.age;
            document.getElementById('modalEdit_password').value = user.password;
            document.getElementById('modalEdit_roles').value = user.roles;
        });
}

function updateUser() {
    document.forms['editUserForm'].addEventListener('submit', async (e) => {
        e.preventDefault();
        await fetch(url + document.getElementById('modalEdit_id').value, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                username: document.getElementById('modalEdit_username').value,
                sex: document.getElementById('modalEdit_sex').value,
                age: document.getElementById('modalEdit_age').value,
                password: document.getElementById('modalEdit_password').value,
                roles: getRoles(document.forms['editUserForm'])
            })
        })
            .then(response => response.json())
            .then(() => {
                getAllUsers()
            });
    });
}

async function getDeleteModal(id) {
    fetch(url + id, {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(user => {
            document.getElementById('modalDelete_id').value = user.id;
            document.getElementById('modalDelete_username').value = user.username;
            document.getElementById('modalDelete_sex').value = user.sex;
            document.getElementById('modalDelete_age').value = user.age;
            document.getElementById('modalDelete_roles').value = user.roles;
        });
}

async function deleteUser() {
    document.forms['deleteUserForm'].addEventListener('submit', async (e) => {
        e.preventDefault();
        await fetch(url + document.getElementById('modalDelete_id').value, {
            method: 'DELETE',
            headers: headers
        })
            .then(response => response.json())
            .then(() => {
                getAllUsers()
            });
    });
}

function getRoles(user) {
    let roleList = [{id: 1, name: "ROLE_ADMIN"}, {id: 2, name: "ROLE_USER"}]
    let selectedRoles = [];
    for (let i = 0; i < user.roles.options.length; i++) {
        if (user.roles.options[i].selected) {
            selectedRoles.push(roleList[i]);
        }
    }
    return selectedRoles;
}

