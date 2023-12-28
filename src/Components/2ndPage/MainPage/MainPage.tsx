import React, {useState} from 'react'
import "./MainPage.scss"
import { Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../../Components/Logo/Logo"
import data, {Item} from "../../../Faker API/Page2ndData/Page2ndData"
import Card from "../Card/Card"
import Filter from '../Filter/Filter';

interface Color {
    color: string,
}

const MainPage: React.FC<Color> = ({color}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = React.useState<Item[]>(data);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        filterData(event.target.value);
      };
    
      const filterData = (search: string) => {
        const lowerCaseSearch = search.toLowerCase();
        const filteredItems = data.filter(
          (item) =>
            item.product_Name.toLowerCase().includes(lowerCaseSearch) ||
            item.company_Name.toLowerCase().includes(lowerCaseSearch)
        );
        setFilteredData(filteredItems);
      };

  const handleFilterChange = (filteredItems: Item[]) => {
    setFilteredData(filteredItems);
  };

    return (
        <div className="container">
            <div>
                <TextField
                    label="Search"
                    style={{ width: "auto", borderRadius: "3rem" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
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
