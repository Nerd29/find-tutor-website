"use client";
import React from 'react';

import {AlertDialog, Button} from "@heroui/react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

const TutorDelete = ({tutorId}) => {

    const handleDeleteButton= async()=>{
        console.log(tutorId)
     
    const res = await fetch(`http://localhost:8000/add-tutor/${tutorId}`, {
      method: 'DELETE',
    });
    const data= await res.json()
    console.log(data)
    toast.success(`You successfully cancelled session with ${tutorId}`)
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
                        This will permanently delete all of its
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
};

export default TutorDelete;