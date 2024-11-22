"use client";

import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, Link as MuiLink } from "@mui/material";

// Dados de exemplo dos integrantes
const integrantes = [
  {
    rm: "554681",
    nome: "Gusthavo Daniel de Souza",
    turma: "1TDSPJ",
    foto: "/assets/gu.jpg", // Substitua pelo caminho real da imagem
    github: "https://github.com/joaosilva",
    linkedin: "https://linkedin.com/in/joaosilva",
  },
  {
    rm: "555161",
    nome: "Lucas Miranda Leite",
    turma: "1TDSPJ",
    foto: "/assets/maria.jpg",
    github: "https://github.com/mariaoliveira",
    linkedin: "https://linkedin.com/in/mariaoliveira",
  },
  {
    rm: "555839",
    nome: "Pietro Saccarrao Cougo",
    turma: "1TDSPY",
    foto: "/assets/carlos.jpg",
    github: "https://github.com/carlossantos",
    linkedin: "https://linkedin.com/in/carlossantos",
  },
  // Adicione mais integrantes aqui
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
                image={integrante.foto} // Caminho da foto
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
