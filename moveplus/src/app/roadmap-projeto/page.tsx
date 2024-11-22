import { Container, Typography, Stepper, Step, StepLabel } from "@mui/material";

const etapas = [
  "2024 - Lançamento nas capitais do Brasil.",
  "2025 - Integração com IA para rotas.",
  "2026 - Expansão para cidades de médio porte.",
  "2027 - Parcerias internacionais e infraestrutura ampliada.",
];

export default function RoadmapPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Roadmap do Projeto</Typography>
      <Typography paragraph>
        Conheça nosso planejamento e os próximos passos para transformar a mobilidade urbana.
      </Typography>
      <Stepper orientation="vertical">
        {etapas.map((etapa, index) => (
          <Step key={index} active>
            <StepLabel>{etapa}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}
