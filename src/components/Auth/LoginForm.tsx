"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authenticate } from "@/lib/actions";
import userStore from "@/store/userStore";
import React from 'react';


const loginFormSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(3),
    role: z.enum(["adminstrator", "organisation", "volunteer"]),
  })

const LoginForm = () => {
    const login = userStore((state) => state.login);
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "BAH@mail.com",
            password: "bigassheart",
            role: "organisation",
        },
    })

    const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
        try {
            const user = await authenticate(values);
            // if (user) login(user);
            // else throw new Error("user not found");
        } catch (error) {
            if (error) { throw error; }
        }
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3 w-2/6"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Role" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="adminstrator">Adminstrator</SelectItem>
                                <SelectItem value="organisation">Organisation</SelectItem>
                                <SelectItem value="volunteer">Volunteer</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="bg-[#35B2DE]" type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default LoginForm;