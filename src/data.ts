import { Color, taskIcon, taskIcons } from "./types"

let shuffleArray = <T>(arr: T[]): T[] => {
  let array = arr.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

let set_up_looping_generator = <T>(arr: T[]) => {
  let shuffled = shuffleArray(arr)
  return (): T => {
    if (!shuffled.length) shuffled = shuffleArray(arr)
    return shuffled.pop()!
  }
}

let get_color = set_up_looping_generator([
  "gray",
  "orange",
  "red",
  "green",
  "blue",
  "forest",
  "yellow",
  "violet",
  "purple",
  "pink",
  "aqua",
] as Color[])

let get_icon = set_up_looping_generator([
  "keyboard",
  "mail",
  "stonks",
  "square_pencil",
  "phone",
  "hammerwrench",
  "palette",
  "camera",
  "music",
  "basket",
  "gas",
  "piggy",
  "utensils",
  "mug",
  "tv",
  "film",
  "book",
  "paperplane",
  "sleep",
] as taskIcon[])

function getUniqueID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + "-" + s4()
}

export class StopTask {
  color: Color = "gray"
  id = getUniqueID()
  status = "OVER"
  name = "_BREAK"
  length = 0
  remaining_seconds = 0
  icon = null
}

export class Task implements Task {
  id: string = getUniqueID()
  name: string
  length: number
  remaining_seconds: number
  color: Color
  icon: taskIcon | null
  constructor(_name: string, _length: number, icon: taskIcon = null) {
    this.color = get_color()
    this.name = _name
    this.length = _length * 60
    this.remaining_seconds = _length * 60
    // this.remaining_seconds = _length //dev
    this.id
    this.icon = icon ? icon : get_icon()
  }
}

export class TaskList implements TaskList {
  id = getUniqueID()
  name: string
  tasks: Task[] = [new StopTask()]
  looping = false // ignore StopTask or not
  timer: ReturnType<typeof setTimeout> | null = null

  constructor(_name: string, _tasks: Task[]) {
    this.name = _name
    this.tasks = [..._tasks.slice(), new StopTask()]
  }
}

export default new TaskList("Classic Pomo", [
  new Task("Focused Work", 25),
  new Task("Small Break", 5),
  new Task("Focused Work", 25),
  new Task("Small Break", 5),
  new Task("Focused Work", 25),
  new Task("Long Break", 25),
])
