import axios from "axios";

function GetPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(function (response) {
            return response.data
        })
}

export default GetPosts;