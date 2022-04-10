
import './AnimeCard.css';
export const AnimeCard = ({ anime: { image_url: imageUrl, url, title } }) => {
  return (
    <article className='anime-card'>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
      >
        <figure>
          <img
            src={imageUrl}
            alt='Anime Image'
          />
        </figure>
        <h3 className='animeCard__title'>{title}</h3>
      </a>
    </article>
  );
};
