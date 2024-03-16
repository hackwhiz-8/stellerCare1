import React from 'react';

const ListCard = ({ title, price, image }) => (
  <>
    <div className='flex items-center justify-center  bg-black'>
      <div className='flex w-[900px] items-center justify-center rounded-md  p-2 m-2 text-white overflow-hidden '>
        <div className='flex justify-between '>

          <div className="overflown-hidden m-auto" >
            <img className="w-[800px] h-[200px]" src={"https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150_640.jpg"} alt="..." />
          </div>

          <div className='p-6 text-2xl font-bold mr-2 '>
            <h1 className='text-yellow-500 text-2xl'>Rawat & construction</h1>

           <div>
           <p className='text-base mt-2'>
              I am a dedicated and passionate construction professional with 10 years of experience in the industry. Throughout my career, I have been involved in a wide range of construction projects, spanning from residential developments to large-scale commercial ventures. </p>
              <button className='bg-yellow-800  uppercase px-2 border-2 border-black rounded-lg text-center text-sm mt-3 w-[120px] h-[50px] '>call now</button>
            
           </div>
          </div>

        </div>
      </div>
    </div>
  </>
);

export default ListCard;