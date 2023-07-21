const { nanoid } = require("nanoid");

const fs = require("fs").promises;

const usersPath = "models/users/users.json";

const updateUsers = (users) =>
  fs.writeFile(usersPath, JSON.stringify(users, null, 2));

async function listUsers() {
  const user = await fs.readFile(usersPath, "utf-8");

  return JSON.parse(user);
}

async function addUser(body) {
  const users = (await listUsers()) || [];
  const { id, password, email } = { id: nanoid(), ...body };

  users.push({ id, password, email });

  await updateUsers(users);

  return { id, email };
}

module.exports = {
  listUsers,
  addUser,
};
