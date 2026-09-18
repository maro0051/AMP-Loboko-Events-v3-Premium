export const config = {
  phone: "+243812467466",
  phoneDisplay: "+243 812 467 466",
  whatsapp: "https://wa.me/243812467466",
  businessEmail: import.meta.env.VITE_BUSINESS_EMAIL || "apataoli26@gmail.com",
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
    clientTemplateId: import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID || "",
    ownerTemplateId: import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || ""
  }
};