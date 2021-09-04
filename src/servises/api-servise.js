import axios from "axios";

// axios.defaults.baseURL = "http://localhost:7777";
axios.defaults.baseURL =
  "https://my-json-server.typicode.com/Yulia82/myJSONserver";

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function postContact(newContact) {
  const { data } = await axios.post("/contacts", newContact, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}
