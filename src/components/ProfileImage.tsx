
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileImage = () => {
  return (
    <Avatar className="w-48 h-48 border-4 border-cosmic-purple/20">
      <AvatarImage src="/lovable-uploads/27c4a339-ab38-49e5-861c-91033a280161.png" alt="Sudheer Kumar" />
      <AvatarFallback>SK</AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
