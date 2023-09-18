import Contact from '@/components/Contact'
import React, { useState } from 'react'
import FsLightbox from "fslightbox-react";
import gallery from "@/json/gallery.json";

const portfolio = () => {

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  return (
    <>
    <div className='container py-6'>
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit cupiditate totam cum, repellendus quos, consequatur, sit vel ullam temporibus reiciendis libero voluptatibus inventore pariatur rem omnis quaerat minima repellat!</p>
        
        <div className="row mt-5 row-gap-1">
          <div className="filters mb-3 d-flex justify-content-end gap-4">
            <select value="">
              <option name="" id="">Filtro 1</option>
              <option name="" id="">Filtro 2</option>
              <option name="" id="">Filtro 3</option>
            </select>
            <select value="">
              <option name="" id="">Filtro 1</option>
              <option name="" id="">Filtro 2</option>
              <option name="" id="">Filtro 3</option>
            </select>
          </div>
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={
              gallery.map((img) => (img.src))
            }
            slide={lightboxController.slide}
          />

          {
            gallery.map( (img, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4">
                <a className='portfolio-btn' onClick={() => openLightboxOnSlide(i+1)}>
                <figure className="portfolio-img">
                  <img src={img.src} alt="" />
                </figure>
                </a>
                
              </div>
            ))
          }

        </div>
    </div>
    
    <Contact/>
    </>
  )
}

export default portfolio