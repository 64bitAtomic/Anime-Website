import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";

const Gallery = () => {
  const { getAnimePicture, picture } = useGlobalContext();
  const { id } = useParams();

  //state
  const [index, setIndex] = useState(0);
  const handleImageClick = (i) => setIndex(i);

  useEffect(() => {
    getAnimePicture(id);
  }, [id]);
  return (
    <GalleryStyled>
      <div className="back">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>
      <div className="big-image">
        <img src={picture[index]?.jpg.image_url} alt="" />
      </div>
      <div className="small-images">
        {picture.map((picture, i) => {
          return (
            <div
              className="image-con"
              onClick={() => {
                handleImageClick(i);
              }}
              key={i}
            >
              <img
                src={picture?.jpg.image_url}
                alt=""
                style={{
                  border:
                    i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                  transform: i === index ? "scale(1.1)" : "scale(1)",
                  transition: "all .3s ease-in-out",
                }}
              />
            </div>
          );
        })}
      </div>
    </GalleryStyled>
  );
};

// const GalleryStyled = styled.div`
//   background-color: #ededed;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   .back {
//     position: absolute;
//     top: 2rem;
//     left: 2rem;
//     a {
//       font-weight: 600;
//       text-decoration: none;
//       color: #eb5757;
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//     }
//   }
//   .big-image {
//     display: inline-block;
//     padding: 2rem;
//     margin: 2rem 0;
//     background-color: #fff;
//     border-radius: 7px;
//     border: 5px solid #e5e7eb;
//     position: relative;
//     img {
//       width: 350px;
//     }
//   }

//   .small-images {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 0.5rem;
//     width: 80%;
//     padding: 2rem;
//     border-radius: 7px;
//     background-color: #fff;
//     border: 5px solid #e5e7eb;
//     img {
//       width: 6rem;
//       height: 6rem;
//       object-fit: cover;
//       cursor: pointer;
//       border-radius: 5px;
//       border: 3px solid #e5e7eb;
//     }
//   }
// `;

const GalleryStyled = styled.div`
  background-color: #1e1e1e;
  color: #00aaff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  .back {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    a {
      font-weight: 600;
      text-decoration: none;
      color: #ff5757;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        color: #ff3333;
      }
    }
  }

  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #2a2a2a;
    border-radius: 7px;
    border: 5px solid #444;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.3);

    img {
      width: 350px;
      border-radius: 5px;

      @media (max-width: 768px) {
        width: 250px;
      }
    }
  }

  .small-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #2a2a2a;
    border: 5px solid #444;
    box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.3);

    img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      cursor: pointer;
      border-radius: 5px;
      border: 3px solid #555;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
  }
`;

export default Gallery;
