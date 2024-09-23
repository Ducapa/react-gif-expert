import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/gifgrid'


export const GifExpertApp = ({onNewCategory}) => {

 const [categories, setCategories] = useState(['One punch'])

        
const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;


    setCategories([newCategory, ...categories])
}


  return (
   <>
_
    <h1>GifExpertApp</h1>
    <AddCategory 
   
    onNewCategory={ (value) => onAddCategory(value) }

    
    
    />
   

    {
    categories.map ((category) => (
    <GifGrid key={category} category={category}/>
    ))
}  
   
   </>
  )
}
