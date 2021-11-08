
export const createUser = (request, response) => {
    const newUser = request.body;

    users.push({ ...newUser, id: uuidv4() });

    response.send(`User ${newUser.firstName} added to the database!`);
}

export const getUsers = (request, response) => {
    response.send(users);
}

export const getUserById = (request, response) => {
    const { id } = request.params;

    const foundUser = users.find((user) => user.id === id);

    response.send(foundUser)
}

export const deleteUser = (request, response) => {
    const { id } = request.params;

    // filter() mantém na estrutura que o invocou toda instância que retornar true na condição
    // neste caso o método é utilizado para manter em users os usuários cujo id são diferentes do id da request
    users = users.filter((user) => user.id !== id);

    response.send(`User with id: ${id} deleted from the database.`)
}

export const updateUserData = (request, response) => {
    const { id } = request.params;
    const { firstName, lastName, age } = request.body;

    const userToUpdate = users.find((user) => user.id === id);

    if (firstName) userToUpdate.firstName = firstName
    if (lastName) userToUpdate.lastName = lastName
    if (age) userToUpdate.age = age

    response.send(`User with id: ${id} has been updated!`)
}