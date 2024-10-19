import React from 'react'

const Skill = () => {
  return (
    <div id='skill' className='container mx-auto py-16 px-4 md:px-32'>
      {/* Section Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl md:text-6xl font-bold'>My Skills</h1>
        <hr className='w-24 border-t-4 border-accent mx-auto mt-4' />
      </div>

      {/* Skills and Description Section */}
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        {/* Skills Grid */}
        <div>
          <div className="grid grid-cols-2 gap-6 text-accent text-xl sm:text-2xl md:text-3xl">
            <div className="space-y-4">
              <div className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h2 className='text-center md:text-left'>Javascript</h2>
              </div>
              <div className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h2 className='text-center md:text-left'>Typescript</h2>
              </div>
              <div className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h2 className='text-center md:text-left'>Reactjs</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h2 className='text-center md:text-left'>HTML & CSS</h2>
              </div>
              <div className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h2 className='text-center md:text-left'>Nextjs</h2>
              </div>
              <div className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h2 className='text-center md:text-left'>Tailwind CSS</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className='text-3xl md:text-5xl text-center md:text-left'>
            Technologies I Work With
          </h2>
          <p className='text-gray-500 pt-4 text-center md:text-left'>
            I am proficient in web development technologies, including HTML, CSS, and JavaScript, which form the foundation of my front-end expertise. I specialize in building dynamic and responsive applications using modern frameworks like React and Next.js, ensuring seamless user experiences. My projects leverage the styling capabilities of Tailwind CSS and Bootstrap for clean, mobile-first designs. Additionally, I have a solid understanding of TypeScript, which enhances the robustness and scalability of my code.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
