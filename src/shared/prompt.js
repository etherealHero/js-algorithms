const readline = require("readline")
const util = require("node:util")

module.exports = async (message = "input: ") => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const question = util.promisify(rl.question).bind(rl)

  const disk = await question(message)

  rl.close()

  return disk
}
