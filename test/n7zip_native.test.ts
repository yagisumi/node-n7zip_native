import { n7zip_native } from '@/n7zip_native'

describe('n7zip_native', () => {
  test('properties', () => {
    expect(n7zip_native).toHaveProperty('DEBUG')
    expect(typeof n7zip_native.DEBUG).toBe('boolean')

    expect(n7zip_native).toHaveProperty('ARCH')
    expect(n7zip_native.ARCH).toBe(['ia32', 'x32'].includes(process.arch) ? 32 : 64)
  })
})
