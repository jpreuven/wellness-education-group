import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Grid, Link, TextareaAutosize, Typography } from "@mui/material";
import theme from "../../theme/theme";

const env = await import.meta.env;
const SITE_KEY = env.VITE_SITE;
const SECRET_KEY = env.VITE_SECRET;

function EmailForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
    captcha_response: "",
  });
  const [captchaError, setCaptchaError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.captcha_response) {
        setCaptchaError("Please complete the CAPTCHA");
        return;
      }

      const response = await fetch("http://127.0.0.1:5000/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData), // Convert the form data to a JSON string
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaVerify = (token) => {
    setFormData({
      ...formData,
      captcha_response: token, // Store the hCaptcha response in formData
    });
    setCaptchaError(""); // Clear the CAPTCHA error message
  };

  return (
    <Grid sx={{ width: "800px" }}>
      <Typography
        component={"h1"}
        varient={"h1"}
        sx={{
          fontSize: "24px",
          fontWeight: "500",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Email Form
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Grid
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Grid
            sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
          >
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              style={{
                height: "50px",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
          </Grid>
          <Grid
            sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
          >
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              style={{
                height: "50px",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Grid
            sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
          >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // required
              style={{
                height: "50px",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
          </Grid>
          <Grid
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
                height: "50px",
                borderRadius: "7px",
                border: "1px solid gray",
                outline: "none",
              }}
            />
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message">Message:</label>
          <TextareaAutosize
            label="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minRows={15}
            maxRows={15}
            style={{ resize: "none", borderRadius: "7px" }}
          />
        </Grid>
        <Grid>
          <HCaptcha
            sitekey={SITE_KEY} // Replace with your hCaptcha SITE_KEY
            onVerify={(token) => handleCaptchaVerify(token)} // Set the captchaResponse state
            theme="light" // Choose a theme (light or dark)
            size="normal" // Choose a size (normal or compact)
            tabIndex={0} // Tab index for accessibility
          />
          {captchaError && (
            <p style={{ color: "red", fontSize: "16px", marginTop: 0 }}>
              {captchaError}
            </p>
          )}
        </Grid>
        <button type="submit">Send Email</button>
      </form>
    </Grid>
  );
}

export default EmailForm;
