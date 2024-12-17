"use client"; // Marking the component as a client component

import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import SelectBox from '../ui/select-box';



export default function FormExample() {

  const options = [
    { value: 'One', label: 'One' },
    { value: 'Two', label: 'Two' },
    { value: 'Three', label: 'Three' },
    { value: 'Four', label: 'Four' },
    { value: 'Five', label: 'Five' },
    { value: 'Six', label: 'Six' },
    { value: 'Seven', label: 'Seven' },
    { value: 'Eight', label: 'Eight' },
    { value: 'Nine', label: 'Nine' },
    { value: 'Ten', label: 'Ten' },
  ]
  

  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      multiple: [],
      single:''
    },
  });



  function onSubmit(values) {
    toast(
      <div className="grid w-full gap-1">
        <div className="text-sm font-semibold">
          You submitted the following values:
        </div>
        <div className="text-xs opacity-90">
          <pre className="mt-2 rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(values, null, 2)}</code>
          </pre>
        </div>
      </div>
    )
    console.log(values);
  }

  return (
    <div>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={control}
              name="multiple"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Multiple</FormLabel>
                  <FormControl>
                    <SelectBox
                      options={options}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select a numbers..."
                      inputPlaceholder="Search numbers"
                      emptyPlaceholder="No number found."
                      multiple
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={control}
              name="single"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Single</FormLabel>
                  <FormControl>
                    <SelectBox
                      options={options}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select a single number..."
                      inputPlaceholder="Search single numbers"
                      emptyPlaceholder="No single number found."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
