import { useEffect, useState } from "react";

/**
 * Hook para verificar si el cliente está hidratado.
 * @returns {boolean} Estado de hidratación.
 */
export function useHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
