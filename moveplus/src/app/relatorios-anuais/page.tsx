import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const relatorios = [
  { ano: "2023", descricao: "Redução de 30% nas emissões de CO₂ nas cidades atendidas." },
  { ano: "2022", descricao: "200 mil km percorridos com veículos elétricos." },
  { ano: "2021", descricao: "10 novas estações de recarga instaladas." },
];

export default function RelatoriosPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Relatórios de Sustentabilidade</Typography>
      <List>
        {relatorios.map((relatorio, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Ano: ${relatorio.ano}`} secondary={relatorio.descricao} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
