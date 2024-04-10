import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  className?: string;
  name: string;
}

function extractInitials(name: string) {
  let initials = "";
  let words = name?.split(" ");
  for (let i = 0; i < words?.length; i++) {
    initials += words[i]?.charAt(0);
  }
  return initials;
}

export const UserAvatar = ({ src, className, name }: UserAvatarProps) => {
  const fallbackImage = extractInitials(name);
  return (
    <Avatar className={cn("h-4 w-4 md:h-6 md:w-6", className)}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallbackImage}</AvatarFallback>
    </Avatar>
  );
};
