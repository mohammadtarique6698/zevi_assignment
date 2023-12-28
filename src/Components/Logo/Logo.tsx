import React from 'react'
import {Typography} from '@mui/material'
import bubble from "../../Source/R.png";
import "./Logo.scss"

interface ColorProps {
  color: string,
}

const Logo: React.FC<ColorProps> = ({color}) => {
  return (
    <div className="heading">
        <Typography variant="h3" sx={{color: color}}>zevi</Typography>
        <div className="bubble-placing">
          <img src={bubble} alt="bubble" style={{ height: "0.75rem", width: "0.75rem" }} />
        </div>
      </div>
  )
}

export default Logo