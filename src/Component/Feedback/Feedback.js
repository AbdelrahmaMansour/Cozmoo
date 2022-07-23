import emailjs from "emailjs-com";
import React,{useRef} from 'react';
import './Feedback.css'

export default function Feedback({orderid}) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zzqn7oo', 'template_69h4n03', form.current, 'user_isKztCtpzLpryNEJ4XQOP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    };
    return(
        <form ref={form} onSubmit={sendEmail} className="Feedback">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>subject</label>
        <input type="text" name="subject"  value={orderid}/>
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    )
}