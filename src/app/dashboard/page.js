"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the profile page
    router.push('/dashboard/profile');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <p>Redirecting to profile...</p>
    </div>
  );
}