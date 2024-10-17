import React from 'react'
import client1 from '../assets/images/user1.jpg'
import client2 from '../assets/images/user2.jpg'
import client3 from '../assets/images/user3.jpg'

const Clients = () => {

    const allClients = [
        {
            name: 'Sichu Jay',
            image: client1,
            text:'This travel agency made our trip seamless from start to finish. Their attention to detail and personalized recommendations were perfect. We couldn’t have asked for a better vacation!',
            location: 'Tokyo, Japan',
        },
        {
            name: 'Melly Smith',
            image: client2,
            text:'From booking to the final day of our trip, everything was smooth and stress-free. The team took care of all the logistics, allowing us to fully enjoy our holiday without any worries.',
            location: 'New York, USA',
        },
        {
            name: 'Morgan Will',
            image: client3,
            text:'The agency planned an unforgettable trip for us. Their expertise and helpful support throughout made it a truly enjoyable experience. We’ll definitely use their services again!',
            location: 'London, UK',
        },
    ]

  return (
    <div className='h-auto main-container w-[88%] m-auto'>
    <div className="text-center my-14 title-section">
        <h1 className="text-2xl font-bold tracking-wide font-subfont text-[#004170]">What Our Clients Say</h1>
    </div>

    <div className="grid grid-cols-1 gap-6 content-section sm:grid-cols-2 md:grid-cols-3">
        {allClients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg cursor-pointer all-services hover:bg-blue-100">
                <div className="p-2 image-section">
                    <img src={client.image} alt="clientpicture" className='object-cover mb-2 rounded-full w-28 h-28'/>   
                </div>
                
                <div className="flex flex-col items-center justify-center name ">
                    <h3 className="text-lg text-[#004170] font-subfont">{client.name}</h3>
                    <h5 className="mb-3 text-sm italic text-black font-subfont">{client.location}</h5>
                </div>

                <div className="flex flex-col items-center justify-center px-4 py-2 text-section">
                    <p className="text-[15px] text-gray-700 italic text-center">"{client.text}"</p>
                </div>
            </div>

            

        ))}
     </div>
   </div>
  )
}

export default Clients