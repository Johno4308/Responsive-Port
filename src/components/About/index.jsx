import './index.scss'
import CharAnimation from '../CharAnimation'
import { useEffect, useState, useRef } from 'react'
import { Loader } from 'react-loaders'
import {gsap} from 'gsap-trial'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate') //state to animate title

    useEffect(() => {
        gsap.to('hr', {opacity: 1, duration: 3, y: -50, ease: 'Power3.easeInOut'})
        gsap.to('p', {delay: 3, duration: 1, y: -40, opacity: 1})
        gsap.to('.portrait', { delay: 1, duration: 3, x: 200, opacity: 1})
    }, [])

    useEffect(() => {   //use effect on state
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <CharAnimation
                        letterClass={letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} //animated letters are set as an array and called through
                        idx={15}                                              //a for loop to be allocated a unique num for timelaspe
                    />
                </h1>
                <hr/>
                <p>
                    I'm Johnathan, a South African that arrived in London on an ancestral 
                    work visa, in December 2022. Whilst working full time in recruitment, 
                    I have been studying a BSC in Computing through the University of South Africa. 
                    I will complete my degree by the end of 2023.
                </p>
                <p>
                    I'm a goal-driven individual, passionate about coding, 
                    fitness and philosophy.
                </p>
                <p>
                    The reason for my immigration to the UK is to pursue a career in tech.
                    I am looking for an opportunity at a company, where I can be a asset, 
                    broaden my expertise and grow as a developer and individual.
                </p>
            </div>
            <div className='portrait'></div>  
            <div className='stage-cube-cout'>
                <div className='cubespinner'> {/* cube for about page using scss styling */}
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
        </div>
        <Loader type="ball-rotate" /> {/* between page loading*/}
        </>
    )
}

export default About