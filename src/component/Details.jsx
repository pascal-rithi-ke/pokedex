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
      {/*Some data not successfully fetched*/}
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}/>
      <p>Name: {data.name}</p>
      <p>Types:</p>
      <p>Height: {Math.round((data.height*0.328084+0.00001)*100)/100}ft.</p>
      <p>Weight: {Math.round((data.weight*0.220462-0.0001)*100)/100}lbs.</p>
      <p>Stats:</p>
      <p>Abilities:</p>
      <Link className="home_link" to="/">↩</Link>
    </div>
  );
};
export default Details;