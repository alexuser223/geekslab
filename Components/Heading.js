'use client'
import React, { useState } from 'react'
import {SiGeeksforgeeks} from 'react-icons/si'
import {BsArrowUpRight} from 'react-icons/bs'
import {LuMenu} from 'react-icons/lu'
import Menu from './Menu'
import {RxCross1} from 'react-icons/rx'
import {AiOutlineSearch} from 'react-icons/ai'
import {ImLab} from 'react-icons/im'



const Heading = () => {

    const [showmenu,setshowmenu] = useState(false);
    const setshow = ()=>{
        if(showmenu == true){
            setshowmenu(false);
        }else{
            setshowmenu(true);
        }
    }



  return (
    <>
    <div className='w-full fixed top-0 h-16 bg-white border  flex items-center  justify-between  p-3'>

        <div className=' md:flex-row flex  items-center justify-center'>
            <SiGeeksforgeeks  className=' text-gray-400 text-4xl  text-center '/>
           <p className='md:mx-3 text-2xl text-black  '> Lab.js</p>
           <ImLab className=' text-gray-500 text-lg'/>
        </div>

        <div className=' hidden md:flex '>
            <p className='mx-2'>Home</p>
            <span className=' text-xs'><sup><BsArrowUpRight/></sup></span>
            <p className='mx-2'>Docs</p>
            <span className=' text-xs'><sup><BsArrowUpRight/></sup></span>


            <p className='mx-2'>Tutorial</p>
            <span className=' text-xs'><sup><BsArrowUpRight/></sup></span>


            <p className='mx-2'>Blogs</p>
            <span className=' text-xs'><sup><BsArrowUpRight/></sup></span>


            <p className='mx-2'>Community</p>
            <span className=' text-xs'><sup><BsArrowUpRight/></sup></span>


            
           
        </div>

        <div className='flex items-center justify-center'>
            <div className='md:m-2 flex justify-end'>
                <input  className='border w-2/3 md:w-64  border-slate-400 text-sm  rounded p-1 bg-gray-100' placeholder='Find & Learn' />
              
                
            </div>
            <div className='m-2'>
                <button className=' border-slate-300 border hidden md:block p-1 rounded-md'>feedback</button>
            </div>
            <div className='m-2 bg-black md:hidden text-white p-1 px-2 rounded' onClick={setshow}>
                { showmenu ? <RxCross1/> : <LuMenu/>}
            </div>
            <div className='m-2 hidden md:block bg-black text-white p-1 px-2 rounded-md' >
                Learn
            </div>
            

        </div>
      
    </div>

    {showmenu && (<Menu />)}


    
    </>
  )
}

export default Heading
