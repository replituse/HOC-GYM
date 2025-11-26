import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  contactNumber: z.string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
  purpose: z.enum([
    "weight-loss",
    "body-toning", 
    "postpartum",
    "strength-building",
    "general-fitness"
  ], {
    required_error: "Please select a purpose"
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

async function sendContactEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const purposeLabels: Record<ContactFormData["purpose"], string> = {
    "weight-loss": "Overall Weight Loss",
    "body-toning": "Body Toning",
    "postpartum": "Reducing Postpartum Belly Fat",
    "strength-building": "Build Strength/Endurance/Flexibility",
    "general-fitness": "General Fitness",
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1a1a1a;
            border-radius: 10px;
          }
          .header {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            color: #7cd928;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
            border-bottom: 3px solid #7cd928;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #7cd928;
            margin-bottom: 5px;
          }
          .value {
            background: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            border-left: 3px solid #7cd928;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; color: #7cd928;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; color: #7cd928;">HOC Fitness Studio</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Contact Number:</div>
              <div class="value">${data.contactNumber}</div>
            </div>
            <div class="field">
              <div class="label">Purpose:</div>
              <div class="value">${purposeLabels[data.purpose]}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "replituse32@gmail.com",
    subject: `New Contact Form: ${data.name} - ${purposeLabels[data.purpose]}`,
    html: htmlContent,
    text: `
Name:- ${data.name}
Email:- ${data.email}
Phone:- ${data.contactNumber}
Service:- ${purposeLabels[data.purpose]}
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    let parsedBody;
    try {
      parsedBody = JSON.parse(event.body || "{}");
    } catch (parseError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          error: "Invalid JSON in request body." 
        }),
      };
    }

    const data = contactFormSchema.parse(parsedBody);
    
    await sendContactEmail(data);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "Thank you! We'll contact you shortly to discuss your fitness journey." 
      }),
    };
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          error: "Please check your form data and try again." 
        }),
      };
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: "Failed to send your message. Please try again later." 
      }),
    };
  }
};
