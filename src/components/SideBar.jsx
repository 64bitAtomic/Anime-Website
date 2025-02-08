import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { popularAnime } = useGlobalContext();
  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });
  return (
    <SideBarStyled>
      <h3>Top 5 Popular</h3>
      <div className="anime">
        {sorted?.slice(0, 5).map((anime) => {
          return (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt="" />
              <h5>{anime.title}</h5>
            </Link>
          );
        })}
      </div>
    </SideBarStyled>
  );
};

// const SideBarStyled = styled.div`
//   margin-top: 2rem;
//   background-color: #fff;
//   border-top: 5px solid #e5e7eb;
//   padding-right: 5rem;
//   padding-left: 2rem;
//   padding-top: 2rem;
//   .anime {
//     display: flex;
//     flex-direction: column;
//     width: 150px;
//     img {
//       width: 100%;
//       border-radius: 5px;
//       border: 5px solid #e5e7eb;
//     }
//     a {
//       margin-top: 1rem;
//       display: flex;
//       flex-direction: column;
//       gap: 0.4rem;
//       color: #27ae60;
//       h4 {
//         font-size: 1.1rem;
//       }
//     }
//   }
// `;

const SideBarStyled = styled.div`
  margin-top: 2rem;
  background-color: #1e1e1e;
  border-top: 5px solid #4a5568;
  padding: 2rem;

  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;

    img {
      width: 100%;
      border-radius: 5px;
      border: 3px solid #4a5568;
    }

    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      color: #00aaff; /* Bright blue for contrast */

      h4 {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    .anime {
      width: 100px; /* Adjusted for smaller screens */
    }
  }
`;

export default SideBar;
