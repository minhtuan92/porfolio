import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../components/sidebar/sidebar.component'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {}
