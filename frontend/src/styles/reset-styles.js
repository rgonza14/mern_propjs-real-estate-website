import "./font.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --title: 'Volkhov', serif;
    --text: 'Tenor Sans', sans-serif;
    --primary-color: #6A9FFE;
    --light-blue: #3A5CEE; //secondary
    --dark-blue: #061F48; //primary
    --red: #de404d;
    --secondary-color: #2B3F65;
    --grey: #f8f8f8;
    --green: #27ae60;
    
  }
  *{
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;  
    
  }
  body {
    /* background-color: #F6F8FC; */
    background-color: var(--grey);
    
    margin: 0;
    font-size: 1.6rem;
    overflow-x: hidden;  
    @media (max-width: 480px){
      font-size: 16px;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
     -webkit-appearance: none;
  }
  h1,h2,h3{
    font-family: var(--title);
  }
  a, p, textarea{
    font-family: var(--text);
  }
  h1,h3,p,h2, ul{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style-type: none;
  }
  
  a{
    text-decoration: none;
    
  }

  p{
    font-size: 16.5px;
  }
  h2{
    font-size: 18px;
  }
  button{
    background: none;
    border: none;
    padding: 0;
    text-align: left;
  }
  .wrapper-main{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  @media screen and (max-width: 768px){
    p{
      font-size: 13px;
    }
  }

  @media screen and (max-width: 1200px){


    p{
      font-size: 15px;
    }
    h2{
      font-size: 16.5px;
    }
  }

`;

export default GlobalStyle;
