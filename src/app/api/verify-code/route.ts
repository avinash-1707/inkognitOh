import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, code } = await request.json();

    //Decoded component
    const decodedUsername = decodeURIComponent(username);
    const user = await UserModel.findOne({ username: decodedUsername });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found!",
        },
        { status: 500 }
      );
    }

    const isCodeValid = user.verificationCode === code;
    const isCodeNotExpired = new Date(user.verificationCodeExpiry) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();

      return Response.json(
        {
          success: true,
          message: "Account verified successfully",
        },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      return Response.json(
        {
          success: false,
          message:
            "Verification code has expired. Please sign up again to get a new code",
        },
        { status: 400 }
      );
    } else if (!isCodeValid) {
      return Response.json(
        {
          success: false,
          message: "Incorrect verification Code",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in verifying user", error);
    return Response.json(
      {
        success: false,
        message: "Error while verifying user",
      },
      { status: 500 }
    );
  }
}
