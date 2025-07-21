import React from 'react';

function Blog() {
  return (
    <div className="text-center bg-purple"> 

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs justify-content-center fixed-top bg-white" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active fs-5 me-2 me-md-4 text-dark" id="home-tab"
                                data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab"
                                aria-controls="home-tab-pane" aria-selected="true">Fashion
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-5 me-2 me-md-4 text-dark" id="profile-tab" data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane" type="button" role="tab"
                                aria-controls="profile-tab-pane" aria-selected="false">Promo</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-5 me-2 me-md-4 text-dark" id="contact-tab" data-bs-toggle="tab"
                                data-bs-target="#contact-tab-pane" type="button" role="tab"
                                aria-controls="contact-tab-pane" aria-selected="false">Lookbook</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                            aria-labelledby="home-tab" tabindex="0">
                            
                            <h1 className="fw-lighter mt-5 pt-3 fw-bolder text-danger titre"><span>Fashion</span></h1>
                            <div id="fashion" className="row mt-4 justify-content-center text-center mt-5">
                                <div className="col-md-3">
                                    <a href="#"><img src="images/enfant 1.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 text-dark">
                                        <h5 className="text-center text-dark">2021 STYLE GUIDE: THE BIGGEST FALL TRENDS
                                        </h5>
                                        <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                                            possimus animi quae
                                            quasi, unde excepturi!</p>
                                        <span className="fw-bold text-danger">$5.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/enfant 12.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center text-dark ">2021 STYLE GUIDE: THE BIGGEST FALL TRENDS
                                        </h5>
                                        <p className="fs-5 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Eum possimus animi quae
                                            quasi, unde excepturi!</p>
                                        <span className="fw-bold">$14.95</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a href="#"><img src="images/enfant 13.jpg" alt="" className="img-fluid"/></a>
                                    <div className="text-dark">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Nihil repellat dolores dolore itaque nostrum consequuntur.</p>
                                        <span className="fw-bold">$8.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/enfant 9.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Delectus deleniti, commodi fuga minus consectetur porro.</p>
                                        <span className="fw-bold">$12.95</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <a href="#"><img src="images/enfant 15.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing
                                            elit Rem excepturi facilis sunt amet quos culpa!</p>
                                        <span className="fw-bold">$12.95</span>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <a href="#"><img src="images/enfant 18.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <a href="#"><img src="images/enfant 14.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <h1 className="titre">Homme</h1>
                                <div className="col-md-4">
                                    <a href="#"><img src="images/homme 7.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <a href="#"><img src="images/homme 6.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <a href="#"><img src="images/homme 10.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/homme 4.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/homme 5.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a href="#"><img src="images/homme 1.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a href="#"><img src="images/homme 11.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/africains (14).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/africains (19).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/africains (23).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/africains (15).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/montre (11).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/montre (12).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/montre (13).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/montre (14).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                 <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (10).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                 <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (8).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                 <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (6).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                 <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (3).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>



                                {/* <!------------------------- femmes -------------------------> */}
                                <h1 className="titre">Femmes</h1>
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/femme (4).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/femme (10).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/femme 2 (1).jpeg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/femme 2 (1).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/femme 2 (12).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/femme 2 (10).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a href="#"><img src="images/femme 2 (11).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/femme 2 (13).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/africains (10).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/africains (16).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                   <div className="col-md-3">
                                    <a href="#"><img src="images/africains (11).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                   <div className="col-md-3">
                                    <a href="#"><img src="images/africains (9).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>


                                  <div className="col-md-3">
                                    <a href="#"><img src="images/africains (22).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/africains (18).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/africains (12).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/africains (26).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                 <div className="col-md-3">
                                    <a href="#"><img src="images/sac a mains (2).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a mains (3).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a mains (4).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a main 7.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>


                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a mains (6).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a mains (1).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a main 8.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/sac a mains (7).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>


                                 <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (4).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (5).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (7).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                                  <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (12).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3">
                                        <h5 className="text-center mt-4">5 FALL LOOKS I'M LOVING</h5>
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            Sunt rerum, magnam neque sed repellendus maiores.</p>
                                        <span className="fw-bold">$9.95</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* <!------------------------- promo -------------------------> */}
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                            tabindex="0">
                            {/* <!-- <p className="fw-lighter text-secondary py-2">Blog</p>  */}
                            <h1 className="fw-lighter mt-5 py-3 fw-bolder text-danger titre"><span>Promo</span></h1>
                            <div className="row">
                                <div id="promo" className="row row-cols-1 g-2">
                                    <div className="col-md-3 py-2">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-charles-parker-5859674.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$35</span><span className="ms-5 fw-bold">$20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-2">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img
                                                    src="images/pexels-krishna-kids-photography-2148372889-32902105.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$16</span><span className="ms-5 fw-bold">$13.10</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-2">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img
                                                    src="images/pexels-krishna-kids-photography-2148372889-32902109.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$25</span><span className="ms-5 fw-bold">$22</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-2">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img
                                                    src="images/pexels-krishna-kids-photography-2148372889-32902115.jpg"
                                                    className="card-img-top" alt="..."/>
                                            </a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$15</span><span className="ms-5 fw-bold">$12.90</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!------------------------- section two -------------------------> */}
                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"> <img src="images/pexels-ismaelabdalnabystudio-14578156.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$20</span><span className="ms-5 fw-bold">$15.20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-amina-filkins-5561468.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$30</span><span className="ms-5 fw-bold">$27</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-kseniachernaya-6334334.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2"> Clothing</h5>
                                                <span className="barer fw-bold text-danger">$23</span><span className="ms-5 fw-bold">$21.20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img
                                                    src="images/pexels-krishna-kids-photography-2148372889-32902203.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$25</span><span className="ms-5 fw-bold">$19.10</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!------------------------------------ section three ------------------------------------> */}
                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-charles-parker-5859674.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                          <div className="card-body">
                                                <h5 className="card-title py-2">Clothing</h5>
                                                <span className="barer fw-bold text-danger">$35</span><span className="ms-5 fw-bold">$20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-daniel-duarte-270529097-15668369.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <p>Lightweight and comfortable sneakers. Perfect for running and playing. Simple and cute style. Easy to put on. Your kids will love them.</p>
                                                <span className="barer fw-bold text-danger">$35</span><span className="ms-5 fw-bold">$20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-cottonbro-6191209.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <p>Lightweight and comfortable sneakers. Perfect for running and playing. Simple and cute style. Easy to put on. Your kids will love them.</p>
                                                <span className="barer fw-bold text-danger">$19.99</span><span className="ms-5 fw-bold">$17.10</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img
                                                    src="images/pexels-krishna-kids-photography-2148372889-32902175.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                         <div className="card-body">
                                                <h5 className="card-title py-2">Dress</h5>
                                                <span className="barer fw-bold text-danger">$35</span><span className="ms-5 fw-bold">$20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- section quatre --> */}
                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels-matthiasgroeneveld-3362689.jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <p>Lightweight and comfortable sneakers. Perfect for running and playing. Simple and cute style. Easy to put on. Your kids will love them.</p>
                                                <span className="barer fw-bold text-danger">$35</span><span className="ms-5 fw-bold">$20</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/chaussure enfant 1.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <p>Lightweight and comfortable sneakers. Perfect for running and playing. Simple and cute style. Easy to put on. Your kids will love them.</p>                                                <span className="barer fw-bold text-danger">$50</span><span className="ms-5 fw-bold">$47</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/Chaussure enfant 2.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                    <p>Lightweight and comfortable sneakers. Perfect for running and playing. Simple and cute style. Easy to put on. Your kids will love them.</p>                                                <span className="barer fw-bold text-danger">$43</span><span className="ms-5 fw-bold">$41</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/chaussure 3.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <p>Lightweight and comfortable sneakers. Perfect for running and playing. Simple and cute style. Easy to put on. Your kids will love them.</p>                                                <span className="barer fw-bold text-danger">$45</span><span className="ms-5 fw-bold">$43</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>



                                    {/* <!----------------------------------------- femme -----------------------------------------> */}

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (9).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$120</span><span className="ms-5 fw-bold">$115</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre 10.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$150</span><span className="ms-5 fw-bold">$140</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (11).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                               <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$200</span><span className="ms-5 fw-bold">$180</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (12).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-5">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme (1).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                <p className="fs-5 fw-bolder">Sleeveless embroidery set pink and white</p>
                                                <span className="barer fw-bold text-danger">$130.00</span><span className="ms-5 fw-bold">$115.00</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-5">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme (3).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                                <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                 <p className="fs-5">Sleeveless embroidery set green</p>
                                                <span className="barer fw-bold text-danger">$104</span><span className="ms-5 fw-bold">$97.00</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-5">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme (11).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                                <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                 <p className="fs-5">Sleeveless embroidery set gray</p>
                                                <span className="barer fw-bold text-danger">$90</span><span className="ms-5 fw-bold">$82.00</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-5">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme (16).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                               <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                    <p className="fs-5">Sleeveless embroidery set beige </p>
                                                <span className="barer fw-bold text-danger">$87</span><span className="ms-5 fw-bold">$75</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme (17).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                 <p className="fs-5">Sleeveless embroidery set white</p>
                                                <span className="barer fw-bold text-danger">$157</span><span className="ms-5 fw-bold">$156</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme (18).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                 <p className="fs-5">Sleeveless embroidery set white </p>
                                                <span className="barer fw-bold text-danger">$104</span><span className="ms-5 fw-bold">$100</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme 2 (1).jpeg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                 <p className="fs-5">Sleeveless embroidery set beige </p>
                                                <span className="barer fw-bold text-danger">$124.00</span><span className="ms-5 fw-bold">$121.00</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/femme 2 (1).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title">Set</h5>
                                                 <p className="fs-5">Sleeveless embroidery set beige </p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$150</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/Chaussure F 1.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$60</span><span className="ms-5 fw-bold">$55</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/Accessoire 2.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Accessory</h5>
                                                <span className="barer fw-bold text-danger">$81</span><span className="ms-5 fw-bold">$76</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/Accessoire 4.jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Accessory</h5>
                                                <span className="barer fw-bold text-danger">$24</span><span className="ms-5 fw-bold">$22</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/Sacs 1.jpg" className="card-img-top" alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Accessory</h5>
                                                <span className="barer fw-bold text-danger">$24</span><span className="ms-5 fw-bold">$22</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (1).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (2).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (3).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (4).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (5).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (6).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                              <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (7).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/montre (8).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Watch</h5>
                                                 <p>It shines without asking permission, just like you. Its golden steel attracts attention and commands respect.</p>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!----------------------------- Set -----------------------------> */}
                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels homme (1).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Set</h5>
                        
                                                <span className="barer fw-bold text-danger">$60</span><span className="ms-5 fw-bold">$55</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels homme (2).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Set</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels homme (4).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Set</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexels homme (5).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Set</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (1).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (5).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (3).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (4).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (6).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (7).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (8).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/pexel homme chaussures (10).jpg"
                                                    className="card-img-top" alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Shoes</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <!-------------------------------- Glasses --------------------------------> */}
                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (2).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (3).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (4).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (5).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (6).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (7).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (8).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (10).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (11).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunette (17).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                           <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (18).jpg" className="card-img-top"
                                                    alt="..."/></a>
                                            <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3 py-3">
                                        <div className="card shadow-lg p-3">
                                            <a href="#"><img src="images/lunettes (1).jpg" className="card-img-top"
                                                    alt="..." /></a>
                                             <div className="card-body">
                                                <h5 className="card-title py-2">Glasses</h5>
                                                <span className="barer fw-bold text-danger">$160</span><span className="ms-5 fw-bold">$139</span>
                                                <button type="button" className="btn btn-danger mt-2 w-100">Acheter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* -------------------------------------------- Lookbook ----------------------------------------------------- */}
                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                            tabindex="0">
                            <h1 className="fw-lighter py-2 mt-5 fw-bold text-danger titre"><span>Lookbook</span></h1>
                            <div id="lookbook" className="row mt-5 py-3">
                                <div className="col-md-3">
                                    <a href="#"><img src="images/lunettes (18).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"> <span className="fw-bold">$5.95</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/lunette (17).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$5.95</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/pexels homme (1).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$8.95</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <a href="#"><img src="images/accessoire 1.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"> <span className="fw-bold">$8.95</span></a>
                                    </div>
                                </div>

                                {/* <!-- deuxiemes section --> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/pexel homme chaussures (5).jpg" alt=""
                                            className="img-fluid"/></a>

                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$2.95</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/montre (2).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$2.95</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/Chaussure enfant 2.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$2.95</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4"> <a href="#"><img src="images/lunettes (2).jpg" alt=""
                                            className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"> <span className="fw-bold">$2.95</span>
                                        </a>
                                    </div>
                                </div>

                                {/* <!-- troisiemes parties --> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/enfant 2.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"> <span className="fw-bold">$2.95</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/homme 2.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"> <span className="fw-bold">$20</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/femme (1).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"> <span className="fw-bold">$9.95</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/Accessoire 3.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                {/* <!------------------- qutriemes parties -------------------> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/enfant 10.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/enfant 11.jpg" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/femme (3).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/FEMMES 1.jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                {/* <!-- cinquiemes parties --> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (19).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (1).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (14).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (22).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                {/* <!-- cinquiemes parties --> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (20).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (23).jpg" alt="" className="img-fluid" /></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (15).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (17).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                {/* <!-- siexiemes parties --> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (2).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (4).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (5).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/africains (6).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                {/* <!-- septiemes parties --> */}
                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/montre (1).jpg" alt="" className="img-fluid"/></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">
                                    <a href="#"><img src="images/pexel homme chaussures (1).jpg" alt=""
                                            className="img-fluid" /></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4">

                                    <a href="#"><img src="images/lunettes (2).jpg" alt="" className="img-fluid" /></a>
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>

                                <div className="col-md-3 py-4"> <a href="#"><img
                                            src="images/pexel homme chaussures (15).jpg" alt="" className="img-fluid"/></a>
<img src="" alt="" />
                                    <div className="py-3 shadow-lg">
                                        <a href="#"><span className="fw-bold">$10.2</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

  );
}


export default Blog;
