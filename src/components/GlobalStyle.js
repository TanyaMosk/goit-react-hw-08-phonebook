import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
body {  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  /* max-width: 1200px; */
  margin: auto;    
  /* background: linear-gradient(to top, #09203f 0%, #537895 100%); */
 background: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);
  background-attachment: fixed;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

div{
  margin: auto; 
}

img{  
  display: block;
  width: 100%;
  height:100vh;
  object-fit: fill;
}
`;