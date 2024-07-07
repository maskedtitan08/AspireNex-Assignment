import { Liveblocks } from "@liveblocks/node";

export async function PUT(req) {
  const { id, update } = await req.json();
  const liveblocks = new Liveblocks({ secret: process.env.LIVEBLOCKS_SECRET_KEY });
  console.log({ id, update });
  await liveblocks.updateRoom(id, update);
  return Response.json(true);
}
