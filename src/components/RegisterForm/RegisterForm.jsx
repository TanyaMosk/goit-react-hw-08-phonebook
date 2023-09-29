import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Form, FormWrapper, TitleRegister } from "./RegisterForm.styled";

const RegisterForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    }));
    form.reset();
  };

  return (
    <FormWrapper>
     <TitleRegister>Registration</TitleRegister>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>       
          <TextField sx={{margin: '20px'}} id="outlined-basic" label="Username" variant="outlined"  type="text" name="name"  />
        </label>
        <label>           
          <TextField sx={{margin: '20px'}} id="outlined-basic" label="Email" variant="outlined"  type="text" name="email"   />
        </label>
        <label>       
          <TextField sx={{margin: '20px'}} id="outlined-basic" label="Password" variant="outlined"  type="password" name="password"  />
        </label>
        <Button sx={{margin: 'auto'}} type="submit"  variant="contained">Register</Button>
    </Form>
   </FormWrapper>
     )
};

export default RegisterForm;

