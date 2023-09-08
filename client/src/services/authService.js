import { userLogin } from '../redux/features/auth/authAction';
import store from '../redux/store'


export const handleLogin = (e,email,password,role) => {
    e.preventDefault();
    try{
        if(!role || !email || !password){
            return alert('please provide all field')
        }
        store.dispatch(userLogin({email,password,role}))
    }catch(error) {
        console.log(error);
    }
};

export const handleRegister = (
    e,
            name,
            role,
            email,
            password,
            organisationName,
            hospitalName,
            website,
            address,
            phone) => {
e.preventDefault();
try{
console.log("Register => ",e,
name,
role,
email,
password,
organisationName,
hospitalName,
website,
address,
phone)
}catch(error){
    console.log(error)
}
            }
 