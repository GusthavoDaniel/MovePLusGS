import { Container, Typography } from "@mui/material";

export default function TermosPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Termos e Políticas</Typography>
      <Typography paragraph>
        Leia atentamente os nossos Termos de Serviço e Política de Privacidade antes de usar o Move Plus+.
      </Typography>
      <Typography variant="h6" gutterBottom>Termos de Serviço</Typography>
      <Typography paragraph>
        Ao utilizar o Move Plus+, você concorda em respeitar as regras estabelecidas para manter um ambiente seguro e eficiente.
      </Typography>
      <Typography variant="h6" gutterBottom>Política de Privacidade</Typography>
      <Typography paragraph>
        Seus dados são tratados com confidencialidade e utilizados apenas para oferecer a melhor experiência possível. 
      </Typography>
    </Container>
  );
}
