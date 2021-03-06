import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3100/movies";

export function getAllMovies() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveMovie(movie) {
  let url = baseUrl;
  url = url + (movie._id ? "/update" : "/addNewMovie");

  return fetch(url, {
    method: movie._id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMovie(id) {
  let url = baseUrl + "/delete/" + id;
  return fetch(url, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
