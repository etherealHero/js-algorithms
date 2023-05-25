const prompt = require("../shared/prompt")

const setDataByPrompt = async () => {
  const error = "Неверные данные! Попробуйте еще раз.\n"
  const regCount = new RegExp(/^([1-9]|10)$/)
  const regDisks = new RegExp(/^\d+$/)

  let disksCount = await prompt("Количество дисков от 1 до 10: ")
  while (!regCount.test(disksCount)) {
    disksCount = await prompt(`${error}Количество дисков от 1 до 10: `)
  }

  let disks = await prompt("Текущее положение дисков: ")
  while (!regDisks.test(disks) || disks.length !== +disksCount) {
    disks = await prompt(`${error}Текущее положение дисков: `)
  }

  let disksSecret = await prompt("Секретная комбинация: ")
  while (!regDisks.test(disksSecret) || disksSecret.length !== +disksCount) {
    disksSecret = await prompt(`${error}Секретная комбинация: `)
  }

  return { disksSecret, disks: +disks, disksSecret: +disksSecret }
}

const setData = ({ disksCount, disks, disksSecret }) => {
  console.log(`\nЗадано ${disksCount} дисков`)
  console.log(`Текущее положение дисков ${disks}`)
  console.log(`Секретная комбинация ${disksSecret}`)

  return { disksCount, disks, disksSecret }
}

module.exports = { prompt, setDataByPrompt, setData }
