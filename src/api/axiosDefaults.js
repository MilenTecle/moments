import axios from "axios"

axios.defaults.baseURL = 'https://django-rest-8a723769aa4b.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
