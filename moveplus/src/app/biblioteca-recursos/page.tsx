import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const recursos = [
  { titulo: "Guia de Mobilidade Sustentável", descricao: "Dicas para adotar práticas sustentáveis.", link: "/recursos/mobilidade.pdf" },
  { titulo: "Energias Renováveis 101", descricao: "Conceitos básicos sobre energia limpa.", link: "/recursos/energia.mp4" },
  { titulo: "Impactos do Aquecimento Global", descricao: "Entenda como suas ações ajudam o planeta.", link: "/recursos/aquecimento.pdf" },
];

export default function BibliotecaRecursosPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Biblioteca de Recursos</Typography>
      <Typography paragraph>Explore materiais educativos e amplie seu conhecimento sobre sustentabilidade.</Typography>
      <Grid container spacing={3}>
        {recursos.map((recurso, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{recurso.titulo}</Typography>
                <Typography paragraph>{recurso.descricao}</Typography>
                <Button variant="contained" color="primary" href={recurso.link} target="_blank">
                  Acessar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
