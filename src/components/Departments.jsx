import React from 'react'




function Departments(props) {
    return (
        <>

            <div className="w1   h-48  rounded-2xl p-5 flex flex-col gap-y-3  justify-center items-center hover:border-b-2 hover:shadow-2xl hover:transition  ease-in-out delay-75  ">
                <img className=' w-36 h-18 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0B5WR7CVcbOVjRZXaSA2TaKZF7P70WI5ajA&usqp=CAU" alt='book' />
                <h1><b>{props.name}</b></h1> 
            </div>

            
            


        </>
    )
}

export default Departments
