'use client';
import { RoomProvider } from "@/app/liveblocks.config";
import { BoardContextProvider } from "@/components/BoardContext";
import { LiveList } from "@liveblocks/core";
import { useParams } from "next/navigation";
import React from "react";

export default function BoardLayout({ children, modal }) {
  const params = useParams();
  // console.log(params.boardId.toString());
  return (
    <BoardContextProvider>
      <RoomProvider
        id={params.boardId.toString()}
        initialPresence={{}}
        initialStorage={{
          columns: new LiveList([""]),
          cards: new LiveList([]),
        }}>
        {children}
        {modal}
      </RoomProvider>
    </BoardContextProvider>
  );
}