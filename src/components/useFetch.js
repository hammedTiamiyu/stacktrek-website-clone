import { useState, useEffect } from 'react'
import paginate from './utils'
// const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
import usersData from './Data'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    // const response = await fetch(url)
    // const data = await response.json()
    // console.log(data);
    // setData(paginate(data))   
    setData(paginate(usersData))   
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
