import { Injectable, Optional, SkipSelf } from '@angular/core'
import { MessageService } from 'primeng/api'

import { TOAST_SEVERITY } from 'src/app/shared/constants'
import { EnsureLoadedOnceGuard } from 'src/app/shared/utils'

@Injectable({
  providedIn: 'root'
})
export class ToastService extends EnsureLoadedOnceGuard {
  constructor(
    @Optional() @SkipSelf() parent: ToastService,
    private messageService: MessageService
  ) {
    super(parent)
  }

  success(detail: string, life?: number, summary?: string): void {
    this.toast(TOAST_SEVERITY.SUCCESS, summary, detail, life)
  }

  info(detail: string, life?: number, summary?: string): void {
    this.toast(TOAST_SEVERITY.INFO, summary, detail, life)
  }

  warn(detail: string, life?: number, summary?: string): void {
    this.toast(TOAST_SEVERITY.WARN, summary, detail, life)
  }

  error(detail: string, life?: number, summary?: string): void {
    this.toast(TOAST_SEVERITY.ERROR, summary, detail, life)
  }

  toast(severity: string, summary?: string, detail?: string, life: number = 3000) {
    return this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life
    })
  }
}
