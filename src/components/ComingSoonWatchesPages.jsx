import React from 'react'
import { comingSoonStyles } from '../assets/DummyStyles'
import comingsoon6 from '../assets/comingsoon6.jpg'
import comingsoon77 from '../assets/comingsoon77.jpg'
import comingsoon8 from '../assets/comingsoon8.jpg'
import comingsoon9 from '../assets/comingsoon9.jpg'
import comingsoon10 from '../assets/comingsoon10.jpg'

const ComingSoonWatchesPages = () => {
  const watches = [
    {
      id: 1,
      name: "ChronoGraph",
      price: 619000,
      imgUrl: comingsoon6
    },
    {
      id: 2,
      name: "ROLEX",
      price: 1069200,
      imgUrl: comingsoon77
    },
    {
      id: 3,
      name: "Lacoste",
      price: 3100000,
      imgUrl: comingsoon8
    },
    {
      id: 4,
      name: "Bvlgari Octo",
      price: 2450000,
      imgUrl: comingsoon9
    },
    {
      id: 5,
      name: "JACOB & CO",
      price: 3300000,
      imgUrl: comingsoon10,
    },
  ];
  return (
    <section className={comingSoonStyles.section}>
      <div className={comingSoonStyles.container}>
        <div className={comingSoonStyles.headerContainer}>
          <div className={comingSoonStyles.titleContainer}>
            <h2 className={comingSoonStyles.title} style={comingSoonStyles.titleStyle}>
              New Arrivals
            </h2>

            <p className={comingSoonStyles.subtitle}>Coming Soon</p>
          </div>
          <a href='/watches' className={comingSoonStyles.viewAllLink}>
            View All ➡️</a>

        </div>
        {/* watches */}
        <div className={comingSoonStyles.watchesContainer}>
          <div className={comingSoonStyles.watchesRow}>
            {watches.map((w) => (
              <figure key={w.id} className={comingSoonStyles.watchItem}>
                <div className={comingSoonStyles.imageContainer}>
                  <img src={w.imgUrl}
                    alt={w.name}
                    className={comingSoonStyles.image}
                    loading='lazy'
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22240%22></svg>";
                    }}
                  />

                </div>
                 
                 <figcaption className={comingSoonStyles.figcaption}>
                  <div className={comingSoonStyles.watchName}>{w.name}</div>
                  <div className={comingSoonStyles.price}>₹ {w.price}</div>
                 </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default ComingSoonWatchesPages