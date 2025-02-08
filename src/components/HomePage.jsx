import React, { useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../context/global";
import styled from "styled-components";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import logo from "../assets/logo.png"; // Adjust the path as needed
const HomePage = () => {
  const {
    handleChange,
    handleSubmit,
    searchAnime,
    getPopularAnime,
    getAiringAnime,
    getUpcomingAnime,
    search,
  } = useGlobalContext();
  const [rendered, setRendered] = useState("popular");
  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <HomePageStyled>
      <header>
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
          <h1>
            {rendered === "popular" ? (
              <span>
                Popular Anime <i className="fas fa-fire"></i>
              </span>
            ) : rendered === "airing" ? (
              <span>
                Airing Anime <i className="fas fa-broadcast-tower"></i>
              </span>
            ) : (
              <span>
                Upcoming Anime <i className="fas fa-calendar-alt"></i>
              </span>
            )}
          </h1>
        </div>
        <div className="search-container">
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">
                Search<i class="fas fa-search"></i>
              </button>
            </div>
          </form>
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
                getPopularAnime();
              }}
            >
              Popular
              <i className="fas fa-fire"></i>
            </button>
          </div>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing<i class="fas fa-broadcast-tower"></i>
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming<i class="fas fa-calendar-alt"></i>
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </HomePageStyled>
  );
};

// const HomePageStyled = styled.div`
//   background-color: #ededed;
//   header {
//     padding: 2rem 5rem;
//     width: 60%;
//     margin: 0 auto;
//     tarnsition: all 0.4s ease-in-out;
//     .logo {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       margin-bottom: 2rem;
//     }
//     .search-container {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       gap: 1rem;
//       button {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//         padding: 0.7rem 1.5rem;
//         outline: none;
//         border-radius: 30px;
//         font-size: 1.2rem;
//         background-color: #fff;
//         cursor: pointer;
//         transition: all 0.4s ease-in-out;
//         font-family: inherit;
//         border: 5px solid #e5e7eb;
//       }
//       form {
//         position: relative;
//         width: 100%;
//         .input-control {
//           position: relative;
//           transition: all 0.4s ease-in-out;
//         }
//         .input-control input {
//           width: 100%;
//           padding: 0.7rem 1rem;
//           border: none;
//           outline: none;
//           border-radius: 30px;
//           font-size: 1.2rem;
//           background-color: #fff;
//           border: 5px solid #e5e7eb;
//           transition: all 0.4s ease-in-out;
//         }
//         .input-control button {
//           position: absolute;
//           right: 0;
//           top: 50%;
//           transform: translateY(-50%);
//         }
//       }
//     }
//   }
// `;
const HomePageStyled = styled.div`
  background-color: #1e1e1e;
  color: #00aaff;
  min-height: 100vh;
  box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.3);

  header {
    .logo-img {
      position: absolute;
      top: 1rem;
      left: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70px; /* Ensuring square shape */
        height: 70px;
        object-fit: cover; /* Maintains aspect ratio and fills square */
        border-radius: 10px; /* Optional: for slightly rounded edges */
        filter: drop-shadow(0px 4px 8px rgba(0, 170, 255, 0.5));
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
      }
    }

    padding: 2rem 5rem;
    width: 60%;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;

    @media (max-width: 768px) {
      width: 90%;
      padding: 1.5rem;
      font-size: 1rem;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, #00aaff, #003973);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        outline: none;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: #333;
        color: #00aaff;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        font-family: inherit;
        border: 3px solid #555;

        &:hover {
          background-color: #555;
          border-color: #777;
        }
      }

      form {
        position: relative;
        width: 100%;

        .input-control {
          position: relative;
          transition: all 0.4s ease-in-out;
        }

        .input-control input {
          width: 100%;
          padding: 0.7rem 1rem;
          border: none;
          outline: none;
          border-radius: 30px;
          font-size: 1.2rem;
          background-color: #333;
          color: #e0e0e0;
          border: 3px solid #555;
          transition: all 0.4s ease-in-out;

          &::placeholder {
            color: #a0aec0;
          }

          &:focus {
            border-color: #777;
          }
        }

        .input-control button {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: #444;
          color: #00bcd4;
          border: none;
          padding: 0.7rem 1rem;
          border-radius: 30px;
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background-color: #666;
          }
        }
      }
    }
  }
`;

export default HomePage;
