import { useEffect, useState } from 'react';
import Navelement from './Navelement.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';
import Cards from './Cards.jsx';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';
import './App.css';

function App() {  
  let url = `https://randomfox.ca/floof/`
  const [data, setData] = useState(null);
  const [link, setLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await axios.get(url);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setData(response.data.image);
        setLink(response.data.link)
        setIsLoading(false);
        let storedFoxData = JSON.parse(localStorage.getItem('foxData')) || [];
        const foxData = {
          name: response.data.image,
          link: response.data.link
        };
        storedFoxData.push(foxData);
        localStorage.setItem('foxData', JSON.stringify(storedFoxData));
        console.log(response.data)
      } catch(error){
        console.error("Error fetching data : ", error);
      }
    }
    fetchData();
  }, [url]);
  

  return (
    <>
     { isLoading ?  <Spinner className="spinner" animation="border" variant="secondary" /> : 
     
      <div className="container">
          <Navelement/>
          <div className="content">
            <Content data={data} link={link}/>
          </div>
          <Cards/>
          <Footer/>
        </div>
     
     }
    </>
  )
}

export default App
