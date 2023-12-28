import React from 'react';
import Typography from '@mui/material/Typography';

interface CardProps {
  imageURL: string;
  pName: string;
}

const CustomCard: React.FC<CardProps> = ({ imageURL, pName}) => {
  return (
    <div className="card" style={{display: "flex", flexDirection: "column", minWidth: "8rem", cursor: "pointer"}}>
        <div className="image">
            <img src={imageURL} alt={pName} style={{ width: '100%', height: '12rem', marginBottom: "0.5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
        </div>
        <div className="name">
            <Typography>{pName}</Typography>
        </div>
    </div>
  );
};

export default CustomCard;

