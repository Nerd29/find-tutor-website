"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookSessionButton({ tutor }) {
  const router=useRouter()
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBookedSessionButton = async () => {
    if (!user) {
      toast.error("Please log in to book a session!");
      return;
    }

    const bookingData = {
      tutorId:tutor?._id,     ///without this i cant know which id gonna be working for increment or decrement
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      // tutorId: tutor?._id,
      tutorName: tutor?.name,
      price: tutor?.hourlyFee,
      tutorImage: tutor?.image,
      subject: tutor?.subject,
      institution: tutor?.institution,
      timeSlot: tutor?.timeSlot,
    };

    const {data:tokenData}=await authClient.token()

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization:`Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      console.log("Booking response:", data);
      toast.success(`You successfully booked a session with ${tutor?.name}`);
      router.refresh("/tutors")
    } catch (error) {
      console.error(error);
      toast.error("Failed to book session.");
    }
  };

  return (
    
    <Button
        isDisabled={tutor?.remainingSlots <= 0}
        onClick={handleBookedSessionButton}
        className={`font-medium px-6 py-2.5 rounded-xl text-white ${
          tutor?.remainingSlots <= 0
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500"
        }`}
      >
        {tutor?.remainingSlots <= 0
          ? "No Slots Available"
          : "Book Session"}
      </Button>
  );
}