import styled from "styled-components"

//Wrapper for the form element
export const FormWrapper = styled.article`
  width: 50%;
  margin: 5rem auto;
  -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.75);
  padding: 15px;
  border-radius: 0.25rem;
  background-color: #eaeaea;

  h3 {
    text-align: center;
  }

  button {
    border: none;
    width: 20%;
    padding: 0.5rem;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;

    :hover {
      background-color: #6272a4;
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`

//Wrapper for the inputs in the form
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    padding: 1rem;
    margin: 1rem 0;
    border: none;
    border-radius: 0.25rem;
  }
`
