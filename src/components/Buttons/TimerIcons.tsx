import React from "react"

interface IconProps {
  x: string
  y: string
  children?: React.ReactNode
  width?: string
  height?: string
}

const formatStringToCamelCase = (str) => {
  const splitted = str.split("-")
  if (splitted.length === 1) return splitted[0]
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  )
}

export const getStyleObjectFromString = (str) => {
  const style = {}
  str.split(";").forEach((el) => {
    const [property, value] = el.split(":")
    if (!property) return

    const formattedProperty = formatStringToCamelCase(property.trim())
    style[formattedProperty] = value.trim()
  })

  return style
}

const Icon = ({ x, y, children, width="80", height="90"}: IconProps) => {
  return (
    <svg
      className="icon"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      x={x}
      y={y}
      width={width}
      heigth={height}
    >
      {children}
    </svg>
  )
}

export const ReplySolidIcon = ({ x, y }: IconProps) => {
  return (
    <Icon x={x} y={y}>
      <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" />
    </Icon>
  )
}

export const CheckMarkIcon = ({ x, y }: IconProps) => {
  return (
    <Icon x={x} y={y}>
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
  )
}

export const GearIcon = ({ x, y }: IconProps) => {
  return (
    <Icon x={x} y={y}>
      <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />{" "}
    </Icon>
  )
}

export const OpenLockIcon = ({ x, y }: IconProps) => {
  return (
    <Icon x={x} y={y} width="70" height="70">
      <path d="M360 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" />
    </Icon>
  )
}

export const PenIcon = ({ x, y }: IconProps) => {
  return (
    <Icon x={x} y={y}>
      <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
    </Icon>
  )
}

export const TrashIcon = ({ x, y }: IconProps) => {
  return (
    <Icon x={x} y={y} width="70" height="70">
      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
    </Icon>
  )
}

export const SendToBottomIcon = ({ x, y }: IconProps) => {
  return (
    <svg
      className="icon"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 700"
      x={x}
      y={y}
      width="80"
      height="80"
    >
      <g id="g561">
        <path
          d="m 166.14029,548.26092 -15.85852,25.4032 c -11.1147,17.71527 1.13855,40.05707 21.79997,41.08193 l 180.17166,7.52124 c 19.8765,0.48187 33.15067,-20.35861 23.84462,-37.77511 L 295.57276,430.55822 C 284.22365,409.41823 254.7383,408.6357 242.00174,428.69249 l -15.31396,24.6242 c -3.66616,6.12656 -13.03503,7.14841 -18.07889,1.91923 -37.11342,-38.98024 -57.34578,-93.99505 -50.13517,-151.94971 8.8938,-78.73561 66.75612,-143.80429 135.04521,-175.41449 66.32056,-29.926385 94.91564,-27.69753 97.02166,-42.40963 4.6863,-26.786385 -78.1554,-18.308883 -112.8949,-7.3228 C 186.84773,105.45898 95.903881,184.307 82.501931,294.57263 c -9.79537,85.04036 21.968439,165.94047 79.079399,221.07791 9.18373,9.25151 10.92584,22.58304 4.56053,32.61303 z"
          id="path471"
          style={{ strokeWidth: "1.19904" }}
        />
        <rect
          style={getStyleObjectFromString(
            "fill:transparent;fill-opacity:0;stroke:currentColor;stroke-width:35.3357;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
          )}
          id="rect1539"
          width="129.10551"
          height="116.3347"
          x="435.60693"
          y="88.1688"
        />
        <rect
          style={getStyleObjectFromString(
            "fill:transparent;fill-opacity:0;stroke:currentColor;stroke-width:35.3357;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
          )}
          id="rect1539-0"
          width="129.10551"
          height="116.3347"
          x="435.50156"
          y="300.59494"
        />
        <rect
          style={getStyleObjectFromString(
            "fill:currentColor;fill-opacity:1;stroke:currentColor;stroke-width:35.33599949;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;fill-rule:nonzero"
          )}
          id="rect1539-0-4"
          width="129.10551"
          height="116.3347"
          x="431.55075"
          y="512.4364"
        />
      </g>
    </svg>
  )
}

export const tIcon = ({ x, y }: IconProps) => {
  return <Icon x={x} y={y}></Icon>
}