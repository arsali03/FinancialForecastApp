import React from "react";

const ServiceSection = () => {
  return (
    <section id="service" className="service_section layout_padding">
      <div className="service_container">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="/images/s1.png" alt="Currency Wallet" />
                </div>
                <div className="detail-box">
                  <h5>Currency Wallet</h5>
                  <p>
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="/images/s2.png" alt="Security Storage" />
                </div>
                <div className="detail-box">
                  <h5>Security Storage</h5>
                  <p>
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="/images/s3.png" alt="Expert Support" />
                </div>
                <div className="detail-box">
                  <h5>Expert Support</h5>
                  <p>
                    fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="/hizmetler">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
