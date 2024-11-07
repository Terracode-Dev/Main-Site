import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Footer from './Footer'
import Work from './Work'
import Faq from './Faq'

import Aboutus from './About'

const Home = () => {
  return (
    <div>
      <section id="hero" >
        <Hero />
      </section>
      <section id="services" >
        <Services />
      </section>
      <section id="about" >
        <Aboutus />
      </section>
      <section id="work" >
        <Work />
      </section>
      {/*<section id="benitits" >
        <Benifits />
      </section>*/}
      <section id="projects" >
        <Projects />
      </section>
      <section id="faqs" >
        <Faq /> 
      </section>
      <section id="contact" >
       <Footer />
      </section>
    </div>
  )
}

export default Home
