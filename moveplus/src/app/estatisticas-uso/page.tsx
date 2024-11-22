import { Container, Typography, Box } from "@mui/material";

const estatisticas = {
  usuarios: 12000,
  kmPercorridos: 150000,
  co2Evitado: 37500, // Em kg
};

export default function EstatisticasUsoPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Estatísticas de Uso</Typography>
      <Box>
        <Typography variant="h6">Usuários Ativos: {estatisticas.usuarios}</Typography>
        <Typography variant="h6">Km Percorridos: {estatisticas.kmPercorridos} km</Typography>
        <Typography variant="h6">CO₂ Evitado: {estatisticas.co2Evitado} kg</Typography>
      </Box>
    </Container>
  );
}
