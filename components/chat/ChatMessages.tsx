"use client";

import { api } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { UserAvatar } from "../avatar/UserAvatar";
import Loader from "../loader/Loader";
import { useSocket } from "../providers/socket-provider";
import { ChatWelcome } from "./ChatWelcome";
import ChatItem from "./ChatItem";
import { useChatQuery } from "@/hooks/use-new-chat";
import InputItem from "@/components/chat/InputItem";

const ChatMessages = ({
  senderId,
  receiverId,
  chatId,
}: {
  senderId: string;
  receiverId: string;
  chatId: string;
}) => {
  const { isLoading, error, chat } = useChatQuery({ senderId, receiverId });
  if (isLoading) <Loader />;
  if (error) {
    return <div>error</div>;
  }

  // const { socket } = useSocket();
  // const [messages, setMessages] = useState<any[]>([]);
  // const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   socket?.on("sendMessage", (message: any) => {
  //     setMessages((preData) => [...preData, message]);
  //   });

  //   return () => {
  //     socket?.off("sendMessage");
  //     // socket.off(updateKey);
  //   };
  // }, [socket]);

  // const getMessages = async () => {
  //   if (!chatId) return;
  //   const res = await api.get(`/chats/messages?chatId=${chatId}`);
  //   res && setMessages(res?.data?.data);
  //   return res?.data?.data;
  // };

  // const { isLoading, error } = useQuery({
  //   queryKey: [chatId],
  //   queryFn: getMessages,
  // });

  // useEffect(() => {
  //   if (messages.length) {
  //     ref.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //     });
  //   }
  // }, [messages.length]);

  // if (!chatId) {
  //   return <ChatWelcome type="one-to-one" />;
  // }

  // if (error) {
  //   return <div>Error Ocurred</div>;
  // }

  return (
    <div className="overflow-y-auto p-5">
      {chat ? (
        <ChatItem chatId={chatId ?? chat?._id} senderId={senderId} />
      ) : (
        <ChatWelcome type="one-to-one" />
      )}

      <InputItem chatId={chatId ?? chat?._id} receiverId={receiverId} />

      {/* <ChatWelcome type="one-to-one" /> */}

      {/* {!isLoading && messages ? (
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
      )} */}
      {/* <div ref={ref} /> */}
    </div>
  );
};

export default ChatMessages;
