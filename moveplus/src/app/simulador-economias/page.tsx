"use client";

import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function SimuladorEconomiasPage() {
  const [km, setKm] = useState("");
  const [resultado, setResultado] = useState<{ economia: number; co2: number } | null>(null);

  const calcularEconomia = () => {
    const kmPercorrido = parseFloat(km);
    const economia = (kmPercorrido * 0.6).toFixed(2); 
    const co2Evitado = (kmPercorrido * 0.25).toFixed(2); 
    setResultado({ economia: parseFloat(economia), co2: parseFloat(co2Evitado) });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Simulador de Economia</Typography>
      <Typography paragraph>
        Descubra quanto você pode economizar e reduzir em emissões de CO₂ ao usar veículos elétricos.
      </Typography>
      <TextField
        label="Km Percorridos por Mês"
        fullWidth
        margin="normal"
        value={km}
        onChange={(e) => setKm(e.target.value)}
        type="number"
      />
      <Button variant="contained" color="primary" onClick={calcularEconomia}>
        Calcular Economia
      </Button>
      {resultado && (
        <Box mt={4}>
          <Typography>
            Economia Mensal Estimada: R$ {resultado.economia}
          </Typography>
          <Typography>
            Emissões de CO₂ Evitadas: {resultado.co2} kg
          </Typography>
        </Box>
      )}
    </Container>
  );
}
