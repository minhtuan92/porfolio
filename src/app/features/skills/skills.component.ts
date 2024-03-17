import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TechCardComponent } from 'src/app/shared/components'
import { TechCardItem } from '@shared/models'
import { LayoutService } from '@core/services'

interface Skill {
  skillName: string
  skillItems: TechCardItem[]
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TechCardComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  frameworkItems: TechCardItem[]
  skills: Skill[]
  mainFEStack: Skill
  additionalBEStack: Skill
  frontend: Skill
  backend: Skill
  versionControl: Skill
  packageControl: Skill
  os: Skill
  testing: Skill
  tools: Skill

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
    this.mainFEStack = {
      skillName: 'Main Front-end Technology Stack',
      skillItems: [
        {
          id: 1,
          label: 'Angular',
          image: 'assets/images/svg/angular.svg',
          type: 'Framework'
        },
        {
          id: 2,
          label: 'Rxjs',
          image: 'assets/images/svg/rxjs.svg',
          type: 'Library'
        },
        {
          id: 3,
          label: 'Typescript',
          image: 'assets/images/svg/TypeScript.svg',
          type: 'Language'
        },
        {
          id: 4,
          label: 'TailwindCSS',
          image: 'assets/images/svg/TailwindCSS.svg',
          type: 'CSS'
        },
        {
          id: 5,
          label: 'PostCSS',
          image: 'assets/images/svg/postcss.svg',
          type: 'CSS'
        },
        {
          id: 6,
          label: 'SASS',
          image: 'assets/images/svg/sass.svg',
          type: 'CSS'
        },
        {
          id: 7,
          label: 'Bootstrap',
          image: 'assets/images/svg/bootstrap.svg',
          type: 'CSS'
        },
        {
          id: 8,
          label: 'MaterialUI',
          image: 'assets/images/svg/material-ui.svg',
          type: 'CSS'
        }
      ]
    }

    this.additionalBEStack = {
      skillName: 'Additional Back-end Technology Stack',
      skillItems: [
        {
          id: 1,
          label: '.Net Core',
          image: 'assets/images/svg/net-core.svg',
          type: 'Framework'
        },
        {
          id: 2,
          label: 'Entity Framework',
          image: 'assets/images/svg/entity-framework.svg',
          type: 'Framework'
        },
        {
          id: 3,
          label: 'C#',
          image: 'assets/images/svg/csharp.svg',
          type: 'Language'
        },
        {
          id: 4,
          label: 'ExpressJS',
          image: 'assets/images/svg/expressjs.svg',
          type: 'Framework'
        },
        {
          id: 5,
          label: 'Javascript',
          image: 'assets/images/svg/js.svg',
          type: 'Language'
        },
        {
          id: 6,
          label: 'Spring Boot',
          image: 'assets/images/svg/springboot.svg',
          type: 'Framework'
        },
        {
          id: 7,
          label: 'Java',
          image: 'assets/images/svg/java.svg',
          type: 'Language'
        },
        {
          id: 8,
          label: 'MySQL',
          image: 'assets/images/svg/mysql.svg',
          type: 'Database'
        },
        {
          id: 9,
          label: 'PostgreSQL',
          image: 'assets/images/svg/postgresql.svg',
          type: 'Database'
        },
        {
          id: 10,
          label: 'MongoDB',
          image: 'assets/images/svg/mongodb.svg',
          type: 'Database'
        }
      ]
    }

    this.skills = [
      { ...this.mainFEStack },
      { ...this.additionalBEStack },
      {
        skillName: 'Frontend',
        skillItems: [
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
      },
      {
        skillName: 'Backend',
        skillItems: [
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
      },
      {
        skillName: 'Tools',
        skillItems: [
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
    ]
  }
}
