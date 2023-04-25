import { legacy_createStore as createStore } from 'redux';

export const add_user = 'user/add_user';

const reducer = (state,action) => {
    
    if(action.type === add_user){
        const user = action.data;
    //   const users = {
    //     'firstname':user.firstname,
    //     'lastname':user.lastname,
    //     'email':user.email,
    //     'dateofbirth':user.dateofbirth,
    //     'phone':user.phone,
    //     'image':user.image,
    //    }
    //    return 'User Added Successfully';
    return user;
    }    
     return 'not working';
}

const store = createStore(reducer);

export default store;