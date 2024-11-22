"use client";

import { useState } from "react";
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, TextField } from "@mui/material";

interface Station {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function InfraestruturaRecargaPage() {
  const [location, setLocation] = useState<string>("");
  const [stations, setStations] = useState<Station[]>([]);
  const [showStations, setShowStations] = useState<boolean>(false);

  const mockStations: Station[] = [
    { id: 1, name: "Estação Central", image: "/assets/station1.jpg", description: "Localizada no centro da cidade." },
    { id: 2, name: "Estação Norte", image: "/assets/station2.jpg", description: "Próxima ao parque da cidade." },
    { id: 3, name: "Estação Sul", image: "/assets/station3.jpg", description: "Localizada no bairro residencial." },
  ];

  const handleSearch = () => {
    if (location.trim() !== "") {
      setStations(mockStations);
      setShowStations(true);
    } else {
      setStations([]);
      setShowStations(false);
    }
  };

  return (
    <Container sx={{ padding: 4, backgroundColor: "#f5f9f5" }}>
      {/* Cabeçalho */}
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
          Infraestrutura de Recarga
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#4c4c4c" }}>
          Descubra nossas soluções para recarga eficiente e sustentável.
        </Typography>
      </Box>

      {/* Localizador de Estações */}
      <Box
        sx={{
          marginBottom: 6,
          padding: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}>
          Encontre uma Estação de Recarga
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Insira sua localização e encontre os pontos de recarga mais próximos.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            label="Digite sua localização"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "#f9f9f9" }}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#3c6e47", color: "#ffffff" }}
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Box>
      </Box>

      {/* Como Funciona */}
      <Box
        sx={{
          marginBottom: 6,
          padding: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}>
          Como Funciona?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          1. Encontre a estação mais próxima usando nosso localizador.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          2. Conecte seu veículo ao ponto de recarga disponível.
        </Typography>
        <Typography variant="body1">
          3. Acompanhe o progresso de recarga no seu dispositivo ou pela nossa plataforma.
        </Typography>
      </Box>

      {/* Resultado das Estações */}
      {showStations && (
        <Box
          sx={{
            marginBottom: 6,
            padding: 4,
            backgroundColor: "#ffffff",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}
          >
            Estações de Recarga Encontradas
          </Typography>
          <Grid container spacing={4}>
            {stations.map((station) => (
              <Grid item xs={12} sm={6} md={4} key={station.id}>
                <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={station.image}
                    alt={station.name}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
                      {station.name}
                    </Typography>
                    <Typography variant="body2">{station.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Estatísticas */}
      <Box
        sx={{
          marginBottom: 6,
          padding: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#3c6e47", marginBottom: 2 }}>
          Impacto Positivo
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
              95% de Energia Limpa
            </Typography>
            <Typography>Reduzimos a dependência de combustíveis fósseis.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
              30k Veículos Atendidos
            </Typography>
            <Typography>Nosso sistema já atendeu milhares de usuários.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
              20% Mais Eficiência
            </Typography>
            <Typography>Carregamento mais rápido em nossas estações.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
