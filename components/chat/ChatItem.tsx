"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSocket } from "../providers/socket-provider";
import { api } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";
import { UserAvatar } from "../avatar/UserAvatar";
import { ChatWelcome } from "./ChatWelcome";

const ChatItem = ({
  chatId,
  senderId,
}: {
  chatId: string;
  senderId: string;
}) => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket?.on("sendMessage", (message: any) => {
      setMessages((preData) => [...preData, message]);
    });

    return () => {
      socket?.off("sendMessage");
      // socket.off(updateKey);
    };
  }, [socket]);

  const getMessages = async () => {
    if (!chatId) return;
    const res = await api.get(`/chats/messages?chatId=${chatId}`);
    res && setMessages(res?.data?.data);
    return res?.data?.data;
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
    <>
      <ChatWelcome type="one-to-one" />

      {!isLoading && messages ? (
        messages?.map((message: any) => (
          <div
            key={message?._id}
            className={`flex gap-3 font-medium mb-3 ${
              message?.sender?._id !== senderId
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
      <div ref={ref} />
    </>
  );
};

export default ChatItem;
