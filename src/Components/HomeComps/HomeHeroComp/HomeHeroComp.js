import React from "react";
import Styles from "./HomeHero.module.css";
import bgImg from "../../../assets/HomeImage/herobg.svg";
import { Container, Row, Col } from "react-bootstrap";
import rightImg from "../../../assets/HomeImage/catImg.svg";

const HomeHeroComp = () => {
  return (
    <>
      <div className={Styles.heroMain__Style}>
        {/* <img className={Styles.heroBgImg__Style} src={bgImg} alt="" /> */}
        <div className={Styles.hero_content__Style}>
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="order-md-1 order-2" md={6}>
                <h1 className="text-light pb-4">
                  Everything that you need for your pet.
                </h1>
                <h5 className="text-light">Get early access</h5>
                <form action="">
                  <input
                    style={{ width: "100%" }}
                    className={Styles.inputField__style}
                    type="text"
                    name=""
                    id=""
                    placeholder="name"
                  />
                  <div className="my-3">
                    <Row>
                      <Col>
                        {" "}
                        <input
                          className={Styles.inputField__style}
                          type="email"
                          name=""
                          id=""
                          placeholder="E-mail"
                        />
                      </Col>
                      <Col>
                        {" "}
                        <input
                          className={Styles.inputField__style}
                          type="text"
                          name=""
                          id=""
                          placeholder="Contact Number"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      style={{ borderRadius: "30px" }}
                      className="btn btn-primary"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </Col>
              <Col className="order-md-2 order-1" md={6}>
                <img className="img-fluid" src={rightImg} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomeHeroComp;
