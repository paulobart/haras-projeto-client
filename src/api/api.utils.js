import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://haras-api.herokuapp.com/",
    });

    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        localStorage.removeItem("token");
        window.location = `/login`;
      }
    );
  }
  
  login = async (payload) => {
    try {
      const { data } = await this.api.post('/auth/login', payload);
      localStorage.setItem('token', data.token)
    } catch (error) {
      throw Error(error);  
    }
  }



}


export default new Api();
