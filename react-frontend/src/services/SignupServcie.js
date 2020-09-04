import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8090/api/v1/signup";

class SignupService{

    signUpEmployee(user){
        debugger
        return axios.post(USER_API_BASE_URL, user);
    }
}

export default new SignupService()