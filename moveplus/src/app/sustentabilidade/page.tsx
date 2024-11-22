import { Container, Typography, List, ListItem, ListItemText, Box, Card, CardContent, Grid } from "@mui/material";

const parcerias = [
  {
    nome: "Ultragaz",
    descricao: "Estações de recarga movidas a energia renovável para um futuro mais verde.",
    
  },
  {
    nome: "EcoCharge",
    descricao: "Soluções avançadas de armazenamento de energia sustentável.",
    
  },
  {
    nome: "Mobility+",
    descricao: "Frota de veículos elétricos integrados e conectados à nossa rede.",
    
  },
];

export default function SustentabilidadePage() {
  return (
    <Container>
      {/* Título e Introdução */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Sustentabilidade e Parcerias Estratégicas
        </Typography>
        <Typography paragraph>
          No Move Plus+, acreditamos que a sustentabilidade é um esforço colaborativo. Por isso, trabalhamos com parceiros estratégicos para desenvolver soluções inovadoras e sustentáveis, ajudando a transformar o futuro da mobilidade urbana.
        </Typography>
      </Box>

      {/* Benefícios da Sustentabilidade */}
      <Box
        sx={{
          backgroundColor: "#e8f5e9",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: 4,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Nossos Compromissos com a Sustentabilidade
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Reduzir a pegada de carbono por meio de tecnologias limpas." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Promover a adoção de veículos elétricos e energias renováveis." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Investir em pesquisa e desenvolvimento de infraestrutura sustentável." />
          </ListItem>
        </List>
      </Box>

      {/* Parcerias Estratégicas */}
      <Typography variant="h5" gutterBottom>
        Nossos Parceiros Estratégicos
      </Typography>
      <Grid container spacing={4}>
        {parcerias.map((parceria, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <Box sx={{ textAlign: "center", padding: 2 }}>
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3c6e47" }}>
                  {parceria.nome}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4c4c4c" }}>
                  {parceria.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
