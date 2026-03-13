export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface SocialLink {
  url: string;
  title: string;
  icon: string;
  svgPath?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
