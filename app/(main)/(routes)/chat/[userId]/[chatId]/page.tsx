import ChatMessages from "@/components/chat/ChatMessages";
import InputItem from "@/components/chat/InputItem";
import React from "react";

const page = ({ params }: { params: { chatId: string; userId: string } }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <ChatMessages chatId={params?.chatId} userId={params?.userId} />
      <InputItem chatId={params?.chatId} userId={params?.userId}/>
    </div>
  );
};

export default page;
