import { useEffect } from "react"
import { Color } from "../data"
import { useTaskStor } from "./store"

type cssColor = {
  light: string
  medium: string
  dark: string
  name: Color
}

export const colorStrings = {
  gray: {
    light: "#d0d5db",
    medium: "#9aa3b0",
    dark: "#637383",
  },
  orange: {
    light: "#fdccae",
    medium: "#ef925a",
    dark: "#e15806",
  },
  blue: {
    light: "#abddff",
    medium: "#56a7df",
    dark: "#0071bf",
  },
  green: {
    light: "#e5d8ab",
    medium: "#c0b87f",
    dark: "#9a9753",
  },
  red: {
    light: "#fcb2b6",
    medium: "#ef5e66",
    dark: "#e10915",
  },
  violet: {
    light: "#d7bdff",
    medium: "#b482ff",
    dark: "#9147ff",
  },
  yellow: {
    light: "#f4de9d",
    medium: "#e8c44f",
    dark: "#dcaa00",
  },
  forest: {
    light: "#b6edba",
    medium: "#6dc173",
    dark: "#24942b",
  },
  purple: {
    light: "#efa2e8",
    medium: "#be5eb5",
    dark: "#8c1982",
  },
  pink: {
    light: "#e1c0c9",
    medium: "#cb98a3",
    dark: "#b46f7c",
  },
  aqua: {
    light: "#94ffed",
    medium: "#4ac1ad",
    dark: "#00826c",
  },
}

export const useColor = (): cssColor => {
  const color = useTaskStor((state) => state.color)
  const { light, dark, medium } = colorStrings[color]
  useEffect(() => {
    document.body.style = `background-color: ${light};`
    for (let icon of document.getElementsByClassName("light-stroke")) {
      icon.style = ` stroke: ${light};`
    }
    for (let icon of document.getElementsByClassName("stubborn")) {
      icon.style = `fill:transparent;fill-opacity:0;stroke-width:35.3357;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1; stroke: ${light};`
    }
    for (let icon of document.getElementsByClassName("light-fill")) {
      icon.style = `transition: fill 2s ease-in-out;fill: ${light};`
    }
    for (let icon of document.getElementsByClassName("light-background")) {
      icon.style = `background: ${light};`
    }
    for (let icon of document.getElementsByClassName("light-color")) {
      icon.style = `color: ${light};`
    }
    for (let icon of document.getElementsByClassName("medium-background")) {
      icon.style = `background: ${medium}; color: ${light}`
    }
    for (let icon of document.getElementsByClassName("medium-stroke")) {
      icon.style = `stroke: ${medium};`
    }
    for (let icon of document.getElementsByClassName("dark-fill")) {
      icon.style = `fill: ${dark};`
    }
    for (let icon of document.getElementsByClassName("dark-stroke")) {
      icon.style = `stroke: ${dark};`
    }
    return () => {}
  }, [color])

  return { ...colorStrings[color], name: color }
}
