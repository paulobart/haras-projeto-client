import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      //baseURL: 'http://localhost:5000',
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


  loginAdmin = async (payload) => {
    try {
      const { data } = await this.api.post('/auth/loginAdm', payload);
      localStorage.setItem('token', data.token)
      return data.payload
    } catch (error) {
      throw Error(error);  
    }
  }

  newAdmin = async (payload) => {
    try {
      const { data } = await this.api.post("/auth/signupAdm", payload) 
    } catch (error) {
      console.log(error)
    }
  };

  getAdmin = async () => {
    try {
      const { data } = await this.api.get(`/auth/adm`)
      return data
    } catch (error) {
      throw Error(error)      
    }
  };

  adminToDelete = async (id) => {
   try {
     const { data } = await this.api.post(`/auth/delete/${id}`)
     return data
    } catch (error) {
    throw Error(error) 
   }
 
  }
  
  login = async (payload) => {
    try {
      const { data } = await this.api.post('/auth/login', payload);
      localStorage.setItem('token', data.token)
      return data.payload
    } catch (error) {
      throw Error(error);  
    }
  }

  getProfile = async (id) => {
    try {
      const { data } = await this.api.get(`/support/infoprofile/${id}`)
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
    try {
      const { data } = await this.api.get(`/message/getMessage/${id}`)
      return data
    } catch (error) {
      throw Error(error)
    }
  }

 sendMessage = async ( payload)=>{

    try {
  
    const { data } = await this.api.post(`/message/sendMessage`,payload)
    console.log(data)
    return data
    } catch (error) {
    throw Error(error)
    }
  }

  getHorse = async () => {
    try {
      const { data } = await this.api.get(`/horse/listhorse`)
      return data
    } catch (error) {
      throw Error(error)
    }
  }

  horseToDelete = async (id) => {
    try {
      const { data } = await this.api.post(`/horse/delete/${id}`)
      return data
     } catch (error) {
     throw Error(error) 
    }
  
   }

  getSponsoredHorses = async (id) =>{
    try {
      const { data } = await this.api.get(`/support/listhorsetosponsor/${id}`)
      
      return data
    } catch (error) {
      throw Error(error)
      
    }
  }

  newHorse = async (payload) => {
    try {
      const { data } = await this.api.post("/horse/create", payload)
      console.log(data)
    } catch (error) {
      throw Error(error)
    }
  };

  editHorse = async (id, payload) => {
    try {
      const { data } = await this.api.put(`/horse/update/${id}`, payload)
      console.log(data)
    } catch (error) {
      throw Error(error)
    }
  };
  createPlan = async (payload)=>{
    try {
      console.log(payload)
      const { data } = await this.api.post('/plans/create',payload)
      console.log(data)
      return data
    } catch (error) {
      throw Error(error)
    }
  }
  listPlan = async ()=>{
    try {
      const { data } = await this.api.get('/plans/list')
      return data
    } catch (error) {
      throw Error(error)
    }
  }
  editPlan = async (id,payload)=>{
    try {
      const { data } = await this.api.put(`/plans/update/${id}`, payload)
      return data
    } catch (error) {
      throw Error(error)
    }
  }

  planToDelete = async (id) => {
    try {
      const { data } = await this.api.post(`/plans/delete/${id}`)
      return data
     } catch (error) {
     throw Error(error) 
    }
  
   }





  listSponsor = async () =>{
    try {
      const  { data } = await this.api.get('/auth/listsponsor')
      console.log(data)
      return data
    } catch (error) {
      throw Error(error)
    }
  }


  getHaras = async (id) => {
    console.log(id)
    try {
      const { data } = await this.api.get(`/haras/findharas/${id}`);
      return data
            } catch (error) {
      throw Error(error)
    }
  }
  updateHaras = async (id, payload) => {
    console.log(id)
    try {
      const { data } = await this.api.put(`/haras/update/${id}`, payload)
      return data
    } catch (error) {
      throw Error(error)
    }
  }
  sendVideo = async (id, video) => {
    const midiaData = new FormData();
    midiaData.append( 'imagem', video )
    try {
      const { data } = await this.api.post(`/horse/sendVideo/${id}`, midiaData)
      console.log(data)
      return data
    } catch (error) {
      throw Error(error)
    }
  }
  sendImg = async (id, imagem) => {
    const midiaData = new FormData();
    midiaData.append( 'image', imagem )
    try {
      const { data } = await this.api.post(`/horse/sendImg/${id}`, midiaData)
      console.log(data)
      return data
    } catch (error) {
      throw Error(error)
    }
  }
  apadrinhar = async (payload)=>{
    try {
      const { data } = await this.api.post('/support/tosponsor', payload)
      console.log(data)
      return data
    } catch (error) {
      throw Error(error)
    }
  }

}
export default new Api();
