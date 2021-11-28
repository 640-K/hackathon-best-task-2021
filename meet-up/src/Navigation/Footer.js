import React from "react";

const Footer = () => (
    <footer id="footer" className="text-center text-lg-start " style={{color: "white", backgroundColor: "#742cc7"/*, marginTop: '100px'*/}}>
        <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <div>
                <a href="https://github.com/640-K" className="me-4 text-reset mr-3">
                    <i className="fab fa-github"/>
                </a>
            </div>
        </section>
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-hands-helping me-1" style={{color: "gray"}}/>
                            Meet-Up!
                        </h6>
                        <p>
                            Simple web application to help people diversify their daily lives
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p>
                            <i className="fas fa-envelope me-3"/> noreply@meet-up.ml
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div className="text-center p-4" >
            2021 &copy; Copyright 640K
        </div>
    </footer>
);

export default Footer;
