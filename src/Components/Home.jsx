import React, { useState } from 'react'
import data from '../data';
import {BsArrowRight, BsThreeDots} from 'react-icons/bs';
import {IoIosHourglass} from 'react-icons/io';
import {LiaHourglassEndSolid} from 'react-icons/lia';
import {AiOutlineHeart} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BiBed,BiBath,BiCross} from 'react-icons/bi';
import {BsBuildings} from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Home() {
    const[city,setCity]=useState("newyork");
    const[count,setCount]=useState(6);
    const handleShowMore = () => {
        setCount(count + 3); 
      };
    
      const handleShowLess = () => {
        setCount(count - 3); 
      };
  return (
    <div className='md:m-20 bg-slate-200 flex flex-col gap-10 h-fit p-10 '>
        <div className='flex flex-col items-center flex-shrink'>
            <h1 className='font-bold text-2xl my-3'>Featured Listed Property</h1>
            <p>Real estate can be bought, sold, leased, or rented and can be a</p>
            <p>valuable investment oppurtunity, The value of real estate can be...</p>
        </div>
        <div className='flex justify-between flex-col md:flex-col lg:flex-row items-center mx-5 gap-10 md:gap-0'>
            <div className='flex gap-5  flex-col md:flex-col lg:flex-row'>
                <button className='bg-slate-300 rounded-full px-10 md:px-3 py-1 hover:bg-blue-600 hover:text-white' onClick={()=>setCity("newyork")}>New York</button>
                <button className='bg-slate-300 rounded-full px-3 py-1 hover:bg-blue-600 hover:text-white' onClick={()=>setCity("mumbai")}>Mumbai</button>
                <button className='bg-slate-300 rounded-full px-3 py-1 hover:bg-blue-600 hover:text-white' onClick={()=>setCity("paris")}>Paris</button>
                <button className='bg-slate-300 rounded-full px-3 py-1 hover:bg-blue-600 hover:text-white' onClick={()=>setCity("london")}>London</button>
            </div>
            <div>
                <button className='flex items-center gap-1 border-2 border-blue-300 rounded-full md:px-3 px-10 py-1 text-blue-600 font-semibold'>View All <BsArrowRight/></button>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {data &&
          data.hotels
            .filter((item) => item.city === city)
            .slice(0, count) // Display only the first `count` items
            .map((item) => (
                <Link to={`/property/${item.id}`} key={item.id}>
                <div  className='w-fit flex flex-col gap-4 bg-white shadow-xl rounded-md '>
                        <div className='relative'>
                            <img src={item.image} alt='hotel' className='w-fit h-60 object-cover rounded-lg' />
                            <div className='flex justify-between px-4 absolute top-2 w-full'>
                                <button className='bg-white text-blue-600 rounded-full px-2 font-semibold'>{item.for}</button>
                                <AiOutlineHeart color='blue' className='bg-white rounded-full p-2' size={30} />
                            </div>
                            <BsThreeDots className='absolute bottom-6 left-36' size={30} color="white" />
                            {item.popular ? <button className='bg-blue-600 text-white px-2 py-1 font-semibold shadow-xl rounded-r-lg absolute bottom-0'>Popular</button> : ""}
                        </div>
                        <p className='flex items-center gap-2 px-4 font-semibold text-slate-500'><GoLocation color='red' />{item.address}</p>
                        <h1 className='font-semibold text-10 px-4'>{item.name}</h1>
                        <div className='flex gap-6 px-8'>
                            <p><BsBuildings />3 Room</p>
                            <p><BiBed />4 Bed</p>
                            <p><BiBath />1 Bath</p>
                            <p><BiCross />732 sft</p>
                        </div>
                        <div className='flex justify-between items-center mb-4 px-2'>
                            <p><span className='font-bold text-blue-600 text-md'>${item.price}</span>/month</p>
                            <button className='border-2 border-blue-500 text-blue-700 rounded-full px-2 font-semibold py-1'>Read More</button>
                        </div>
                    </div>
                    </Link>
                    ))}
                </div>
                <div className='flex justify-center mt-4'>
                        {count < data.hotels.filter((item) => item.city === city).length && (
                            <button
                                className='flex items-center gap-1 border-2  rounded-full px-3 py-1 text-white bg-blue-700 font-semibold'
                                onClick={handleShowMore}
                            >
                                <IoIosHourglass />Show More
                            </button>
                        )}
                        {count > 6 && (
                            <button
                                className='flex items-center gap-1 bg-blue-600 border-blue-300 rounded-full px-3 text-white font-semibold ml-4'
                                onClick={handleShowLess}
                            >
                                <LiaHourglassEndSolid />Show Less
                            </button>
                        )}
                </div>
        </div>
  )
}

export default Home