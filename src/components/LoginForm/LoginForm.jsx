import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, FormWrapper, TitleLogin } from "./LoginForm.styled";

const LoginForm = () => {
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
      <TitleLogin>Login</TitleLogin>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label >       
         <TextField sx={{margin: '20px'}} id="outlined-basic" label="Email" variant="outlined"  type="text" name="email"   />
      </label>
      <label >       
         <TextField sx={{margin: '20px'}} id="outlined-basic" label="Password" variant="outlined"  type="password" name="password"  />
      </label>
      <Button sx={{margin: 'auto'}} type="submit"  variant="contained">Log In</Button>
    </Form>
    </FormWrapper>
  );
};

export default LoginForm;