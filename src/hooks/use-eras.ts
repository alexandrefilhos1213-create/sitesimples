import { useState, useEffect } from 'react';
import { eras, type Era } from '../data/eras';

export function useEras() {
  const [data, setData] = useState<Era[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      try {
        setData(eras);
        setIsLoading(false);
      } catch (err) {
        setError("Falha ao buscar eras");
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading, error };
}

export function useEra(id: number) {
  const [data, setData] = useState<Era | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const era = eras.find(e => e.id === id) || null;
        setData(era);
        setIsLoading(false);
      } catch (err) {
        setError("Falha ao buscar era");
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  return { data, isLoading, error };
}
