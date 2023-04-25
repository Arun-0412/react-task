

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import store , { add_user, } from "./store";

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
  ];

const New_user = (values) => {
    const formdata = {
        // 'id':1
        'firstname':values.firstName,
        'lastname':values.lastName,
        'email':values.email,
        'dateofbirth':values.dateofbirth,
        'phone':values.phone,
        'image':values.image
    }
    store.dispatch({type:add_user,data:formdata});
    // alert(formdata.id);
    // alert(values.email);
    // const res = store.getState();
    alert('User Added Successfully');
    // console.log('res - '+(store.getState()));
   
}


const CreateuserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Firstname Required'),
  lastName: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Lastname Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Email Required'),
  dateofbirth: Yup.date()
//   .min(new Date('01-01-2005'))
  .max(new Date(),'Maximum '+ new Date())
  .required('Date of Birth Required'),
  phone: Yup.string()
  .min(10, 'atleast 10 digit!')
  .max(10, 'Maximum 10 digit!')
  .required('Phone Required'),
  image: Yup.mixed()
  
//   .test(
//     "fileFormat",
//     "Unsupported Format",
//     value => value && SUPPORTED_FORMATS.includes(value.type)
//   )
  // .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
  // value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
  .required('File Required'),
  // .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
  // value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
});

function validateimage(value) {
  let errors;
  // let input = value.replace("C:\\fakepath\\", "");
  if(!value) {
    errors = 'Required';
  }else{
    errors = value;
  }
}

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export const Createuser = () => (
  <div style={{padding:"20px"}}>
    <h1>Create user</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        dateofbirth:'',
        phone:'',
        image:''
      }}
      validationSchema={CreateuserSchema}
      
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        {New_user(values)}
      }}
    // onSubmit={New_user(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <Field placeholder="firstname" name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field placeholder="lastname" name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field placeholder="email" validate={validateEmail} name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field type='date' name="dateofbirth" />
          {errors.dateofbirth && touched.dateofbirth ? (
            <div>{errors.dateofbirth}</div>
          ) : null}
                    <Field placeholder="phone" type='tel' name="phone" />
          {errors.phone && touched.phone ? (
            <div>{errors.phone}</div>
          ) : null}
                    <Field placeholder="image" validate={validateimage} type='file' name="image" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
         
              
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Createuser;