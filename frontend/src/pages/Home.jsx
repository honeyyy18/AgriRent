import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
        <div className='flex items-center'>
          <img src="../src/assets/logo.png" alt="" className='rounded-full ' width={"50px"} />
          <h2 className='text-2xl text-zinc-800 font-bold p-1'> <a href='/'>Krishi Suvidha </a></h2>
        </div>
        <div className='flex items-end justify-center gap-9 w-1/3'>
          <h1 className='hover:bg-[#b2d8b4] p-2 rounded-md'><Link to="/contact">Contact us</Link></h1>
          <h1 className='hover:bg-[#b2d8b4] p-2 rounded-md'><Link to="/about">About us</Link></h1>
        </div>
        <div className='flex items-end justify-end w-1/3'>
          <button className="bg-[#72ad84] hover:bg-[#2a7f62] text-white font-bold py-2 px-4 rounded">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-[#2a7f68] hover:bg-[#72ad84] text-white font-bold py-2 px-4 rounded ml-2">
            <Link to="/register">Signup</Link>
          </button>
        </div>
      </nav>

      {/* Video Section------------------ */}

      <div style={{ marginTop: '0px' }}>
        <video src="../src/assets/agrotech.mp4" autoPlay loop muted style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
      </div>

      {/* Hero Section------------------ */}
      <div className='w-full  h-screen bg-[#f7f7f8] flex   items-center'>
        <div className='w-1/2 px-2  ml-20 items-center justify-center'>
          <h1 className='text-9xl text-[#2a7f62] text-bold mb-3'>Krishi Suvidha</h1>
          <h2 className='text-3xl text-[#41676a]'>Your Farming Partner for Success</h2>
          <h2 className='text-xl text-zinc-600 mt-4'>Krishi Suvidha is all about helping farmers succeed. With our simple and convenient rental platform, we make it easy to access the farming equipment you need. Our goal is to boost your productivity and profits, while promoting sustainable farming. Let’s work together to build a brighter, more prosperous future for every farmer.</h2>
          <button className="bg-[#2a7f62] hover:bg-[#2f6b57] text-white font-bold py-2 px-4 mt-11 rounded"><Link to="/register">Get Started</Link></button>
          </div>
        <div className='w-1/2  ml-60'>
          <img src="../src/assets/hero.png" alt="" style={{ right: '0px' }} />
        </div>
      </div>

    {/* How it Works section------------------------ */}


    {/*  Statistics Section----------- */}


    {/* Our Customers section------------------------   */}

    {/* Footer ------------*/}
    <Footer/>

    </div>
  )
}

export default Home
