import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [Error, setError] = useState(false);
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let {value} = useParams();
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value}` // Fetch detail pokémon by his name
      );
      const data = await response.json();
     // console.log(data);
      setData(data);
    } catch (err) {
      setError(true); // Set up catch in case of error, displays a message
      throw err;
    }
    finally{
      setLoading(false); // Setting up a loading if a problem occurs, displays a message
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchApi();
  }, []);

  if (Error || Array.isArray(data)){
    return <p>Error...</p>;
  }

  if(loading){
    return <p>Data is loading...</p>;
  }

  return (
      <div className="solo_card">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}/>
      <h2>Name:</h2><p>{data.name}</p>
      <h2>Types:</h2>{data.types.map((types, index) => {
        return (
          <div key={`${index}`} className="type">
            <p className={`${types.type.name}`}>{types.type.name}</p>
            </div>
          );
        })}
      <p>Height: {Math.round((data.height*0.328084+0.00001)*100)/100}ft.</p>
      <p>Weight: {Math.round((data.weight*0.220462-0.0001)*100)/100}lbs.</p>
      <h2>Statistic:</h2>
      {data.stats.map((stats, index) => {
        return (
            <div key={`${index}`}>{stats.base_stat} {stats.stat.name}</div>
            );
          })}  
      <h2>Abilities:</h2>
      {data.abilities.map((abilities, index) => {
        return (
            <div key={`${index}`}>{abilities.ability.name}</div>
          );
        })}
      <Link className="home_link" to="/">↩</Link>
    </div>
  );
};
export default Details;