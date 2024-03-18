import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TechCardComponent } from 'src/app/shared/components'
import { TechCardItem } from '@shared/models'
import { LayoutService } from '@core/services'
import { SkillName, SkillType } from '@shared/constants'

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
      skillName: 'main front-end technology stack 🏆',
      skillItems: [
        {
          id: 1,
          label: SkillName.ANGULAR,
          image: 'assets/images/svg/angular.svg',
          type: SkillType.FRAMEWORK
        },
        {
          id: 2,
          label: SkillName.RXJS,
          image: 'assets/images/svg/rxjs.svg',
          type: SkillType.LIBRARY
        },
        {
          id: 3,
          label: SkillName.TYPESCRIPT,
          image: 'assets/images/svg/TypeScript.svg',
          type: SkillType.LANGUAGE
        },
        {
          id: 4,
          label: SkillName.TAILWINDCSS,
          image: 'assets/images/svg/TailwindCSS.svg',
          type: SkillType.CSS
        },
        {
          id: 5,
          label: SkillName.POSTCSS,
          image: 'assets/images/svg/postcss.svg',
          type: SkillType.CSS
        },
        {
          id: 6,
          label: SkillName.SASS,
          image: 'assets/images/svg/sass.svg',
          type: SkillType.CSS
        },
        {
          id: 7,
          label: SkillName.BOOTSTRAP,
          image: 'assets/images/svg/bootstrap.svg',
          type: SkillType.CSS
        },
        {
          id: 8,
          label: SkillName.MATERIALUI,
          image: 'assets/images/svg/material-ui.svg',
          type: SkillType.CSS
        }
      ]
    }

    this.additionalBEStack = {
      skillName: 'additional back-end technology stack 🎖',
      skillItems: [
        {
          id: 1,
          label: SkillName.DOTNET_CORE,
          image: 'assets/images/svg/net-core.svg',
          type: SkillType.FRAMEWORK
        },
        {
          id: 2,
          label: SkillName.ENTITY_FRAMEWORK,
          image: 'assets/images/svg/entity-framework.svg',
          type: SkillType.FRAMEWORK
        },
        {
          id: 3,
          label: SkillName.CSHARP,
          image: 'assets/images/svg/csharp.svg',
          type: SkillType.LANGUAGE
        },
        {
          id: 4,
          label: SkillName.EXPRESSJS,
          image: 'assets/images/svg/expressjs.svg',
          type: SkillType.FRAMEWORK
        },
        {
          id: 5,
          label: SkillName.JAVASCRIPT,
          image: 'assets/images/svg/js.svg',
          type: SkillType.LANGUAGE
        },
        {
          id: 6,
          label: SkillName.SPRINGBOOT,
          image: 'assets/images/svg/springboot.svg',
          type: SkillType.FRAMEWORK
        },
        {
          id: 7,
          label: SkillName.JAVA,
          image: 'assets/images/svg/java.svg',
          type: SkillType.LANGUAGE
        },
        {
          id: 8,
          label: SkillName.MYSQL,
          image: 'assets/images/svg/mysql.svg',
          type: SkillType.DATABASE
        },
        {
          id: 9,
          label: SkillName.POSTGRESQL,
          image: 'assets/images/svg/postgresql.svg',
          type: SkillType.DATABASE
        },
        {
          id: 10,
          label: SkillName.MONGODB,
          image: 'assets/images/svg/mongodb.svg',
          type: SkillType.DATABASE
        }
      ]
    }

    this.frontend = {
      skillName: 'front-end 🌍',
      skillItems: [
        {
          id: 1,
          label: SkillName.ANGULAR,
          image: 'assets/images/svg/angular.svg',
          type: SkillType.FRAMEWORK
        },
        {
          id: 2,
          label: SkillName.RXJS,
          image: 'assets/images/svg/rxjs.svg',
          type: SkillType.LIBRARY
        },
        {
          id: 3,
          label: SkillName.TYPESCRIPT,
          image: 'assets/images/svg/TypeScript.svg',
          type: SkillType.LANGUAGE
        },
        {
          id: 4,
          label: SkillName.TAILWINDCSS,
          image: 'assets/images/svg/TailwindCSS.svg',
          type: SkillType.CSS
        },
        {
          id: 5,
          label: SkillName.POSTCSS,
          image: 'assets/images/svg/postcss.svg',
          type: SkillType.CSS
        },
        {
          id: 6,
          label: SkillName.SASS,
          image: 'assets/images/svg/sass.svg',
          type: SkillType.CSS
        },
        {
          id: 7,
          label: SkillName.BOOTSTRAP,
          image: 'assets/images/svg/bootstrap.svg',
          type: SkillType.CSS
        },
        {
          id: 8,
          label: SkillName.MATERIALUI,
          image: 'assets/images/svg/material-ui.svg',
          type: SkillType.CSS
        },
        {
          id: 9,
          label: SkillName.REACTJS,
          image: 'assets/images/svg/material-ui.svg',
          type: SkillType.CSS
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
            label: SkillName.TAILWINDCSS,
            image: 'assets/images/svg/TailwindCSS.svg',
            type: SkillType.CSS
          },
          {
            id: 2,
            label: SkillName.TYPESCRIPT,
            image: 'assets/images/svg/TypeScript.svg',
            type: SkillType.LANGUAGE
          },
          {
            id: 3,
            label: SkillName.GITHUB,
            image: 'assets/images/svg/Github.svg',
            type: SkillType.VERSION_CONTROL
          },
          {
            id: 4,
            label: SkillName.VSCODE,
            image: 'assets/images/svg/VSCode.svg',
            type: SkillType.CSS
          },
          {
            id: 5,
            label: SkillName.VSCODE,
            image: 'assets/images/svg/VSCode.svg',
            type: SkillType.CSS
          }
        ]
      },
      {
        skillName: 'Backend',
        skillItems: [
          {
            id: 1,
            label: SkillName.TAILWINDCSS,
            image: 'assets/images/svg/TailwindCSS.svg',
            type: SkillType.CSS
          },
          {
            id: 2,
            label: SkillName.TYPESCRIPT,
            image: 'assets/images/svg/TypeScript.svg',
            type: SkillType.LANGUAGE
          },
          {
            id: 3,
            label: SkillName.GITHUB,
            image: 'assets/images/svg/Github.svg',
            type: SkillType.VERSION_CONTROL
          },
          {
            id: 4,
            label: SkillName.VSCODE,
            image: 'assets/images/svg/VSCode.svg',
            type: SkillType.CSS
          },
          {
            id: 5,
            label: SkillName.VSCODE,
            image: 'assets/images/svg/VSCode.svg',
            type: SkillType.CSS
          }
        ]
      },
      {
        skillName: 'Tools',
        skillItems: [
          {
            id: 1,
            label: SkillName.TAILWINDCSS,
            image: 'assets/images/svg/TailwindCSS.svg',
            type: SkillType.CSS
          },
          {
            id: 2,
            label: SkillName.TYPESCRIPT,
            image: 'assets/images/svg/TypeScript.svg',
            type: SkillType.LANGUAGE
          },
          {
            id: 3,
            label: SkillName.GITHUB,
            image: 'assets/images/svg/Github.svg',
            type: SkillType.VERSION_CONTROL
          },
          {
            id: 4,
            label: SkillName.VSCODE,
            image: 'assets/images/svg/VSCode.svg',
            type: SkillType.CSS
          },
          {
            id: 5,
            label: SkillName.VSCODE,
            image: 'assets/images/svg/VSCode.svg',
            type: SkillType.CSS
          }
        ]
      }
    ]
  }
}
