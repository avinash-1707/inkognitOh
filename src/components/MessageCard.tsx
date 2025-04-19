"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Message } from "@/model/User";
import formatDate from "@/helpers/dateFormat";

type MessageCardProps = {
  message: Message;
};

const MessageCard = ({ message }: MessageCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{message.content}</CardTitle>
        <CardDescription>
          {formatDate(message.createdAt.toString())}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default MessageCard;
