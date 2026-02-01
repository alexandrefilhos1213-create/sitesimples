import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

// Ensure schema type matches what we expect from the API
export type Era = z.infer<typeof api.eras.list.responses[200]>[number];

export function useEras() {
  return useQuery({
    queryKey: [api.eras.list.path],
    queryFn: async () => {
      const res = await fetch(api.eras.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch eras");
      return api.eras.list.responses[200].parse(await res.json());
    },
  });
}

export function useEra(id: number) {
  return useQuery({
    queryKey: [api.eras.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.eras.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch era");
      return api.eras.get.responses[200].parse(await res.json());
    },
  });
}
