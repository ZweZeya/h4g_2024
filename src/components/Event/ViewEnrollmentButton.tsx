"use client"
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form
} from "@/components/ui/form";
import { redirectViewEnrollment } from "@/lib/actions";

const viewEnrollFormSchema = z.object({});

export type viewEnrollmentButtonProps = {
    id: string;
}

const ViewEnrollmentButton = ({ id }: viewEnrollmentButtonProps) => {
    const form = useForm<z.infer<typeof viewEnrollFormSchema>>({
        resolver: zodResolver(viewEnrollFormSchema),
        defaultValues: {
            text: "",
        },
    })

    const onSubmit = async () => {
        try {
            redirectViewEnrollment(id);
        } catch (error) {
            form.reset()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Button variant="mine" type="submit" className='w-full'>View Enrollment</Button>
            </form>
        </Form>
    )
}

export default ViewEnrollmentButton;