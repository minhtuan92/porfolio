import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { ThemeService } from './core/services'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Tuan's Porfolio"

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.updateTheme()
  }
}
