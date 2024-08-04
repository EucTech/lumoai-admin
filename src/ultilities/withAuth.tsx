"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAccessToken } from "@/ultilities/tokenData"; 

const withAuth = (WrappedComponent: any) => {
  const WithAuthComponent = (props: any) => {
    const router = useRouter();
    const pathname = usePathname();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const checkToken = async () => {
        if (typeof window !== "undefined") {
          const token = getAccessToken();
          setToken(token);
          if (!token || token === 'Token not found') {
            router.push(`/login?from=${pathname}`);
          }
        }
      };

      checkToken();
    }, [pathname, router]);

    return token && token !== 'Token not found' ? <WrappedComponent {...props} /> : null;
  };

  // Set the display name for better debugging and component tree inspection
  WithAuthComponent.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuthComponent;
};

// Helper function to get the display name of the wrapped component
const getDisplayName = (WrappedComponent: any) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuth;
