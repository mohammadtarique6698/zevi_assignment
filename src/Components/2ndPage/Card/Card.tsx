import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

interface CardProps {
  imageURL: string;
  pName: string;
  company: string;
  oldprice: number;
  newprice: number;
  rating: string;
  view: number;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const CustomCard: React.FC<CardProps> = ({ imageURL, pName, oldprice, newprice, rating, view }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "5rem",
        cursor: "pointer",
        position: "relative"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image">
        <div style={{position: "absolute", right: "0"}}>
        <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite style={{ color: isFavorite ? "red" : "inherit" }} />}
            checked={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
        <img
          src={imageURL}
          alt={pName}
          style={{
            width: '100%',
            height: '35rem',
            marginBottom: "0.5rem",
            objectFit: "cover",
            borderRadius: "0.5rem"
          }}
        />
        {isHovered && (
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: "6rem",
              left: 0,
              paddingTop: "1rem",
              width: "100%",
              height: "3rem",
              backgroundColor: "purple",
              opacity: "0.7",
              color: "white",
              borderRadius: "0.5rem",
            }}
          >
            View Product
          </div>
        )}
      </div>
      <div className="name" style={{ textAlign: "left" }}>
        <Typography variant="h5" sx={{fontWeight: "600"}}>{pName}</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="old_price" style={{ fontSize: "medium", textDecoration: "line-through grey", color: "grey" }}>
          <Typography>{`Rs ${oldprice}`}{<span style={{paddingLeft: "0.5rem"}}></span>}</Typography>
        </div>
        <div className="new_price">
          <Typography sx={{fontSize: "large", fontWeight: "600", color: "purple"}}>{`Rs ${newprice}`}</Typography>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="rating">
          <Typography>{`${rating}`}</Typography>
        </div>
        <div className="views">
          <Typography>{`(${view})`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;


