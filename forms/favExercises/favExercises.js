var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
}

let message = ''
btnExercise.onclick = function() {
  for (j = 0; j < selExercises.text.length; j++)
    message = message + selExercises.text[j]

  if (message == "situps, plank, ")
    console.log("You right")
  else
    console.log("Not core exercises")
}

btnMobileNav.onclick = function() {
  ChangeForm(mobileNav)
}