import { Container, Typography, Box } from "@mui/material";

export default function Post2Page() {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", color: "#3c6e47" }}
      >
        Como Escolher um Veículo Elétrico?
      </Typography>
      <Box>
        <Typography paragraph>
          Escolher um veículo elétrico pode parecer desafiador, mas essas dicas podem ajudar:
        </Typography>
        <Typography paragraph>
          <strong>1.</strong> Avalie sua necessidade diária de deslocamento.
        </Typography>
        <Typography paragraph>
          <strong>2.</strong> Pesquise a infraestrutura de recarga na sua região.
        </Typography>
        <Typography paragraph>
          <strong>3.</strong> Compare modelos de diferentes fabricantes para encontrar o melhor custo-benefício.
        </Typography>
        <Typography paragraph>
          <strong>4.</strong> Considere o custo de manutenção e a durabilidade da bateria.
        </Typography>
        <Typography paragraph>
          <strong>5.</strong> Teste o veículo antes de comprar para garantir conforto e desempenho adequados.
        </Typography>
      </Box>
    </Container>
  );
}
