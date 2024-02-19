import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AngularSvgIconModule } from 'angular-svg-icon'

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechCardComponent {
  @Input({ required: true }) item: { image: string; label: string; type: string }
}
