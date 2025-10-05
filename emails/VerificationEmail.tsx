interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>inkognitOh! | Verification Code</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <style>
        body {
          font-family: 'Roboto', Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #ffffff;
          color: #000000;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h2 {
          color: #333333;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
        .otp {
          font-size: 20px;
          font-weight: bold;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hello ${username},</h2>
        <p>
          Thank you for registering. Please use the following verification
          code to complete your registration:
        </p>
        <p class="otp">${otp}</p>
        <p>
          If you did not request this code, please ignore this email.
        </p>
        <!-- Uncomment this if you want a button link -->
        <!--
        <p>
          <a href="http://localhost:3000/verify/${username}" style="color: #61dafb;">Verify here</a>
        </p>
        -->
      </div>
    </body>
  </html>
  `;
}
