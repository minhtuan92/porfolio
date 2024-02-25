import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutService } from '@core/services'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public layoutService: LayoutService) {}
}
