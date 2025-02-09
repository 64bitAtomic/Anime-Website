import React from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";

const Airing = ({ rendered }) => {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "airing") {
      return airingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };
  return (
    <AiringStyle>
      <div className="airing-anime">{conditionalRender()}</div>
      <SideBar />
    </AiringStyle>
  );
};

const AiringStyle = styled.div`
  display: flex;

  .airing-anime {
    margin-top: 2rem;
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1.5rem;
    background-color: #1e1e1e;
    border-top: 5px solid #4a5568;

    a {
      height: 500px;
      border-radius: 7px;
      border: 3px solid #4a5568;
    }

    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }

    @media (max-width: 768px) {
      padding: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      a {
        height: 300px;
      }
    }
  }
`;

export default Airing;
