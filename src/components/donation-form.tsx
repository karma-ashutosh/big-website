"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    amount: z.number().min(100, {
        message: "Minimum donation amount is 100Rs",
    })
})

export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "Humble Human",
            email: "your-email@example.com",
            amount: 500,
        },

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-800 bg-opacity-80 p-2 rounded-lg shadow-lg space-y-6 w-full max-w-lg mx-auto text-white z-50">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-semibold">Donor's Name</FormLabel>
                            <FormControl>
                                <Input
                                    className="bg-gray-700 border-none rounded-md text-base p-4 text-white focus:ring-orange-500"
                                    placeholder="Enter your name"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="text-sm text-gray-400 mt-1">
                                How should we address you
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-semibold">Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    className="bg-gray-700 border-none rounded-md text-base p-4 text-white focus:ring-orange-500"
                                    placeholder="Enter your email address"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="text-sm text-gray-400 mt-1">
                                To send receipt
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-semibold">Donation Amount</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    className="bg-gray-700 border-none rounded-md text-base p-4 text-white focus:ring-orange-500"
                                    placeholder="Enter donation amount"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="text-sm text-gray-400 mt-1">
                                How much do you care
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                >
                    Submit
                </Button>
            </form>
        </Form>
    )
}
