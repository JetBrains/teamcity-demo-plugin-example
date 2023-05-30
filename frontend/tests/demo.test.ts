describe('Demo test', () => {
  it('should pass', () => {
    expect(2 + 2).toBe(4)
  })

  it('will fail', () => {
    throw new Error('Test failed')
  })
})
