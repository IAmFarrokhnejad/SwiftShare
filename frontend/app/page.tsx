"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";


export default function Home() {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

    }, 2000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button disabled={isLoading} onClick={handleClick}>

        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Click Here!
      </Button>
    </div>

  );
}
