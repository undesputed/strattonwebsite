import * as React from 'react';
import {useHistory} from 'react-router-dom';
import ButtonComp from "../../common/Button/button.component";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import { UserCircle } from 'styled-icons/boxicons-regular';
import { QuoteAltLeft } from 'styled-icons/boxicons-solid';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import FooterComp from "../../common/Footer/footer.component";

import banner from "../../assets/images/backgrounds/banner-image.png";
import People from "../../assets/images/icon-image/people.png";
import Package from "../../assets/images/icon-image/pacakges.png";
import Ratings from "../../assets/images/icon-image/ratings.png";

import deception from "../../assets/images/backgrounds/100-YEARS-OF-DECEPTION_web.jpg";
import atlastians from "../../assets/images/backgrounds/ALASTIANS_WEB.jpg";
import blueberry from "../../assets/images/backgrounds/BLUEBERRY-DREAMS_web.jpg";
import dyingwell from "../../assets/images/backgrounds/DYING-WELL-PREPARED_WEB.jpg";
import erichoffer from "../../assets/images/backgrounds/ERIC-HOFFER-AWARD_WEB.jpg";
import BookExpoImage from '../../assets/images/backgrounds/Book Expo.png';
import BookExpoFair from '../../assets/images/backgrounds/BookExpoFair.png';
import AmazonKindle from "../../assets/images/logo/Amazon Kindle.png";
import barnesNoble from "../../assets/images/logo/barnes & noble.png";
import Chapters from "../../assets/images/logo/chapters.png";
import Indigo from "../../assets/images/logo/indigo.png";
import Ingram from "../../assets/images/logo/ingram.png";
import LightningSource from "../../assets/images/logo/lightning source.png";

import HalDavis from "../../assets/images/backgrounds/haldavis.png";
import Book1 from "../../assets/images/books/book1.png";
import Book2 from "../../assets/images/books/book2.png";

const ITEMS = [
    {
        img: deception,
        alt: 'Slide 1',
        href: "javascript:void(0)"
    },
    {
        img: atlastians,
        alt: 'Slide 2',
        href: "javascript:void(0)"
    },
    {
        img: blueberry,
        alt: 'Slide 3',
        href: "javascript:void(0)"
    },
    {
        img: dyingwell,
        alt: 'Slide 4',
        href: "javascript:void(0)"
    },
    {
        img: erichoffer,
        alt: 'Slide 5',
        href: "javascript:void(0)"
    }
]

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

const DashbaordContainer: React.FC = () => {

    const [details, setDetails] = React.useState<any>([]);
    const history = useHistory();

    const getUserGeolocationDetails = () => {
        alert(details);
    }

    const goToPublish = () => {
        history.push('/publish');
    }

    React.useEffect(() => {
        fetch('https://geolocation-db.com/json/2c7ba9a0-fcc9-11eb-80e0-2d180bc7db04')
            .then(response => response.json())
            .then(data => setDetails(data));

        document.title = "Stratton Press - Landing Page"
    }, []);
    
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
            <div className="banner-section">
                <div className="my-hero">
                    <div className="container-fluid tagline-section">
                        <div className="tagline-body">
                            <span className="tagline">
                                <label className="what">What's <br />Your&nbsp;</label>
                                <label className="story">Story?</label>
                            </span><br />
                            <span className="tagline-content">
                                Is there a story you wish to tell? Are there chapters you've
                                written but not knowing the next step? Is it the story of your
                                life, or the next step? Is it the story of your life, or of a
                                dreamy place, or a picture collection of your travels? Whatever
                                your story is, we'll help you launch towards the next step.
                                <br />
                                <br />
                                Be a published author and let the world know <span className="your-story">Your Story.</span>
                            </span>
                        </div>
                    </div>
                    <div className="container-fluid banner-image">
                        <Image src={banner} width="550" height="650" alt="..." />
                    </div>
                </div>
            </div>
            <div className="publishing-section">
                <div className="w-100">
                    <div className="left">
                        <h2><strong>How to Start</strong> </h2>
                        <span>Download our free publishing guide to learn about our self-publishing process and services.</span>
                    </div>
                    <div className="right">
                        <button onClick={() => goToPublish()}>Publish Now</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid learnmore">
                <div className="learnmore-section">
                    <div className="row about-us">
                        <div className="col">
                            <img src={People} className="aboutUse-img" alt="..." />
                            <label className="row">About Us</label>
                            <p className="align-middle">
                                We are and Author Services Provider committed towards helping
                                you publish your book. We offer publishing and marketing
                                services suited to your needs. We'll help you get published.
                                Plus, you reserve all the rights to your work!
                            </p>
                            <button type="button" className="btn btn-success">Learn More!</button>
                        </div>
                        <div className="col">
                            <img src={Package} className="packages-img" alt="..." />
                            <label className="">Our Publishing Packages</label>
                            <p className="align-middle">
                                Do you need someone to design your book cover? Do you need help in
                                copyediting? Does your book require illustrations? Do you want
                                your book available too, in e-book form? How about a movie
                                trailer?Whatever you need, we are one-stop provider of services
                                any author would dream about!
                            </p>
                            <button type="button" className="btn btn-warning">View Packages</button>
                        </div>
                        <div className="col">
                            <img src={Ratings} className="ratings-img" alt="..." />
                            <label className="">A- BBB Rating</label>
                            <p className="align-middle">
                                Better Business Reveiw(BBB) rates Stratton Press an A-, an
                                equivalent to 90-93.99%!. Like te rest of the world, Stratton
                                Press feels the effects of the pandemic. However, this does not
                                stop us from contiously aspiring to be better, transparent,
                                helpful and resopnsive. We'll be here throughout your journey!
                            </p>
                            <button type="button" className="btn btn-primary">What They Say</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Carousel controls={true} fade>
                {
                    ITEMS.map((items, i) => {
                        return (
                            <Carousel.Item key={i} interval={3000}>
                                <a className="thumbnail" href={items.href}>
                                    <Image
                                        src={items.img}
                                        alt={items.alt}
                                    />
                                </a>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel> */}
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={false}
                showDots={true}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-dashboard"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    ITEMS.map((items, i) => {
                        return(
                            <div>
                                <a href={items.href}>
                                    <img
                                        src={items.img}
                                        alt={items.alt}
                                    />
                                </a>
                            </div>
                        )
                    })
                }
            </Carousel>
            {/* spotlight here */}
            <section className="spotlight">
                <div className="w100">
                    <div className="author">
                        <Image src={HalDavis} alt="..." className="author-image"/>
                    </div>
                    <div className="temp"></div>
                    <div className="author-spot">
                        <div className="flex">
                            <div className="top">
                                <div className="flex-r">
                                    <div className="left">
                                        <h1>AUTHOR SPOTLIGHT : <span>HAL DAVIS</span></h1>
                                        <p>Hal Davis is a distinguished US Marine (Ret.) with a career that spanned twenty-two years. He became a Tennessee State Trooper, FBI Special Investigator, United States Secret Service Agent to two US presidents, and a Marine and Naval Criminal Investigator. He is the author of the books, From an Out House to the White House, and Beyond the Mountains and Across the Seas</p>
                                    </div>
                                    <div className="right">
                                        <img src={Book1} alt="book"/>
                                        <img src={Book2} alt="book"/>
                                        <button>Check out Hal's Website</button>
                                    </div>
                                </div>
                            </div>
                            <div className="buttom">
                                <div className="flex-r">
                                    <div className="temp-author"></div>
                                    <div className="left">
                                        <iframe src="https://www.youtube.com/embed/TuhAb-6AJ3Q" frameBorder="0"></iframe>
                                        <h2>This Week In America Radio Interview :</h2>
                                        <h1> From an Outhouse to the White House</h1>
                                        <button>Check Out the Full Interview</button>
                                    </div>
                                    <div className="right">
                                    
                                        <iframe src="https://www.youtube.com/embed/qNOpjGy5Us0" frameBorder="0"></iframe>
                                        <h2>Book Trailer :</h2>
                                        <h1>Beyond the Mountains and Across the Seas</h1>
                                        <button>Check Out the Interview About the Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of spotlight */}
            <div className="testimonials text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-light bg-light text-center">
                                {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                                <QuoteAltLeft size={45} className="card-img-top rounded-circle" aria-hidden="true" />
                                <div className="card-body blockquote">
                                    {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                                    <UserCircle size={65} color="gray" />
                                    <p className="card-text">Stratton Press has taken the rough road to publication and smoothed it out. As an author, I feel grateful to each and every member of their team. It's almost like being part of a family.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Jerry Crossley</cite></footer>
                                    <footer className="testimonials-book-title blockquote"><cite title="Source Title">The Seen and the Unseen</cite></footer>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card border-light bg-light text-center">
                                {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                                <QuoteAltLeft size={45} className="card-img-top rounded-circle" aria-hidden="true" />
                                <div className="card-body blockquote">
                                    {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                                    <UserCircle size={65} color="gray" />
                                    <p className="card-text">I learned more about my craft, and I was impressed that they market it in different countries. The staff were always friendly and willing to answer any questions I had.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Lilian White</cite></footer>
                                    <footer className="testimonials-book-title blockquote"><cite title="Source Title">Emmanuel</cite></footer>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card border-light bg-light text-center">
                                {/* <i className="fa fa-quote-left card-img-top rounded-circle" aria-hidden="true"></i> */}
                                <QuoteAltLeft size={45} className="card-img-top rounded-circle" aria-hidden="true" />
                                <div className="card-body blockquote">
                                    {/* <img src={userIcon} width="100" height="100" alt="..." /> */}
                                    <UserCircle size={65} color="gray" />
                                    <p className="card-text">Stratton Press not only took their time to walk me all the way but went further by providing the editing, publishing, and marketing side. I would recommend Stratton Press for being a good, caring publishing company and the best team of professionals I grew to love and admire.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Adelia Goncalves</cite></footer>
                                    <footer className="testimonials-book-title blockquote"><cite title="Source Title">The Seen and the Unseen</cite></footer>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bookexpo-section">
                <div className="bookexpo-rightsfair">
                    <div className="bookexpo-logo">
                        <img src={BookExpoImage} alt="..." />
                    </div>
                    <div className="bookexpo-content">
                        <h3>NEW YORK RIGHTS FAIR &amp; BOOK EXPO!</h3>
                        <p>Stratton Press joined the 2019 New York Rights Fair and Book Expo.
                            A big thank you to all the authors who visited our booth! Til the next one!
                        </p>
                    </div>
                </div>
                <div className="bookexpo-picture">
                    <img src={BookExpoFair} alt="..." />
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

export default DashbaordContainer;