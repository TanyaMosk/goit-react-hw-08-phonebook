import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, FormWrapper } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();


 const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
     form.reset();     
  };
    
  return (
    <FormWrapper>
      <h2>Login</h2>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label >
        {/* Email
         <input type="email" name="email" /> */}
         <TextField sx={{margin: '20px'}} id="outlined-basic" label="Email" variant="outlined"  type="text" name="email"   />
      </label>
      <label >
        {/* Password
         <input type="password" name="password" /> */}
         <TextField sx={{margin: '20px'}} id="outlined-basic" label="Password" variant="outlined"  type="password" name="password"  />
      </label>
      <Button sx={{margin: 'auto'}} type="submit"  variant="contained">Log In</Button>
      </Form>
      </FormWrapper>
  );
};

