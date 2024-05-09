import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "Replace with service ID"
        "service_l099v0t",
         // "Replace with template ID"
        "template_ul0w9fk",
        form.current,
         // "Replace with Public (user) ID"
        "corIpiCpT0dHufKfE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <p>Contact Us</p>
        <label>Name</label>
        {/* from_name */}
        <input type="text" name="Manis Saha"/>
        <label>Email</label>
        {/* to_email */}
        <input type="email" name="Sign In"/>
        <label>Message</label>
        <textarea name="Hi, How are you !!!" />
        <input type="submit" value="Send"/>
      </form>
    </StyledContactForm>
  );
};
export default Contact;

const StyledContactForm = styled.div`
  width: 400px;
  

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 18px;

    p {
        display: flex;
        margin: auto auto 15px auto;
        color: white;
        font-size: 28px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: 1px solid white;
        border-radius: 5px;
        background-color: black;
        padding: 5px 25px 5px 25px;
    }

    label {
        color: white;
        padding: 0 0 6px 0;
    }

    input {
      color: white;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      background-color: gray;

      &:focus {
        border: 2px solid gray;
      }
    }

    textarea {
      color: white;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      background-color: gray;
      &:focus {
        border: 2px solid gray;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      width: 105%;
      padding: 10px 0 10px 0;
      margin-top: 2.5rem;
      cursor: pointer;
      background: green;
      color: white;
      font-size: 14px;
      border: 1px solid white;
    }
  }
`;