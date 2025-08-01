
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TechFyusion Build transformed our digital presence completely. The attention to detail and modern approach exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "EcoTech Solutions",
      avatar: "SJ"
    },
    {
      quote: "Working with this team was incredible. They delivered a stunning e-commerce platform that boosted our sales by 300%.",
      name: "Michael Chen",
      role: "Founder",
      company: "Fashion Forward",
      avatar: "MC"
    },
    {
      quote: "The level of professionalism and technical expertise is unmatched. Our healthcare platform is now industry-leading.",
      name: "Dr. Emily Rodriguez",
      role: "CTO",
      company: "HealthPro Systems",
      avatar: "ER"
    },
    {
      quote: "From concept to launch, every step was handled with precision. The results speak for themselves - our users love the new platform.",
      name: "David Park",
      role: "Product Manager",
      company: "TechStart Inc",
      avatar: "DP"
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card glass-card">
                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-quote">
                    {testimonial.quote}
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="swiper-navigation">
          <button className="swiper-button-prev-custom glass-button">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next-custom glass-button">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="swiper-pagination-custom"></div>
      </div>
    </section>
  );
};

export default Testimonials;
