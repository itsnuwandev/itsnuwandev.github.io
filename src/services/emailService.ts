import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const emailService = {
  async sendContactEmail(
    data: EmailData
  ): Promise<{ success: boolean; error?: string }> {
    try {
      console.log("Sending email with EmailJS...");

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "itsnuwandev@gmail.com", // Your email
        reply_to: data.email,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        console.log("✅ Email sent successfully");
        return { success: true };
      } else {
        console.error("❌ EmailJS response error:", response);
        return { success: false, error: "Failed to send email" };
      }
    } catch (error) {
      console.error("❌ EmailJS error:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  },
};
