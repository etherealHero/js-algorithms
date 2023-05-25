const prompt = require("../shared/prompt")

const setDataByPrompt = async () => {
  const error = "Неверные данные! Попробуйте еще раз.\n"
  const reg = new RegExp(/([1-4] )?[1-4]/)

  let groupCount = await prompt("Количество групп от 1 до 100: ")
  while (+groupCount < 1 || +groupCount > 100 || isNaN(+groupCount)) {
    groupCount = await prompt(`${error}Количество групп от 1 до 100: `)
  }

  let groups = await prompt("Группы по порядку через пробел: ")
  while (!reg.test(groups) || groups.split(" ").length !== +groupCount) {
    groups = await prompt(`${error}Группы по порядку через пробел: `)
  }

  return { groupCount, groups }
}

module.exports = { prompt, setDataByPrompt }
