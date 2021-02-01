export interface n7zipNativeType {
  DEBUG: boolean
  ARCH: 32 | 64
  TRACE?(msg: string): void
}
