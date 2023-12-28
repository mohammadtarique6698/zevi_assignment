import React, {useState} from "react";
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
import data, {Item} from "../../../Faker API/Page2ndData/Page2ndData"

interface FilterProps {
    data: Item[];
    onFilterChange: (filteredItems: Item[]) => void;
  }

  const Filter: React.FC<FilterProps> = ({ data, onFilterChange }) => {
    const [brandFilters, setBrandFilters] = useState<string[]>([]);
    const [priceFilters, setPriceFilters] = useState<string[]>([]);
    const [ratingFilters, setRatingFilters] = useState<string[]>([]);
    
    const accordionStyle = {
        background: "none",
        boxShadow: "none",
    };

    const handleBrandFilterChange = (brand: string, checked: boolean) => {
        setBrandFilters((prevFilters) =>
          checked ? [...prevFilters, brand] : prevFilters.filter((f) => f !== brand)
        );
      };
    
      const getPriceRange = (price: number): string => {
        // Define your price range logic here
        // Example: return "Under 500", "500 to 1000", etc.
        if (price < 500) return "Under 500";
        else if (price >= 500 && price < 1000) return "500 to 1000";
        else if (price >= 1000 && price < 3000) return "1000 to 3000";
        else return "Above 3000";
      };
    
      const applyFilters = () => {
        const filteredItems = data
          .filter((item) => {
            if (brandFilters.length === 0) {
              return true; // No brand filter selected, include all items
            } else {
              // Check if the item's company is in the selected brands or is "Others"
              return (
                brandFilters.includes(item.company_Name) ||
                (brandFilters.includes('Others') && !['H&M', 'Mango'].includes(item.company_Name))
              );
            }
          })
          .filter(
            (item) =>
              priceFilters.length === 0 || priceFilters.includes(getPriceRange(item.updated_price))
          )
          .filter((item) => ratingFilters.length === 0 || ratingFilters.includes(item.rating));
      
        // Call the onFilterChange prop with the filtered items
        onFilterChange(filteredItems);
      };
      

      React.useEffect(() => {
        applyFilters();
      }, [brandFilters, priceFilters, ratingFilters]);

  return (
    <div>
      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Mango" onChange={(e) => handleBrandFilterChange("Mango", (e.target as HTMLInputElement).checked)} />
            <FormControlLabel control={<Checkbox />} label="H&M" onChange={(e) => handleBrandFilterChange("H&M", (e.target as HTMLInputElement).checked)} />
            <FormControlLabel control={<Checkbox />} label="Others" onChange={(e) => handleBrandFilterChange("Others", (e.target as HTMLInputElement).checked)} />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Under 500" onChange={(e) =>
                setPriceFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "Under 500"]
                    : prevFilters.filter((f) => f !== "Under 500")
                )
              } />
            <FormControlLabel control={<Checkbox />} label="500 to 1000" onChange={(e) =>
                setPriceFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "500 to 1000"]
                    : prevFilters.filter((f) => f !== "500 to 1000")
                )
              } />
            <FormControlLabel control={<Checkbox />} label="1000 to 3000" onChange={(e) =>
                setPriceFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "1000 to 3000"]
                    : prevFilters.filter((f) => f !== "1000 to 3000")
                )
              } />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="⭐⭐⭐⭐⭐" onChange={(e) =>
                setRatingFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "⭐⭐⭐⭐⭐"]
                    : prevFilters.filter((f) => f !== "⭐⭐⭐⭐⭐")
                )
              } />
            <FormControlLabel control={<Checkbox />} label="⭐⭐⭐⭐" onChange={(e) =>
                setRatingFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "⭐⭐⭐⭐"]
                    : prevFilters.filter((f) => f !== "⭐⭐⭐⭐")
                )
              } />
            <FormControlLabel control={<Checkbox />} label="⭐⭐⭐" onChange={(e) =>
                setRatingFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "⭐⭐⭐"]
                    : prevFilters.filter((f) => f !== "⭐⭐⭐")
                )
              } />
            <FormControlLabel control={<Checkbox />} label="⭐⭐" onChange={(e) =>
                setRatingFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "⭐⭐"]
                    : prevFilters.filter((f) => f !== "⭐⭐")
                )
              } />
            <FormControlLabel control={<Checkbox />} label="⭐" onChange={(e) =>
                setRatingFilters((prevFilters) =>
                (e.target as HTMLInputElement).checked
                    ? [...prevFilters, "⭐"]
                    : prevFilters.filter((f) => f !== "⭐")
                )
              } />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;