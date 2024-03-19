import React from 'react'


function Body() {
    return (
        <div>

            <div className=" overflow-scroll h-[500px] flex">
                <img src="https://www.mhssce.ac.in/images/slider/21.jpg" alt="" />
                <img src="https://www.mhssce.ac.in/images/slider/22.jpg" alt="" />
            </div>

            <div className=" bg-purple-900 flex justify-center items-center">

                <div className="bg-red-500 text-white pt-2 w-60 flex justify-center items-center "> <pre>Announcement :</pre></div>
                <div className=" w-[1000px] text-white ml-9 "><marquee behavior="" direction="left">Anjuman-I-Islam has signed a membership agreement with MIT</marquee></div>

            </div>

            <div className="wrapper h-screen  flex  justify-center items-center  ">

                <div className="w1  h-96 w-[30%] rounded-2xl p-5 flex flex-col gap-y-3">
                    <img className='w-full h-52 rounded-xl ' src="data:image/jpeg;base64,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" alt="lol" />
                    <p className='text-[blue]'>Founder</p>
                    <p>The Mohammed Haji Saboo Siddik Institute (A Muslim Minority Institution) owes its existence to the munificence of late Mohammed, son of Haji Saboo Siddik...</p>
                    <button className='bg-[#137a4b] w-32  rounded-full p-1 text-white flex justify-center items-center '>Read More</button>

                </div>

                <div className="w1  w-[30%] h-96 rounded-2xl p-5 flex flex-col gap-y-3">
                    <img className='w-full h-52 rounded-xl ' src="data:image/jpeg;base64,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" alt="lol" />
                    <p className=''>About <span className='text-blue-700'> MHSSCOE</span></p>
                    <p>The college was established with a definte mission to disseminate a value-oriented quality technical education among our youth to fulfil the increasing demand...</p>
                    <button className='bg-[#137a4b] w-32 rounded-full p-1 text-white flex justify-center items-center '>Read More</button>

                </div>

                <div className="w1  w-[30%] h-96 rounded-2xl p-5 flex flex-col gap-y-3">
                  <h3>Latest</h3>

                </div>


            </div>


        </div>

    )
}

export default Body