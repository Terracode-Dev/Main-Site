import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Work from './Work'
import Faq from './Faq'

import Aboutus from './About'

const Home = () => {
  return (
    <div>
      <section id="hero" className='xl:min-h-screen' >
        <Hero />
      </section>
      <section id="services" className='' >
        <Services />
      </section>
      <section id="about"className='xl:p-20' >
        <Aboutus />
      </section>
      <section id="work" >
        <Work />
      </section>
      {/*<section id="benitits" >
        <Benifits />
      </section>*/}
      <section id="projects" className='' >
        <Projects />
      </section>
      <section id="faqs" className=' xl:p-20' >
        <Faq /> 
      </section>
    </div>
  )
}

export default Home
