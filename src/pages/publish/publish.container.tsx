import * as React from 'react';
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import Image from "../../common/Image/image.component";
import Rectangle from "../../assets/images/backgrounds/Rounded Rectangle white.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import BookLayer from "../../assets/images/icon-image/booklayers.png";
import BookMark from "../../assets/images/icon-image/bookmark.png";
import BookPencil from "../../assets/images/icon-image/bookpencil.png";
import Camera from "../../assets/images/icon-image/camera.png";
import OpenBook from "../../assets/images/icon-image/openbook.png";
import Papers from "../../assets/images/icon-image/papers.png";
import Radio from "../../assets/images/icon-image/radio.png";
import Screen from "../../assets/images/icon-image/screen.png";
import SocialMeida from "../../assets/images/icon-image/socialmedia.png";
import WorldWide from "../../assets/images/icon-image/worldwide.png";
import Youtube from "../../assets/images/icon-image/youtube.png";
import BBBRating from "../../assets/images/icon-image/bbb logo.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";


interface Props { }

const PublishContainer: React.FC<Props> = () => {

    React.useEffect(() => {
        document.title = "Stratton Press - Publish Your Book"
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="publish-1">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1><span>PUBLISHING</span> made accessible</h1>
                            <p>"Can I really get my book published"</p>

                            <p>Far aspiring authors, publishing a book seems daunting.
                                And  yes, such a concern is Understandable. It takes a whole
                                team to publish a book, after all. But before it gets into your
                                nerves, let us assure you that we can take that load off you.
                                We have a complete set of publishing services and a
                                publishing team that sets you up from book cover, to
                                distribution at Amazon, to radio interviews. So, just focus on
                                writing and finishing your beautiful story. Once you're ready,
                                we'll get you out there.</p>

                            <p>For the world to see.</p>

                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
            <div className="publish-2">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>Come on, take that leap of faith.</h1>
                        </div>
                        <div className="right">
                            <button>Check the possibilities.</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="publish-3">
                <div className="w-100">
                    <div className="container">
                        <div className="left">
                            <img src={BookMark} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={OpenBook} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={BookPencil} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={BookLayer} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={WorldWide} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={SocialMeida} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Radio} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Youtube} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Camera} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Screen} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <img src={Papers} alt="..." />
                        </div>
                        <div className="right">
                            <h1>Customized Cover Design</h1>
                            <p>
                                You have your manuscript ready but you have no idea how to design a
                                book cover. Don't worry, we got this. Stratton Press offers unlimited book
                                cover consultation to make sure the designer and you will collaboratively
                                create the artwork you envision for your book cover. You need not provide
                                for the images too, we got that COVERed (pun intended). Some of our
                                book covers have garnered awards, so you're in good hands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="publish-4">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>HOW IT <span>WORKS</span></h1>
                            <p>How the Publishing Process Comes Together</p>
                        </div>
                        <div className="right">
                            <Image src={Rectangle} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="publish-5">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <img src={BBBRating} alt="..." />
                        </div>
                        <div className="right">
                            <h3>May 5,2021</h3>
                            <p>
                                Stratton Press had a superb team that walked with me through the process of publishing my book. 
                                Jerry, Steve and Christine were very professional and did not sacrifice the quality for the sake 
                                of time. Jerry has been very patience and available whenever I had questions or concerns. Steve 
                                and Christine were equally helpful, and interacting with Dean has been very enriching. It has 
                                always been my prayer that I could develop a relationship with a publishing company that would 
                                see my potential and I believe Stratton Press is that company. At the time of my experience with 
                                Stratton Press, though the Country and World were experiencing unprecedented challenges in life, 
                                yet they continued to communicate and work with me. I highly recommended them to any serious author. Thanks a lot.
                            </p>
                            <span>Shanna E.</span>
                            <label>&lt;Showing Our 4 and 5 star Reviews&gt;</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactus">
                <div className="w-100">
                    <div className="flex">
                        <form className="learn-form">
                            <span className="head">
                                <h1>Want to Learn More?</h1>
                                <h3>Request Your Free Publishing Consultation Below</h3>
                                <label>Fill our form to learn more about publishing with Stratton Press</label>
                            </span>
                            <span className="form">
                                <div className="manus">
                                    <label>Do you have a minuscript that is ready to publish *</label>
                                    {/* <input type="text" placeholder="Yes, I am ready to publish today" name="manuscript"/> */}
                                    <select name="manuscript" id="cars">
                                        <option value="Selected">Yes, I am ready to publish today</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="fname">
                                    <label>First Name</label>
                                    <input type="text" name="First Name" />
                                </div>
                                <div className="lname">
                                    <label>Last Name</label>
                                    <input type="text" name="First Name" />
                                </div>
                                <div className="email">
                                    <label>E-mail Address</label>
                                    <input type="text" name="First Name" />
                                </div>
                                <div className="phone">
                                    <label>Phone</label>
                                    <input type="text" name="First Name" />
                                </div>
                                <div className="foot">
                                    <button>Request Free Consultation</button>
                                    <p className="privacy">
                                        By clicking “Request My Free Consultation”, you are providing
                                        your electronic signature, voluntarily authorizing Trafford
                                        Publishing and its affiliates to contact you using a manual
                                        or automated telephone dialing system and send you advertisement
                                        or telemarketing messages by email or text/SMS/MMS message to
                                        the address and phone number you have provided above. You are
                                        not required to agree to this in order to buy products or
                                        services from Trafford Publishing. You certify that you are
                                        over the age of eighteen (18). You’ll get up to ten (10) messages
                                        per month. Standard message and data rates may apply. Click here
                                        to view our <a href="javascript(0);">privacy policy</a>.
                                    </p>
                                </div>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
            <div className="channels-section">
                <div className="channel-header">
                    <p>AUTHORS' BOOKS ARE DISTRIBUTED IN THESE AMAZING CHANNELS</p>
                </div>
                <div className="channels-body">
                    <div className="amazon-kindle"><Image src={AmazonKindle} alt="..." /></div>
                    <div className="barnes-noble"><Image src={barnesNoble} alt="..." /></div>
                    <div className="chapters"><Image src={Chapters} alt="..." /></div>
                    <div className="indigo"><Image src={Indigo} alt="..." /></div>
                    <div className="ingram"><Image src={Ingram} alt="..." /></div>
                    <div className="lightning-source"><Image src={LightningSource} alt="..." /></div>
                </div>
            </div>
            <FooterComp />
        </div>
    )
}

export default PublishContainer;