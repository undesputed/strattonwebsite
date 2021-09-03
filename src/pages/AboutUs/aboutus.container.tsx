import * as React from "react";
import ButtonComp from "../../common/Button/button.component";
import HeaderSection from "../../common/Navigation/header.component";
import Navigation from "../../common/Navigation/navigation.component";
import Image from "../../common/Image/image.component";
import banner from "../../assets/images/backgrounds/banner2.png";
import FooterComp from "../../common/Footer/footer.component";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


interface Props { }

const AboutUs: React.FC<Props> = () => {

    React.useEffect(() => {
        document.title = "Stratton Press - About Us";
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
        <div className="AboutUs-Component">
            <HeaderSection bgcolor="#043439" />
            <Navigation />
            <div className="container-fluid aboutus-header">
                <div className="hero">About Us</div>
            </div>
            <div className="aboutus-banner-section">
                <div className="col container-fluid aboutus-banner-image">
                    <Image src={banner} className="images" width="550" height="650" alt="..." />
                </div>
                <div className="col container-fluid aboutus-tagline-section">
                    <div className="aboutus-tagline-body">
                        <span className="aboutus-tagline align-items-center">
                            <label className="support">We Support You.</label>
                            <label className="celebrate">We Celebrate You.</label>
                        </span><br />
                        <span className="aboutus-tagline-content">
                            <p>Many writers have dreamt to be authors. But not all writers get to fulfill this dream. We understand how difficult the road to publishing can get. With thousands of manuscripts written everyday, not all get the chance to be picked up by a publisher.</p>

                            <p>Stratton Press Publishing is a supported self-publishing company. Our mission is help you take the brave, first steps. </p>

                            <p>It can be a handwritten manuscript you have long shelved; allow us to take it into the next form. It can be a story so beautifully written; we can match it with an equally beautiful cover that piques any reader’s interest. You may be confident with your plot’s twist and turns, but would appreciate an extra set of eyes for copyediting. </p>

                            <p>We can get you to interviews and book fairs. We can create for you, book trailers, your own website, even your own social media presence. Most importantly, we will have your book available in Amazon, Barnes and Noble, Ingram, etc -  you know, the usual places.  You will basically have a whole team to back you up!</p>

                            <p>We are here to support you. To get you more space so that the world can see your story. And yes, should a traditional publisher discover the wonder that you truly are, we will be as joyful as you. Our mission is to get you through the door. And in each step closer, we will celebrate You.</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="publishing-sect">
                <div className="bg-img">
                    <Image src={publishing} alt="..." />
                </div>
                <div className="text-container">
                    <h1>Publishing with <span>Stratton Press means YOU:</span></h1>
                    <ul>
                        <li>Retain ownership of your work.</li>
                        <li>Can expect to have amazing book covers!</li>
                        <li>Have an entire team to support you in copyediting and interior design.</li>
                        <li>Have your book available in paperback, hardback, and e-book formats.</li>
                        <li>Can have your book printed at 1 copy or more! And you won't go out of print.</li>
                        <li>Earn royalties for every sale.</li>
                        <li>Have online distribution channels worldwide!</li>
                    </ul>
                </div>
            </div>

            <div className="section-1">
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

            <div className="section-2">
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

            <div className="section-3">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>BOOK TRAILER</h1>
                            <p>What if we can add color to your story and basically bring your book to life? We will create beautiful trailers that show a glimpse of your story through images and sounds</p>
                            <button>See Samples</button>
                        </div>
                        <div className="right">
                            <Image src={booktrailer} alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-4">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <Image src={radioint} alt="..." />
                        </div>
                        <div className="right">
                            <h1>RADIO INTERVIEW</h1>
                            <p>Take the Wonderful opportunity to talk about your story,
                                your characters, your inspiration in a very insightful
                                interview with Ric Bratton in This Week in America.
                            </p>
                            <button>See Samples</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-5">
                <div className="w-100">
                    <div className="flex">
                        <div className="left">
                            <h1>YOUR OWN WEBSITE</h1>
                            <p>Do you want to have your own marketing took,
                                with your own content? A website customized
                                for you, will do just that. Put in your books,
                                your videos, testimonials, etc - with our
                                talented website creators.
                            </p>
                            <button>See Samples</button>
                        </div>
                        <div className="right">
                            <Image src={Website} alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bookreviews">
                <div className="w-100">
                    <div className="content">
                        <h1>BOOK REVIEWS</h1>
                        <img src={usreview} alt="..." />
                    </div>
                </div>
            </div>

            <div className="bookreviews-2">
                <div className="w-100">
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        ssr={true}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>The Saint James Conspiracy</h1>
                                    <span>by Jessica Murphy</span>
                                    <p>
                                        The alternating narrative structure keeps readers guessing
                                        because of unpredictable shifts, turns, and switches. The
                                        fusion of a modern thriller with the often controversial
                                        and highly debated Gnostic beliefs regarding Jesus Christ
                                        almost reminds one of Angels and Demons. Readers who enjoy
                                        historical fiction with a sprinkle of spiritual enlightening
                                        and those who thrive an action thrillers will likely enjoy this book.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>The Last Troubadour</h1>
                                    <span>by Eugene Scruggs</span>
                                    <p>
                                        Scruggs expertly combines facts derived from Coypeau's autobiography and features some of his poems and songs, filling in some historical gaps with fictional interludes or characters. The narrative voice is strong, often direct and authentic. The contrast isn't jarring, and the down-to-earth delivery is accessible to mainstream readers. Scruggs's lively writing is reflective of Coypeau's artistic sensibilities, providing a fair sense of the cultural milieu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>For All Eternity: A Story of Heaven</h1>
                                    <span>by J.C. Gottlieb</span>
                                    <p>
                                        As the mother narrates the story of her daughter, small details hold the telling together. As a struggle with the stages of grief, the story is convincingly told. In providing a model of her grieving process, Gottlieb insightfully creates a channel, enabling readers to mourn the loss of loved ones more imaginatively themselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>Bargain$, Budget$, Discount$, and Deal$; Eking Out in Brutal Times</h1>
                                    <span>by Brian M. Mich</span>
                                    <p>
                                        Mich, disavowing any special knowledge of economics, writes in a personable style that engages the reader and implies but does not preach his opinions. He gives sound, practical advice on issues ranging from managing credit card debt to avoiding sweets and buying cheaper "tag-less tea" while advocating for more ponderous strategies like universal healthcare in an equally fair but undeniably thought-provoking way. His glossary, accrued over a long period of dictionary study, puts specialized material in a recognizable, accessible format that will appeal to anyone trying to organize a budget and stay afloat in the current, often confusing, financial flow.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>Poems from the Edge</h1>
                                    <span>by Ginny Worley</span>
                                    <p>
                                        Throughout these pages, a strong theme is the poet's emphatic insistence for any reader who might be struggling with seemingly insurmountable circumstances to never give up. This is more than a book of poems. It can also be seen as an encouraging self-help guide and motivational testament directly from author to reader. Furthermore, Worley's work is a perfect example of the therapeutic healing nature that the writing process can and does provide for so many individuals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>The Nature of Good Government</h1>
                                    <span>by H. Doyle Smith</span>
                                    <p>
                                        Though books concerning government, politics, and economics can sometimes be hard to comprehend, Smith's use of analogies to explain these elements makes some of his more difficult subjects accessible to all readers. This drawing upon life experience, such as his interest in how people interact and his work as a certified public accountant, gives Smith his unique view of effective government. Those wishing to understand how government works, or how it should work, will find much to contemplate in this offering.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>Through the Rainy Season: Out of the Floods of Addiction</h1>
                                    <span>by Dylan Ward</span>
                                    <p>
                                        With vivid descriptions, Martinez paints another part of the world as exotic as he seeks to rid his body of poison. His story is relatable, hypnotic, and unique as he articulates the mental and physical anguish of addiction that is harrowing to witness. Readers are made richer by Martinez's experience in this compelling read.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>Shandy & Orion: Two Happy Guinea Pigs</h1>
                                    <span>by Kathy Rocus</span>
                                    <p>
                                        The images are professionally done—bright, colorful, and simple. This book was clearly written by an education specialist who knows what children can read, what they are interested in, and how to deliver it all. Every kindergarten, early elementary, and special education class should make shelf space for these adorable guinea pigs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>The Early Years: A Memoir</h1>
                                    <span>By Rachel G. Carrington</span>
                                    <p>
                                        An authentic depiction of a lifetime of experiences, this autobiography captures a range of emotions in its most unadulterated form, both of Carrington's formative years as well as the duality of the trying times and moments of jubilation in raising her own family. Undoubtedly, the author's strength lies in the ability to portray her truth succinctly that both sheds light on her life and immediately creates an instant connection and relatability with her audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="left">
                                    <img src={bookreview1} alt="..." />
                                </div>
                                <div className="right">
                                    <h1>A Team-Based Learning Guide for Faculty</h1>
                                    <span>by Dr. David Hawkins</span>
                                    <p>
                                        Utilizing graphs, others' work, and specific examples of this process, the book clearly outlines how TBL is a viable and pertinent way to teach in order for students to develop greater knowledge and further insights through higher learning techniques. It uses a helpful step-by-step approach that is easily followed and integrated. The book is well-written and features excellent examples that should prove useful to its target audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
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
                                    <input type="text" name="First Name"/>
                                </div>
                                <div className="lname">
                                    <label>Last Name</label>
                                    <input type="text" name="First Name"/>
                                </div>
                                <div className="email">
                                    <label>E-mail Address</label>
                                    <input type="text" name="First Name"/>
                                </div>
                                <div className="phone">
                                    <label>Phone</label>
                                    <input type="text" name="First Name"/>
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
    );
};

export default AboutUs;
