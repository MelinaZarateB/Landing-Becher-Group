'use client'

import { useEffect, useState } from "react";

function useNearScreen(elementRef) {
  const [hasBeenNearScreen, setHasBeenNearScreen] = useState(false); // estado para verificar si ya ha estado visible

  useEffect(() => {
    const onChange = (entries) => {
      const entry = entries[0];

      // Si el elemento está intersectando y aún no ha sido visible, lo marcamos como visible permanentemente
      if (entry.isIntersecting && !hasBeenNearScreen) {
        setHasBeenNearScreen(true);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "-30px",
    });

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observar el elemento
    }

    return () => observer.disconnect(); // Limpiar el evento cuando se desmonta el componente
  }, [elementRef, hasBeenNearScreen]); // Añadir hasBeenNearScreen como dependencia para que se actualice correctamente

  return hasBeenNearScreen; // Devolver si ha sido visible al menos una vez
}

export default useNearScreen;
