import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
        margin: 0;
         font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
         background-color: #fefcff;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Montserrat', sans-serif, 'Courier New',
        monospace;
    }

     a {
        text-decoration: none;
    }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
  
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
