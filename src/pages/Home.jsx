import React from "react";
import { useFetch } from "../hooks/useFetch"
function Home() {
  const [data, isPending, error] = useFetch('http://localhost:3000/recipes')
  console.log(data);
  return (
    <div className="">
        {data && data.map((recipe) => {
          return <div key={recipe.id}>
          <h1>{recipe.title}</h1>
          </div>
        })}
    </div>
  )
}

export default Home