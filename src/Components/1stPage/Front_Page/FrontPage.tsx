import React, { useState } from "react";
import { TextField, InputAdornment, Popover, Paper } from "@mui/material";
import backImg from "../../../Source/Best-Dresses-Websites.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../Logo/Logo";
import Suggestion from "../../1stPage/Suggestion_Box/Suggestion_Box";
import "./FrontPage.scss";

interface Color {
  color: string;
}

const FrontPage: React.FC<Color> = ({ color }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleSearchClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(!isPopoverOpen);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setPopoverOpen(false);
  };

  return (
    <div className="front">
      <div className="img-container">
        <img src={backImg} alt="background" className="img" />
      </div>
      <Logo color={color} />
      <div className="search-bar">
        <TextField
          label="Search"
          onClick={handleSearchClick}
          style={{ minWidth: "auto", width: "40rem", borderRadius: "3rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleSearchClick}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ marginTop: "0.5rem" }}
      >
        <Paper
          style={{
            width: "60rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            flexShrink: "unset",
          }}
        >
          <Suggestion />
        </Paper>
      </Popover>
    </div>
  );
};

export default FrontPage;
