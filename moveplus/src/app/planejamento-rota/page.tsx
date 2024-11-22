"use client";

import { useState } from "react";
import { Container, Typography, TextField, Button, Box, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function PlanejamentoRotaPage() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [meioTransporte, setMeioTransporte] = useState("");
  const [rota, setRota] = useState<{
    distancia: string;
    tempo: string;
    custo: string;
  } | null>(null);

  const calcularRota = () => {
    if (origem.trim() === "" || destino.trim() === "" || meioTransporte === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    
    const mockData = {
      distancia: "15 km",
      tempo: meioTransporte === "carro" ? "25 minutos" : meioTransporte === "bicicleta" ? "45 minutos" : "1 hora",
      custo: meioTransporte === "carro" ? "R$ 10,00" : meioTransporte === "bicicleta" ? "Grátis" : "R$ 5,00",
    };

    setRota(mockData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Planejamento de Rota
      </Typography>
      <Typography paragraph>
        Insira sua origem, destino e escolha um meio de transporte para planejar uma rota inteligente.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "400px",
          marginTop: 3,
        }}
      >
        <TextField
          label="Origem"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
          fullWidth
        />
        <TextField
          label="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Meio de Transporte</InputLabel>
          <Select
            value={meioTransporte}
            onChange={(e) => setMeioTransporte(e.target.value)}
          >
            <MenuItem value="carro">Carro</MenuItem>
            <MenuItem value="bicicleta">Bicicleta</MenuItem>
            <MenuItem value="transporte-publico">Transporte Público</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={calcularRota}
          sx={{
            backgroundColor: "#3c6e47",
            "&:hover": { backgroundColor: "#2a4f34" },
          }}
        >
          Calcular Rota
        </Button>
      </Box>

      {rota && (
        <Card
          sx={{
            marginTop: 4,
            padding: 2,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Resultado da Rota
            </Typography>
            <Typography variant="body1">
              <strong>Origem:</strong> {origem}
            </Typography>
            <Typography variant="body1">
              <strong>Destino:</strong> {destino}
            </Typography>
            <Typography variant="body1">
              <strong>Distância:</strong> {rota.distancia}
            </Typography>
            <Typography variant="body1">
              <strong>Tempo Estimado:</strong> {rota.tempo}
            </Typography>
            <Typography variant="body1">
              <strong>Custo Estimado:</strong> {rota.custo}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Box
        sx={{
          marginTop: 6,
          padding: 4,
          backgroundColor: "#e8f5e9",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Benefícios do Planejamento Inteligente
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          🌍 Reduza emissões de carbono ao escolher rotas mais eficientes.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          ⏱ Economize tempo ao evitar congestionamentos.
        </Typography>
        <Typography variant="body1">
          🚗 Planeje paradas em pontos estratégicos, como estações de recarga.
        </Typography>
      </Box>
    </Container>
  );
}
