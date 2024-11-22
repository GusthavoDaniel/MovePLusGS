import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function ChatbotPage() {
  const [mensagem, setMensagem] = useState("");
  const [respostas, setRespostas] = useState<string[]>([]);

  const handleSend = () => {
    let resposta = "Desculpe, não entendi sua pergunta.";
    if (mensagem.toLowerCase().includes("reserva")) {
      resposta = "Você pode reservar veículos na página de 'Mobilidade Elétrica'.";
    } else if (mensagem.toLowerCase().includes("sustentabilidade")) {
      resposta = "Nosso projeto busca reduzir emissões de CO₂ com energia limpa.";
    }
    setRespostas([...respostas, `Usuário: ${mensagem}`, `Bot: ${resposta}`]);
    setMensagem("");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Chatbot Inteligente</Typography>
      <Box>
        {respostas.map((resposta, index) => (
          <Typography key={index}>{resposta}</Typography>
        ))}
      </Box>
      <TextField
        fullWidth
        margin="normal"
        label="Digite sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Enviar
      </Button>
    </Container>
  );
}
