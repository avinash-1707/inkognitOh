import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/option";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import { NextRequest } from "next/server";

interface RouteContext {
  params: {
    messageid: string;
  };
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  const messageId = await context.params.messageid;
  await dbConnect();
  const session = await getServerSession(authOptions);
  const user: User = session?.user;

  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "Not authenticated!",
      },
      { status: 401 }
    );
  }

  try {
    const updatedResult = await UserModel.updateOne(
      { _id: user._id },
      { $pull: { messages: { _id: messageId } } }
    );
    if (updatedResult.modifiedCount === 0) {
      return Response.json(
        {
          success: false,
          message: "User not found or already deleted",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in deleting message route : ", error);
    return Response.json(
      {
        success: false,
        message: "Error while deleting message",
      },
      { status: 500 }
    );
  }
}
