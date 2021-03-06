import Aos from 'aos';
import { useEffect } from 'react';
import aboutimg from './img/2.jpg';


const About = () => {

    useEffect(()=>{
        Aos.init({duration:300});
    })
    return ( 
        <section className="about" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 text-center mb-5" data-aos="fade-down">
                    <h2>
                         About
                        </h2>
                    </div>
                    <div className="col-md-5 col-lg-5" data-aos="fade-right">
                        <div className="about-img">
                            <img src={aboutimg} alt="" width="70%" />
                        </div>
                    </div>

                    <div className="col-md-7 col-lg-7 text-center" data-aos="fade-up">
                        
                        <div className="about-words">
                            <p>Ingenous is a web developer who has helped many clients gained their online presence for the 
                                past few years. I value work ethics and deliver projects within allocated time . I love solving 
                                problems I encounter fron time to time. I love setting standard and cherish working with teams too 
                                although I am also a freelancer.
                            </p>
                        </div>
                    </div>
                </div>
                </div>

            
                </section>

                
     );
}
 
export default About;
