"use client"; 

import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3c6e47",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Sobre Nós e Contato */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Sobre Nós
          </Typography>
          <Typography variant="body2">
            O Move Plus+ é dedicado a criar soluções sustentáveis para a mobilidade urbana,
            conectando pessoas e cidades de forma inteligente.
          </Typography>
        </Grid>

        {/* Contato */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contato
          </Typography>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Email sx={{ marginRight: "8px" }} /> contato@moveplus.com
          </Typography>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Phone sx={{ marginRight: "8px" }} /> +55 (11) 1234-5678
          </Typography>
        </Grid>

        {/* Redes Sociais */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Siga-nos
          </Typography>
          <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: "#ffffff" }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: "#ffffff" }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: "#ffffff" }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: "#ffffff" }}>
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>

      {/* Linha de Direitos Autorais */}
      <Box sx={{ marginTop: 3, borderTop: "1px solid #ffffff", paddingTop: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Move Plus+. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
