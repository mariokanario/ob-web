import React from 'react'

const Contact = () => {

    return (
        <section className="container-fluid bg-dark-gray py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-white">
                        <h2>Contact Us</h2>
                        <p>We are located at Medellin, Colombia</p>
                        <p>Las palmas, street 32 # 90 - 30</p>
                        <p>+57 321 9204829</p>
                        <button className="btn-primary">Button</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="googlemap bg-light-gray mt-4 mt-md-0"></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact