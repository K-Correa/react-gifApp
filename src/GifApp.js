import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
    
    // const categories = ['One Punch', 'Dragon Ball','Shingeki'];
    const [categories, setCategories] = useState([]);
    // const handleAdd = () => {
    //     setCategories([...categories, 'Shingeki'])}
      

    
    // const handleDrop =() =>{
    //     setCategories(categories.shift())
    // }
  
    return (

        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories} />
            
            <hr />
            
            {/* <button onClick={handleDrop}>Eliminar</button> */}

           <ol>
               {
                   categories.map(category => (
                    <GifGrid
                    
                    key={category}
                     category = {category} />
                   ))
               }
           </ol>
        </>
    )
}
export default GifApp