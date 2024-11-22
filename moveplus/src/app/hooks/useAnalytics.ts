import { useEffect } from "react";

export function useAnalytics() {
  useEffect(() => {
    console.log("Analytics carregado!");
    // Implemente integração com Google Analytics ou Matomo aqui.
  }, []);
}
