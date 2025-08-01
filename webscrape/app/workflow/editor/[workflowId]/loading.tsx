import { Loader2Icon} from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <Loader2Icon
      className="animate-spin h-screen stroke-primary flex mx-auto justify-center items-center"
      size={50}
    />
  );
};

export default Loading;
