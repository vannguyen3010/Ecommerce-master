import React from 'react';
import './index.scss';
import img1 from '../../../src/assets/about/1.jpg';
import img2 from '../../../src/assets/about/2.jpg';
import img3 from '../../../src/assets/about/3.jpg';

function About(props) {
    return (
        <div className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__container text-center">
                        <h1 className="about__title ">Quality, not quantity</h1>
                        <br />
                        <p className="about__slogan">
                            We have made quality our habit. It’s not something that we just strive for – we live by this
                            principle every day.
                        </p>
                    </div>
                    <div className="about__preview">
                        <div className="about__img">
                            <img src={img1} alt="img" />
                        </div>
                        <div className="about__img">
                            <img src={img2} alt="img2" />
                        </div>
                        <div className="about__img">
                            <img src={img3} alt="img3" />
                        </div>
                    </div>
                    <div className="about__container">
                        <p className=" about__letter">
                            Our mission is to provide a trusted and experienced online resource for the retail
                            community. We are committed to providing our members with a wide range of products and
                            services. This allows you to shop with confidence knowing you are shopping with a trusted
                            brand that knows and understands the marketplace. We do this by delivering a wide selection
                            of products and services that are tailored to fit your lifestyle. The company is founded by
                            Anna and Michael Hofer, who have a keen interest in children’s fashion. Their aim is to
                            provide the best possible shopping experience for children and their parents and to support
                            the companies that do. Anna and Michael are passionate about children’s fashion and the role
                            it plays in the lives of children. They believe that children can never grow up without
                            fashion, and that fashion should always be available for them. 'We love children’s clothing.
                            We believe that every child should have a wonderful wardrobe filled with clothes that will
                            make them feel good. We love that children love clothes, that they want to look good and
                            that they want to be in good clothes. We have created a fashion website where parents can
                            find their children’s clothing, so they can take care of their children’s clothing and enjoy
                            the good times.'
                        </p>
                        <p className="about__author">With love, Anna and Michael</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
