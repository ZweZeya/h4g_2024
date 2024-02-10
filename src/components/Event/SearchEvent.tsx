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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from 'react';
import { Search } from  'lucide-react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";


 
const searchFormSchema = z.object({
  text: z.string(),
})

const SearchEvent = () => {
    const form = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            text: "",
        },
    })

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const onSubmit = async (values: z.infer<typeof searchFormSchema>) => {
        try {
            const params = new URLSearchParams(searchParams);
            if (values.text) {
                params.set('query', values.text);
            } else {
                params.delete('query');
            }
            replace(`${pathName}?${params.toString()}`);
        } catch (error) {
            form.reset();
        }
    }
    return (

        <div className='mt-2 m-4'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-row space-x-1"
                >
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className='flex-grow'>
                                <FormControl>
                                    <Input type='search' placeholder="Search" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='flex'>
                        Search
                        <Search className='ml-2'/>
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SearchEvent