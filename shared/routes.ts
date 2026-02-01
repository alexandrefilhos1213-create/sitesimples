import { z } from 'zod';
import { eras } from './schema';

export const api = {
  eras: {
    list: {
      method: 'GET' as const,
      path: '/api/eras',
      responses: {
        200: z.array(z.custom<typeof eras.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/eras/:id',
      responses: {
        200: z.custom<typeof eras.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
