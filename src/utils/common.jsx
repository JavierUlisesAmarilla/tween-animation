import {assertDefined} from './assert'
import {
  tempMatrix41,
  tempVec3,
  HIDDEN_Y_BOX_COUNT,
  FLOAT_DIGITS,
} from './constants'


export const getCameraFovToFitScreen = ({mapBoxHeight, viewDistance, yBoxCount}) => {
  assertDefined(mapBoxHeight, viewDistance, yBoxCount)
  const cameraFov = 2 * Math.atan(
      (mapBoxHeight * (yBoxCount - HIDDEN_Y_BOX_COUNT)) / (2 * viewDistance),
  ) * (180 / Math.PI) // To fit map to screen half height
  return cameraFov
}


export const toScreenPosition = ({obj, camera, renderer}) => {
  assertDefined(obj, camera, renderer)
  const vector = tempVec3.clone()
  const widthHalf = 0.5 * renderer.domElement.width
  const heightHalf = 0.5 * renderer.domElement.height
  obj.updateMatrixWorld()
  vector.setFromMatrixPosition(obj.matrixWorld)
  vector.project(camera)
  vector.x = (vector.x * widthHalf) + widthHalf
  vector.y = - (vector.y * heightHalf) + heightHalf
  return {
    x: vector.x,
    y: vector.y,
  }
}


export const getInstMeshPos = ({instMesh, instId}) => {
  assertDefined(instMesh, instId)
  const matrix4 = tempMatrix41.clone()
  instMesh.getMatrixAt(instId, matrix4)
  const instMeshPos = tempVec3.clone().setFromMatrixPosition(matrix4)
  return instMeshPos
}


export const componentToHex = (c) => {
  const hex = c.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}


export const rgbToHex = (r = 0, g = 0, b = 0) => {
  const hex = `#${componentToHex(parseInt(r))}${componentToHex(parseInt(g))}${componentToHex(parseInt(b))}`
  return hex
}


/**
 * @param {object} obj
 * @return {boolean} True if val is an object
 */
export const isObject = (obj) => {
  return obj === Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]'
}


export const stringifyMapArr = (srcMap) => {
  return JSON.stringify(Array.from(srcMap))
}


export const strToMap = (str) => {
  return new Map(JSON.parse(str))
}


export const cloneMap = (srcMap) => {
  assertDefined(srcMap)
  const clonedMap = strToMap(stringifyMapArr(srcMap))
  return clonedMap
}


/**
 * Convert a string-encoded float or number to a truncated float, of fixed-length `len` or no decimal point expansion
 * - 'string' -> 0
 * - '0' -> 0
 * - '12.34567' -> 12.346
 * - '12.340' -> 12.34
 * - '12.300' -> 12.3
 * - '12.000' -> 12
 *
 * @param {string|number} str
 * @param {number} floatDigits
 * @return {number} float
 */
export const floatStrTrim = (str, floatDigits = FLOAT_DIGITS) => {
  assertDefined(str, floatDigits)
  let floatStr
  if (typeof str === 'string') {
    floatStr = parseFloat(str)
  } else {
    floatStr = str
  }
  if (!floatStr) {
    floatStr = 0
  }
  const val = Number(floatStr.toFixed(floatDigits))
  if (!isFinite(val)) {
    throw new Error('Parameter is invalid.')
  }
  return val
}


export const getThreeEnv = ({domEl}) => {
  assertDefined(domEl)
  const elRect = domEl.getBoundingClientRect()
  const domWidth = elRect.width
  const domHeight = elRect.height
  const aspect = domWidth / domHeight
  return {
    domWidth,
    domHeight,
    aspect,
  }
}
