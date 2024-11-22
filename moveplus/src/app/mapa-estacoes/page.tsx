"use client";

import { Container, Typography, Box } from "@mui/material";
import Map from "../components/Map";

export default function MapaEstacoesPage() {
  return (
    <Container sx={{ padding: 4 }}>
      <Box
        sx={{
          textAlign: "center",
          paddingY: 4,
          backgroundColor: "#e8f5e9",
          borderRadius: 2,
          marginBottom: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
          Mapa de Estações de Recarga
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#4c4c4c" }}>
          Localize facilmente as estações de recarga próximas a você.
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 2,
          padding: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Map />
      </Box>
    </Container>
  );
}
