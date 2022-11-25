import { Container, Row, Tabs, Tab } from 'react-bootstrap';  //for tab display using boot strap
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { useRef, Suspense, useState, useEffect } from 'react';  //use of suspense and use ref for 3D models
import { Canvas, useFrame } from '@react-three/fiber'           //for use in 3d models
import { OrbitControls, useGLTF } from '@react-three/drei'      //react fiber for 3d models
import { Loader } from 'react-loaders'
import CharAnimation from '../CharAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {gsap} from 'gsap-trial'


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')  //state for title animation

  useEffect(() => {   //use effect for title animation
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  useEffect(() => {   //use effect for gsap animations
    gsap.to('h2', {opacity: 1, duration: 3, x: 80, ease: 'Power3.easeInOut'})
    gsap.to('h3', {delay: 1, duration: 1, x: 80, opacity: 1})
    gsap.to('.git-flat-button', { delay: 1, duration: 3, y: -40, opacity: 1})
}, [])
  //glb converted in js function for 3D models, 
  function Calculator(props) {
    const group = useRef()
    useFrame( ({clock}) => {
      group.current.rotation.y = clock.getElapsedTime() / 5
        })
    const { nodes, materials } = useGLTF("/calculator.glb");
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.12}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mainframe_LP__0.geometry}
                material={materials["Scene_-_Root"]}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }

  function Bed(props) {
    const group = useRef()
    useFrame( ({clock}) => {
      group.current.rotation.y = clock.getElapsedTime() / 5
        })
    const { nodes, materials } = useGLTF("/bed.glb");
    return (
      <group ref={group} {...props} dispose={null} scale={3}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Pillow_Blanket}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material}
          />
        </group>
      </group>
    );
  }

  function Contain(props) {
    const group = useRef()
    useFrame( ({clock}) => {
        group.current.rotation.y = clock.getElapsedTime() / 5
          })
    const { nodes, materials } = useGLTF("/Container.glb");
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.125}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Material__102}
          />
        </group>
      </group>
    );
  }

  return(
    <>
      <div className='project-page'>
              <h1 className='project-title'>
              <CharAnimation
                        letterClass={letterClass}
                        strArray = {['P', 'r', 'o', 'j', 'e', 'c', 't', 's', ' ']}
                        idx={15}
                    />
                    | Using C++ and Qt FrameWork
              </h1>
              <Container className="py-4">
                  <Row className="justify-content-center">
                      <Tabs 
                        justify variant='pills' 
                        defaultActiveKey="tab-1" 
                        className="project-tabs">
                          <Tab                          //project 1 tab
                            className="tab-1" 
                            eventKey="tab-1" 
                            title="Container">
                              <div className="project-content">
                                  <h2>Transporting Containers</h2>
                                  <h3>Project Idea</h3>
                                  <p>Server program to stack cylinder and box objects onto pallets and send the XML objects over 
                                    a network to client program, which displays shipping objects in a table model view.</p>
                                  <h3>To Demonstrate</h3>
                                  <ul>
                                    <li> Factory and Momento Design Patterns</li>
                                    <li> XML writing using DOM and XMLStreamer</li>
                                    <li> TCP sockets</li>
                                    <li> Threading</li>
                                    <li> Serialization of class objects</li>
                                    <li> Table model view</li>
                                  </ul>
                              </div>
                              <div className='project-model'>
                              <Canvas camera={{ fov:70, position: [0,40,50]}}>
                                  <Suspense fallback={null}>
                                  <ambientLight />
                                  <directionalLight intensity={2} positon={[0,0,50]} />
                                  <Contain />
                                  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                                  </Suspense>

                              </Canvas>
                              <div className="git-flat-button">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://github.com/Johno4308/Container"
                                >
                                    <FontAwesomeIcon 
                                      className="icon" 
                                      icon={faGithub} 
                                      color="#54047C">
                                    </FontAwesomeIcon>  
                                      GitHub Link
                                </a>
                              </div>
                              </div>
                          </Tab>
                          <Tab                      //project 2 tab
                              className="tab-2" 
                              eventKey="tab-2" 
                              title="Reservation">
                            <div className="project2-content">
                                  <h2>The Guest House</h2>
                                  <h3>Project Idea</h3>
                                  <p>To create a 5 room BnB booking application that books in guests, checks dates and room availability</p>
                                  <h3>To Demonstrate</h3>
                                  <ul>
                                    <li> To hard code a UI without using QT onboard designer</li>
                                    <li> Implementation of user input validation</li>
                                    <li> Serialization of class objects</li>
                                    <li> Converting and retrieving data to/from XML</li>
                                  </ul>
                              </div>
                              <div className='project2-model'>
                              <Canvas camera={{ fov:80, position: [0,30,50]}}>
                                  <Suspense fallback={null}>
                                  <ambientLight intensity={0.4}/>
                                  <directionalLight 
                                    intensity={1} 
                                    positon={[0,25,50]} />
                                  <Bed />
                                  <OrbitControls 
                                    enablePan={true} 
                                    enableZoom={true} 
                                    enableRotate={true}/>
                                  </Suspense>
                              </Canvas>
                              <div className="git-flat-button">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://github.com/Johno4308/GuestHouse"
                                >
                                    <FontAwesomeIcon 
                                      className="icon" 
                                      icon={faGithub} 
                                      color="#54047C">
                                    </FontAwesomeIcon>  
                                      GitHub Link
                                </a>
                              </div>
                              </div>
                          </Tab>
                          <Tab                          //project 3 tab
                            className="tab-3" 
                            eventKey="tab-3" 
                            title="Calculator">
                            <div className="project-content">
                                  <h2>Calculator</h2>
                                  <h3>Project Idea</h3>
                                  <p>To design a calculator with four basic operations, namely addition, subtraction, multiplication, and division.</p>
                                  <h3>To Demonstrate</h3>
                                  <ul>
                                    <li> To hard code a UI without using QT onboard designer</li>
                                    <li> Implementation of Singleton Design Pattern</li>
                                    <li> Implementation of Factory Design Pattern</li>
                                  </ul>
                              </div>
                              <div className='project-model'>
                              <Canvas camera={{ fov:70, position: [0,25,50]}}>
                                  <Suspense fallback={null}>
                                  <ambientLight />
                                  <directionalLight 
                                    intensity={1} 
                                    positon={[0,25,50]} />
                                  <Calculator />
                                  <OrbitControls 
                                    enablePan={true} 
                                    enableZoom={true} 
                                    enableRotate={true} />
                                  </Suspense>
                              </Canvas>
                              <div className="git-flat-button">
                                <a 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://github.com/Johno4308/Calculator"
                                >
                                    <FontAwesomeIcon 
                                      className="icon" 
                                      icon={faGithub} 
                                      color="#54047C">
                                    </FontAwesomeIcon>  
                                      GitHub Link
                                </a>
                              </div>
                              </div>
                          </Tab>
                      </Tabs>
                  </Row>
              </Container>
      </div>
      <Loader type="ball-rotate" />
      </>
  )
}

export default Projects