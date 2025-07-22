"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { messageSchema } from "@/schemas/messageSchema";
import { ApiResponse } from "@/types/ApiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const specialChar = "||";

const parseStringMessages = (messageString: string): string[] => {
  return messageString.split(specialChar);
};

const initialMessageString =
  "What's your favorite movie?||Do you have any pets?||What's your dream job?";

const SendMessage = () => {
  const [aiSuggestions, setAiSuggestions] = useState(
    parseStringMessages(initialMessageString)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuggestionLoading, setSuggestionLoading] = useState(false);
  const params = useParams<{ username: string }>();
  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    const message = { ...data, username: params.username };
    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>(
        "/api/send-message",
        message
      );
      toast("Message sent!", { description: response.data.message });
      setIsSubmitting(false);
      form.setValue("content", "");
    } catch (error) {
      console.log("Error in signing up user : ", error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMsg = axiosError.response?.data.message;
      toast("Unable to send!", {
        description: errorMsg,
      });
      setIsSubmitting(false);
    }
  };

  const fetchAiMessages = async () => {
    setSuggestionLoading(true);
    try {
      const response = await axios.post<ApiResponse>("/api/suggest-messages");
      const msgArray = parseStringMessages(response.data.message);
      setAiSuggestions(msgArray);
    } catch (error) {
      console.log("Error in getting ai messages : ", error);
    } finally {
      setSuggestionLoading(false);
    }
  };

  const messageContent = form.watch("content");

  const handleMessageClick = (message: string) => {
    form.setValue("content", message);
  };

  return (
    <div className="pt-14 px-2 min-h-screen">
      <div className="container mx-auto my-8 p-6 bg-black/10 dark:bg-white/10 bg-opacity-20 backdrop-blur-sm rounded-md max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Public Profile Link
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white/50 text-black/50">
                    Send anonymous message to @{params.username}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Drop your anonymous message here ..."
                      className="resize-none border-none bg-white/30 bg-opacity-20 backdrop-blur-sm rounded-md focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isSubmitting ? (
              <>
                <Button
                  type="submit"
                  disabled={isSubmitting || !messageContent}
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              </>
            ) : (
              <Button type="submit">Send it!</Button>
            )}
          </form>
        </Form>
      </div>
      <div className="container mx-auto my-8 p-6 max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Get AI suggested messages
        </h1>
        <div className="space-y-2">
          <Button
            variant="outline"
            onClick={fetchAiMessages}
            className="my-4 shadow-md"
          >
            {isSuggestionLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Suggest messages"
            )}
          </Button>
          <p className="text-gray-500">
            Click on any message below to select it.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-6">
          {aiSuggestions.map((suggestion, index) => (
            <Button
              className="mb-2 bg-gray-300 hover:bg-gray-400/70 dark:bg-gray-800 text-black/80 dark:text-white/80 border-none dark:hover:bg-gray-900"
              variant="outline"
              key={index}
              onClick={() => handleMessageClick(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
      <Separator className="my-6" />
      <div className="text-center">
        <div className="mb-4 text-2xl">Get Your Message Board</div>
        <Link href={"/sign-up"}>
          <Button className="mb-8">Create Your Account</Button>
        </Link>
      </div>
      <footer className="py-8 px-4 text-center text-gray-500 dark:bg-black bg-white bottom-0 relative text-sm w-full">
        <p>Created and designed by @avinash</p>
      </footer>
    </div>
  );
};

export default SendMessage;
