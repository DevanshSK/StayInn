"use client";
import { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
    // return <div className="p-2 text-center animate-pulse">Loading...</div>;
  }
  return <>{children}</>;
}

export default ClientOnly;
