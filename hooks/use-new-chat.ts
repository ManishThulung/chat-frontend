import { api } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

interface ChatQueryProps {
  senderId: string;
  receiverId: string;
}

export const useChatQuery = ({ senderId, receiverId }: ChatQueryProps) => {
  const getChatId = async () => {
    const res = await api.get(`/chats/chat-exist/${senderId}/${receiverId}`);
    return res?.data?.data;
  };

  const {
    data: chat,
    isLoading,
    error,
  } = useQuery({
    queryKey: [senderId, receiverId],
    queryFn: getChatId,
  });

  return {
    chat,
    isLoading,
    error,
  };
};
