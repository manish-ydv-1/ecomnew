import React from 'react'

const Hero = () => {
  return (
    <>
      <div>



        {/* Main div */}
        <div className='container px-4 grid md:grid-cols-2 py-8 mx-auto bg-[#e3edf6] dark:bg-black'>     
          
            {/* left side k liye */}
              <div className='max-w-[450px] space-y-4'>
                <p className='head h-8 font-bold  '>Starting At <span className='font-bold'>$999</span></p>
                <h1 className='text-black font-bold text-4xl md:text-5xl dark:text-white'>The best notebook collection 2025</h1>
                <div className='text-4xl dark:text-white font-medium' >Exclusive offer <span className='text-red-600'>-10%</span> off this week</div>

            </div>
           
            {/* right image  */}
            {/* <div className='flex items-center'> right side image k liye h ye</div> */}
            <div className='ml-8'><img src="/hero.png" alt="Laptop " /></div>

            </div>


        



      </div>
    </>
  )
}

export default Hero
