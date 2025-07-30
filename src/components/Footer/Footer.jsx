import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="end-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive <br />Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 text-white">
                            <h3>AROUND THE WEB</h3>
                            <div className="icon mt-3 d-flex justify-content-center">
                                <i className="fa-brands fa-facebook footer-icon mx-2"></i>
                                <i className="fa-brands fa-twitter footer-icon mx-2"></i>
                                <i className="fa-brands fa-linkedin footer-icon mx-2"></i>
                                <i className="fa-brands fa-dribbble footer-icon mx-2"></i>
                            </div>

                        </div>
                        <div className="col-md-4 text-white">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap <br /> theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="end-footer">
                <p className="text-center text-white">Copyright © Your Website 2021</p>
            </div>
        </div>
    )
}

export default Footer


