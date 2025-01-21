
import AboutUs from "@/components/abput-components/aboutus";
import BigCompannies from "@/components/abput-components/companies";
import MeetTeam from "@/components/abput-components/meetTeam";
import Problem from "@/components/abput-components/problem";
import Work from "@/components/abput-components/work";
import Footer from "@/components/shop-components/footer";
import Header from "@/components/shop-components/header";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      <Footer />
    </>
  );
};

export default AboutPage;