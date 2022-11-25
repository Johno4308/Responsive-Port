import Loader from 'react-loaders'
import './index.scss'
import CharAnimation from '../CharAnimation'
import { useEffect, useRef, useState } from 'react'
import {gsap} from 'gsap-trial'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')  //use state to animate title
    const refForm = useRef()    //use ref to setup emailjs

    useEffect(() => {   //use effect for animate title
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    useEffect(() => {   //use effect for gsap <p> movememnt
        gsap.to('p', {delay: 2, duration: 1, x: 150, opacity: 1})
    }, [])

    //set up for email js to my private email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vulj6uy', 'template_tgivqic', refForm.current, 'BUUXSBXz3Nl_Iallz')
          .then(
            () => {
                alert('Message sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message!')
            }
        )
    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <CharAnimation 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <hr className='contact-hr_1'/>
                <p>I am looking for any opportunity in software development.
                    I am extremely hard working and adapt well to new frameworks.
                    Really looking forward to hearing from you.
                </p>
                <hr className='contact-hr_2'/>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>   {/*contact me form set up*/}
                        <ul>
                            <li className="half">
                            <input 
                                placeholder="Name" 
                                type="text" 
                                name="name" 
                                required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input 
                                type="submit" 
                                className="flat-button" 
                                value="SEND" />
                            </li>
                        </ul>
                        <hr className='contact-hr_3'/>
                    </form>
                </div>
            </div>
        </div>
        <div className='stage-about'>
                <div className='cubeabout'>
                    <div className='face1'>
                    </div>
                    <div className='face2'>
                    </div>
                    <div className='face3'>
                    </div>
                    <div className='face4'>
                    </div>
                    <div className='face5'>
                    </div>
                    <div className='face6'>

                    </div>
                </div>
            </div>
        <Loader type="ball-rotate" />
        </>
    )
}

export default Contact