import data from '../data';
import { useParams } from 'react-router-dom';

import {AiOutlineHeart} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BiBed,BiBath,BiCross} from 'react-icons/bi';
import {BsBuildings, BsThreeDots} from 'react-icons/bs';
function Hotel() {
    const params=useParams();
    const {id}=params;
  return (
    <div className='shadow-inner shadow-slate-300 md:m-10 p-10'>
        <h1 className='text-center font-bold text-xl my-10'>Property Data</h1>
        {data && data.hotels.filter((item)=>item.id==id).map((item)=>(
            <div key={item.id} className='flex flex-col md:flex-row justify-evenly'>
                <div className='relative w-fit'>
                    <img src={item.image} alt='hotel' className='w-fit h-60 object-cover rounded-lg' />
                    <div className='flex justify-between px-4 absolute top-2 w-full'>
                        <button className='bg-white text-blue-600 rounded-full px-2 font-semibold'>{item.for}</button>
                        <AiOutlineHeart color='blue' className='bg-white rounded-full p-2' size={30} />
                    </div>
                    <BsThreeDots className='absolute bottom-6 left-36' size={30} color="white" />
                    {item.popular ? <button className='bg-blue-600 text-white px-2 py-1 font-semibold shadow-xl rounded-r-lg absolute bottom-0'>Popular</button> : ""}
                </div>
                <div className='flex flex-col gap-8'>
                    <p className='flex items-center gap-2 px-4'><GoLocation color='red' />{item.address}</p>
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
            </div>
        ))}
    </div>
  )
}

export default Hotel