import { Container, Typography, List, ListItem, Avatar, ListItemText } from "@mui/material";

const ranking = [
  { nome: "João Silva", pontos: 1200, avatar: "/assets/avatar1.png" },
  { nome: "Maria Santos", pontos: 1150, avatar: "/assets/avatar2.png" },
  { nome: "Carlos Oliveira", pontos: 1100, avatar: "/assets/avatar3.png" },
];

export default function RankingUsuariosPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Ranking de Sustentabilidade</Typography>
      <Typography paragraph>
        Confira os usuários que mais contribuíram para a sustentabilidade com o Move Plus+.
      </Typography>
      <List>
        {ranking.map((usuario, index) => (
          <ListItem key={index}>
            <Avatar src={usuario.avatar} />
            <ListItemText primary={usuario.nome} secondary={`Pontos: ${usuario.pontos}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
