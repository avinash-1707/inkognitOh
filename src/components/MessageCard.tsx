"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Message } from "@/model/User";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { toast } from "sonner";
import formatDate from "@/helpers/dateFormat";

type MessageCardProps = {
  message: Message;
  onMessageDelete: (messageId: any) => void;
};

const MessageCard = ({ message, onMessageDelete }: MessageCardProps) => {
  const handleDeleteConfirm = async () => {
    const response = await axios.delete<ApiResponse>(
      `/api/delete-message/${message._id}`
    );
    toast(response.data.message);
    onMessageDelete(message._id);
  };
  return (
    <Card className="bg-white/20 bg-opacity-20 backdrop-blur-sm border-black/90">
      <CardHeader>
        <CardTitle>{message.content}</CardTitle>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="bg-red-300 px-2 w-5 h-5">
              <X />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-black-600 bg-opacity-30 backdrop-blur-md">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Are you sure?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Message wapas nahi aapaayega, screenshot le liya na bhai
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteConfirm}
                className="text-white bg-red-500 hover:bg-red-400"
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <CardDescription>
          {formatDate(message.createdAt.toString())}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default MessageCard;
