import { host } from "./config";

const headers = new Headers({ "content-type": "application/json" });

export const fetchTags = () =>
  fetch(`${host}/tags`).then(response => response.json());

export const createTag = tag =>
  fetch(`${host}/tags`, {
    method: "POST",
    body: JSON.stringify(tag),
    headers
  });

export const deleteTag = id =>
  fetch(`${host}/tags/${id}`, {
    method: "DELETE"
  });
