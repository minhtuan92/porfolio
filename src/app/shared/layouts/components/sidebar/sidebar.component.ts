import { Component, HostListener, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  lineNumbers: number[] = []

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateLineNumbers()
  }

  ngOnInit() {
    this.calculateLineNumbers()
  }

  calculateLineNumbers() {
    const screenHeight = window.outerHeight
    const lineHeight = 24
    const zoom = Math.round((window.outerWidth / window.innerWidth) * 100) / 100
    const maxLineNumbers = Math.floor(Math.floor(screenHeight / lineHeight) / zoom)
    this.lineNumbers = Array.from({ length: maxLineNumbers }, (_, index) => index + 1)
  }
}
