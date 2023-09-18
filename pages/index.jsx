import { useState } from "react";
import Contact from "@/components/Contact";
import gallery from "@/json/gallery.json";
import FsLightbox from "fslightbox-react";

export default function Home() {

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
      <header className="container-fluid py-6 bg-dark-gray">
        <div className="container text-white mt-5">
          <h2>
            Unparalleled Craftsmanship <br />
            and Personalized Designs
          </h2>
          <h5 className="my-4">Unparalleled Craftsmanship and Personalized Designs</h5>
          <button className="btn-primary mb-4">Button</button>
          <h2 className="mb-2">Services</h2>
          <div className="row">
            <div className="col-12 col-md-4 my-2">
              <div className="serv-img"></div>
            </div>
            <div className="col-12 col-md-4 my-2">
              <div className="serv-img"></div>
            </div>
            <div className="col-12 col-md-4 my-2">
              <div className="serv-img"></div>
            </div>
          </div>
        </div>
      </header>

      {/* CLIENTS */}

      <section className="container text-center py-6 ">
        <h2 className="text-gold">Clients</h2>
        <p>Unparalleled Craftsmanship and Personalized Designs</p>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-3">
            <div className="client-ico mx-auto mb-3"></div>
            <h4>Name Of Client</h4>
          </div>
          <div className="col-12 col-sm-3">
            <div className="client-ico mx-auto mb-3"></div>
            <h4>Name Of Client</h4>
          </div>
          <div className="col-12 col-sm-3">
            <div className="client-ico mx-auto mb-3"></div>
            <h4>Name Of Client</h4>
          </div>
        </div>
      </section>

      {/* PROCESSES */}

      <section className="container-fluid bg-dark-gray py-6">
        <div className="container text-white text-center">
          <h2>Processes</h2>
          <div className="row my-5">
            <div className="col-12 col-sm-6 proc-cont1">
              <figure className="proc-img proc-img-1"></figure>
            </div>
            <div className="col-12 col-sm-6 proc-cont2 gap-4 mt-4 mt-sm-0 d-flex flex-column">
              <figure className="proc-img proc-img-2"></figure>
              <figure className="proc-img proc-img-2"></figure>
            </div>
          </div>
          <button className="btn-primary">Button</button>
        </div>
      </section>

      {/* PORTFOLIO */}

      <section className="container-fluid bg-light-gray py-6">
        <div className="container text-center">
          <h2 className="mb-2">Portfolio</h2>
          <p className="mb-4">Unparalleled Craftsmanship and Personalized Designs</p>
          <div className="row">
            <FsLightbox
              toggler={lightboxController.toggler}
              sources={
                gallery.slice(0, 6).map((img) => (img.src))
              }
              slide={lightboxController.slide}
            />

            {
              gallery.slice(0,6).map((img, i) => (
                <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <a className='portfolio-btn' onClick={() => openLightboxOnSlide(i + 1)}>
                    <figure className="portfolio-img">
                      <img src={img.src} alt="" />
                    </figure>
                  </a>

                </div>
              ))
            }
          </div>
        </div>
      </section>


      {/* CONTACT */}

      <Contact />



    </>
  )
}
