export const delayFetch = () => {
  return new Promise(resolve => {
    const timeoutFn = setTimeout(() => {
      clearTimeout(timeoutFn)
      return resolve(true)
    }, 3000)
  })
}