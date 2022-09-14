import React, {useState} from 'react';
import styled from 'styled-components';

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const sendMessage = async (name, email, message) =>{
        await fetch("/mail-message",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, message})
        })
        .then(res => res.json())
        .then((data) =>{
            console.log(data)
    })
    }
    const handleSubmit = async(ev) =>{
        ev.preventDefault();
        const fullNameError = document.getElementById("full-name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");
        const form =  document.getElementById("contact-form");
        const confirmation = document.getElementById("confirmation-div");

        if(fullName !== "" && email !== "" && message !== "" && validateEmail(email)) {
            await sendMessage(fullName ,email, message); 
           form.style.display = "none";
           confirmation.style.display = "flex";


        }

        //fullname
       if(fullName === ""){
           fullNameError.style.display = "block";
       }else{
            fullNameError.style.display = "none";
       }

       //email
       if(email === ""){
            emailError.style.display = "block";
       }else {
            
            if(validateEmail(email)){
                emailError.style.display = "none";
            }else{
                emailError.innerText = "Email must be formatted correctly."
                emailError.style.display = "block";
            }
        }
        //message
        if(message === ""){
            messageError.style.display = "block";
        }else{
            messageError.style.display = "none";
        }
      
    }
    return (
    <Wrapper className='row'>
        <ContactHeader>Send me a message!</ContactHeader>
            <ContactForm className='col-10' onSubmit={handleSubmit} id="contact-form">
                    <label htmlFor="full-name"> Full Name* </label>
                    <Input type= "text=" id="full-name" value={fullName}  onChange={e => setFullName(e.target.value)}/>
                    <ErrorLabel id="full-name-error" htmlFor="full-name"> {'\u25CF'} Please complete required field.</ErrorLabel> 

                    <label htmlFor="email"> Email* </label>
                    <Input type= "email=" id="email" value={email}  onChange={e => setEmail(e.target.value)} />
                    <ErrorLabel id="email-error" htmlFor="email"> {'\u25CF'} Please complete required field.</ErrorLabel> 

                    <label htmlFor="message"> Message* </label>
                    <Textarea id="message" rows="2"  value={message}  onChange={e => setMessage(e.target.value)}/>
                    <ErrorLabel id="message-error" htmlFor="full-name"> {'\u25CF'} Please complete required field.</ErrorLabel> 

                    <Submit type= "submit" id="full-name" value="Send" />
            </ContactForm>
        <MailSentDiv className='col-10' id="confirmation-div">
            <MailSentTitle>
                Thank you!
            </MailSentTitle>

            <MailSentText>
                I would reach out to you as soon as possible.
            </MailSentText>
        </MailSentDiv>
    </Wrapper>
  );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    align-self:center;
`;
const ContactHeader = styled.h1`
    margin-top: 60px;
    padding-top: 120px;
    font-weight: bold;
    font-size:2em;
    color: white;
`;

const FindUsDiv = styled.div`
    background-color: white;
    padding: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;
const ContactForm = styled.form`
    padding: 50px 30px;
    box-sizing: border-box;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    border-radius: 10px;
    margin-bottom: 150px;
    background-color: white;
`;
const MailSentDiv = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    box-sizing: border-box;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px 1px;
    background-color: white;
    z-index: 200;
    margin: 30px;
    border-radius: 10px;
    margin-bottom: 150px;
`;

const MailSentTitle = styled.span`
    margin-top: 10px;

`;
const MailSentText = styled.span`
    padding: 30px;
    text-align: center;

`;
const Input = styled.input`
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 5px;
`;

const ErrorLabel = styled.label`
    display: none;
    margin-bottom: 20px;
    font-size: 0.9em;
`;
const Submit = styled.input`
    background-color: #ff4081;
    margin-top: 40px;
    color: white;
    width: 100px;
    padding: 10px 20px;
    border-radius: 30px;
    line-height: 22px;
    border: 0;

`;
const Textarea = styled.textarea`
    margin-bottom: 15px;
`;
export default Contact;