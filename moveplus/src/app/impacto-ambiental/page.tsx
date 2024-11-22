"use client";

import { Container, Typography, Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function ImpactoAmbientalPage() {
  const [impacto, setImpacto] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const calcularImpacto = () => {
    setLoading(true);
    setTimeout(() => {
      const valorImpacto = Math.floor(Math.random() * 1000 + 100); 
      setImpacto(valorImpacto);
      setLoading(false);
    }, 1500); 
  };

  return (
    <Container sx={{ padding: 4 }}>
      {/* Cabeçalho */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 4,
          color: "#3c6e47",
        }}
      >
        Impacto Ambiental
      </Typography>

      {/* Descrição */}
      <Typography paragraph>
        Descubra o impacto ambiental positivo que você pode gerar utilizando nossas soluções sustentáveis. Com a
        utilização de veículos elétricos, energias renováveis e planejamento eficiente de rotas, você contribui para um
        futuro mais verde.
      </Typography>

      {/* Benefícios */}
      <Box
        sx={{
          backgroundColor: "#e8f5e9",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Benefícios de Reduzir Emissões:
        </Typography>
        <ul>
          <li>Redução da poluição do ar e melhoria da qualidade de vida.</li>
          <li>Conservação de recursos naturais e uso de energia limpa.</li>
          <li>Contribuição para o combate às mudanças climáticas.</li>
        </ul>
      </Box>

      {/* Cálculo do Impacto */}
      <Box textAlign="center" sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {impacto !== null
            ? `Você já economizou aproximadamente ${impacto} kg de CO2!`
            : "Calcule seu impacto ambiental positivo!"}
        </Typography>

        {/* Botão de Cálculo */}
        <Button
          variant="contained"
          color="success"
          onClick={calcularImpacto}
          sx={{ fontWeight: "bold", paddingX: 4 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Calcular Impacto"}
        </Button>
      </Box>

      {/* Gráfico ou Indicador Visual */}
      {impacto !== null && (
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: 3,
            borderRadius: 2,
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Seu impacto ambiental é equivalente a:
          </Typography>
          <ul>
            <li>{(impacto / 10).toFixed(1)} árvores plantadas.</li>
            <li>{(impacto / 50).toFixed(1)} litros de combustível economizados.</li>
            <li>{(impacto / 30).toFixed(1)} dias de energia para uma casa.</li>
          </ul>
        </Box>
      )}
    </Container>
  );
}
