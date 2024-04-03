import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokemon']);

  const onAddCategory = (newCategory) => {
    
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);

  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={ (value) => onAddCategory(value) }
        // setCategories={ setCategories } categories={ categories } 
      />

      {/* Listado de Gifs */}
      {
        categories.map( category => (
          <GifGrid category={ category } key={ category} />
        ))
      }
        {/* Gif Item */}
    </>
  )
}
