import React from 'react'
import { footerStyles } from '../assets/DummyStyles'
import { ChevronRight, Clock, Heart,  Mail, MapPin, Phone, } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.topBorder}>
                <div className={footerStyles.patternOverlay}>
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="watchPattern"
                                x="0"
                                y="0"
                                width="100"
                                height="100"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="48"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="30"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="20"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                />
                            </pattern>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="url(#watchPattern)"
                        />
                    </svg>
                </div>

            </div>
            <div className={footerStyles.mainContainer}>
                <div className={footerStyles.newsletterSection}>
                    <div className={footerStyles.newsletterContent}>
                        <h3 className={footerStyles.newsletterTitle}>Timeless Elegance, delivered</h3>
                        <p className={footerStyles.newsletterText}>Sign up for our newsletter to receive exclusive offers, latest collections, and curated styling insights</p>

                        <div className={footerStyles.formContainer}>
                            <input type="email" placeholder='Enter your email' className={footerStyles.emailInput} />
                            <button className={footerStyles.subscribeButton}>Subscribe</button>
                        </div>
                    </div>
                </div>
                {/* footer sec */}
                <div className={footerStyles.mainGrid}>
                    <div className={footerStyles.brandSection}>
                        <div className={footerStyles.brandContainer}>
                            <div className={footerStyles.brandIconContainer}>
                                <div className={footerStyles.brandIconPing}></div>
                                <Clock className={footerStyles.brandIcon} />
                            </div>
                            <span className={footerStyles.brandName}>BePremium</span>
                        </div>
                        <p className={footerStyles.brandDescription}>Built with precision, defined by elegance—crafted for those who value the finer details.
                        </p>

                        <div className={footerStyles.socialIconsContainer}>
                            {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                                <a href="#" key={index} className={footerStyles.socialIcon}>
                                    <Icon className={footerStyles.socialIconInner} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* quick links */}
                    <div>
                        <h1 className={footerStyles.sectionHeading}>
                            <ChevronRight className={footerStyles.sectionIcon} />
                            Explore
                        </h1>

                        <ul className={footerStyles.linksList}>
                            {[
                                { label: "Collections", href: "/watches" },
                                { label: "New Arrivals", href: "/watches" },
                                { label: "Best Sellers", href: "/watches" },
                                { label: "Limited Editions", href: "/watches" },
                                { label: "Our Story", href: "/watches" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className={footerStyles.linkItem}>
                                        <ChevronRight className={footerStyles.linkIcon} />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* customer support */}
                    <div>
                        <h3 className={footerStyles.sectionHeading}>
                            <ChevronRight className={footerStyles.sectionIcon} />
                            Support
                        </h3>
                        <ul className={footerStyles.linksList}>
                            {[
                                "Contact Us",
                                "Shipping & Returns",
                                "Product Care",
                                "Warranty",
                                "FAQ",
                            ].map((item) => (
                                <li key={item}>
                                    <Link to="/contact" className={footerStyles.supportLink}>
                                        <ChevronRight className={footerStyles.linkIcon} />
                                        {item}
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h3 className={footerStyles.sectionHeading}>
                            <ChevronRight className={footerStyles.sectionIcon} />
                            Connect
                        </h3>
                        <ul className={footerStyles.contactList}>
                            <li className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconContainer}>
                                    <MapPin className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>
                                    123 Himachal Pradesh, kangra, Switzerland
                                </span>
                            </li>
                            <li className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconContainer}>
                                    <Phone className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>
                                    +41 22 345 6789
                                </span>
                            </li>
                            <li className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconContainer}>
                                    <Mail className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>
                                    jashanchoudhary430@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>




                </div>
                {/* bottom sec */}
                <div className={footerStyles.bottomSection}>
                    <p className={footerStyles.copyright}>
                        &copy; {new Date().getFullYear()} BePremuim {" "}
                        <Heart className={footerStyles.heartIcon} /> in India
                    </p>

                    <div className='flex flex-wrap justify-center gap-2'>
                        <p className={footerStyles.designerLink}>Designed by {" "}
                            <a href="https://www.instagram.com/jashanchoudhary8/" target='_blank' rel='noopener noreferrer' className={footerStyles.linkHover}>BePremium</a>
                        </p>
                    </div>
                </div>
            </div>
            <style>{footerStyles.mediaQueries}</style>
        </footer>
    )
}

export default Footer