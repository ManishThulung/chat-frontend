"use client";

import { api } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import { useSocket } from "../providers/socket-provider";
import { UserAvatar } from "../avatar/UserAvatar";

const ChatMessages = ({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}) => {
  const { socket, isConnected } = useSocket();
  console.log(isConnected, "isConnected");
  let msg: string;
  useEffect(() => {
    socket?.on("messages", (message: any) => {
      msg = message?.content;
    });
  }, [socket]);

  const getMessages = async () => {
    const res = await api.get(`/chats/messages?chatId=${chatId}`);
    return res?.data?.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["messages", chatId],
    queryFn: getMessages,
  });

  if (error) {
    return <div>Error Ocurred</div>;
  }

  return (
    <div>
      {!isLoading && data ? (
        data?.map((message: any) => (
          <div
            key={message?._id}
            className={`flex gap-3 font-medium mb-3 ${
              message?.sender?._id !== userId
                ? "bg-white justify-start"
                : " justify-end"
            }`}
          >
            <div>{msg}</div>
            <UserAvatar name={message?.sender?.name} />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  ); 
};

export default ChatMessages;
