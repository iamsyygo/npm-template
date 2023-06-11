import { expect, it, describe } from 'vitest'
import Test from '../src/index'

describe('test dome', () => {
  it('第一个测试用例', async () => {
    expect(await Test({})).toMatchInlineSnapshot()
  })
})
