import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Items = () => {
  const [hasError, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151" // Fetch 1st generation pokémon from PokeApi
      );
    const data = await response.json();
    setData(data.results);
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (hasError) return <p>Error...</p>; // Set up condition in case of error, displays a message
  return (
    <>
      {data.map((pokemon,index) =>{
        return(
            <div className="card__content" key={index}>
              <p>n°{index+1}</p>
              <img className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
              <h3 className="card__header">{pokemon.name}</h3>
              <Link className="card__link" to={"/pokemon/"+pokemon.name}>Show Detail</Link>
            </div>
        )
      })}
    </>
  );
};
export default Items;