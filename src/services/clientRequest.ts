import axios from 'axios'
import { BLOG_ROOT_API } from 'src/constant/api'
import { AUTH_ROOT_API } from 'src/constant/api'
export const createClient = (apiRoot: string, apiConfig = {}) => {
  return {
    get: (url: string, config?: any) =>
      axios
        .get(`${apiRoot}${url}`, { ...config, ...apiConfig })
        .then((response) => response.data),
    post: (url: string, body: Object, config?: any) =>
      axios
        .post(`${apiRoot}${url}`, body, { ...config, ...apiConfig })
        .then((response) => response.data),
    put: (url: string, config?: any) =>
      axios
        .put(`${apiRoot}${url}`, { ...config, ...apiConfig })
        .then((response) => response.data),
    delete: (url: string, config?: any) =>
      axios
        .delete(`${apiRoot}${url}`, { ...config, ...apiConfig })
        .then((response) => response.data),
  }
}

export const BlogClient = createClient(BLOG_ROOT_API)
export const AuthClient = createClient(AUTH_ROOT_API)
