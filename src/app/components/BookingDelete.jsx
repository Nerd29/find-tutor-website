"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

export function BookingDelete({bookingId}) {

    const handleDeleteButton= async()=>{

      const session = await authClient.getSession();
      const token = session?.data?.token;
        const res= await fetch(`http://localhost:8000/booking/${bookingId}`,{
            method:"DELETE",
      headers:{
        'content-type':'application/json',
        Authorization: token ? `Bearer ${token}` : "",
      },
      // body: JSON.stringify(bookingData)

    })
    const data= await res.json()
    console.log(data)
    toast.success(`You successfully cancelled session with ${bookingId}`)
    window.location.reload();
        
    }
  return (
    <AlertDialog>
       <Button variant='danger'><RiDeleteBin6Line /></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete session permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button  onClick={handleDeleteButton} slot="close" variant="danger">
               Delete Session
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}