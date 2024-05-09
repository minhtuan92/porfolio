import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { Clipboard } from '@angular/cdk/clipboard';

import { ToastService } from 'src/app/core/services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = 'minhtuan92vt@gmail.com';

  skype = 'tranminhtuan92';

  linkedIn = 'https://www.linkedin.com/in/minhtuan92vt';

  toastService = inject(ToastService);

  clipboardService = inject(Clipboard);

  onClick(string: string): void {
    this.toastService.info('Copied!');
    this.clipboardService.copy(string);
  }
}
