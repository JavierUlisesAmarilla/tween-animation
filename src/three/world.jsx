import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'stats-js'
import {assertDefined} from '../utils/assert'
import {
  BACK_COLOR,
  FOG_DENSITY,
  ENABLE_STATS,
  tempColor,
  FOG_COLOR,
  LIGHT_A_COLOR,
  LIGHT_B_COLOR,
  LIGHT_C_COLOR,
} from '../utils/constants'
import {getThreeEnv} from '../utils/common'


/**
 * World - three.js entry point
 */
export class World extends THREE.EventDispatcher {
  /**
   * @param {HTMLElement} domEl
   */
  init = ({domEl}) => {
    assertDefined(domEl, window)

    // Static vars
    this.domEl = domEl

    // Scene
    this.scene = new THREE.Scene()
    this.scene.background = tempColor.clone().set(BACK_COLOR)
    this.scene.fog = new THREE.FogExp2(tempColor.clone().set(FOG_COLOR), FOG_DENSITY)

    // Lights
    const lightA = new THREE.DirectionalLight(tempColor.clone().set(LIGHT_A_COLOR))
    lightA.position.set(1, 1, 1)
    this.scene.add(lightA)
    const lightB = new THREE.DirectionalLight(tempColor.clone().set(LIGHT_B_COLOR))
    lightB.position.set(-1, -1, -1)
    this.scene.add(lightB)
    const lightC = new THREE.AmbientLight(tempColor.clone().set(LIGHT_C_COLOR))
    this.scene.add(lightC)

    // Camera
    const {domWidth, domHeight, aspect} = getThreeEnv({domEl})
    this.camera = new THREE.PerspectiveCamera(60, aspect, 0.001, 30)
    this.camera.position.setZ(10)

    // Renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = false
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.setSize(domWidth, domHeight)
    domEl.appendChild(this.renderer.domElement)

    // Orbit Controls
    this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

    // Stats
    if (ENABLE_STATS) {
      this.stats = new Stats()
      domEl.appendChild(this.stats.dom)
    }

    // Main
    const planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshStandardMaterial({
          color: 'red',
        }),
    )
    this.scene.add(planeMesh)

    // Animate
    this.animate()

    // Events
    // window.addEventListener('resize', this.onWindowResize)
    // domEl.addEventListener('mousedown', this.onMouseDown)
    // domEl.addEventListener('mousemove', this.onMouseMove)
    // domEl.addEventListener('mouseup', this.onMouseUp)
    // domEl.addEventListener('mousewheel', this.onMouseWheel)
  }


  animate = () => {
    requestAnimationFrame((t) => {
      this.animate()
      if (this.stats) {
        this.stats.begin()
      }
      this.render()
      if (this.stats) {
        this.stats.end()
      }
    })
  }


  render = () => {
    this.renderer.render(this.scene, this.camera)
    this.orbitControls.update()
  }


  onWindowResize = () => {
    // TODO
  }


  onMouseDown = (event) => {
    // TODO
  }

  onMouseMove = (event) => {
    // TODO
  }


  onMouseUp = (event) => {
    // TODO
  }


  onMouseWheel = (event) => {
    // TODO
  }
}
