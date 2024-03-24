import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { LayoutService } from '@core/services'

import { ProjectItem } from '@shared/models'
import { AngularSvgIconModule } from 'angular-svg-icon'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  @Input({ required: true }) project: ProjectItem

  constructor(protected layoutService: LayoutService) {}
}
