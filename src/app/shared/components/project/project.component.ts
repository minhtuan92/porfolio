import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutService } from '@core/services';
import { ProjectItem } from '@shared/models';

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

  layoutService = inject(LayoutService);
}
