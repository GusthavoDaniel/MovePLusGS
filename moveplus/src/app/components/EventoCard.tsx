import { Card, CardContent, Typography, Button } from "@mui/material";

export default function EventoCard({ titulo, data, link }: { titulo: string; data: string; link: string }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="body2" color="text.secondary">{data}</Typography>
        <Button href={link} variant="contained" color="primary">Saiba Mais</Button>
      </CardContent>
    </Card>
  );
}
