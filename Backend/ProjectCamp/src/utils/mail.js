import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://mailgen.js/",
    },
  });

  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  const emailHtml = mailGenerator.generate(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Email Failed", error);
  }
};

//factory pattern : design pattern

//factory function

const emailVerificationMailGneContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to App! We're very excited to have you on board.",
      action: {
        instructions: "To get started with Mailgen, please click here:",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordGenMailContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got the reqest to reset your password",
      action: {
        instructions: "To Change the password click the button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

//mailgen mail craft krne kai lia
//nodemailer mail bhejne kai lia

//way to send mail

// sendMail({
//     email: user.email,
//     subjevt:"asasdsa",
//     mailGenContent:emailVerificationMailGneContent(
//         username,
//         `your/url/here`
//     )
// });
