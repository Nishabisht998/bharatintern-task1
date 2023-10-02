import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import * as Yup from 'yup';


const registerSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});

const Register = () => {
  const navigate = useNavigate();

  const registerForm= useFormik({
    initialValues:{
      email:"",
      password:"",

    },
    onSubmit:async(values)=>{
      console.log(values);
      const res= await fetch('http://localhost:4000/user/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json' }
      });
      console.log(res.status);

      if(res.status === 200){
        toast.success('register successfully!')
        navigate('/login');
      }else{
        toast.error("register failed")
      }


    },
    validationSchema: registerSchema


  });



  return (
    <div  className='content vh-100'>
     
    <div className="row ">
      <div className="col-md-3 mx-auto">
        <div className="card">
        <div className="card-body">
          
        <h1 className='text-center fw-bold mb-3'>
          register
        </h1>
      <form className='login' onSubmit={registerForm.handleSubmit}>
      <span style={{color: 'red', fontSize: 15}} >{registerForm.touched.email && registerForm.errors.email}</span>
      <input className="form-control mb-1" type="email"  placeholder='email' onChange={registerForm.handleChange} value={registerForm.values.email} name='email' />
      <span style={{color: 'red', fontSize: 15}}>{registerForm.touched.password && registerForm.errors.password}</span>
      <input className="form-control mb-2 " type="password" placeholder='password'  onChange={registerForm.handleChange} value={registerForm.values.password} name='password' />
      <button type='submit' className="btn btn-dark w-100 ">
     register
      </button>
      <p className="small fw-bold mt-4 pt-1 mb-4 d-flex">
                  Don't have an account?
                  <NavLink className="navlink  fw-bold mb-2 px-2  " to="/login">login</NavLink>
                </p>



    </form>
          </div>
          </div>
      </div>
    </div>
   </div>
  )
}

export default Register