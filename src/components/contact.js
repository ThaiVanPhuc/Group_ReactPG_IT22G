import React from 'react' 
import './contact.css'
const Contact = () => {
    return ( 
        <>
        <div className='contact_container'> 
            <div className='contant'> 
                <h2># contact us</h2>
                <div className="form"> 
                    <form method='POST'> 
                        <input type='text' name='Name' value="" placeholder='Enter Your Full Name' required autoComplete='off'></input>
                        <input type='email' name='E-mail' value="" placeholder='Enter Your E-mail' autoComplete='off'></input>
                        <input type='text' name='Subject' value="" placeholder='Enter Your Subject' autoComplete='off'></input>
                        <textarea name='Message' value="" placeholder='Your Message' autoComplete='off'></textarea>
                        <button type='submit'>send</button>
                    </form>
                </div>
            </div>
        </div> 
        </> 
    ) 
}

export default Contact