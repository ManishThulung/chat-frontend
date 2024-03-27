"use client";

import { api } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import { useSocket } from "../providers/socket-provider";

const ChatMessages = ({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}) => {
  const { socket } = useSocket();

  useEffect(() => {
    socket?.on("msg", (message: any) => {
      console.log(message, "message");
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
            key={message?.id}
            className={`font-medium ${
              message?.sender?._id !== userId
                ? "bg-white text-left"
                : " text-right"
            }`}
          >
            {message.content}
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ChatMessages;
