/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
const OFF = 4
const ERROR = 3
const WARN = 2
const INFO = 1
const DEBUG = 0
let DEBUG_LEVEL = DEBUG


/**
 * Create debug statement
 *
 * @param {number} level Default is INFO
 * @return {Function} Returned function is console.log or a no-op if debugging is turned off
 */
export default function debug(level = INFO) {
  return level >= DEBUG_LEVEL ? console : mockLog
}


/**
 * @param {number} level One of OFF, ERROR, WARN, INFO, DEBUG
 */
export function setDebugLevel(level) {
  if (!Number.isFinite(level) || level < DEBUG || level > OFF) {
    throw new Error(`Debug level must be a number from ${DEBUG}-${OFF}`)
  }
  DEBUG_LEVEL = level
}


/** Equivalent to setDebugLevel(OFF) */
export function disableDebug() {
  setDebugLevel(OFF)
}


/**
 * When debugging is turned off, use this mock log object to throw away log messages
 */
const mockLog = {
  log: () => { },
  warn: () => { },
  error: () => { },
  time: () => { },
  timeEnd: () => { },
}
