const { setDataByPrompt, setData } = require("./lib")

const start = async () => {
  // через prompt()
  const { disks, disksSecret } = await setDataByPrompt()

  // ИЛИ через код
  // const { disks, disksSecret } = setData({
  //   disksCount: 6,
  //   disks: 821906,
  //   disksSecret: 797083,
  // })

  const steps = Array.from(String(disks)).reduce((steps, disk, i) => {
    const difference = Math.abs(+disk - +String(disksSecret)[i])

    return (steps += Math.min(difference, 10 - difference))
  }, 0)

  console.log("Минимальное количество действий: ", steps)
}

start()
