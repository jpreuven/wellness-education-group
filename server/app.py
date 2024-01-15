from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib
from dotenv import load_dotenv
from html import escape
import os
import requests

load_dotenv()

app = Flask(__name__)
CORS(app)
smtp_email = os.environ.get("SMTP_EMAIL")
smtp_password = os.environ.get("SMTP_PASSWORD")
secret_key = os.environ.get("CAPTCHA_SECRET_KEY")
sender = smtp_email
recipients = [sender, smtp_email]


@app.route("/form", methods=["POST"])
def form():
    try:
        data = request.get_json()  # Parse JSON data from the request
        # Get the hCaptcha response token from the request
        captcha_response = data.get("captcha_response")

        # Verify the hCaptcha response using hCaptcha's API
        # Replace "YOUR_HCAPTCHA_SECRET_KEY" with your hCaptcha secret key
        response = requests.post("https://hcaptcha.com/siteverify", data={
            "secret": secret_key,
            "response": captcha_response
        })

        result = response.json()

        # Check if the CAPTCHA verification was successful
        if not result.get("success"):
            print(result)
            return jsonify({"error": "CAPTCHA verification failed"}), 400

        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")
        
        first_name = escape(first_name)
        last_name = escape(last_name)
        email = escape(email)
        subject = escape(subject)
        message = escape(message)


        
        messageBeingSent = f"Subject: {subject}\n\n"
        messageBeingSent += f"{first_name} {last_name} sent you the following message: \n\n {message}"

        print("Connecting to SMTP server...")
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        print("SMTP connection established.")
        server.login(smtp_email, smtp_password)
        print("User logged in to email!")

        # Send the email
        print(email)
        server.sendmail(smtp_email, email, messageBeingSent)
        print("Email sent!")

        # Close the SMTP connection
        server.quit()

        response = {"message": "Email sent successfully"}
        return jsonify(response), 200

    except Exception as e:
        response = {"error": f"Email sending failed: {str(e)}"}
        return jsonify(response), 500


if __name__ == '__main__':
    app.run(debug=True)
