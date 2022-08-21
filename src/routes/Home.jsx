import React, { useState } from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import "./style/home.css";
import Nav from "./../components/Nav";
import { Helmet } from "react-helmet";
import Gallery from "./../components/Gallery";
import Music from "./../components/Music";
import Terminal from "./../components/Terminal";
import Document from "./../components/Document";

const Home = () => {
  const [gallery, setGa] = useState(false);
  const [music, setMu] = useState(false);
  const [document, setDo] = useState(false);
  const [terminal, setTe] = useState(false);
  return (
    <AnimatedRoutes>
      <Helmet title="TaeH | Home" />
      <section className="home-wrapper">
        <Nav
          gallery={gallery}
          music={music}
          document={document}
          terminal={terminal}
          setGa={setGa}
          setMu={setMu}
          setDo={setDo}
          setTe={setTe}
        />
        {gallery ? <Gallery /> : null}
        {music ? <Music /> : null}
        {document ? <Document /> : null}
        {terminal ? <Terminal /> : null}
      </section>
    </AnimatedRoutes>
  );
};

export default Home;
