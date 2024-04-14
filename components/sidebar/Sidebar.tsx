"use client";
import React from "react";
import ChatNotice from "../chat/ChatNotice";
import { api } from "@/config/axios";
import Loader from "../loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/user.type";

const Sidebar = ({ id }: { id: string }) => {
  const getChatsByUserId = () => {
    return api.get(`/chats/user-chats/${id}`).then((data) => data.data.data);
  };
  const { isLoading, data, error } = useQuery({
    queryKey: ["all-friends"],
    queryFn: getChatsByUserId,
  });

  if (error) {
    return <div>error happened</div>;
  }

  const receiver =
    data &&
    data.map((item: any, i: number) => {
      const user = item.participants.filter((user: User) => user._id !== id);
      const chatId = item?._id;
      const obj = { chatId: chatId, participants: user };
      let data = [];
      data.push(obj);
      return data;
    });

  return (
    <aside
      id="default-sidebar"
      className="z-40 w-[256px] h-full transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="items-center p-2 text-gray-900 rounded-lg text-xl font-semibold">
          Friends
        </div>
        <ul className="space-y-2 font-medium">
          {isLoading && <Loader />}
          {!isLoading &&
            receiver?.flat()?.map((data: any, i: number) => (
              <div key={i}>
                <ChatNotice
                  user={data.participants[0]}
                  senderId={id}
                  chatId={data.chatId}
                />
              </div>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
