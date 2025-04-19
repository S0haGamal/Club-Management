import React from 'react'
import './Login.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import InfoIcon from '@mui/icons-material/Info';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    const { Email, Password } = data;
    if(Email != "soha@gmail.com" || Password != "1234abcd"){
      alert("Invalid credentials")
      return
    }
    else{
      localStorage.setItem("user", JSON.stringify(data))
      navigate("/home");
    }
  };
  return (
    <div className='LoginPage'>
      <div className='LoginContainer d-flex  justify-content-center align-items-center vh-100'>
        
      <Form className="Signform my-50" onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.±]+@gmail.com+$/,
                message: "Please enter valid email",
              },
            })}
          />
         {
          formState.errors.Email?.message && (
            <p className="text-danger d-flex align-items-center">
              <InfoIcon fontSize='14px'/>
              {formState.errors.Email?.message}</p>
          )
         }
          
          </Form.Group>
          
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Please enter at least 8 characters",
              },
            })}
          />
          {
          formState.errors.Password?.message && (
            <p className="text-danger d-flex align-items-center">
              <InfoIcon fontSize='14px'/>
              {formState.errors.Password?.message}</p>
          )
         }
        </Form.Group>

        <Button variant="primary" className="mx-5 my-3" type="submit">
          Submit
        </Button>
      </Form>
      </div>

    </div>
  )
}

export default Login