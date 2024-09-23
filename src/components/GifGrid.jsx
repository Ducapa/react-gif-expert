import {useEffect, useState } from "react";
// import { getGifs } from "../helpers/GetGrids";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);

console.log({images, isLoading})

//    const [images, setImages] = useState([])

//    const getImages = async () => {
//     const newImages = await getGifs (category);
//     setImages(newImages);
//    }

//     useEffect ( () => {
//         getImages();
//     }, [ ])
//     getGifs(category);

    return(
        <>
            <h3>{category}</h3>
           <div className='card-grid'>
          {
            images.map((image)=> (
               <GifItem key={image.id}
              {...image}
               />
             
            ))
          }
           </div>
            
        </>
    )
}