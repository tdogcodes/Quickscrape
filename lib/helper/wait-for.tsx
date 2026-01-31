const WaitFor = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms))
}

export default WaitFor
