import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const AnimeItem = () => {
  const { id } = useParams();
  // state
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // destructuring anime
  const {
    scored_by,
    season,
    source,
    status,
    popularity,
    rank,
    aired,
    title,
    synopsis,
    episodes,
    duration,
    rating,
    score,
    genres,
    images,
    trailer,
  } = anime;

  //get Anime
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <AnimeItemStyled>
      <h1>{title}</h1>
      <div className="details">
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <div className="anime-details">
            <p>
              <span>Aired:</span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating:</span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank:</span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Score:</span>
              <span>{score}</span>
            </p>
            <p>
              <span>Scored By:</span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span>Popularity:</span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status:</span>
              <span>{status}</span>
            </p>
            <p>
              <span>Source:</span>
              <span>{source}</span>
            </p>
            <p>
              <span>Season:</span>
              <span>{season}</span>
            </p>
            <p>
              <span>Duration:</span>
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className="description">
          {showMore ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <h3 className="title">Trailer</h3>
      <div className="trailer-con">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h3>Trailer not available</h3>
        )}
      </div>
      <h3 className="title">Characters</h3>
      <div className="characters">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link to={`/character/${mal_id}`} key={index}>
              <div className="character">
                <img src={images?.jpg.image_url} alt="" />
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </AnimeItemStyled>
  );
};

const AnimeItemStyled = styled.div`
  padding: 3rem 18rem;
  background-color: #1e1e1e;
  color: #ffffff;

  @media (max-width: 1200px) {
    padding: 3rem 10rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }

  h1 {
    display: inline-block;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: linear-gradient(to right, #a855f7, #27ae60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: skew(-3deg);
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .title {
    display: inline-block;
    margin: 3rem 0;
    font-size: 2rem;
    cursor: pointer;
    background: linear-gradient(to right, #a855f7 23%, #27ae60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  .description {
    margin-top: 2rem;
    color: #cfcfcf;
    line-height: 1.7rem;
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #27ae60;
      font-weight: 600;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .trailer-con {
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      outline: none;
      border: 5px solid #333;
      padding: 1rem;
      border-radius: 10px;
      background-color: #2e2e2e;

      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }
  }

  .details {
    background-color: #2e2e2e;
    border-radius: 20px;
    padding: 2rem;
    border: 5px solid #333;

    @media (max-width: 768px) {
      padding: 1rem;
    }

    .detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      .image {
        margin-right: 2rem;
      }

      img {
        border-radius: 7px;
        width: 100%;
        height: auto;
      }
    }

    .anime-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        display: flex;
        gap: 1rem;
        background-color: #3e3e3e;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #4e4e4e;
        }

        @media (max-width: 480px) {
          flex-direction: row;
          gap: 0.5rem;
          line-height: 1.5rem;
        }
      }
      p span:first-child {
        font-weight: 600;
        color: #cfcfcf;
      }
    }
  }

  .characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    background-color: #2e2e2e;
    padding: 2rem;
    border-radius: 20px;
    border: 5px solid #333;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      padding: 1rem;
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      padding: 0.5rem;
    }

    .character {
      padding: 0.4rem 0.6rem;
      border-radius: 7px;
      background-color: #3e3e3e;
      transition: all 0.4s ease-in-out;
      img {
        width: 100%;
        height: auto;
      }
      h4 {
        padding: 0.5rem 0;
        color: #cfcfcf;

        @media (max-width: 480px) {
          font-size: 1rem;
        }
      }
      p {
        color: #27ae60;

        @media (max-width: 480px) {
          font-size: 0.8rem;
        }
      }
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`;

export default AnimeItem;

// https://github.com/Maclinz/anime-database/blob/master/src/Components/Popular.js
// https://docs.jikan.moe/usage/genre/anime/
// https://api.jikan.moe/v4/top/anime?filter=bypopularity
// box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
