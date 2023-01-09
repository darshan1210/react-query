import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, SetError] =useState()

  useEffect(() => {
    axios.get('https://6364c85f7b209ece0f4dd0e8.mockapi.io/test').then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch((error)=>{
        SetError("DAta not found")
        setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>{error}</h2>
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero,index) => {
        return <div key={index}>{hero.name}</div>
      })}
    </>
  )
}