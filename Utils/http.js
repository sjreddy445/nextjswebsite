import axios from "axios";
import {apiUrls} from '../configs/constants'

export function getBlogs(){
  return axios.get(apiUrls.BLOGS);
}