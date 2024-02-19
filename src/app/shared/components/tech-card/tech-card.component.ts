import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { BadgeModule } from 'primeng/badge'

import { TechCardItem } from '@shared/models'

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, BadgeModule],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechCardComponent {
  @Input({ required: true }) item: TechCardItem
  @Input() styleClass: string | undefined = 'h-[18.75rem] w-[20.625rem]'
}
