import React from 'react'
import "./MainPage.scss"
import Filter from "../Filter/Filter"
import { Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../../Components/Logo/Logo"
import data, {Item} from "../../../Faker API/Page2ndData/Page2ndData"
import Card from "../Card/Card"

interface Color {
    color: string,
}

const MainPage: React.FC<Color> = ({color}) => {
    const [filteredData, setFilteredData] = React.useState<Item[]>(data);

  const handleFilterChange = (filteredItems: Item[]) => {
    setFilteredData(filteredItems);
  };

    return (
        <div className="container">
            <TextField
                label="Search"
                style={{ minWidth: "auto", width: "20rem", borderRadius: "3rem" }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <div>
                <Logo color={color} />
            </div>
            <div className="container-grid">
                <div>
                    <Typography variant="h3">Search Results</Typography>
                    <div style={{ marginTop: "2rem", marginLeft: "1.2rem" }}>
                        <Filter data={data} onFilterChange={handleFilterChange}/>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "1.5rem" }}>
                {filteredData.map((currentItem, idx) => (
                    <Card
                    key={idx}
                    imageURL={currentItem.image_URL}
                    pName={currentItem.product_Name}
                    company={currentItem.company_Name}
                    oldprice={currentItem.old_price}
                    newprice={currentItem.updated_price}
                    rating={currentItem.rating}
                    view={currentItem.view}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default MainPage;
