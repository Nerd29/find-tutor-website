"use client";
import { Button, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

const TutorUpdate = ({ tutor }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const updatedTutor = Object.fromEntries(formData.entries());

    // Convert number fields
    updatedTutor.hourlyFee = Number(updatedTutor.hourlyFee);
    updatedTutor.totalSlot = Number(updatedTutor.totalSlot);

    // IMPORTANT: never send _id in the body
    delete updatedTutor._id;

    console.log("Sending update:", updatedTutor); // ← check this in console

    try {
      const res = await fetch(
        `http://localhost:8000/add-tutor/${tutor._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTutor),
        }
      );

      const data = await res.json();
      console.log("Server response:", data); // ← check this too

      if (res.ok && data.modifiedCount > 0) {
        setIsOpen(false);
        router.refresh(); // refresh the list
        // window.location.reload(); // use this if router.refresh() is not enough
      } else {
        alert("Update failed. Check console.");
        console.error("Update failed:", data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        isIconOnly
        onPress={() => setIsOpen(true)}
      >
        <MdEdit />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-2xl">
              <Modal.CloseTrigger />
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Tutor Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          defaultValue={tutor.name}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                        />
                      </div>

                      {/* Image */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Photo URL
                        </label>
                        <input
                          name="image"
                          type="url"
                          required
                          defaultValue={tutor.image || ""}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Subject
                        </label>
                        <select
                          name="subject"
                          required
                          defaultValue={tutor.subject || ""}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none bg-white"
                        >
                          <option value="" disabled>
                            Select Subject
                          </option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Physics">Physics</option>
                          <option value="Chemistry">Chemistry</option>
                          <option value="Biology">Biology</option>
                          <option value="English">English</option>
                          <option value="ICT / Computer Science">
                            ICT / Computer Science
                          </option>
                        </select>
                      </div>

                      {/* Availability */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Availability
                        </label>
                        <input
                          name="availability"
                          type="text"
                          required
                          defaultValue={tutor.availability || ""}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                        />
                      </div>

                      {/* Hourly Fee */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Hourly Fee
                        </label>
                        <input
                          name="hourlyFee"
                          type="number"
                          min="0"
                          required
                          defaultValue={tutor.hourlyFee || ""}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                        />
                      </div>

                      {/* Total Slot */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Total Slot
                        </label>
                        <input
                          name="totalSlot"
                          type="number"
                          min="1"
                          required
                          defaultValue={tutor.totalSlot || ""}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                        />
                      </div>

                      {/* Session Start Date */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Session Start Date
                        </label>
                        <input
                          name="sessionStartDate"
                          type="date"
                          required
                          defaultValue={
                            tutor.sessionStartDate
                              ? String(tutor.sessionStartDate).slice(0, 10)
                              : ""
                          }
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                        />
                      </div>

                      {/* Teaching Mode */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">
                          Teaching Mode
                        </label>
                        <select
                          name="teachingMode"
                          required
                          defaultValue={tutor.teachingMode || "Offline"}
                          className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none bg-white"
                        >
                          <option value="Online">Online</option>
                          <option value="Offline">Offline</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Institution & Experience
                      </label>
                      <input
                        name="institutionAndExperience"
                        type="text"
                        required
                        defaultValue={tutor.institutionAndExperience || ""}
                        className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Location
                      </label>
                      <input
                        name="location"
                        type="text"
                        required
                        defaultValue={tutor.location || ""}
                        className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button
                        type="button"
                        variant="secondary"
                        onPress={() => setIsOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" color="primary" isDisabled={loading}>
                        {loading ? "Saving..." : "Save Edit"}
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default TutorUpdate;