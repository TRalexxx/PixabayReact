import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import './App.css';

export default function App() {
const [images, setImages] = useState([]);
const [searchTag, setSearchTag] = useState("");


const requesturl = 'https://pixabay.com/api/?key=34119107-36198c444b18f56d819681a4c&q=blue+sky&image_type=photo'

var url = 'https://pixabay.com/api/?key=34119107-36198c444b18f56d819681a4c&image_type=photo'

useEffect(() => {
  axios.get(requesturl)
  .then((response) => {
    console.log(response.data)
    setImages(response.data.hits)
    
  })
}, [])

function searchImages () {
axios.get(`${url}&q=${searchTag}`)
.then(res => setImages(res.data.hits))
.catch(err => console.log(err))
};

const img = images.map((image)=>
<div className='element'>       
  <img src={image.largeImageURL} width = '490px' height = '300px'/>
    <ul>
    <li>likes: {image.likes}</li>
    <li>views: {image.views}</li>
    <li>user: {image.user}</li>
    </ul>
</div>
);

  return(
    <div>
      <div className='searchdiv'>        
        <Input placeholder="Enter search tag" margin="dense" width = '700px' type='text' name = 'tagsInput' onChange={e => setSearchTag(e.target.value)} />
        <Button variant="contained" name = 'searchBtn' onClick={searchImages}>Search</Button>    
      </div>
      <div className = "parent">{img}</div>
    </div>
  )
}