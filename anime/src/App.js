
import { useState, useEffect, Fragment } from 'react'
import { Header } from './components/Header';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

function App() {

  const [animeList, setAnimeList] = useState([]);
  const [animeTop, setAnimeTop] = useState([]);
  const [search, setSearch] = useState('');

  const getTopAnime = async () => {
    const { top: resultList } = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());
    setAnimeTop(resultList.slice(0, 5));
  }
  const HandleSearch = e => {
    e.preventDefault();
    fetchAnime(search);
  };
  const fetchAnime = async query => {
    const { results } = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json());
    setAnimeList(results);
  }
  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='app__page'>
        <Sidebar animeTop={animeTop} />
        <Content
          HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
