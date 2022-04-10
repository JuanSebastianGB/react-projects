import './Sidebar.css';

export const Sidebar = ({ animeTop }) => {
  return (
    <div className='sidebar'>
      <nav>
        <h3>Top</h3>
        {animeTop.map(anime => (
          <a
            key={anime.mal_id}
            href={anime.url}
            target='_blank'
            rel='noreferrer'
          >
            {anime.title}
          </a>
        ))}

      </nav>
    </div>
  );
};
