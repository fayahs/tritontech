import React from 'react'
import '../Styles/Home.css';
import Particles from 'react-tsparticles';
import img2 from '../images/3dobj2.png';
import { useCallback } from 'react';
import { Button, Typography } from '@material-ui/core';
import { loadFull } from 'tsparticles';

function Home() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
    
        await loadFull(engine);
      }, []);
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
  return (
    <div className='home'>
         <div className='triton-logo'>
            {/* <img src={img} alt='triton'/> */}
          </div>

          <div className='home-content' >
            
            <Typography variant='h2' component='h2' style={{ fontWeight: '700' }}>
              <span style={{ fontWeight: '10' }}><span style={{ color: '#cf2e2e' }}> We</span> Build</span> <i style={{ color: '#2E8BC0' }}>R</i><span style={{ fontSize: '40px' }}>elatioships</span>
            </Typography>
            <Typography variant='h2' component='h2' style={{ fontWeight: '700' }}>
              <span style={{ fontWeight: '10' }}>More <span style={{ color: '#cf2e2e' }}>Then</span></span>  <i style={{ color: '#2E8BC0' }}>P</i><span style={{ fontSize: '40px' }}>roducts,</span>
            </Typography>

            <Typography style={{ fontSize: '15px' }}>
              <span>Seamless collaboration, total transparency, secure delivery.</span> <br />
              <span className='home-content-tags'> We’ve <span style={{ marginLeft: '5px' }} ></span>developed a better<span style={{ paddingLeft: '5px' }}></span> approach to <  span style={{ marginLeft: '10px' }}></span>custom <span /> software</span> <br />
              <span> development.<span style={{ marginLeft: '10px' }}></span>We <span style={{ marginLeft: '5px' }}></span> love finding <span style={{ marginLeft: '5px' }}></span>solutions to <span style={{ marginLeft: '8px' }}></span>complicated </span><br />
              <span>problems by solving the unsolvable.Our technology,experts </span><br />
              <span> think big, design smart,   and <span style={{ marginLeft: '20px' }}>develop fast for all screens</span>.</span><br />
              <span>They’re <span style={{ marginLeft: '10px' }}>ready</span> <span style={{ marginLeft: '5px' }}> to turn your</span><span style={{ marginLeft: '20px' }}> big idea into a reality.</span></span>
            </Typography>
            <div style={{ display: 'flex', width: '100%', height: '20%' }} className='home-content-btn'>
              <Button variant="contained" style={{ background: '#2e8bc0', color: 'white', textTransform: 'none' }} href="#contained-buttons" >
                Learn More
              </Button>
              <Button variant="contained" style={{ background: '#2e8bc0', color: 'white', textTransform: 'none' }} href="#sec6" >
                Contact Us
              </Button>
            </div>
          </div>
          <div className='home-content1' style={{ width: '80%', height: '70%', marginTop: '20px' }}>

            <img src={img2} alt='triton' className='home-content-img' />
          </div>



          <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              "background": {
                "color": {
                  "value": "",
                },
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "20%"
              },
              "interactivity": {
                "events": {
                  "onClick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onHover": {
                    "enable": true,
                    "mode": "bubble"
                  }
                },

                "modes": {
                  "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                  },
                  "bounce": {
                    "distance": 200
                  },
                  "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "mix": false,
                    "opacity": 0,
                    "size": 0,
                    "divs": {
                      "distance": 200,
                      "duration": 0.4,
                      "mix": false,
                      "selectors": []
                    }
                  },
                  "connect": {
                    "distance": 80,
                    "links": {
                      "opacity": 0.5
                    },
                    "radius": 60
                  },
                  "grab": {
                    "distance": 400,
                    "links": {
                      "blink": false,
                      "consent": false,
                      "opacity": 1
                    }
                  },
                  "push": {
                    "default": true,
                    "groups": [],
                    "quantity": 4
                  },
                  "remove": {
                    "quantity": 2
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "divs": {
                      "distance": 200,
                      "duration": 0.4,
                      "factor": 100,
                      "speed": 1,
                      "maxSpeed": 50,
                      "easing": "ease-out-quad",
                      "selectors": []
                    }
                  },
                  "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                  },
                  "light": {
                    "area": {
                      "gradient": {
                        "start": {
                          "value": "#000000"
                        },
                        "stop": {
                          "value": "#000000"
                        }
                      },
                      "radius": 1000
                    },
                    "shadow": {
                      "color": {
                        "value": "#000000"
                      },
                      "length": 2000
                    }
                  }
                }
              },
              "particles": {
                "color": {
                  "value": "#2E8BC0"
                },
                "move": {
                  "attract": {
                    "rotate": {
                      "x": 600,
                      "y": 600
                    }
                  },
                  "enable": true,
                  "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                  },
                  "random": true,
                  "speed": 1
                },
                "number": {
                  "density": {
                    "enable": true
                  },
                  "value": 160
                },
                "opacity": {
                  "random": {
                    "enable": true
                  },
                  "value": {
                    "min": 0,
                    "max": 1
                  },
                  "animation": {
                    "enable": true,
                    "speed": 1,
                    "minimumValue": 0
                  }
                },
                "size": {
                  "random": {
                    "enable": true
                  },
                  "value": {
                    "min": 1,
                    "max": 3
                  },
                  "animation": {
                    "speed": 4,
                    "minimumValue": 0.3
                  }
                },
                "life": {
                  "count": 0,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                  },
                  "duration": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                  }
                },
                "roll": {
                  "darken": {
                    "enable": false,
                    "value": 0
                  },
                  "enable": false,
                  "enlighten": {
                    "enable": false,
                    "value": 0
                  },
                  "mode": "vertical",
                  "speed": 25
                },
                "tilt": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                  },
                  "direction": "clockwise",
                  "enable": false
                },
                "twinkle": {
                  "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                  },
                  "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                  }
                },
                "wobble": {
                  "distance": 5,
                  "enable": false,
                  "speed": {
                    "angle": 50,
                    "move": 10
                  }
                },
                "orbit": {
                  "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "sync": false
                  },
                  "enable": false,
                  "opacity": 1,
                  "rotation": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 45
                  },
                  "width": 1
                },
                "links": {
                  "blink": false,
                  "color": {
                    "value": "#ffffff"
                  },
                  "consent": false,
                  "distance": 150,
                  "enable": false,
                  "frequency": 1,
                  "opacity": 0.4,
                  "shadow": {
                    "blur": 5,
                    "color": {
                      "value": "#000"
                    },
                    "enable": false
                  },
                  "triangles": {
                    "enable": false,
                    "frequency": 1
                  },
                  "width": 1,
                  "warp": false
                },
                "repulse": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "enabled": false,
                  "distance": 1,
                  "duration": 1,
                  "factor": 1,
                  "speed": 1
                }
              }
            }}
          />


    </div>
  )
}

export default Home