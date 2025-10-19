"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader';
import axios from 'axios';

export default function Profile() {

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    
    if (session?.user) {
      const fetchProfileData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/auth/profile', {
            headers: {
              Authorization: `Bearer ${session.user.token}`
            }
          });
          setProfileData(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };
      fetchProfileData();
    }
  }, [session]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <div className="flex items-center min-h-screen justify-center p-4 bg-secondary font-sans">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Profile
        </h1>

        {profileData ? (
          <div className="space-y-4">
            <p><strong>ID:</strong> {profileData.id}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Name:</strong> {profileData.username}</p>
          </div>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
    </div>
  );
}