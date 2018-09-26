import axios from "axios";


export default function GetApi(post) {

    return axios.get("https://private-21e8de-rafaellucio.apiary-mock.com/users")
        .then(function (response) {
            return response.data
        })

}
