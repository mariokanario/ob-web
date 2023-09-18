import Contact from '@/components/Contact'
import React from 'react'

const processes = () => {
  return (
    <>

      {/* STEPS */}
      <div className="container-fluid bg-dark-gray py-6">
        <section className='container'>
          <div className="row text-light">
            <div className="col-12 col-md-6">

              <div className="d-flex">
                <h2 className='me-3 fs-2 fw-bolder text-gold'>1.</h2>
                <div>
                  <h2>Step</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nisi quasi cupiditate, odio ullam aut exercitationem libero temporibus quidem nulla cumque voluptatem rem accusantium sequi non? Cumque esse eius inventore.
                  </p>
                  <p>
                    Fugiat, similique quia blanditiis distinctio earum ipsam placeat fuga odit fugit est amet autem excepturi nesciunt? Ex, ullam aut veniam veritatis est omnis vero, dolorem perspiciatis quisquam aliquid, quo alias.
                  </p>
                  <button className="btn-primary mb-4">Button</button>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div>
                <div className="d-flex">
                  <h2 className='me-3  fw-bolder text-gold'>2.</h2>
                  <div>
                    <h2>Step</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit cupiditate totam cum, repellendus quos, consequatur, sit vel ullam temporibus reiciendis libero voluptatibus inventore pariatur rem omnis quaerat minima repellat!</p>
                    <button className="btn-primary mb-4">Button</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <h2 className='me-3  fw-bolder text-gold'>3.</h2>
                  <div>
                    <h2>Step</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit cupiditate totam cum, repellendus quos, consequatur, sit vel ullam temporibus reiciendis libero voluptatibus inventore pariatur rem omnis quaerat minima repellat!</p>
                    <button className="btn-primary mb-4">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FIRST STEP */}

      <div className="container-fluid bg-light-gray">
        <section className='container py-6'>
          <div className="d-flex">
            <h2 className='me-3'>1.</h2>
            <div>
              <h2>Step</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit cupiditate totam cum, repellendus quos, consequatur, sit vel ullam temporibus reiciendis libero voluptatibus inventore pariatur rem omnis quaerat minima repellat!</p>
              <div className="row">
                <div className="col-12 col-md-4 my-2">
                  <figure className="proc-img-page"></figure>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <figure className="proc-img-page"></figure>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <figure className="proc-img-page"></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECOND STEP */}

      <section className='container py-6'>
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6  ps-5">
            <figure className="proc-img-page"></figure>
            <figure className="proc-img-page"></figure>
            <figure className="proc-img-page"></figure>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex">
              <h2 className='me-3  fw-bolder text-gold'>2.</h2>
              <div>
                <h2 className='text-gold'>Step</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quos sunt iste commodi, animi ipsa fugit reprehenderit excepturi dolores voluptatibus quod illum dolorem. Consequatur at deserunt tenetur ipsa nisi laborum!
                </p>
                <p>
                  Est ratione modi officiis ad ut rem debitis vitae aspernatur natus facere, asperiores inventore, dolor maxime optio qui delectus iure beatae corporis nulla fuga consequuntur fugit commodi. Ipsa, ducimus. Vitae?
                </p>
                <p>
                  Illum sint, porro mollitia deleniti minima commodi, delectus minus odit molestiae voluptatum modi esse aspernatur quasi dolores temporibus voluptates, eaque enim at hic cumque quaerat. Corporis qui a culpa vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* THIRD STEP */}

      <div className="container-fluid bg-light-gray">
        <section className='container py-6'>
          <div className="d-flex">
            <h2 className='me-3'>3.</h2>
            <div>
              <h2>Step</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit cupiditate totam cum, repellendus quos, consequatur, sit vel ullam temporibus reiciendis libero voluptatibus inventore pariatur rem omnis quaerat minima repellat!</p>
              <div className="row">
                <div className="col-12 col-md-4 my-2">
                  <figure className="proc-img-page"></figure>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <figure className="proc-img-page"></figure>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <figure className="proc-img-page"></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <Contact />
    </>
  )
}

export default processes