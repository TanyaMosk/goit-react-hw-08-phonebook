import { Box, ButtonGroup, Button } from "@mui/material"
import { NavLink } from "react-router-dom"

const AuthNav = () => {
  return (
    <Box sx={{margin:'auto 30px'}}>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button><NavLink to="/register" >Register</NavLink></Button>
        <Button><NavLink to="/login" >Login</NavLink>  </Button>
      </ButtonGroup>
    </Box>
  )
};

export default AuthNav;