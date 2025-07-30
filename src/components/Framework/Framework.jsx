import React from 'react'

const Framework = () => {
    return (
        <div>
            <div className="info-frame">
                <div className="img-fram">
                    <img src="/img/photo.svg" alt="portfolio 1" className="img-fluid mb-4" style={{ width: "50%", maxWidth: "250px" }} ></img>
                </div>
                <h2 className="text-center mb-3 text-uppercase itro-sec" >start Framework</h2>
                <div className="d-flex align-items-center justify-content-center my-4">
                    <div className=" border-top border-light mx-3" style={{ height: "4px", backgroundColor: "white", width: "65px" }}></div>
                    <i className="fa-solid fa-star text-white"></i>
                    <div className=" border-top border-light mx-3" style={{ height: "4px", backgroundColor: "white", width: "65px" }}></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    )
}

export default Framework

