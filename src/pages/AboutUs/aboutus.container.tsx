import * as React from 'react';
import ButtonComp from "../../common/Button/button.component";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import banner from "../../assets/images/backgrounds/banner2.png";
import FooterComp from "../../common/Footer/footer.component";

interface Props{}

const AboutUs:React.FC<Props> = () => {
    return(
        <div className="AboutUs-Component">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="container-fluid aboutus-header">
                <div className="hero">
                        About Us
                </div>
            </div>
            <div className="aboutus-banner">
                <div className="container-fluid aboutus-tagline-section">
                    <div className="aboutus-banner-body">
                        <div className="container-fluid aboutus-image">
                            <Image src={banner} alt="Banner Image" width="550" height="650"/>
                        </div>
                        <div className="aboutus-tagline">
                            <span>
                                <label className="support">We Support You.</label>
                                <label className="celebrate">We Celebrate You.</label> 
                            </span>
                            <span className="aboutus-tagline-content">
                                <p>
                                    Many writers have dreamt to be authors. But not all writers get to fulfill
                                    this dream. We understand how difficult the road to Publishing can get.
                                    With thousands of manuscripts written everyday, not all get the chance to be 
                                    picked up by a publisher.
                                </p>
                                <p>
                                    Stratton Press Publishing is a supported self-publishing company. Our mission is
                                    to help you take the brave, first step.
                                </p>
                                <p>
                                    It can be a handwritten manuscript you have long shelved; allow us to take it into
                                    the next form. It can be a story so beautifully written; we can match it with an 
                                    equally beautiful cover that piques any reader's interest. You may be confident 
                                    with your plot's twist and turns, but would appreciate an extra set of eyes for
                                    copyediting.
                                </p>
                                <p>
                                    We can get you to interviews and book fairs. We can create for you, book trailers,
                                    your own website, even your own social media presence. Most importantly, we will have
                                    your book available in Amazon, Barnes and Noble, Ingram, etc - you know, the usual places.
                                    You will basically have a whole team to back you up!
                                </p>
                                <p>
                                    <label>We are here to support you.</label> To get you m ore space so that the world can see
                                    your story. And yes, should a traditional publisher discover the wonder that you truly are,
                                    we will be as joyful as you. Our mission is to get you through the door. And in each step 
                                    closer, we will celebrate You.
                                </p>
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp/>
        </div>
    )
}

export default AboutUs;