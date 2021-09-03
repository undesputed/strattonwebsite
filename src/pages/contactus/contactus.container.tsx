import * as React from 'react';
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import MainOffice from "../../assets/images/icon-image/mainoffice.png";
import BranchOffice from "../../assets/images/icon-image/branchoffice.png";
import Production from "../../assets/images/icon-image/production.png";
import Image from "../../common/Image/image.component";

import BBBRating from "../../assets/images/icon-image/bbb logo.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";
interface Props { }

const contactUs: React.FC<Props> = () => {

    React.useEffect(() => {
        document.title = "Stratton Press - Contact Us"
    }, [])

    return (
        <div className="contactus-section">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="contact-1">
                <div className="w-100">
                    <div className="contact-banner"></div>
                </div>
            </div>
            <div className="contact-2">
                <div className="w-100">
                    <div className="left">
                        <div className="my-card">
                            <div className="left">
                                <img src={MainOffice} alt=".."/>
                            </div>
                            <div className="right">
                                <h2>Delaware</h2>
                                <p>
                                    831 N Tatnall Street, Suite M #188, Wilmington, DE 19801
                                </p>
                            </div>
                        </div>
                        <div className="my-card">
                            <div className="left">
                                <img src={BranchOffice} alt=".."/>
                            </div>
                            <div className="right">
                                <h2>New York</h2>
                                <p>
                                    928 Hillside Blvd., New Hyde Park, New York, NY 11040
                                </p>
                            </div>
                        </div>
                        <div className="my-card">
                            <div className="left">
                                <img src={Production} alt=".."/>
                            </div>
                            <div className="right">
                                <h2>Philippines</h2>
                                <p>
                                    608, 6F, Jesa-ITC Bldg., Mango Avenue, Cebu City, 6000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        {/* <div className="my-card">
                            <form>
                                <h1>Contact Us</h1> 
                                <input type="text" placeholder="Enter Your Name"/>
                                <input type="text" placeholder="Enter a valid Email Address"/>
                                <input type="text" placeholder="Enter Contact Number"/>
                                <textarea value="sample" />
                            </form>
                        </div> */}
                    </div>
                </div>
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

export default contactUs;