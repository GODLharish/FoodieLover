import React from 'react'
import missionIMG from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import { MISSION } from '../constants'
import demo from "../assets/demo.mp4"


const Mission = () => {
  return (
    <section id='mission'>
        <div className=' container mx-auto text-center'>
            <h2 className=' mb-8 text-3xl lg:text-4xl'>Our Mission</h2>
            <div className=' relative flex items-center justify-center'>
                <video src="" className=' w-full rounded-3xl' autoPlay muted loop playsInline poster={missionIMG}><source src={demo} type='video/mp4' /></video>
                <div className=' absolute h-full w-full rounded-3xl bg-black/40'></div>
                <p className=' absolute max-w-lg tracking-tighter lg:text-3xl'>
                    {MISSION}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Mission