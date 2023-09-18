import React from 'react'
import Swal from 'sweetalert2'

const contact = () => {

  const sweetAlert = (e) => {
    Swal.fire({
      title: 'Mail sent successfully',
      icon: 'success',
      confirmButtonText: 'Close',
      confirmButtonClass: 'btn-primary'
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sweetAlert()
  }


  return (
    <div className="container-fluid bg-dark-gray">
      <section className='container py-6'>
        <div className="row text-light">
          <div className="col-12 col-md-6">
            <h2>Contact Us</h2>
            <p className='mt-5'>We are located at Medellín, Colombia</p>
            <p>Las palmas, street 32 # 90 - 30</p>
            <p>+57 321 9204829</p>

          </div>
          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit} className='mt-5 mt-md-0'>

              <div className="mb-3">
                <label for="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>

              <div className="mb-3">
                <label for="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" />
              </div>

              <div className="mb-3">
                <label for="textArea" className="form-label">Comments</label>
                <textarea className="form-control" id="textArea" style={{ height: "120px" }}></textarea>
              </div>

              <button type="submit" className="btn-primary mt-3">Button</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contact