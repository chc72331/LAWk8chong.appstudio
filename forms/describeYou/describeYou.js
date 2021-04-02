rdbtnTraits.onchange = function() {
  let userMood = $("input[name = rdbtnTraits]:checked").prop("value")
  userMood = userMood.toLowerCase()
  lblDescribeMessage.value = `I would also say that you\'re ${userMood} too!`
}

btnFavEx.onclick = function() {
  ChangeForm(favExercises)
}
