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
      //  localStorage.removeItem("token");
      //  window.location = `/login`;
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

  getProfile = async (id) => {
    try {
      const { data } = await this.api.get(`/support/infoProfile/${id}`)
      return data
   } catch (error) {
      throw Error(error);
    }
  };

  signup = async (payload) => {
    try {
      const { data } = await this.api.post("/auth/signup", payload)
      console.log(data)
    } catch (error) {
      throw Error(error)
    }
  };

  upload = async (imagem) => {
    console.log(`estou no upload ${imagem}`)
    const imageData = new FormData();
    imageData.append( 'image', imagem )
    console.log(imageData)
    try {
      const { data } = await this.api.post("/auth/upload", imageData)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  
  getMessage = async (id)=>{
    console.log(id)

    try {
      const { data } = await this.api.get(`/message/getMessage/${id}`)
      return data
    } catch (error) {
      throw Error(error)
    }
  }
  
  sendMessage = async (id, payload)=>{
    try {
  
    const { data } = await this.api.post(`/message/sendMessage/${id}`,payload)
    console.log(data)
    return data
    } catch (error) {
    throw Error(error)
    }
  }

  getHorse = async (id, payload) => {
    try {
      const { data } = await this.api.get(`/horse/listhorse`)
      return data
    } catch (error) {
      throw Error(error)
    }
  }

}
export default new Api();