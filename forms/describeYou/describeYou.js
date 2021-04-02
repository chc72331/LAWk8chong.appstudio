rdbtnTraits.onchange = function() {
  let userMood = $("input[name = rdbtnTraits]:checked").prop("value")
  userMood = userMood.toLowerCase()
  lblDescribeMessage.value = `I would agree that you\'re a ${userMood} person too!`
}

btnFavEx.onclick = function() {
  ChangeForm(favExercises)
}
