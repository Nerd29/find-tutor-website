"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

export default function BookSessionButton({ tutor }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBookedSessionButton = async () => {
    if (!user) {
      toast.error("Please log in to book a session!");
      return;
    }

    const bookingData = {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      tutorId: tutor?._id,
      tutorName: tutor?.name,
      price: tutor?.hourlyFee,
      tutorImage: tutor?.image,
      subject: tutor?.subject,
      institution: tutor?.institution,
      timeSlot: tutor?.timeSlot,
    };

    const {data:tokenData}=await authClient.token()

    try {
      const res = await fetch("http://localhost:8000/booking", {
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
    } catch (error) {
      console.error(error);
      toast.error("Failed to book session.");
    }
  };

  return (
    <Button
      onClick={handleBookedSessionButton}
      color="primary"
      className="font-medium px-6 py-2.5 rounded-xl"
    >
      Book Session
    </Button>
  );
}