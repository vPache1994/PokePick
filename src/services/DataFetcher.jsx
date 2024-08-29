import React, { useState, useEffect } from 'react';


// Definición del componente
function DataFetcher({ apiEndpoint }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imgSrc, setImgSrc] = useState('')
  const [isShiny, setisShiny] = useState('')
  const [doItShiny, setdoItShiny] = useState('Do it Shiny!')

  // Maneja el clic del botón para cambiar el `src` de la imagen
  const handleChangeImage = () => {
    if(!data.sprites.front_shiny){
      setisShiny('This Pokémon has not shiny version.')
    }else{
      if(imgSrc===data.sprites.front_shiny){
        setdoItShiny('Do it Shiny!')
        setImgSrc(data.sprites.front_default)
      }else{
        setdoItShiny('Reverse!')
        setImgSrc(data.sprites.front_shiny)
      }
      
    }
  };

  useEffect(() => {
    if (!apiEndpoint) return; // Evita la solicitud si apiEndpoint es null o vacío


    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint); 
        if (!response.ok) {
          throw new Error('That Pokémon does not exist.');
        }
        const result = await response.json();
        setData(result);
        setImgSrc(result.sprites.front_default)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }

    };

    fetchData();
  }, [apiEndpoint]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    
    <div>
      <div className="card">
        <img className="card-img-top pokeImage" src={imgSrc} alt={data.name}/>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">Type: {data.types[0].type.name}</p>
          <a className="btn btn-primary" onClick={handleChangeImage}>{doItShiny}</a>
        </div>
        <div>{isShiny}</div>
      </div>
    </div>
    
  );
}

// Exportación por defecto
export default DataFetcher; 