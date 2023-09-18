import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import {BsArrowRight} from 'react-icons/bs'
const Home = () => {
  return (
    <>
      <div className='w-full mt-16 md:flex md:flex-row flex-col items-center  p-3 '>
        <div>


          <div className='border border-slate-600  rounded w-full  m-1  h-1/2 flex justify-center items-center flex-col p-4'>

            <h1 className='text-4xl font-extrabold intro text-center'> <span className='text-blue-500'>GeeksLab</span> the Structured Library</h1>
            <p className='text-center text-sm p-3  text-gray-600'>
              Used by some of the world's largest companies, <span className='text-black font-bold '>GeeksLab.js full-stack Web  </span>enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
            </p>

          </div>
          <div className='border w-full  items-center justify-between  border-slate-600 rounded m-1 h-52 grid grid-flow-col overflow-x-scroll '>

            <div className='h-2/4 flex flex-col items-center justify-center rounded-xl shadow-2xl shadow-orange-400 hover:scale-105  hover:shadow-orange-600 w-40 border mx-2 '>
              <div className='flex items-center'>
              <span className=' text-orange-600 text-4xl'> <AiFillHtml5 /> </span> 
              <div>

              <p>HTML5</p>
                <p className=' text-xs text-gray-400'>Core Concept</p>

              </div>
              </div>
              <div>
                {/* <p className=' text-xs text-gray-400'>Core Concept</p> */}
                <button className='text-xs flex bg-black items-center text-white p-1 rounded-md mt-2'>Learn Now <span><BsArrowRight/></span>  </button>
              </div>
            </div>



            <div className='h-2/4 flex flex-col items-center justify-center rounded-xl shadow-2xl   shadow-violet-400 hover:scale-105  hover:shadow-voilet-600 w-40  border mx-2 '>
              <div className='flex items-center'>
              <span className=' text-purple-700 text-4xl'> <AiFillHtml5 /> </span> 
              <div>

              <p>CSS</p>
                <p className=' text-xs text-gray-400'>Core Concept</p>

              </div>
              </div>
              <div>
                {/* <p className=' text-xs text-gray-400'>Core Concept</p> */}
                <button className='text-xs flex bg-black items-center text-white p-1 rounded-md mt-2'>Learn Now <span><BsArrowRight/></span>  </button>
              </div>
            </div>
            <div className='h-2/4 flex flex-col items-center justify-center rounded-xl shadow-2xl   shadow-violet-400 hover:scale-105  hover:shadow-voilet-600 w-40  border mx-2  '>
              <div className='flex items-center'>
              <span className=' text-purple-700 text-4xl'> <AiFillHtml5 /> </span> 
              <div>

              <p>CSS</p>
                <p className=' text-xs text-gray-400'>Core Concept</p>

              </div>
              </div>
              <div>
                {/* <p className=' text-xs text-gray-400'>Core Concept</p> */}
                <button className='text-xs flex bg-black items-center text-white p-1 rounded-md mt-2'>Learn Now <span><BsArrowRight/></span>  </button>
              </div>
            </div>
            <div className='h-2/4 flex flex-col items-center justify-center rounded-xl shadow-2xl   shadow-violet-400 hover:scale-105  hover:shadow-voilet-600 w-40  border mx-2 '>
              <div className='flex items-center'>
              <span className=' text-purple-700 text-4xl'> <AiFillHtml5 /> </span> 
              <div>

              <p>CSS</p>
                <p className=' text-xs text-gray-400'>Core Concept</p>

              </div>
              </div>
              <div>
                {/* <p className=' text-xs text-gray-400'>Core Concept</p> */}
                <button className='text-xs flex bg-black items-center text-white p-1 rounded-md mt-2'>Learn Now <span><BsArrowRight/></span>  </button>
              </div>
            </div>
            <div className='h-2/4 flex flex-col items-center justify-center rounded-xl shadow-2xl   shadow-violet-400 hover:scale-105  hover:shadow-voilet-600 w-40  border mx-2  '>
              <div className='flex items-center'>
              <span className=' text-purple-700 text-4xl'> <AiFillHtml5 /> </span> 
              <div>

              <p>CSS</p>
                <p className=' text-xs text-gray-400'>Core Concept</p>

              </div>
              </div>
              <div>
                {/* <p className=' text-xs text-gray-400'>Core Concept</p> */}
                <button className='text-xs flex bg-black items-center text-white p-1 rounded-md mt-2'>Learn Now <span><BsArrowRight/></span>  </button>
              </div>
            </div>
            

            

          </div>
        </div>

        <div className='w-2/5 border h-96 mx-3 rounded-md bg-blue-400/10'>
          hii
        </div>

      </div>

    </>
  )
}

export default Home
