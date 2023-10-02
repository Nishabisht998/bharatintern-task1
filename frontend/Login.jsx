import { useFormik } from 'formik';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});
const Login = () => {
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:4000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }

      });
      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Login Success'

        })
        navigate('/create');
      }
      else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Email or Password is incorrect'
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }
    },
    validationSchema: loginSchema

  });

  return (
    <div className='content '>

      <div className="row ">
        <div className="col-md-3 mx-auto">
          <div className='card shadow  '>
            <div className="card-body">

              <h1 className='text-center fw-bold mb-3 '>
                login
              </h1>
              <form className='login' onSubmit={loginForm.handleSubmit}>
                <span style={{ color: 'red', fontSize: 15 }}>{loginForm.touched.email && loginForm.errors.email}</span>
                <input onChange={loginForm.handleChange} value={loginForm.values.email} name="email"
                  className="form-control mb-1" type="text" placeholder=' username' />
                <span style={{ color: 'red', fontSize: 15 }}>{loginForm.touched.password && loginForm.errors.password}</span>
                <input onChange={loginForm.handleChange} value={loginForm.values.password} name="password"
                  className="form-control mb-2 " type="password" placeholder='password' />
                <button className="btn btn-dark w-100 " type='submit'>
                  login
                </button>
                <p className="small fw-bold mt-4 pt-1 mb-4 d-flex">
                  Don't have an account?
                  <NavLink className="navlink  fw-bold mb-2 px-2  " to="/register">register</NavLink>
                </p>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login