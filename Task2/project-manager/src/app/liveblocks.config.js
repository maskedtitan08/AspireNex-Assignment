import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
});
export const {
  RoomProvider,
  useMyPresence,
  useUpdateMyPresence,
  useStorage,
  useMutation,
  useRoom,
  useSelf,
  useOthers,
  useThreads,
} = createRoomContext(
  client,
  {
    resolveUsers: async ({ userIds }) => {
      const response = await fetch(`/api/users?ids=` + userIds.join(','));
      return await response.json();
    },
    resolveMentionSuggestions: async ({ text }) => {
      const response = await fetch(`/api/users?search=` + text);
      const users = await response.json();
      return users.map(user => user.id);
    },
  }
);
