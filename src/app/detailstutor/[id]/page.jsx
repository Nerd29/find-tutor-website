import BookSessionButton from "@/app/components/BookSessionButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const token = await auth.api.getToken({
    headers: await headers(),
  });

  const jwt = token?.token;
  console.log(jwt)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
    headers: {
      authorization: jwt ? `Bearer ${jwt}` : "" 
    },
    cache: "no-store",
  });
  // if (!res.ok) {
  //   const errorText = await res.text();
  //   console.error(`Backend returned status ${res.status}:`, errorText);
  // }

  const tutor = await res.json();
  console.log(tutor)

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gray-50/50 dark:bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="relative min-h-[450px] w-full bg-gray-100 dark:bg-slate-800">
          {tutor?.image && (
            <Image
              src={tutor.image}
              alt={tutor?.name || "Tutor"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{tutor?.name}</h2>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">{tutor?.subject}</p>
            <p className="text-xl font-bold text-gray-800 dark:text-slate-200 pt-1">
              Institution : {tutor?.institution}
            </p>

            <div className="text-gray-700 dark:text-slate-300 space-y-1.5 pt-2 text-base">
              <p><span className="font-semibold text-gray-900 dark:text-white">Experience :</span> {tutor?.experience}</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Location :</span> {tutor?.location}</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Mode :</span> {tutor?.mode}</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Availability :</span> {tutor?.availableDays}</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Timeslot :</span> {tutor?.timeSlot}</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Hourly Fee :</span> ${tutor?.hourlyFee}</p>
              <p className="font-semibold text-gray-900 dark:text-white">Remaining Slots : <span className="text-blue-500">{tutor?.remainingSlots}</span> </p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Session Start Date :</span> {tutor?.sessionStartDate}</p>
            </div>
          </div>

          

          <div className="pt-4">
            <BookSessionButton tutor={tutor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;