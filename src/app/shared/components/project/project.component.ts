import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LayoutService } from '@core/services';

import { ProjectItem } from '@shared/models';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  project = input.required<ProjectItem>();

  constructor(protected layoutService: LayoutService) {}
}
