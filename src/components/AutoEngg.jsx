import React from 'react'
import VisionMission from './VisionMission'
import facultyData2 from '../components/Faculties';
import Faculties from '../components/Faculties'

function AutoEngg() {
  return (
    <div className='   h-[full]  flex justify-center items-center flex-col '>
      <h1 className='text-3xl font-sans font-bold'> <u> AUTOMOBILE ENGINEERING </u> </h1>
      <div className="flex gap-10 p-5 w-[1200px] h-[500px]">

        <div className=" ">
          <img src="https://www.mhssce.ac.in/images/department/Automobile/HOD.jpg" width='5000px' height="100px" alt="" />
          <div className='w-full flex justify-center items-center  flex-col bg-[#137a4b] text-[white] font-bold '>
            <p>Dr. Ashok Anandrao Dhale</p> <p>Head of Department  </p> </div>
        </div>

        <p>Automobile engineering is one of the oldest departments of MHSSCE and also in the Mumbai University established in 1985 with the aim of providing industry ready automobile engineers. In present time automotive industries are considered to be the back bone of manufacturing sector in India, which is also evident by India’ s aim to become hub of manufacturing of electric vehicles. In automobile engineering program the students learn from fundamental to advanced concept and their implementation in solving real world problem through quality and research based projects. 

Department of Automobile engineering is having well equipped laboratories where students implement the concepts they learned. We are having knowledgeable, dedicated and focused faculty members as well as lab assistant. In order to keep students updated with latest trends in technology, department organizes seminar, workshops for hands on training from industry expert.

Department is one of the most active members of SAEINDIA in western India section since 2002.The collegiate club organizes various activities under the banner of SAEINDIA for the enhancement of students knowledge . Students participate in various national and international competitions such as BAJA, FSAE-SUPRA, and EBIKE etc.

I wish all the students all the very best for their future journey and expect their valuable contribution for improving the quality of education by filling the gap between the institute and industry.</p>
      </div>
    

      
      <Faculties faculties2={facultyData2.faculties2} />
    

    </div>



  )
}

export default AutoEngg