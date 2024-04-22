import React from 'react'
import VisionMission from './VisionMission'
import facultyData1 from '../components/Faculties';
import Faculties from '../components/Faculties'

function ComputerEng() {
  return (
    <div className='   h-[full]  flex justify-center items-center flex-col '>
      <h1 className='text-3xl font-sans font-bold'> <u> COMPUTER ENGINEERING </u> </h1>
      <div className="flex gap-10 p-5 w-[1200px] h-[500px]">

        <div className=" ">
          <img src="https://www.mhssce.ac.in/images/department/CMPN/HOD.jpg" width='5000px' height="100px" alt="" />
          <div className='w-full flex justify-center items-center  flex-col bg-[#137a4b] text-[white] font-bold '>
            <p>Dr. Zainab Pirani</p> <p>Head of Department  </p> </div>
        </div>

        <p>"Education is the most powerful weapon which you can use to change the world" – Nelson Mandela
          Over the last couple of decades mankind has achieved numerous successes and transformed the state of this world, travelled to the depths of the oceans and reached unimaginable heights in space exploration using Computers. This journey has been built on the shoulders of Computer Engineers who have used their educational concepts to implement softwares and systems that optimize the quality of life we live.
          The Computer Engineering Department of M. H. Saboo Siddik College of Engineering also plays its role in imparting education to brilliant minds who arrive with the promise of potential and leave as professionals ready to step out and change the world. The department houses teaching facilities and dedicated faculty that are well versed in preparing students both theoretically and practically in various streams and facets of Computer Engineering and Technology.
          We believe in wholesome grooming of the students by organizing technical workshops and competitive events such as Hackathons, Seminars and Lectures from eminent voices in the industry. To bridge the industry interface with academia the CSI student’s chapter of the department actively hosts the above events. Students not only participate in these events but also manage them thereby exposing them to teamwork and opportunities to lead. Our Annual TechFest AMBROSIA, allows students from our college to coalesce with students from other institutes and cultivates a community mindset.
          Our students have won several accolades at University, National and International levels.
          The placement record of the department has been consistently high, and we are proud to achieve growth in number of students placed year after year. Most of our alumni now work in reputed in organizations like Microsoft, Uniqlo, TCS, INFOSYS, Accenture, Capgemini etc.
          I congratulate all the students and the faculty members for their brilliant and original efforts. I wish them a great academic career filled with inspiring moments of knowledge and lot of fun.</p>
      </div>
  

      
      <Faculties faculties1={facultyData1.faculties1} />
    

    </div>



  )
}

export default ComputerEng