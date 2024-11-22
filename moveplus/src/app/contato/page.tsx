import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function ContatoPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contato</Typography>
      <Typography paragraph>Entre em contato conosco para dúvidas, sugestões ou parcerias.</Typography>
      <Box>
        <TextField label="Seu Nome" fullWidth margin="normal" />
        <TextField label="Seu Email" fullWidth margin="normal" type="email" />
        <TextField label="Mensagem" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary">Enviar</Button>
      </Box>
    </Container>
  );
}
