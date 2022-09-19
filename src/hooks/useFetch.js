import axios from 'axios';
import {useState} from 'react'

const useFetch = () => {
  const [day, setday] = useState([]);
  const [loading, setLoading] = useState(false)
console.log(day);
  const getData = async(url) => {
    setLoading(true)
    const {data} = await axios.get(url)
    setday(data.response.holidays)
    setLoading(false)
  }

  return [day, loading, getData]
}

export default useFetch