import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3100/users";

export function getAllUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveUser(user) {
  let url = baseUrl;
  url = url + (user._id ? "/update" : "/addNewUser");

  return fetch(url, {
    method: user._id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteUser(id) {
  let url = baseUrl + "/delete/" + id;
  return fetch(url, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
