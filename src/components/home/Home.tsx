import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Footer from './Footer'
import About from './About'
import Work from './Work'
import Benifits from './Benifits'
import Faq from './Faq'

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
        <About />
      </section>
      <section id="work" >
        <Work />
      </section>
      <section id="benefits" >
        <Benifits />
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
