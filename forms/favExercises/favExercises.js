var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
}

btnExercise.onclick = function() {
  let message = ''
  for (j = 0; j < selExercises.text.length; j++)
    message = message + selExercises.text[j]

  if (message == "situpsplank")
    lblExerciseMessage.value = 'You chose situps and planks - those are the core exercises.'
  else
    lblExerciseMessage.value = 'You did not pick the two core exercises.'
}

btnMobileNav.onclick = function() {
  ChangeForm(mobileNav)
}