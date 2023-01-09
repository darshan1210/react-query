import { useQuery } from "react-query"
import axios from "axios"


const fetchData = () => {
    return axios.get('https://6364c85f7b209ece0f4dd0e8.mockapi.io/test')
}

export const RQSuperHeroesPage = () => {

    const {isLoading ,data ,isError} =useQuery('super-heroes', fetchData )

    if(isLoading){
        return <h2>Loading......</h2>
    }

    if(isError){
        return <h2>Data not found</h2>
    }

    return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {
        data?.data.map((hero, index)=>{
            return  <div key={index}>{hero.name}</div>
        })
      }
    </>
  
    )
  }