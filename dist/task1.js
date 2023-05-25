const usePrompt = () => {
  const error = "Неверные данные! Попробуйте еще раз.\n"
  const regCount = new RegExp(/^([1-9]|10)$/)
  const regDisks = new RegExp(/^\d+$/)

  let disksCount = prompt("Количество дисков от 1 до 10: ")
  while (!regCount.test(disksCount)) {
    disksCount = prompt(`${error}Количество дисков от 1 до 10: `)
  }

  let disks = prompt("Текущее положение дисков: ")
  while (!regDisks.test(disks) || disks.length !== +disksCount) {
    disks = prompt(`${error}Текущее положение дисков: `)
  }

  let disksSecret = prompt("Секретная комбинация: ")
  while (!regDisks.test(disksSecret) || disksSecret.length !== +disksCount) {
    disksSecret = prompt(`${error}Секретная комбинация: `)
  }

  return { disksSecret, disks: +disks, disksSecret: +disksSecret }
}

const { disks, disksSecret } = usePrompt()

// const disks = 821906
// const disksSecret = 797083

const steps = Array.from(String(disks)).reduce((steps, disk, i) => {
  const difference = Math.abs(+disk - +String(disksSecret)[i])

  return (steps += Math.min(difference, 10 - difference))
}, 0)

console.log("Минимальное количество действий: ", steps)
