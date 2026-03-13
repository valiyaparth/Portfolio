import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContactFormData } from '../models';

declare const emailjs: {
  init(publicKey: string): void;
  send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, string>,
  ): Promise<unknown>;
};

export interface EmailSendResult {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly serviceId = 'YOUR_SERVICE_ID';
  private readonly templateId = 'YOUR_TEMPLATE_ID';
  private readonly publicKey = 'YOUR_PUBLIC_KEY';
  private initialized = false;
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  init(): void {
    if (!this.isBrowser || this.initialized) return;

    if (this.publicKey !== 'YOUR_PUBLIC_KEY') {
      try {
        emailjs.init(this.publicKey);
        this.initialized = true;
      } catch {
        console.warn('EmailJS initialization failed.');
      }
    }
  }

  async send(data: ContactFormData): Promise<EmailSendResult> {
    if (this.serviceId === 'YOUR_SERVICE_ID') {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        success: true,
        message: '✓ Demo mode — message logged. Add EmailJS keys to send real emails.',
      };
    }

    try {
      await emailjs.send(this.serviceId, this.templateId, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Parth',
      });

      return {
        success: true,
        message: "✓ Message sent! I'll get back to you within 24 hours.",
      };
    } catch {
      return {
        success: false,
        message: '✕ Send failed. Email directly: valiyaparth1407@gmail.com',
      };
    }
  }
}
