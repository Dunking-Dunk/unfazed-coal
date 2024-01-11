import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import Loader from './Loader'
import { createWagon } from '../store/reducer/VehicleReducer'


const WagonForm = () => {
    const dispatch = useDispatch()
    const { toast } = useToast()
    const { loading } = useSelector((state) => state.Vehicle)

    const FormSchema = z.object({
        registerNumber: z.string().min(5, {
            message: "Register Number must be at least 5 characters.",
        }),
        capacity: z.number(),
        trackerId: z.string().min(2, {
            message: "Tracker Id must be at least 2 characters.",
        })
    })

    const form = useForm(
        {
            resolver: zodResolver(FormSchema),
            defaultValues: {
                registerNumber: '',
                capacity: 0,
                trackerId: ''
            }
        }
    )

    const onSubmit = async (data) => {
            dispatch(createWagon({ ...data})).then((state) => {
                if (!state.error) {
                    form.reset()
                    toast({
                        title: 'Created Wagon',
                        description: 'Successfully created Wagon'
                    })
                } else {

                    toast({
                        title: 'Error',
                        description: state.payload.error.message,
                        variant: 'destructive'
                    })
                }
            })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 ">
                <FormField
                    control={form.control}
                    name="registerNumber"
                    render={({ field }) => (
                        <FormItem className='w-3/6'>
                            <FormLabel>Register Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Register number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                        <FormItem className='w-3/6'>
                            <FormLabel>Wagon Capacity (in kilo tons)</FormLabel>
                            <FormControl>
                                <Input placeholder="Wagon Capacity"  {...field} onChange={event => field.onChange(event.target.valueAsNumber)} value={field.value} type="number" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="trackerId"
                    render={({ field }) => (
                        <FormItem className='w-3/6'>
                            <FormLabel>Tracker Id that is associated with Iot device</FormLabel>
                            <FormControl>
                                <Input placeholder="Tracker ID" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            
                {loading ? <Loader /> : <Button type="submit" className='w-3/6'>Create</Button>}
            </form>
        </Form>
    )
}

export default WagonForm