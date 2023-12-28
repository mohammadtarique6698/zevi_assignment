import React from 'react'
import { Typography } from '@mui/material'
import Data from "../../../Faker API/SearchSuggestion/suggestion"
import Card from "../Suggestion_Box/Card/Card"

const Suggestion_Box: React.FC = () => {
  return (
    <div className="box_s">
      <Typography variant="h5" sx={{marginBottom: "1rem"}}><b style={{fontWeight: "600"}}>{Data.Heading}</b></Typography>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      {Data.Hero.map((hero, index) => (
        <Card key={index} imageURL={hero.image_URL} pName={hero.product_Name} />
      ))}
      </div>
      <div className="popular_suggestion">
        <Typography variant="h5" sx={{marginTop: "1.5rem"}}><b style={{fontWeight: "700"}}>Popular Suggestions</b></Typography>
        <div style={{marginTop: "0.5rem", cursor: "pointer"}}>
          {Data.Popular_Suggestions.map((str, index) => (
          <Typography key={index}><b style={{fontWeight: "500"}}>{str}</b></Typography>
        ))}
        </div>
</div>
    </div>
  )
}

export default Suggestion_Box