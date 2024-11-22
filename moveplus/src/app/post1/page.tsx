import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import CommuteIcon from "@mui/icons-material/Commute";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

export default function Post1Page() {
  return (
    <Container sx={{ padding: 4 }}>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#3c6e47" }}>
          5 Dicas de Mobilidade Sustentável
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#4c4c4c" }}>
          Pequenas mudanças podem gerar grandes impactos para o meio ambiente.
        </Typography>
      </Box>

      <List sx={{ marginBottom: 4 }}>
        <ListItem>
          <ListItemIcon>
            <CommuteIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Use transporte público sempre que possível." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DirectionsBikeIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Considere bicicletas ou scooters para curtas distâncias." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Planeje rotas eficientes para economizar tempo e combustível." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DirectionsCarIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Participe de caronas para compartilhar custos e reduzir emissões." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ElectricCarIcon color="success" />
          </ListItemIcon>
          <ListItemText primary="Adote veículos elétricos ou híbridos quando possível." />
        </ListItem>
      </List>

      <Box sx={{ backgroundColor: "#e8f5e9", padding: 3, borderRadius: 2, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h6" gutterBottom sx={{ color: "#3c6e47" }}>
          Pequenas mudanças para um futuro sustentável
        </Typography>
        <Typography>
          A mobilidade sustentável não só contribui para a preservação do meio ambiente, mas também melhora a qualidade de vida nas cidades. 
          Comece com uma dessas dicas e inspire mudanças positivas!
        </Typography>
      </Box>
    </Container>
  );
}
