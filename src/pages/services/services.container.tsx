import * as React from 'react';
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import FooterComp from "../../common/Footer/footer.component";
import Image from "../../common/Image/image.component";

import publishing from "../../assets/images/backgrounds/thinking.png";
import booktrailer from "../../assets/images/backgrounds/booktrailer.png";
import bookGroup from "../../assets/images/books/bookgroup.png";
import Rectangle from "../../assets/images/backgrounds/Rounded Rectangle.png";
import radioint from "../../assets/images/backgrounds/radioint.png";
import Website from "../../assets/images/backgrounds/websites.png";
import usreview from "../../assets/images/backgrounds/usreview.png";
import bookreview1 from "../../assets/images/books/book-review1.png";
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";

interface Props{}

const ServicesContainer:React.FC<Props> = () => {

    React.useEffect(() => {
        document.title = "Stratton Press - Packages & Services"
    }, [])

    return(
        <div className="services-section">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="service-1">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <Image src={bookGroup} alt="..." />
                        </div>
                        <div className="right">
                            <h1>CUSTOMIZED BOOK COVERS</h1>
                            <p>We take pride in creating book covers that mirror your book’s soul.  Our team of artists are of high calibre and award-winning.</p>
                            <button>See Samples</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-2">
                <div className="w-100">
                    <div className="container">
                        <div className="left">
                            
                        </div>
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    )
}

export default ServicesContainer;