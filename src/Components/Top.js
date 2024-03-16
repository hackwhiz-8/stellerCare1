import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceC from './ServiceC'
import Card2 from './Card2'
import axios from 'axios'

import VerticalTextAnimation from './VerticalTextAnimation';
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Top = (props) => {
  const url = `https://api.jikan.moe/v4/top/anime`

  const [resultD, error, loading] = CustomQuery(url);

  return (
    <div className=' flex flex-col items-center justify-center '
    >
      {loading && <h1>loading.....</h1>}
      {error && <h1>something wrong</h1>}


      <h1 className='text-white text-[50px]  px-10  text-center uppercase font-julius  mt-5 font-2xl  p-2'>aapke  
      <span className='text-yellow-800 font-Julius font-extrabold'> har</span> sawal ka jawab hmare pass!</h1>
    

      <Carousel
        responsive={responsive}
        draggable={true}
        // autoPlay= {deviceType !== "mobile" ? true : false}  
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"

        className='p-5 text-white max-w-[1000px]  	'>
        <Link to='/List'><ServiceC src={"https://cdn.pixabay.com/photo/2017/08/07/20/17/craftsmanship-2607408_640.jpg"} name={"Manpower"}></ServiceC></Link>
                <Link to='/List'><ServiceC src={"https://cdn.pixabay.com/photo/2022/05/22/17/22/building-7214070_640.jpg"} name={"building material"} ></ServiceC></Link>
                <Link to='/List'><ServiceC src={"https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437_640.jpg"} name={"designing"}></ServiceC></Link>
                <Link to='/List'><ServiceC src={"https://cdn.pixabay.com/photo/2019/02/23/07/21/carpenter-4015109_640.jpg"} name={"carpentor"}></ServiceC></Link>
                <Link to='/List'><ServiceC src={"https://cdn.pixabay.com/photo/2014/07/31/23/37/motorbike-407186_640.jpg"} name={"garrage"}></ServiceC></Link>
                <Link to='/List'><ServiceC src={"https://cdn.pixabay.com/photo/2020/04/09/11/16/video-conference-5020951_640.jpg"} name={"it consult"}></ServiceC></Link>

      </Carousel>
    </div>
  )
}


export default Top

{/* {resultD.map((ele) => {
  return <Card2 anime={ele} key={ele.id}  ></Card2>
})} */}
const CustomQuery = (url) => {

  const [resultD, setresult] = useState([])
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)


  // const update = async () => {
  //   // const url = `https://api.jikan.moe/v4/anime?q=${props.name}&sfw`
  //   // const data = await fetch(url);
  //   // const result = await data.json()
  //   // console.log(result)

  //   // setresult(result.data)

  // }

  useEffect(() => {
    const controllar = new AbortController()

      ; (async () => {
        try {
          seterror(false);
          setloading(true);

          const res = await axios.get(url, { signal: controllar.signal });
          console.log(res.data)
          setresult(res.data.data);
          setloading(false)

        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('request canceled ', error.message)
            return
          }
          seterror(true)
          setloading(false);
        }


      })()
    // cleanup method
    // to unmount the eventhandler
    return () => {
      controllar.abort()
    }

  }, [])

  return [resultD, error, loading]
}