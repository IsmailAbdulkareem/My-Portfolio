import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
  {
    id: 0,
    title: "Countdown Timer",
    desc: "A customizable countdown timer with start, pause, reset, and clear functionalities, featuring a switchable light/dark theme for user convenience. Ideal for tracking time for events, tasks, or workouts.",
    img: "/project 1.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Happy Birthday Wisher",
    desc: "Make birthdays unforgettable with personalized wishes and creative designs to bring joy and smiles on their special day!",
    img: "/project 2.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Stay updated with real-time weather conditions tailored to your location, featuring a sleek interface and a light/dark theme toggle.",
    img: "/project 3.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <h1 className='text-4xl md:text-6xl font-bold underline text-center mb-10'>My Projects</h1>    
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
