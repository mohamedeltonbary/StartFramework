import React from 'react'

const About = () => {
    return (
        <div>
            <div className="first-section  text-white">
                <h2 className="text-center my-5 text-uppercase itro-sec" >about component</h2>
                <div className="d-flex align-items-center justify-content-center my-4">
                    <div className=" border-top border-light mx-3" style={{ height: "4px", backgroundColor: "white",  width: "65px" }}></div>
                    <i className="fa-solid fa-star text-white"></i>
                    <div className=" border-top border-light mx-3" style={{ height: "4px", backgroundColor: "white",  width: "65px" }}></div>
                </div>

                <div className="container ">
                    <div className="row ">
                        <div className="col-md-6 mb-4 mt-2">
                            <p className="w-75 mx-auto text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-6 mb-4 mt-2">
                            <p className="w-75 mx-auto text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
