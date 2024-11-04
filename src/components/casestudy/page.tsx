import React from 'react'
import { Hero } from './hero'
import { Aboutproject } from './aboutproject'
import { Challange } from './challange'
import { Solutions } from './solutions'
import { Process } from './process'
import { Timeline } from './timeline'
import Reachout from './reachout'
import Footer2 from '../aboutus/footer'

export const Casestudy_page = () => {
  return (
    <div>
      <section id="hero" >
        <Hero />
      </section>
      <section id="services" >
        <Aboutproject />
      </section>
      <section id="about" >
        <Challange />
      </section>
      <section id="work" >
        <Solutions />
      </section>
      <section id="benitits" >
        <Process />
      </section>
      <section id="projects" >
        <Timeline />
      </section>
      <section id="faqs" >
        <Reachout /> 
      </section>
      <section id="contact" >
       <Footer2 />
      </section>
    </div>
  )
}
