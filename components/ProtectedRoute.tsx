import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      // Ensure correct format of the redirect URL without the extra '/' at the beginning
      router.push('https://viable-drake-93.accounts.dev/sign-in'); 
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null; // or a loading spinner or a message
  }

  return <>{children}</>;
};

export default ProtectedRoute;
