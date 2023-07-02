import React from "react";
import Banner from "../../components/Banner";
import ContactInfo from "../../components/ContactInfo";
import Container from "../../components/Container";
import Bio from "../../components/Bio";
import Skills from "../../components/Skills";
import Project from "../../components/Project";
import Contact from "../../components/Contact";
import Comment from "../../components/Comment";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <ContactInfo></ContactInfo>
      <Container>
        <Bio></Bio>
        <Skills></Skills>
        <Project></Project>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Comment></Comment>
          <div id="contact">
            <Contact></Contact>
          </div>
        </div>
        <div className="text-center pt-10 pb-3">
          <p className="text-neutral-500">
            &copy; 2023 Jihad. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
