import React from 'react'

const Portfolio = () => {
    return (
        <div>
            <div className="container py-4 ">
              <div className=" title-portfolio">
                  <h2 className="text-center my-3 text-uppercase intro-port" >portfolio component</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div className=" border-top border-dark mx-3 mb-3" style={{ height: "4px", backgroundColor: "black", width: "65px" }}></div>
                    <i className="fa-solid fa-star text-black  mb-3"></i>
                    <div className=" border-top border-black mx-3  mb-3" style={{ height: "4px", backgroundColor: "black", width: "65px" }}></div>
                </div>
              </div>
                <div className="row g-5">


                    <div className="col-md-4  ">
                        <div className="port-img position-relative">
                            <img src="/img/poert1.png" alt="portfolio 1" className="img-fluid w-100" />
                            <div className="overlay d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-2x text-white"></i>
                            </div>
                        </div>                    </div>
                    <div className="col-md-4 ">
                        <div className="port-img position-relative">
                            <img src="/img/port2.png" alt="portfolio 1" className="img-fluid w-100" />
                            <div className="overlay d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-2x text-white"></i>
                            </div>
                        </div>                    </div>
                    <div className="col-md-4 ">
                        <div className="port-img position-relative">
                            <img src="/img/port3.png" alt="portfolio 1" className="img-fluid w-100" />
                            <div className="overlay d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-2x text-white"></i>
                            </div>
                        </div>                    </div>

                    <div className="col-md-4  ">
                        <div className="port-img position-relative">
                            <img src="/img/poert1.png" alt="portfolio 1" className="img-fluid w-100" />
                            <div className="overlay d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-2x text-white"></i>
                            </div>
                        </div>                    </div>
                    <div className="col-md-4  ">
                        <div className="port-img position-relative">
                            <img src="/img/port2.png" alt="portfolio 1" className="img-fluid w-100" />
                            <div className="overlay d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-2x text-white"></i>
                            </div>
                        </div>                    </div>
                    <div className="col-md-4">
                        <div className="port-img position-relative">
                            <img src="/img/port3.png" alt="portfolio 1" className="img-fluid w-100" />
                            <div className="overlay d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-2x text-white"></i>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Portfolio
