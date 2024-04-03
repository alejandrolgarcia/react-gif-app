
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "./Loading";


export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);
  
  return (
    <>
      <h3>{ category }</h3>

      <li className="card-grid">
        {
          (isLoading)
          ? <Loading />
          : (
            images.map( (image) => (
              <GifItem 
                key={image.id}
                { ...image }
              />
            ))
          )
        }
      </li>
    </>
  )
}
