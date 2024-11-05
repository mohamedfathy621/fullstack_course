import axios from "axios";
const base_url='http://localhost:3001/persons';
const get_all=()=>{
    return axios.get(base_url);
}
const add_person=(person) =>{
    return axios.post(base_url,person);
}
const delete_person=(id) =>{
    return axios.delete(`${base_url}/${id}`);
}
const update_person=(id,person) =>{
    return axios.put(`${base_url}/${id}`,person);
}
export default {get_all,add_person,delete_person,update_person}