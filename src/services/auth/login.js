import { http } from "../config";

export default {

    doAuth: (params) => {
        return http.post('login', params);
    }

}