import * as THREE from 'three'


// App Environment
export const ENABLE_STATS = false

// Dimension
export const DIM_INCH = 'inch'
export const DIM_FEET = 'ft'
export const DIM_METER = 'm'
export const DIM_CENTIMETER = 'cm'
export const DIM_MILLIMETER = 'mm'

// Default
export const FLOAT_DIGITS = 10
export const MAP_BOX_COUNT = 20000
export const SCALE = 0.01 // 0.01 is good
export const CAMERA_NEAR = Math.pow(SCALE, 3)
export const CAMERA_FAR = 30
export const MAP_GAP_PERCENT = 0 // Range: 0 ~ 1
export const HIDDEN_LAYER_Z_INDEX = 0
export const CHECK_MAP_LAYER_Z_INDEX = 0
export const COORDINATE_LAYER_Z_INDEX = 0
export const SELECTION_LAYER_Z_INDEX = 0
export const ERASER_LAYER_Z_INDEX = 0
export const BIND_BOX_SIDE_COUNT = 2 // Even number would be good (don't change this later)
export const BIND_DEPTH = 0
export const MAX_BIND_DEPTH = 3
export const xVec3 = new THREE.Vector3(1, 0, 0)
export const yVec3 = new THREE.Vector3(0, 1, 0)
export const yReverseVec3 = new THREE.Vector3(0, -1, 0)
export const zVec3 = new THREE.Vector3(0, 0, 1)
export const IMAGE_MIME_TYPE = /image\/(png|jpg|jpeg)/i
export const COORDINATE_SIDE_LENGTH = 10
export const HIDDEN_Y_BOX_COUNT = 2
export const ERASER_BOX_SIDE_COUNT = 5 // Odd number would be good
export const MAX_HISTORY_COUNT = 10
export const VIEW_DISTANCE = CAMERA_FAR / 2

// Scene Environment
export const LIGHT_A_COLOR = '#ffffff'
export const LIGHT_B_COLOR = '#002288'
export const LIGHT_C_COLOR = '#222222'
export const FOG_COLOR = '#001f3f'
export const FOG_DENSITY = 0.002
export const PAINT_COLOR = '#00ff00'
export const BACK_COLOR = '#222222'
// export const SEL_LINE_COLOR = '#ffaa00'
export const SEL_LINE_COLOR = BACK_COLOR
export const SEL_BOX_COLOR = '#ffaa00'
export const LAND_COLOR = '#00ffff'
export const COORDINATE_X_COLOR = '#ff0000'
export const COORDINATE_Y_COLOR = '#00ff00'
export const raycaster = new THREE.Raycaster()

// Temp vars
export const tempVec2 = new THREE.Vector2()
export const tempVec3 = new THREE.Vector3()
export const tempMultiMatrix41 = new THREE.Matrix4()
export const tempMatrix41 = new THREE.Matrix4()
export const tempMatrix42 = new THREE.Matrix4()
export const tempColor = new THREE.Color()

// Loading vars
export const textureLoadingManager = new THREE.LoadingManager()
export const textureLoader = new THREE.TextureLoader(textureLoadingManager)
