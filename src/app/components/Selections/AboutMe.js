import React from 'react'

const AboutMe = () => {
  return (
    <section className='flex justify-between border-2 bg-slate-500/50 my-12 py-6'>
    <div className='h-auto w-3/5' id='aboutme'> 
      <p className='pt-4'>
      Though it has long been a dream of mine to go into software development, it took me a little while to truly chase after that dream in earnest. This portfolio represents the earliest iterations of my skillset in many ways, yet I am quite proud of my work so far and it is a joy to share it.
      </p>
      <p className='pt-4'>
      Most recently, my career centered around speciality cheeses in a high volume retail setting. While challenging work throughout the holidays and the COVID19 pandemic particularly, I find those experiences have helped inform my considerations of the end user of my software in very practical ways.
      </p>
      <p className='pt-4'>
      I am very eager to continue learning, and I find I thrive in a collaborative environment in which I can ask questions, reach out for perspective and context, and acknowledge my errors in a proactive way.

      Please don't hestitate to reach out if you are looking for a software developer for projects and opportunities large and small.
      </p>
      <span> GitHub and LinkedIn Icons here</span>
    </div>
    <div className='flex justify-center w-2/5 border-2'>
    This is a carousel of testimonials from LinkedIn
    </div>
    </section>
  )
}

export default AboutMe;