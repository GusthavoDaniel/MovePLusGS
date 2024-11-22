import { Container, Typography, Box } from "@mui/material";

export default function Post3Page() {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}
      >
        Impacto das Mudanças Climáticas
      </Typography>
      <Box>
        <Typography paragraph>
          As mudanças climáticas representam um dos maiores desafios da nossa era. Entender suas causas e impactos é essencial para agir.
        </Typography>
        <Typography paragraph>
          <strong>Causas Principais:</strong> A queima de combustíveis fósseis, desmatamento e agricultura intensiva são os principais fatores que contribuem para o aumento das emissões de gases de efeito estufa.
        </Typography>
        <Typography paragraph>
          <strong>Impactos:</strong> Eventos climáticos extremos, aumento do nível do mar e perda de biodiversidade estão entre os efeitos mais evidentes.
        </Typography>
        <Typography paragraph>
          <strong>O que podemos fazer?</strong>
        </Typography>
        <Box component="ul" sx={{ paddingLeft: 3 }}>
          <li>Reduzir o uso de plásticos descartáveis.</li>
          <li>Adotar fontes de energia renovável.</li>
          <li>Investir em transporte público ou veículos elétricos.</li>
          <li>Plantar árvores e apoiar projetos de reflorestamento.</li>
        </Box>
      </Box>
    </Container>
  );
}
