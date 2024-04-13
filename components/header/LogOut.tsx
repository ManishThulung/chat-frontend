"use client";

import { ProfileAvatar } from "../avatar/UserAvatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const LogOut = () => {
  const router = useRouter();
  // let user;
  
  // useEffect(() => {
  //   const userDetails = localStorage.getItem("user");
  //   user = userDetails && JSON?.parse(userDetails);
  // }, []);
  const userDetails = localStorage.getItem("user");
  const user = userDetails && JSON?.parse(userDetails);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ProfileAvatar name={user?.name} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure, you want to log out?</DialogTitle>
          <DialogDescription>
            Once you log out, you have to re-login to chat with other people
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() => {
                localStorage.clear();
                router.push("/");
              }}
            >
              Logout
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogOut;
