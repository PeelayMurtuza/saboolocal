import React from 'react'
function Faculties() {
  const facultyData1 = {
    faculties1: [

      {
        id: 1,
        name: "John Doe",
        department: "Computer Engineering",
        position: "HOD",
        email: "johndoe@example.com",
        phone: "+1234567890",
        research_interests: ["Machine Learning", "Data Science"],
        photo: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        id: 2,
        name: "Jane Smith",
        department: "Computer Engineering",
        position: "Associate Professor",
        email: "janesmith@example.com",
        phone: "+1987654321",
        research_interests: ["Power Systems", "Renewable Energy"],
        photo: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      {
        id: 3,
        name: "Alice Johnson",
        department: "Computer Engineering",
        position: "Assistant Professor",
        email: "alicejohnson@example.com",
        phone: "+1122334455",
        research_interests: ["Algebra", "Number Theory"],
        photo: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      {
        id: 4,
        name: "Michael Brown",
        department: "Computer Engineering",
        position: "Professor",
        email: "michaelbrown@example.com",
        phone: "+1555123456",
        research_interests: ["Optical Communication", "Wireless Communication"],
        photo: "https://randomuser.me/api/portraits/men/4.jpg"
      },
      {
        id: 5,
        name: "Emily Rodriguez",
        department: "Computer Engineering",
        position: "Associate Professor",
        email: "emilyrodriguez@example.com",
        phone: "+1888765432",
        research_interests: ["Digital Signal Processing", "Embedded Systems"],
        photo: "https://randomuser.me/api/portraits/women/5.jpg"
      },
      {
        id: 6,
        name: "David Kim",
        department: "Computer Engineering",
        position: "Assistant Professor",
        email: "davidkim@example.com",
        phone: "+1999888777",
        research_interests: ["RF Engineering", "Microwave Engineering"],
        photo: "https://randomuser.me/api/portraits/men/6.jpg"
      },
      {
        id: 7,
        name: "Sarah Johnson",
        department: "Computer Engineering",
        position: "Professor",
        email: "sarahjohnson@example.com",
        phone: "+1234567890",
        research_interests: ["Artificial Intelligence", "Computer Vision"],
        photo: "https://randomuser.me/api/portraits/women/7.jpg"
      }
    ]}
    // const facultyData2 = {
    // faculties2: [
    //   {
    //     id: 1,
    //     name: "John Smith",
    //     department: "Automobile Engineering",
    //     position: "Professor",
    //     email: "johnsmith@example.com",
    //     phone: "+1234567890",
    //     research_interests: ["Vehicle Dynamics", "Automotive Electronics"],
    //     photo: "https://randomuser.me/api/portraits/men/1.jpg"
    //   },
    //   {
    //     id: 2,
    //     name: "Emily Johnson",
    //     department: "Automobile Engineering",
    //     position: "Associate Professor",
    //     email: "emilyjohnson@example.com",
    //     phone: "+1987654321",
    //     research_interests: ["Internal Combustion Engines", "Vehicle Safety"],
    //     photo: "https://randomuser.me/api/portraits/women/2.jpg"
    //   },
    //   {
    //     id: 3,
    //     name: "Michael Davis",
    //     department: "Automobile Engineering",
    //     position: "Assistant Professor",
    //     email: "michaeldavis@example.com",
    //     phone: "+1122334455",
    //     research_interests: ["Automotive Design", "Alternative Fuels"],
    //     photo: "https://randomuser.me/api/portraits/men/3.jpg"
    //   },
    //   {
    //     id: 4,
    //     name: "Sarah Brown",
    //     department: "Automobile Engineering",
    //     position: "Professor",
    //     email: "sarahbrown@example.com",
    //     phone: "+1555123456",
    //     research_interests: ["Vehicle Aerodynamics", "Electric Vehicles"],
    //     photo: "https://randomuser.me/api/portraits/women/4.jpg"
    //   },
    //   {
    //     id: 5,
    //     name: "Daniel Martinez",
    //     department: "Automobile Engineering",
    //     position: "Associate Professor",
    //     email: "danielmartinez@example.com",
    //     phone: "+1888765432",
    //     research_interests: ["Automotive Materials", "Hybrid Vehicles"],
    //     photo: "https://randomuser.me/api/portraits/men/5.jpg"
    //   },
    //   {
    //     id: 6,
    //     name: "Olivia Rodriguez",
    //     department: "Automobile Engineering",
    //     position: "Assistant Professor",
    //     email: "oliviarodriguez@example.com",
    //     phone: "+1999888777",
    //     research_interests: ["Vehicle Testing", "Automotive Systems Integration"],
    //     photo: "https://randomuser.me/api/portraits/women/6.jpg"
    //   },
    //   {
    //     id: 7,
    //     name: "David Kim",
    //     department: "Automobile Engineering",
    //     position: "Professor",
    //     email: "davidkim@example.com",
    //     phone: "+1231231234",
    //     research_interests: ["Automotive Software", "Autonomous Vehicles"],
    //     photo: "https://randomuser.me/api/portraits/men/7.jpg"
    //   }
    // ]
  // }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Faculty List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyData1.faculties1.map(faculty => (
          <div key={faculty.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
            <p className="text-gray-600 mb-2">{faculty.department}</p>
            <p className="text-gray-600 mb-2">{faculty.position}</p>
            <p className="text-gray-600 mb-2">{faculty.email}</p>
            <p className="text-gray-600 mb-2">{faculty.phone}</p>
            <div>
              <p className="font-semibold mb-1">Research Interests:</p>
              <ul className="list-disc list-inside">
                {faculty.research_interests.map((interest, index) => (
                  <li key={index} className="text-gray-600">{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default Faculties