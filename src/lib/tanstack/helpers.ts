import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 1 Day in milliseconds
      gcTime: 86_400_000,
    },
  },
});

export const createSessionPersister = (key: string, storage: Storage) =>
  createSyncStoragePersister({
    key,
    storage,
  });
