import axios from 'axios'

export default function fetch(option) {
    return new Promise((resolve, reject) => {
        let instance = axios.create({
            // baseURL: 'http://localhost:8080/'
            baseURL: window.location.href
        })
        instance.request(option)
            .then(res => {
                //success todo
                resolve(res.data)
            })
            .catch(err => {
                //fail todo
                reject(err)
            })
    })
}