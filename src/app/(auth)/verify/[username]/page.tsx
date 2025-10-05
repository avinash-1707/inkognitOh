"use client";

import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verficationSchema } from "@/schemas/verificationSchema";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const VerifyAccount = () => {
  const router = useRouter();
  const params = useParams<{ username: string }>();

  //zod implementation
  const form = useForm<z.infer<typeof verficationSchema>>({
    resolver: zodResolver(verficationSchema),
  });

  const onSubmit = async (data: z.infer<typeof verficationSchema>) => {
    try {
      const response = await axios.post(`/api/verify-code`, {
        username: params.username,
        code: data.code,
      });

      toast("Success!", { description: response.data.message });
      router.replace("/sign-in");
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMsg = axiosError.response?.data.message;
      toast("User verification failed!", {
        description: errorMsg,
      });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-800 rounded-2xl shadow-xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-white">
            Verify your account
          </h2>
          <p className="mb-6 text-gray-300">
            Enter the verification code sent to your email
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="code"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200">
                      Verification Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="code"
                        {...field}
                        className="bg-neutral-700 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-2">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
