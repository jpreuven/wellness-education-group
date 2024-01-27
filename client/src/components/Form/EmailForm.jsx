import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Grid, Link, TextareaAutosize, Typography } from "@mui/material";
import theme from "../../theme/theme";
import useMediaQueries from "../../utils/mediaqueries.utils";
import {
  StyledFormButtonCaptchaGrid,
  StyledFormInnerGridContent,
  StyledFormOuterGrid,
  StyledFormOuterGridContentEmail,
  StyledFormOuterGridContentNames,
  StyledFormTypographyHeader,
} from "./index.styles";

const env = await import.meta.env;
const SITE_KEY = env.VITE_SITE;
const SECRET_KEY = env.VITE_SECRET;

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function EmailForm() {
  // const [formData, setFormData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   // subject: "",
  //   message: "",
  //   captcha_response: "",
  // });
  const [captchaError, setCaptchaError] = useState("");
  const { isSm } = useMediaQueries();
  const [captchaSize, setCaptchaSize] = useState("normal");

  // Function to determine captcha size based on screen width
  const getCaptchaSize = () => {
    return window.innerWidth < 350 ? "compact" : "normal";
  };

  // Update captcha size on window resize
  const handleResize = () => {
    setCaptchaSize(getCaptchaSize());
  };

  useEffect(() => {
    // Initial setup
    setCaptchaSize(getCaptchaSize());

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      captcha_response: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (!values.captcha_response) {
          setCaptchaError("Please complete the CAPTCHA");
          return;
        }

        const response = await fetch("http://127.0.0.1:5000/form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          console.log("Email sent successfully");
          // You can add code to handle success here (e.g., show a success message)
        } else {
          console.error("Email sending failed");
          // You can add code to handle failure here (e.g., show an error message)
        }
      } catch (error) {
        console.error("Error sending email:", error);
        // You can handle other errors here
      }
    },
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (!formData.captcha_response) {
  //       setCaptchaError("Please complete the CAPTCHA");
  //       return;
  //     }

  //     const response = await fetch("http://127.0.0.1:5000/form", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json", // Set the content type to JSON
  //       },
  //       body: JSON.stringify(formData), // Convert the form data to a JSON string
  //     });

  //     if (response.ok) {
  //       console.log("Email sent successfully");
  //       // You can add code to handle success here (e.g., show a success message)
  //     } else {
  //       console.error("Email sending failed");
  //       // You can add code to handle failure here (e.g., show an error message)
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     // You can handle other errors here
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleCaptchaVerify = (token) => {
  //   setFormData({
  //     ...formData,
  //     captcha_response: token, // Store the hCaptcha response in formData
  //   });
  //   setCaptchaError(""); // Clear the CAPTCHA error message
  // };
  const handleCaptchaVerify = (token) => {
    if (!token) {
      setCaptchaError("Please complete the CAPTCHA");
    } else {
      formik.setFieldValue("captcha_response", token);
      setCaptchaError(""); // Clear the CAPTCHA error message
    }
  };

  return (
    <StyledFormOuterGrid>
      <StyledFormTypographyHeader component={"h1"} varient={"h1"}>
        Email Form
      </StyledFormTypographyHeader>
      <form
        // onSubmit={handleSubmit}
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <StyledFormOuterGridContentNames>
          <StyledFormInnerGridContent>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              // value={formData.first_name}
              // onChange={handleChange}
              value={formik.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // required
              style={{
                height: "40px",
                fontSize: "18px",
                fontFamily: "Lora",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div style={{ color: "red", fontSize: "14px" }}>
                {formik.errors.first_name}
              </div>
            ) : null}
          </StyledFormInnerGridContent>
          <StyledFormInnerGridContent>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              // value={formData.last_name}
              // onChange={handleChange}
              value={formik.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // required
              style={{
                height: "40px",
                fontSize: "18px",
                fontFamily: "Lora",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div style={{ color: "red", fontSize: "14px" }}>
                {formik.errors.last_name}
              </div>
            ) : null}
          </StyledFormInnerGridContent>
        </StyledFormOuterGridContentNames>
        <StyledFormOuterGridContentEmail>
          <StyledFormInnerGridContent>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // required
              style={{
                height: "40px",
                fontSize: "18px",
                fontFamily: "Lora",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red", fontSize: "14px" }}>
                {formik.errors.email}
              </div>
            ) : null}
          </StyledFormInnerGridContent>
          {/* <Grid
              sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
            >
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  height: "40px",
                  fontSize: "18px",
                  fontFamily: "Lora",
                  borderRadius: "7px",
                  border: "1px solid gray",
                  outline: "none",
                }}
              />
            </Grid> */}
        </StyledFormOuterGridContentEmail>
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message">Message:</label>
          <TextareaAutosize
            label="Message"
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // required
            minRows={12}
            maxRows={12}
            style={{
              resize: "none",
              borderRadius: "7px",
              fontSize: "18px",
              fontFamily: "Lora",
            }}
          />
          {formik.touched.message && formik.errors.message ? (
            <div style={{ color: "red", fontSize: "14px" }}>
              {formik.errors.message}
            </div>
          ) : null}
        </Grid>
        <StyledFormButtonCaptchaGrid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HCaptcha
              sitekey={SITE_KEY} // Replace with your hCaptcha SITE_KEY
              onVerify={(token) => handleCaptchaVerify(token)} // Set the captchaResponse state
              theme="light" // Choose a theme (light or dark)
              size={captchaSize}
              tabIndex={0} // Tab index for accessibility
            />
            {captchaError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  marginTop: 0,
                  marginBottom: 6,
                }}
              >
                {captchaError}
              </p>
            )}
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                margin: 0,
                padding: 0,
                border: "none",
                borderRadius: "10px",
                background: theme.palette.secondary.main,
                color: theme.palette.secondary.tan,
                cursor: "pointer",
                fontFamily: "Lora",
                fontSize: "16px",
                height: "40px",
                width: "150px",
                fontWeight: "500",
              }}
              type="submit"
            >
              Send Email
            </button>
          </Grid>
        </StyledFormButtonCaptchaGrid>
      </form>
    </StyledFormOuterGrid>
  );
}

export default EmailForm;
