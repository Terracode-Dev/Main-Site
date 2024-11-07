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
      <section id="services" className='px-5 xl:p-20' >
        <Services />
      </section>
      <section id="about "className='xl:p-20' >
        <Aboutus />
      </section>
      <section id="work" >
        <Work />
      </section>
      {/*<section id="benitits" >
        <Benifits />
      </section>*/}
      <section id="projects" className='xl:p-20' >
        <Projects />
      </section>
      <section id="faqs" className=' xl:p-20' >
        <Faq /> 
      </section>
      <section id="contact" >
       <Footer />
      </section>
    </div>
  )
}

export default Home
