import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import { mediaQueries } from 'styles/mediaQueries';

import background from 'images/background.png';

export const GlobalStyle = createGlobalStyle`
 body {
        margin: 0;
         font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
       
         line-height: 1.43;
         background-color: #fefcff;
          background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;

  ${mediaQueries('tablet')`
    
    background-position: 50%;`};

  ${mediaQueries('desktop')`
   
    background-position: 100%;`};
         
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Poppins', sans-serif, 'Courier New',
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
