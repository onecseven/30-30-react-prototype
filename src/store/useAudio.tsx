import React, { useEffect, useMemo } from "react"
import { useSettingsStore } from "./store"
let taskSoundUrl = "./assets/task_done.mp3"
let listSoundUrl = "./assets/clear.wav"


export const useGenericAudio = (url, isPlaying, toggle, muted) => {
  const audio = useMemo(() => new Audio(url), [url])
  useEffect(() => {
    (isPlaying && !muted) ? audio.play() : audio.pause()
  }, [isPlaying, muted])
  useEffect(() => {
    audio.addEventListener("ended", toggle)
    return () => {
      audio.removeEventListener("ended", toggle)
    }
  }, [])
}

export const useAudio = () => {
  const { taskSound, clearSound, dispatch, muted } = useSettingsStore(
    (state) => state
  )
  useGenericAudio(taskSoundUrl, taskSound, () => dispatch("playTaskDone"), muted)
  useGenericAudio(listSoundUrl, clearSound, () => dispatch("playClear"), muted)
}
