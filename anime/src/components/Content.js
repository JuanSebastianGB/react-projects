import { AnimeCard } from './AnimeCard';
import './Content.css';

export const Content = ({ HandleSearch, search, setSearch, animeList }) => {
  return (
    <div className='content'>
      <div className='content__head'>
        <form
          className='search-box'
          onSubmit={HandleSearch}
        >
          <input
            className='content__input'
            type='search'
            placeholder='search for an anime.'
            required
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className='anime-list'>
        {animeList.map(anime => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </div>
  );
};
