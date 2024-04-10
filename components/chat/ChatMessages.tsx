"use client";

import { api } from "@/config/axios";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../loader/Loader";
import { useEffect, useState } from "react";
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
  const [messages, setMessages] = useState<any[]>([])
  // const queryClient = useQueryClient();
  const queryKey='messages'

  useEffect(() => {
    socket?.on("sendMessage", (message: any) => {
      console.log(message, "msg")
      setMessages(preData=> [...preData, message]);

      // queryClient.setQueryData([queryKey], (oldData: any) => {
      //   console.log(oldData, "oldData")
      //   if (!oldData || !oldData.pages || oldData.pages.length === 0) {
      //     return {
      //       pages: [
      //         {
      //           items: [message],
      //         },
      //       ],
      //     };
      //   }

      //   const newData = [...oldData.pages];
      //   console.log(newData, "newData");

      //   newData[0] = {
      //     ...newData[0],
      //     items: [message, ...newData[0].items],
      //   };
      //   return {
      //     ...oldData,
      //     pages: newData,
      //   };
      // });
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
    queryKey: [queryKey, chatId],
    queryFn: getMessages,
  });

  if (error) {
    return <div>Error Ocurred</div>;
  }
  console.log(messages, "Messages")

  return (
    <div>
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
    </div>
  ); 
};

export default ChatMessages;
