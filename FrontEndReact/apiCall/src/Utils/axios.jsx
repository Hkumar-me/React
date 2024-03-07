import axois from 'axios'

let instance = axois.create({
    baseURL :"https://fakestoreapi.com/"
})

export default instance;