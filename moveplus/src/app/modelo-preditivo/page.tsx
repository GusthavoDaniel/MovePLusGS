"use client";

import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { Line } from "react-chartjs-2";

export default function ModeloPreditivoPage() {
  const [kmMes, setKmMes] = useState<number | null>(null);
  const [resultado, setResultado] = useState<{ co2Evitado: number[]; economia: number[] } | null>(null);

  const calcularImpacto = () => {
    if (!kmMes || kmMes <= 0) return;

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
    const co2PorKm = 0.25; 
    const custoCombustivelPorKm = 0.6; 
    const custoEletricoPorKm = 0.2; 

    const co2Evitado = meses.map(() => kmMes * co2PorKm);
    const economia = meses.map(() => kmMes * (custoCombustivelPorKm - custoEletricoPorKm));

    setResultado({ co2Evitado, economia });
  };

  const data = resultado
    ? {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
          {
            label: "CO₂ Evitado (kg)",
            data: resultado.co2Evitado,
            borderColor: "green",
            fill: false,
          },
          {
            label: "Economia (R$)",
            data: resultado.economia,
            borderColor: "blue",
            fill: false,
          },
        ],
      }
    : null;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Modelo Preditivo: Impacto Sustentável</Typography>
      <TextField
        label="Km Percorridos por Mês"
        fullWidth
        margin="normal"
        type="number"
        value={kmMes || ""}
        onChange={(e) => setKmMes(parseFloat(e.target.value))}
      />
      <Button variant="contained" color="primary" onClick={calcularImpacto}>
        Calcular
      </Button>
      {resultado && data && (
        <Box mt={4}>
          <div style={{ height: "400px" }}>
            <Line data={data} options={{ responsive: true }} />
          </div>
        </Box>
      )}
    </Container>
  );
}
