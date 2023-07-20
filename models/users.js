const { nanoid } = require("nanoid");

const fs = require("fs").promises;

const usersPath = "models/users.json";

const updateUsers = (users) =>
  fs.writeFile(usersPath, JSON.stringify(users, null, 2));

async function listUsers() {
  const user = await fs.readFile(usersPath, "utf-8");

  return JSON.parse(user);
}

async function addUser(body) {
  const users = (await listUsers()) || [];
  const userToAdd = { id: nanoid(), ...body };

  users.push(userToAdd);

  await updateUsers(users);

  return userToAdd;
}

module.exports = {
  listUsers,
  addUser,
};
