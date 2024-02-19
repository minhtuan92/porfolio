import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TooltipModule } from 'primeng/tooltip'
import { ClipboardService } from 'ngx-clipboard'

import { ToastService } from 'src/app/core/services'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = 'minhtuan92vt@gmail.com'
  skype = 'tranminhtuan92'
  linkedIn = 'https://www.linkedin.com/in/minhtuan92vt'

  constructor(
    private toastService: ToastService,
    private clipboardService: ClipboardService
  ) {}

  onClick(string: string) {
    this.toastService.info('Copied!')
    this.clipboardService.copy(string)
  }
}
