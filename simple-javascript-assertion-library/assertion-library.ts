export function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

export function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch(error) {
    console.error(`✘ ${title}`)
    console.log(error)
  }
}