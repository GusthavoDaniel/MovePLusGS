import { useState, useEffect } from "react";

export function useGeolocation() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setLocation({ lat: position.coords.latitude, lon: position.coords.longitude }),
      () => console.error("Erro ao obter localização")
    );
  }, []);

  return location;
}
