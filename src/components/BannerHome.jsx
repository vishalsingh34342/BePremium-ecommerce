import React, { useEffect, useRef } from 'react'
import { bannerHomeStyles } from '../assets/DummyStyles'
import Navbar from './Navbar'
import Video from '../assets/bgadvertisement.mp4'
import img1 from '../assets/img1.jpg'
import middleimg from '../assets/middleimg.jpg'
import rightimg from '../assets/rightimg.jpg'

const BannerHome = () => {
    const videoRef = useRef(null)
    useEffect(() => {
        const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduce-motion: reduce)").matches;

        if (reduceMotion && videoRef.current) {
            videoRef.current.pause()
            videoRef.current.removeAttribute("autoplay");
        }
    }, [])
    return (
        <div className={bannerHomeStyles.container}>
            <div className={bannerHomeStyles.navbarWrapper}>
                <Navbar />
            </div>

            {/* background video */}
            <div className={bannerHomeStyles.videoContainer}>
                <video ref={videoRef} className={bannerHomeStyles.video} autoPlay muted loop playsInline preload='metadata' role='presentation' > <source src={Video} type='video/mp4' />
                </video>

            </div>
            {/* content */}
            <div className={bannerHomeStyles.contentContainer}>
                <div className={bannerHomeStyles.h1Container}>
                    <h1 style={bannerHomeStyles.playfairFont} className={bannerHomeStyles.h1Text}>
                        <span className={bannerHomeStyles.h1SpanGray}>Every Tick Tells</span>
                        <span className={bannerHomeStyles.h1SpanYellow}> A Timeless Story</span>

                    </h1>
                    <p className={bannerHomeStyles.subtext}>A masterpiece of craftsmanship, designed for those who appreciate precision, elegance, and timeless sophistication.</p>


                </div>


                {/* cards section */}
                <div className={bannerHomeStyles.cardsContainer}>
                    <div className={bannerHomeStyles.grid}>
                        <div className={`${bannerHomeStyles.cardWrapper} ${bannerHomeStyles.leftCardTransform}`}>
                            <div className={`${bannerHomeStyles.cardBase} ${bannerHomeStyles.cardPadding}`}>
                                <img src={img1} alt="left logo" className={`${bannerHomeStyles.cardImage} ${bannerHomeStyles.leftCardImage}`} loading='lazy' />

                            </div>
                            <p className={`${bannerHomeStyles.cardLabel} ${bannerHomeStyles.cardLabelGray}`}>
                                TIMELESS ELEGANCE

                            </p>
                        </div>

                              {/* 2nd */}
                                   <div className={`${bannerHomeStyles.cardWrapper} ${bannerHomeStyles.rightCardTransform}`}>
                            <div className={`${bannerHomeStyles.cardMiddle} ${bannerHomeStyles.cardPadding}`}>
                                <img src={middleimg} alt="middle logo" className={`${bannerHomeStyles.cardImage} ${bannerHomeStyles.middleCardImage}`} loading='lazy' />

                            </div>
                            <p className={`${bannerHomeStyles.cardLabel} ${bannerHomeStyles.cardLabelYellow}`}>
                               Legacy Design

                            </p>
                        </div>

                        {/* 3rd */}
                              <div className={`${bannerHomeStyles.cardWrapper} ${bannerHomeStyles.leftCardTransform}`}>
                            <div className={`${bannerHomeStyles.cardBase} ${bannerHomeStyles.cardPadding}`}>
                                <img src={rightimg} alt="right logo" className={`${bannerHomeStyles.cardImage} ${bannerHomeStyles.rightCardImage}`} loading='lazy' />

                            </div>
                            <p className={`${bannerHomeStyles.cardLabel} ${bannerHomeStyles.cardLabelGray}`}>
                                Minimal Luxury

                            </p>
                        </div>
             

         



                  
                    </div>
                </div>

               

            </div>

        </div>
    )
}

export default BannerHome