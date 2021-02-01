import { n7zip_native } from '@/n7zip_native'

interface Runnable {
  title: string
  file?: string
  fullTitle(): string
  titlePath(): string[]
}

interface HookContext {
  currentTest?: Runnable
}

function isHookContext(arg: any): arg is HookContext {
  return (
    'currentTest' in arg &&
    'title' in arg.currentTest &&
    typeof arg.currentTest.fullTitle === 'function' &&
    typeof arg.currentTest.titlePath === 'function'
  )
}

function TRACE(ctx: any) {
  if (n7zip_native.TRACE && isHookContext(ctx)) {
    n7zip_native.TRACE('@test/' + ctx.currentTest?.titlePath().join('/'))
  }
}

export const mochaHooks = {
  beforeEach(this: HookContext) {
    TRACE(this)
  },
  afterEach() {
    if (global.gc !== undefined) {
      global.gc()
    }
  },
}
