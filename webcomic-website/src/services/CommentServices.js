import axios from "axios"

const base_url = "/api/comments"

export default {
  getAllComments() {
    return axios.get(base_url).then(response => {
      return response.data
    })
  },
  addComment(comment) {
    return axios.post(base_url, comment).then(response => {
      return response.data
    })
  },
  deleteComment(id) {
    return axios.delete(`${base_url}/${id}`).then(response => {
      return response.data
    })
  }
}