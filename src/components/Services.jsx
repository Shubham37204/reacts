import React from 'react'
import Cards from './Cards'
import Data from './Data'
import Footer from './Footer'

const Services = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  Data.map((val, ind) => {
                    return <Cards
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Services