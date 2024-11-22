"use client";

import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, Link as MuiLink } from "@mui/material";


const integrantes = [
  {
    rm: "554681",
    nome: "Gusthavo Daniel de Souza",
    turma: "1TDSPJ",
    foto: "/assets/gu.jpg", 
    github: "https://github.com/GusthavoDaniel/MovePLusGS",
    linkedin: "https://www.linkedin.com/in/gusthavo-de-souza-571a86197/",
  },
  {
    rm: "555161",
    nome: "Lucas Miranda Leite",
    turma: "1TDSPJ",
    foto: "/assets/lucas.png",
    github: "https://github.com/mariaoliveira",
    linkedin: "https://linkedin.com/in/mariaoliveira",
  },
  {
    rm: "555839",
    nome: "Pietro Saccarrao Cougo",
    turma: "1TDSPY",
    foto: "/assets/Pietro.jpg",
    github: "https://github.com/Pietrosaka",
    linkedin: "https://www.linkedin.com/in/pietro-saccarr%C3%A3o-cougo/",
  },
  
];

export default function IntegrantesPage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
        Integrantes do Grupo
      </Typography>
      <Grid container spacing={4}>
        {integrantes.map((integrante, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
              <CardMedia
                component="img"
                alt={`Foto de ${integrante.nome}`}
                height="200"
                image={integrante.foto} 
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {integrante.nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  RM: {integrante.rm}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Turma: {integrante.turma}
                </Typography>
                <Box sx={{ marginTop: 2, display: "flex", gap: 2 }}>
                  <MuiLink href={integrante.github} target="_blank" rel="noopener" color="primary">
                    GitHub
                  </MuiLink>
                  <MuiLink href={integrante.linkedin} target="_blank" rel="noopener" color="primary">
                    LinkedIn
                  </MuiLink>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
