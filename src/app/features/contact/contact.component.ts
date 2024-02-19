import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TooltipModule } from 'primeng/tooltip'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {}
