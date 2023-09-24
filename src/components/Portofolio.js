import React from 'react'


import Projects from '../components/Projects'
const Portofolio = () => {
  return (
    <section id='portofolio' className='section bg-primary min-h-[1440px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-portfolio relative 
                before:absolute before:opacity-40
                before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                    My latest work
                </h2>
                <p className='subtitle'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolorum
                    beate , est consequatur vero quisquam vitae ipsa Ex corporis sapiente eos.
                </p>
            </div>
            <Projects />
        </div>

    </section>
  )
}

export default Portofolio
