import React, { useEffect, useRef } from 'react'
import { testimonialPageStyles } from '../assets/DummyStyles'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import t5 from '../assets/t5.jpg'
import t4 from '../assets/t4.jpg'

const TestimonialPage = () => {

    const cards = [
        {
            id: 1,
            title: "“Elegance and Precision” — Neeraj G.",
            meta: "Nerraj G. • March 8, 2026",
            img: t1,
            excerpt:
                "I bought the Swarovski piece for myself, and it instantly became a staple. The way the crystals catch the light is stunning, and it keeps time flawlessly—perfect for both formal occasions and everyday use.",

        },
        {
            id: 2,
            title: "“Built Like a Tank” — Shilpa S.",
            meta: "Shilpa. • April 5, 2026",
            img: t2,
            excerpt: "I use my G-Shock everywhere—from workdays to workouts and weekend hikes—and it still looks untouched. The durability and battery backup are seriously impressive. For a hassle-free everyday watch, it’s hard to beat."
        },
        {
            id: 3,
            title: "“Sleek & Subtle” — Kanha M.",
            meta: "Kanha M • Jan 5, 2026",

            img: t5,
            excerpt: "A sleek dial, slim build, and quality strap create a polished minimalist look. Easy to style for both work and weekends—and it always earns compliments"
        },
        {
            id: 4,
            title: "“A Time Capsule” — Zex D.",
            meta: "Zex D • May 10, 2026",

            img: t4,
            excerpt: "Blending retro styling with a contemporary touch, the domed crystal and warm lume details give it unique character.It’s become a go- to conversation piece, while staying comfortable and solidly built"
        },
    ];

    const scroller = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const velocity = useRef(0);
    const lastX = useRef(0);
    const lastTime = useRef(0);
    const rafRef = useRef(null);

    const lerp = 0.1;
    const friction = 0.95;

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const animateMomentum = () => {
        const el = scroller.current;
        if (!el) return;

        velocity.current *= friction;
        el.scrollLeft += velocity.current * 20;

        if (Math.abs(velocity.current) > 0.1) {
            rafRef.current = requestAnimationFrame(animateMomentum);
        }
    };

    const onMouseDown = (e) => {
        const el = scroller.current;
        if (!el) return;

        isDown.current = true;
        startX.current = e.clientX - el.offsetLeft;
        scrollLeft.current = el.scrollLeft;

        velocity.current = 0;
        lastX.current = e.clientX;
        lastTime.current = performance.now();

        el.classList.add("cursor-grabbing");
    };

    const onMouseMove = (e) => {
        if (!isDown.current) return;

        const el = scroller.current;
        const x = e.clientX - el.offsetLeft;
        const walk = x - startX.current;

        el.scrollLeft = scrollLeft.current - walk;

        const now = performance.now();
        const dx = e.clientX - lastX.current;
        const dt = now - lastTime.current;

        velocity.current = dx / dt;

        lastX.current = e.clientX;
        lastTime.current = now;
    };

    const stopDragging = () => {
        if (!isDown.current) return;

        isDown.current = false;
        scroller.current.classList.remove("cursor-grabbing");

        animateMomentum();
    };

    // TOUCH SUPPORT
    const onTouchStart = (e) => {
        const el = scroller.current;

        isDown.current = true;
        startX.current = e.touches[0].clientX - el.offsetLeft;
        scrollLeft.current = el.scrollLeft;

        velocity.current = 0;
        lastX.current = e.touches[0].clientX;
        lastTime.current = performance.now();
    };

    const onTouchMove = (e) => {
        if (!isDown.current) return;

        const el = scroller.current;
        const x = e.touches[0].clientX - el.offsetLeft;
        const walk = x - startX.current;

        el.scrollLeft = scrollLeft.current - walk;

        const now = performance.now();
        const dx = e.touches[0].clientX - lastX.current;
        const dt = now - lastTime.current;

        velocity.current = dx / dt;

        lastX.current = e.touches[0].clientX;
        lastTime.current = now;
    };

    const onTouchEnd = () => {
        isDown.current = false;
        animateMomentum();
    };

    return (
        <section className={testimonialPageStyles.pageSection}>
            <div className={testimonialPageStyles.container}>
                <h2
                    className={testimonialPageStyles.title}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    WRIST JOURNAL
                </h2>

                <div
                    ref={scroller}
                    className={testimonialPageStyles.scroller}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    style={{
                        WebkitOverflowScrolling: "touch",
                        touchAction: "pan-y",
                        cursor: "grab"
                    }}
                >
                    {cards.map((c) => (
                        <article key={c.id} className={testimonialPageStyles.card}>
                            <div className={testimonialPageStyles.imageBlock}>
                                <img
                                    src={c.img}
                                    alt={c.title}
                                    className={testimonialPageStyles.image}
                                />


                            </div>
                            <div className={testimonialPageStyles.contentBlock}>
                                <div>
                                    <h3 className={testimonialPageStyles.cardTitle}>{c.title}</h3>
                                    <p className={testimonialPageStyles.cardMeta}>{c.meta}</p>
                                    <p className={testimonialPageStyles.cardExcerpt}>{c.excerpt}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <style>{` ${testimonialPageStyles.scrollbarHide}`}</style>
        </section>
    );
};

export default TestimonialPage;