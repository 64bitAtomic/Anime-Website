import React, { useEffect } from "react";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
const Popular = ({ rendered }) => {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "popular") {
      return popularAnime?.map((anime) => {
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
    <PopularStyle>
      <div className="popular-anime">{conditionalRender()}</div>
      <SideBar />
    </PopularStyle>
  );
};

// const PopularStyle = styled.div`
//   display: flex;
//   .popular-anime {
//     margin-top: 2rem;
//     padding-top: 2rem;
//     padding-bottom: 2rem;
//     padding-left: 5rem;
//     padding-right: 0;
//     width: 100%;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-gap: 2rem;
//     background-color: #2a2a2a;
//     border-top: 5px solid #e5e7eb;
//     a {
//       height: 500px;
//       border-radius: 7px;
//       border: 5px solid #e5e7eb;
//     }
//     a img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       border-radius: 5px;
//     }
//   }
// `;

const PopularStyle = styled.div`
  display: flex;

  .popular-anime {
    margin-top: 2rem;
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1.5rem;
    background-color: #1e1e1e;
    // background-color: #2a3039;
    border-top: 5px solid #4a5568;

    a {
      height: 500px;
      border-radius: 7px;
      border: 3px solid #4a5568;
      transition: transform 0.3s ease-in-out;
    }

    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.3);
    }

    a:hover {
      transform: translateY(-10px);
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

export default Popular;
