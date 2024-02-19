export class EnsureLoadedOnceGuard {
  constructor(target:any){
    if (target) {
      throw new Error(`${target.constructor.name} has already been loaded. Import this in the main.ts only.`)
    }
  }
}