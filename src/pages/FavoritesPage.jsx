import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import FavoritesService from "../services/favoritesService"; // Import the service

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Favori araçları al ve state'e set et
    setFavorites(FavoritesService.getFavorites());
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ fontSize: "55px", fontWeight: "bold", color: "rgb(255,0,71)" }}>
        Favori Araçlarınız
      </Typography>
      <Grid container spacing={2}>
        {favorites.map((tool, index) => (
          <Grid item xs={4} key={index}>
            <Box sx={{ border: "1px solid rgb(255,0,71)", padding: 2, borderRadius: 2 }}>
              <Typography variant="h6">{tool.name}</Typography>
              {/* Diğer araç detayları */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
