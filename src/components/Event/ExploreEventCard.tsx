"use client"
import prisma from '../../lib/prisma';
import { EnrollmentStatus } from '@prisma/client';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { redirectExplore } from '@/lib/actions';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form
} from "@/components/ui/form";


export type EventCardProps = {
    eventid: number,
    name: string,
    location: string,
    organisation: string,
    start: Date,
    end: Date
    id: number,
    enroll_status?: EnrollmentStatus,
}

const enrollFormSchema = z.object({});


const ExploreEventCard = ({ eventid, name, location, organisation, id, enroll_status }: EventCardProps) => {
    console.log(name + " " + enroll_status);
    const form = useForm<z.infer<typeof enrollFormSchema>>({
        resolver: zodResolver(enrollFormSchema),
        defaultValues: {
            text: "",
        },
    })

    const onSubmit = async () => {
        try {
            console.log("clicked")
            const data = {
                eventId: eventid,
                volunteerId: id
            }
            const res = await fetch("http://localhost:3000/api/enroll", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            redirectExplore();
            console.log(res)
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-900 text-base">
                    {organisation}
                </p>
                <p className="text-gray-700 text-base">
                    Address: {location}
                </p>

            </div>
            <div className="px-6 pt-4 pb-2">
                {enroll_status &&
                    enroll_status === EnrollmentStatus.NONE &&
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <Button variant="mine" type="submit">Enroll</Button>
                        </form>
                    </Form>
                }
                {enroll_status &&
                    enroll_status === EnrollmentStatus.PENDING &&
                    <Badge variant="pending">Pending</Badge>
                }
                {enroll_status &&
                    enroll_status === EnrollmentStatus.ASSIGNED &&
                    <Badge variant="assigned">Assigned</Badge>
                }
            </div>
        </div>
    );
};

export default ExploreEventCard