import ChatMessages from "@/components/chat/ChatMessages";
import InputItem from "@/components/chat/InputItem";

interface IProps {
  params: { receiverId: string; userId: string };
  searchParams: { chatId: string };
}

const page = ({ params, searchParams }: IProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <ChatMessages
        chatId={searchParams?.chatId}
        senderId={params?.userId}
        receiverId={params?.receiverId}
      />
      {/* <InputItem chatId={searchParams?.chatId} userId={params?.userId} /> */}
    </div>
  );
};

export default page;
