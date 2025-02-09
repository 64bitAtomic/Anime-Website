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
      <h3>Top 10 Popular</h3>
      <div className="anime">
        {sorted?.slice(0, 10).map((anime) => {
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
//   background-color: #1e1e1e;
//   //background-color: #2a3039;
//   border-top: 5px solid #4a5568;
//   padding: 2rem;

//   .anime {
//     display: flex;
//     flex-direction: column;
//     width: 150px;

//     img {
//       width: 100%;
//       border-radius: 5px;
//       border: 3px solid #4a5568;
//       box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.3);
//       transition: transform 0.3s ease-in-out;
//     }

//     img:hover {
//       transform: translateY(-10px);
//     }

//     a {
//       margin-top: 1rem;
//       display: flex;
//       flex-direction: column;
//       gap: 0.4rem;
//       color: #00aaff;
//       //color: #e93333;

//       h4 {
//         font-size: 1.1rem;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//     .anime {
//       width: 100px; /* Adjusted for smaller screens */
//     }
//   }
// `;

const SideBarStyled = styled.div`
  margin-top: 2rem;
  background-color: #1e1e1e;
  //background-color: #2a3039;
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
      box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.3);
      transition: transform 0.3s ease-in-out, box-shadow 1.5s linear infinite;
      animation: ledBorder 1.5s linear infinite;
    }

    img:hover {
      transform: translateY(-10px);
    }

    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      color: #00aaff;
      //color: #e93333;

      h4 {
        font-size: 1.1rem;
      }
    }
  }

  @keyframes ledBorder {
    0% {
      box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.8);
    }
    25% {
      box-shadow: 0px 0px 10px rgba(0, 255, 0, 0.8);
    }
    50% {
      box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.8);
    }
    75% {
      box-shadow: 0px 0px 10px rgba(255, 255, 0, 0.8);
    }
    100% {
      box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.8);
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
