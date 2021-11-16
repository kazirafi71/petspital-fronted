import React from "react";
import HomeHeroComp from "./HomeHeroComp/HomeHeroComp";
import { Container, Row, Col } from "react-bootstrap";
import HomeServiceList from "./HomeServiceList/HomeServiceList";
import { homeServiceListData } from "../../Data/HomeServiceListData";

const HomeComp = () => {
  return (
    <div>
      <HomeHeroComp />
      <Container>
        <div className="py-2">
          <h2 style={{ color: "#E61B43" }} className="py-2">
            Petspital কী ?
          </h2>
          <b>
            আপনার পোষা প্রাণির যেকোন সমস্যার সমাধান নিন আমাদের থেকে সরাসরি ভিডিও
            কল, অডিও কল এবং চ্যাটের মাধ্যমে চিকিৎসা সেবা | যেকোন সমস্যার জন্যে
            প্রশ্ন করুন, একজন বিশেষজ্ঞ ডাক্তার উত্তর দিবে বিনা মুল্যে | আপনার
            প্রয়োজনীয় মেডিসিন, খাবার এবং খেলনা পাবেন আমাদের কাছে | এছাড়াও রয়েছে
            আরো অনেক অনেক ফিচার্স |
          </b>
        </div>

        <Row className="row--md-cols-5 py-3">
          {homeServiceListData?.map((item, index) => {
            return (
              <Col className="py-2" key={index}>
                <HomeServiceList item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default HomeComp;
