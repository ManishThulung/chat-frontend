"use client";

import { api } from "@/config/axios";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../loader/Loader";
import { useEffect, useRef, useState } from "react";
import { useSocket } from "../providers/socket-provider";
import { UserAvatar } from "../avatar/UserAvatar";

const ChatMessages = ({
  chatId,
  userId,
}: {
  chatId: string;
  userId: string;
}) => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<any[]>([])
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket?.on("sendMessage", (message: any) => {
      setMessages(preData=> [...preData, message]);
    });
  
    return () => {
      socket?.off("sendMessage");
      // socket.off(updateKey);
    };
  }, [socket]);

  const getMessages = async () => {
    const res = await api.get(`/chats/messages?chatId=${chatId}`);
    res && setMessages(res?.data?.data);
    return res?.data?.data
  };

  const { isLoading, error } = useQuery({
    queryKey: [chatId],
    queryFn: getMessages,
  });

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  if (error) {
    return <div>Error Ocurred</div>;
  }

  return (
    <div className="overflow-y-auto p-5">
      {!isLoading && messages ? (
        messages?.map((message: any) => (
          <div
            key={message?._id}
            className={`flex gap-3 font-medium mb-3 ${
              message?.sender?._id !== userId
                ? "bg-white justify-start"
                : " justify-end"
            }`}
          >
            <div>{message?.content}</div>
            <UserAvatar name={message?.sender?.name} />
          </div>
        ))
      ) : (
        <Loader />
      )}
      <div ref={ref}/>
    </div>
  ); 
};

export default ChatMessages;
