import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

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
      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>


        {/* Gif Item */}
    </>
  )
}
