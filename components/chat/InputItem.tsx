"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/config/axios";
// import { EmojiPicker } from "../emoji-picker";
import EmojiPicker from 'emoji-picker-react';
import { useRef, useState } from "react";

interface ChatInputProps {
  chatId: string;
  userId: string;
}

const formSchema = z.object({
  content: z.string().min(1),
});

const ChatInput = ({ chatId, userId }: ChatInputProps) => {
  const [isEmojiOpen, setIsEmojiOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const data = { ...values, chatId };
      await api.post(`/chats/send-message?userId=${userId}`, data);
      form.reset();
      // router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative p-4 pb-6">
                  <button
                    type="button"
                    onClick={() => setIsEmojiOpen(true)}
                    className="absolute top-7 left-8 h-[24px] w-[24px] bg-zinc-500 dark:bg-zinc-400 hover:bg-zinc-600 dark:hover:bg-zinc-300 transition rounded-full p-1 flex items-center justify-center"
                  >
                    <Plus className="text-white dark:text-[#313338]" />
                  </button>
                  <Input
                    disabled={isLoading}
                    className="px-14 py-6 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
                    placeholder="Type your message"
                    {...field}
                  />
                  <EmojiPicker open={isEmojiOpen} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ChatInput;
