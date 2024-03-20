import Navbar from './components/Navbar'
import Body from './components/Body'
import Departments from './components/Departments'
import Footer from './components/Footer'

import React from 'react'

function App() {
  return (
    <>
      <Navbar />
      <Body />

      <div className="bg-[#f7f8fa] flex flex-col justify-center items-center ">
        <h1 className='text-2xl pt-1'> <b> Our <span>Departments</span> </b></h1>


        <div className="  w-full flex justify-center items-center h-screen flex-col gap-5  ">
          <div className="flex gap-5">
            <Departments name="Automobile Engineering" />
            <Departments name="Civil Engineering" />
            <Departments name="Computer Engineering" />
            <Departments name="Electronics Engineering" />
          </div>

          <div className="flex gap-5 ">
            <Departments name="Extc " />
            <Departments name=" Iformation technology" />
            <Departments name="Mechanical Engineering" />
            <Departments name="CSE [AIML] Engineering" />
          </div>

          <div className="flex gap-5 ">
            <Departments name="IoT Engineering" />
            <Departments name="Basic Humanity and Science " />
          </div>

        </div>

      </div>
      <Footer/>

    </>
  )
}

export default App