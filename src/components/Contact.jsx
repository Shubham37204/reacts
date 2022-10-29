import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (<>
    <div className='my-5'>
      <h1 className='text-center'>
        Contact
      </h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-10 mx-auto">
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" required className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col">
                <input type="text" required className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="email" required className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput" >Email address</label>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" required className="form-label">Address</label>
              <input type="text" required className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" required className="form-label  mt-3">Address 2</label>
              <input type="text" required className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="row g-3 mt-3">
              <div className="col-sm-7">
                <input type="text" required className="form-control" placeholder="City" aria-label="City" />
              </div>
              <div className="col-sm">
                <input type="text" required className="form-control" placeholder="State" aria-label="State" />
              </div>
              <div className="col-sm">
                <input type="text" required className="form-control" placeholder="Zip" aria-label="Zip" />
              </div>
            </div>
            <fieldset className="row mt-3">
              <legend className="col-form-label  col-sm-2 pt-0">Gender</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                  <label className="form-check-label" required htmlFor="gridRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" required type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" required htmlFor="gridRadios2">
                    Female
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="form-floating mt-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <div className="col-12">
              <button className="btn btn-primary mt-3" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Contact