import React from 'react'
import BannerHome from '../components/BannerHome'
import CategoriesHome from '../components/CategoriesHome'
import ComingSoonWatchesPages from '../components/ComingSoonWatchesPages'
import FashionPage from '../components/FashionPage'
import TestimonialPage from '../components/TestimonialPage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <BannerHome />
        <CategoriesHome />
        <ComingSoonWatchesPages />
        <FashionPage />
        <TestimonialPage />
        <Footer />
    </div>
  )
}

export default Home