import type { ContactData } from "@/types/contact.types";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "";
const CONTACT_WHATSAPP_DISPLAY =
  import.meta.env.VITE_CONTACT_WHATSAPP_DISPLAY || "";
const CONTACT_WHATSAPP_NUMBER =
  import.meta.env.VITE_CONTACT_WHATSAPP_NUMBER || "";

export const contactData: ContactData = {
  tag: "Contact",
  title: "Contact",
  intro:
    "I am always open to new opportunities, collaborations, or just a conversation about tech.",
  infoItems: [
    {
      icon: "email",
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: "phone",
      label: "WhatsApp",
      value: CONTACT_WHATSAPP_DISPLAY,
      href: `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`,
    },
    {
      icon: "location",
      label: "Location",
      value: "Nicosia, Cyprus",
    },
  ],
  socialLinks: [
    {
      icon: "github",
      href: "https://github.com/jlord31/",
      label: "GitHub",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/joseph-adepoju/",

      label: "LinkedIn",
    }
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message",
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successMessage: "Message sent successfully! I will get back to you soon.",
    errorMessage:
      "Something went wrong. Please try again or contact me directly.",
    retryLabel: "Retry",
  },
  footer: {
    copyright: "© 2025 Joseph Adepoju. All rights reserved.",
    links: [
      {
        icon: "github",
        href: "https://github.com/jlord31/",
        label: "GitHub",
      },
      {
        icon: "linkedin",
        href: "https://www.linkedin.com/in/joseph-adepoju/",
        label: "LinkedIn",
      }
    ],
  },
};
