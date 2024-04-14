"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { api } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "../providers/context-provider";

export const UserSearch = () => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const getUsers = async () => {
    const res = await api.get(`/users`);
    return res?.data?.data;
  };

  const { data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onClick = (id: string) => {
    setOpen(false);
    return router.push(`/chat/${user?._id}/${id}`);
  };

  if (error) {
    return <div>Failed to fetch users</div>;
  }

  return (
    <div className="bg-gray-200 rounded-md">
      <button
        onClick={() => setOpen(true)}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
      >
        <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          Search
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <div className="z-50">
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search users" />
          <CommandList>
            <CommandEmpty>No Results found</CommandEmpty>
            <CommandGroup>
              {data &&
                data?.map(({ _id, name }: { _id: string; name: string }) => {
                  return (
                    <CommandItem
                      className="z-50"
                      key={_id}
                      onSelect={() => onClick(_id)}
                    >
                      {name}
                    </CommandItem>
                  );
                })}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </div>
  );
};
