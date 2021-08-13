import React, {useState, useEffect} from "react";
import axios from 'axios';
import Title from './Title'
import Image from './Image'
import Copyright from './Copyright'
import Date from './Date'
import Explanation from './Explanation'

export default function App() {
  //assigning state hooks
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [date, setDate] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [error, setError] = useState(null)
  
  //fetch data fom API
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data)
      setTitle(res.data.title)
      setUrl(res.data.url)
      setCopyright(res.data.copyright)
      setDate(res.data.date)
      setExplanation(res.data.explanation)
    })
    .catch(error => {
      setError('Sorry! We are working on this')
    })
  }, [])

  return (
    <div className="App">
      <Title title ={title} />
      <Image url={url} />
      <Copyright copyright={copyright} /> 
      <Date date={date} />
      <Explanation explanation={explanation} />
    </div>
  );
}

