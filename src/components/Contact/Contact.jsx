import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="info-contact ">
        <h2 className="text-center mt-3 text-uppercase itro-sec" >contact section</h2>
        <div className="d-flex align-items-center justify-content-center my-4">
          <div className=" border-top border-light mx-3" style={{ height: "4px", backgroundColor: "black", width: "65px" }}></div>
          <i className="fa-solid fa-star text-black"></i>
          <div className=" border-top border-light mx-3" style={{ height: "4px", backgroundColor: "black", width: "65px" }}></div>
        </div>

        <div className="container ">
          <div className="contact-form d-flex flex-column w-50 mx-auto my-3">
            <input type="text" className="form-control" placeholder="userName" />
            <input type="number" className="form-control" placeholder="userAge" />
            <input type="email" className="form-control" placeholder="userEmail" />
            <input type="password" className="form-control" placeholder="userPassword" />
            <button className="btnpm">Submit</button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Contact
