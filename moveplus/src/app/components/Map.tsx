"use client";

import { Container, Box, Typography } from "@mui/material";

export default function MapStatic() {
  return (
    <Container sx={{ textAlign: "center", padding: 4 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: 2, color: "#3c6e47" }}
      >
        Mapa de Estações
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4, color: "#4c4c4c" }}>
        Aqui estão os pontos de recarga disponíveis próximos à sua localização.
      </Typography>
      <Box
        sx={{
          maxWidth: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <iframe
          title="Mapa de Estações"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.5639161502943!2d-46.65401636146317!3d-23.56385193521723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1714179121735!5m2!1spt-BR!2sbr"
          style={{
            width: "100%",
            height: "400px",
            border: "0",
          }}
          allowFullScreen
          loading="lazy"
        />
      </Box>
    </Container>
  );
}
