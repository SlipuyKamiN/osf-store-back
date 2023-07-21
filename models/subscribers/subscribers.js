const { nanoid } = require("nanoid");

const fs = require("fs").promises;

const subscribersPath = "models/subscribers/subscribers.json";

const updateSubscribers = (subscribers) =>
  fs.writeFile(subscribersPath, JSON.stringify(subscribers, null, 2));

async function listSubscribers() {
  const user = await fs.readFile(subscribersPath, "utf-8");

  return JSON.parse(user);
}

async function addSubscriber(body) {
  const subscribers = (await listSubscribers()) || [];
  const subscriberToAdd = { id: nanoid(), ...body };

  subscribers.push(subscriberToAdd);

  await updateSubscribers(subscribers);

  return subscriberToAdd;
}

module.exports = {
  listSubscribers,
  addSubscriber,
};
