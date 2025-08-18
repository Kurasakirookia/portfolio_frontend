
import "../css/contact_me.css"


const ContactMe = () => {
  

  return (
    <div className='contact_container'>

        <div className="contact_info_container">

            <h1 className='contact_text' id='contact_text_1'>LET'S </h1>
            <h1 className='contact_text' id='contact_text_2'>CONNECT</h1>
        
        </div>
        <div className="contact_options"> 
              <a className="contact contact1" href='https://www.instagram.com/tejasdkumar/?hl=en' target="_blank" rel="noopener noreferrer" >INSTAGRAM</a>
               <a className="contact contact2" href='https://www.linkedin.com/in/tejaskumard/'target="_blank" rel="noopener noreferrer">LINKEDIN</a>
               <a className="contact contact3" href='https://github.com/Kurasakirookia' target="_blank" rel="noopener noreferrer">GITHUB</a>

        </div>
      
    </div>
  )
}

export default ContactMe
