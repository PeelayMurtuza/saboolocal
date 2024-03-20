import React from 'react'

function Navbar() {
    return (
        <>
            <div className='bg-[#137a4b] h-10 flex justify-center items-center pl-80    '>
                <ul className='flex justify-center items-center gap-5 pl-40'>
                    <li><a href="#" className='text-[white]  ' > <pre>Mandatory Disclosure |</pre></a> </li>
                    <li><a href="#" className='text-[white]  ' > <pre>R&D |</pre></a> </li>
                    <li><a href="#" className='text-[white]  ' > <pre>IEEE |</pre> </a> </li>
                    <li><a href="#" className='text-[white]  ' > <pre>Library |</pre></a> </li>
                    <li><a href="#" className='text-[white]  ' > <pre>Gallery |</pre></a> </li>
                    <li><a href="#" className='text-[white]  ' > <pre>Importants links |</pre></a> </li>
                    <li><a href="#" className='text-[white]  ' > <pre>Contact Us </pre></a> </li>

                </ul>

            </div>

            <div className=" flex bg-white justify-center items-center">
                <div className="  bg-white flex justify-between items-center w-[1000px] h-44  ">
                    <div className="">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>

                    <div className="  flex w-80 gap-5 ">

                        <div className=" ">
                            <p>	MAIL US</p>
                            <p><b>aimhssce@mhssce.ac.in </b></p>
                            <p><b>mhssce@yahoo.in</b></p>
                        </div>

                        <div className="">
                            <p> CALL US</p>
                            <p> <b>  +91223012922  </b></p>

                        </div>

                    </div>
                </div>
            </div>
            <div className=" flex justify-center items-center bg-[#cae7f9] h-10">
                <div className="w-[70%] text-xl">
                    <marquee behavior="" direction="left" className=' text-[#137a4b]' >Rabbi Zidni 'Ilma. : ربِّ زِدْنِي عِلْماً - "My lord, increase me in knowledge" [20:119].</marquee>
                </div>
            </div>
            <div className="bg-purple-950 h-12 text-white flex justify-center items-center">

            <ul className='flex gap-5  '>
                <li><a href=""> Home </a></li>
                <li><a href=""> Institute </a></li>
                <li><a href=""> admission </a></li>
                <li><a href=""> Examination </a></li>
                <li><a href=""> Departments </a></li>
                <li><a href=""> training and placement </a></li>
                <li><a href=""> NAAC </a></li>
                <li><a href=""> EDC </a></li>
                <li><a href=""> online fee payment </a></li>
                <li><a href=""> life @ mhssce </a></li>
                <li><a href="">Alumni </a></li>
                <li><a href=""> NBA </a></li>
            </ul>
                
            </div>

        </>
    )
}

export default Navbar