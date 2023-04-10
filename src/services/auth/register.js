import { http } from "../config";

export default {

    do: ( params ) => {
        return http.post('register', params);
    },

    get: (id, headers = {}) => {
        return http.get(`menu/${id}`, {headers: headers})
    },

    getToView: (id) => {
        return http.get(`view/menu/${id}`);
    }


}