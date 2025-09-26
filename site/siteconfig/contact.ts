
export const contactConfig = {
  // Contact Information
  supportHours: {
    enabled: true,
    timezone: "UTC",
    schedule: {
      monday: "24/7",
      tuesday: "24/7", 
      wednesday: "24/7",
      thursday: "24/7",
      friday: "24/7",
      saturday: "24/7",
      sunday: "24/7"
    }
  },
  
  // Contact Methods
  methods: [
    {
      type: "email",
      label: "Email Support",
      value: "support@kyle-hosting.de",
      description: "Get help via email within 24 hours",
      icon: "Mail",
      enabled: true
    },
    {
      type: "phone", 
      label: "Phone Support",
      value: "No phone support right now!",
      description: "Call us for immediate assistance",
      icon: "Phone",
      enabled: false
    },
    {
      type: "chat",
      label: "Live Chat",
      value: "Available 24/7",
      description: "Chat with our support team",
      icon: "MessageCircle",
      enabled: true
    },
    {
      type: "discord",
      label: "Discord Community",
      value: "Join our Discord",
      description: "Connect with other users",
      icon: "MessageSquare", 
      enabled: true
    }
  ]
};
