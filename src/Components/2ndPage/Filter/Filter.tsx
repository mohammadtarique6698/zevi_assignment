import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = () => {
  const accordionStyle = {
    background: "none",
    boxShadow: "none",
  };

  return (
    <div>
      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Mango" />
            <FormControlLabel control={<Checkbox />} label="H&M" />
            <FormControlLabel control={<Checkbox />} label="Others" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Under 500" />
            <FormControlLabel control={<Checkbox />} label="500 to 1000" />
            <FormControlLabel control={<Checkbox />} label="1000 to 3000" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="⭐⭐⭐⭐⭐" />
            <FormControlLabel control={<Checkbox />} label="⭐⭐⭐⭐" />
            <FormControlLabel control={<Checkbox />} label="⭐⭐⭐" />
            <FormControlLabel control={<Checkbox />} label="⭐⭐" />
            <FormControlLabel control={<Checkbox />} label="⭐" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;


