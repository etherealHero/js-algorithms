const { setDataByPrompt } = require("./lib")

const start = async () => {
  const { groups } = await setDataByPrompt()

  // const groupCount = 8
  // const groups = "2 3 4 4 1 2 3 1"

  let groupsList = groups.split(" ")

  let single = 0
  let couples = 0
  let triplets = 0
  let quadruplets = 0

  groupsList.forEach((g) => {
    if (g === "1") single += 1
    if (g === "2") couples += 1
    if (g === "3") triplets += 1
    if (g === "4") quadruplets += 1
  })

  const oneWithTriplets = Math.min(single, triplets)

  // если остаются тройни они едут одни в машине
  triplets -= oneWithTriplets

  // если остаются одинокие они стакаются с парами
  single -= oneWithTriplets
  couples += Math.floor(single / 2)

  // если осталась нераспределенная двойня или нераспределенный одинокий
  // то нужна отдельная машина (если двойня и один - тоже поместятся)
  single = couples % 2 || single % 2 ? 1 : 0

  const cars =
    quadruplets + oneWithTriplets + triplets + Math.floor(couples / 2) + single

  console.log("Минимальное количество машин: ", cars)
}

start()
