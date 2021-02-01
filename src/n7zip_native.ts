import path from 'path'
import fs from 'fs'
import { n7zipNativeType } from './n7zip_native_types'
export * from './n7zip_native_types'
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const n7zip_native = require('bindings')('n7zip_native') as n7zipNativeType

const libs: string[] = []
if (process.platform === 'win32') {
  libs.push(path.resolve(__dirname, `../ext/files/7z${n7zip_native.ARCH}/7z.dll`))
} else {
  const so_dir = path.resolve(__dirname, `../build/${n7zip_native.DEBUG ? 'Debug' : 'Release'}`)
  libs.push(path.join(so_dir, '7z.so'))
  const rar_so = path.join(so_dir, 'Codecs/Rar.so')
  if (fs.existsSync(rar_so)) {
    libs.push(rar_so)
  }
}

export const SevenZipLibs: ReadonlyArray<string> = libs
