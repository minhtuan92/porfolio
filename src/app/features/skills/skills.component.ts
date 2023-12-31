import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TechCardComponent } from 'src/app/shared/components'
import { TechCardItem } from '@shared/models'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TechCardComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frameworkItems: TechCardItem[]

  constructor() {}

  ngOnInit(): void {
    this.frameworkItems = [
      {
        id: 1,
        label: 'TailwindCSS',
        image: 'assets/images/svg/TailwindCSS.svg',
        type: 'CSS'
      },
      {
        id: 2,
        label: 'TypeScript',
        image: 'assets/images/svg/TypeScript.svg',
        type: 'Language'
      },
      {
        id: 3,
        label: 'Github',
        image: 'assets/images/svg/Github.svg',
        type: 'Version Control'
      },
      {
        id: 4,
        label: 'VSCode',
        image: 'assets/images/svg/VSCode.svg',
        type: 'CSS'
      },
      {
        id: 5,
        label: 'VSCode',
        image: 'assets/images/svg/VSCode.svg',
        type: 'CSS'
      }
    ]
  }
}
