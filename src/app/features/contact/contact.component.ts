import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import {
  CONTACT_INFO_ITEMS,
  SOCIAL_LINKS,
} from '../../core/constants/portfolio-data.constants';
import { ContactInfo, SocialLink, ContactFormData } from '../../core/models';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SectionHeaderComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  readonly contactInfoItems: ContactInfo[] = CONTACT_INFO_ITEMS;
  readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  readonly sectionTitle = 'Let\'s <span class="hl">Build</span>';

  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSending = false;
  formMessage = '';
  formSuccess = false;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.init();
  }

  async onSendMessage(): Promise<void> {
    this.formMessage = '';

    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.subject.trim() ||
      !this.formData.message.trim()
    ) {
      this.formMessage = '⚠ Please fill every field.';
      this.formSuccess = false;
      return;
    }

    if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
      this.formMessage = '⚠ Enter a valid email.';
      this.formSuccess = false;
      return;
    }

    this.isSending = true;

    const result = await this.emailService.send(this.formData);

    this.formMessage = result.message;
    this.formSuccess = result.success;
    this.isSending = false;

    if (result.success) {
      this.formData = { name: '', email: '', subject: '', message: '' };
    }
  }
}
