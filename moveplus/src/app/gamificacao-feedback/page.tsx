"use client";

import { Container, Typography, Box, List, ListItem, ListItemText, Button } from "@mui/material";

const conquistas = [
  "Economizou 100 kg de CO2",
  "Utilizou caronas 10 vezes",
  "Planejou 5 rotas sustentáveis",
];

export default function GamificacaoFeedbackPage() {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}>
        Gamificação e Feedback
      </Typography>
      <Typography paragraph>
        Aumente sua pontuação com ações sustentáveis e veja suas conquistas!
      </Typography>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Suas Conquistas:
        </Typography>
        <List>
          {conquistas.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="outlined"
          sx={{ marginTop: 2 }}
          onClick={() => alert("Feedback enviado com sucesso!")}
        >
          Enviar Feedback
        </Button>
      </Box>
    </Container>
  );
}
