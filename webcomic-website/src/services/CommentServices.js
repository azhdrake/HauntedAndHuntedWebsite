import axios from "axios"
const base_url = "/api/comments"

// The bridge between the client side site and api.js. Gets requests from the site and gives them to api.js, gets its responce and sends it back to the client.

export default {
  // sends a get request.
  getAllComments() {
    return axios.get(base_url).then(response => {
      return response.data
    })
  },
  // sends a post request
  addComment(comment) {
    return axios.post(base_url, comment).then(response => {
      return response.data
    })
  },
  //send a delete request
  deleteComment(id) {
    return axios.delete(`${base_url}/${id}`).then(response => {
      return response.data
    })
  }
}