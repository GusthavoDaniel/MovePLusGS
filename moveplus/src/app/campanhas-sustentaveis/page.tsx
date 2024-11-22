import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";

const campanhas = [
  { titulo: "Plante uma Árvore", descricao: "Ajude a plantar árvores acumulando pontos.", ativa: true },
  { titulo: "Semana da Mobilidade Elétrica", descricao: "Ganhe recompensas ao usar veículos elétricos.", ativa: false },
];

export default function CampanhasPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Campanhas Sustentáveis</Typography>
      <Grid container spacing={3}>
        {campanhas.map((campanha, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{campanha.titulo}</Typography>
                <Typography paragraph>{campanha.descricao}</Typography>
                <Typography color={campanha.ativa ? "green" : "gray"}>
                  {campanha.ativa ? "Ativa" : "Encerrada"}
                </Typography>
              </CardContent>
              <CardActions>
                {campanha.ativa && (
                  <Button size="small" variant="contained" color="primary">
                    Participar
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
