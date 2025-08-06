import { useEffect, useRef, useState } from "react";
import { Button, Alert, CircularProgress } from "@mui/material";
import emailjs from "emailjs-com";
import SubHeader from "../smallComponents/SubHeader";
import {
  PRIMARY_BG_COLOR,
  PRIMARY_COLOR_LIGHT,
} from "../../helper/contants";
import CustomInputV2 from "./CustomInputV2";
import CustomTextAreaV2 from "./CustomTextAreaV2";


// 👇 Extend global types
declare global {
  interface Window {
    grecaptcha: ReCAPTCHA;
    recaptchaWidgetId: number;
  }

  interface ReCAPTCHA {
    ready(callback: () => void): void;
    render(container: HTMLElement, options: ReCAPTCHARenderOptions): number;
    execute(widgetId: number): void;
    reset(widgetId: number): void;
  }

  interface ReCAPTCHARenderOptions {
    sitekey: string;
    size: "invisible";
    callback: (token: string) => void;
  }
}

function ContactUsV2() {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // 👇 Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          if (recaptchaRef.current) {
            const id = window.grecaptcha.render(recaptchaRef.current, {
              sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
              size: "invisible",
              callback: handleRecaptchaSuccess,
            });
            window.recaptchaWidgetId = id;
            setRecaptchaReady(true);
          }
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 👇 When reCAPTCHA succeeds
  const handleRecaptchaSuccess = (token: string) => {
    sendEmail(token);
  };

  // 👇 Executed on submit
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Name, Email, Message } = formValues;

    if (!Name.trim() || !Email.trim() || !Message.trim()) {
      setFeedback({ type: "error", message: "All fields are required." });
      return;
    }

    if (recaptchaReady) {
      window.grecaptcha.execute(window.recaptchaWidgetId);
    } else {
      setFeedback({ type: "error", message: "reCAPTCHA not ready. Try again later." });
    }
  };

  const sendEmail = (recaptchaToken: string) => {
    setLoading(true);
    setFeedback(null);

    const { Name, Email, Message } = formValues;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: Name,
          email: Email,
          message: Message,
          "g-recaptcha-response": recaptchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          setFeedback({ type: "success", message: "Message sent successfully!" });
          setFormValues({ Name: "", Email: "", Message: "" });
          formRef.current?.reset();
        },
        (error) => {
          console.error("Send error:", error.text);
          setFeedback({ type: "error", message: "Failed to send message. Please try again." });
        }
      )
      .finally(() => {
        setLoading(false);
        window.grecaptcha.reset(window.recaptchaWidgetId); // Reset reCAPTCHA
      });
  };

  return (
    <div
      id="contact-us"
      style={{
        backgroundColor: PRIMARY_COLOR_LIGHT,
        color: PRIMARY_BG_COLOR,
      }}
      className="p-8"
    >
      <SubHeader text="Share. Suggest. Shape." />

      <div className="flex flex-col md:flex-row px-4 md:px-32 py-12 gap-8">
        {/* Left Info */}
        <div className="flex-1 text-sm">
          <p>
            Whether it's a broken flow, a cool suggestion, or your favorite interview challenge —
            we're all ears.
          </p>
        </div>

        {/* Right Form */}
        <form ref={formRef} onSubmit={handleFormSubmit} className="flex-1 flex flex-col gap-4">
          {feedback && (
            <Alert severity={feedback.type} onClose={() => setFeedback(null)}>
              {feedback.message}
            </Alert>
          )}

          <CustomInputV2
            label="Name"
            name="Name"
            value={formValues.Name}
            onChange={handleChange}
          />
          <CustomInputV2
            label="Email"
            name="Email"
            type="email"
            value={formValues.Email}
            onChange={handleChange}
          />
          <CustomTextAreaV2
            name="Message"
            value={formValues.Message}
            onChange={handleChange}
          />

                    <p className="text-sm text-white-500 mt-4">
  This site is protected by reCAPTCHA and the Google{' '}
  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
    Privacy Policy
  </a>{' '}
  and{' '}
  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
    Terms of Service
  </a>{' '}
  apply.
</p>

          <div className="flex justify-start">
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: "rgba(64, 82, 181, 0.9)",
                borderRadius: "8px",
                padding: "0.6rem 1.2rem",
                border: "1px solid #ffffff99",
                color: "#ffffff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(64, 82, 181, 1)",
                },
                "&.Mui-disabled": {
                  backgroundColor: "rgba(64, 82, 181, 0.5)",
                  color: "#ffffff99",
                  border: "1px solid #ffffff50",
                },
              }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Send Message"}
            </Button>
          </div>

          {/* Invisible reCAPTCHA container */}
          <div ref={recaptchaRef} className="hidden" />

        </form>
      </div>
    </div>
  );
}

export default ContactUsV2;
