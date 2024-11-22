import { Container, Typography, FormGroup, FormControlLabel, Checkbox, Button, Snackbar } from "@mui/material";
import { useState } from "react";

export default function NotificacoesPage() {
  const [configuracoes, setConfiguracoes] = useState({
    promo: true,
    eventos: false,
    novidades: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfiguracoes({ ...configuracoes, [e.target.name]: e.target.checked });
  };

  const [open, setOpen] = useState(false);

  const handleSave = () => setOpen(true);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Configuração de Notificações</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={configuracoes.promo} onChange={handleChange} name="promo" />}
          label="Promoções e Descontos"
        />
        <FormControlLabel
          control={<Checkbox checked={configuracoes.eventos} onChange={handleChange} name="eventos" />}
          label="Eventos Próximos"
        />
        <FormControlLabel
          control={<Checkbox checked={configuracoes.novidades} onChange={handleChange} name="novidades" />}
          label="Novidades no Move Plus+"
        />
      </FormGroup>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Salvar Configurações
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="Configurações salvas com sucesso!"
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}
