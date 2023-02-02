let taskSound = new Audio("https://tatiana.moe/assets/task_done.mp3")
let listSound = new Audio("https://tatiana.moe/assets/clear.mp3")


export const playTaskDoneSound = () => {
  taskSound.play()
}

export const playClearSound = () => {
  listSound.play()
}