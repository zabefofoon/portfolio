import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GearBackground({ variant = 'hero' }: { variant?: 'hero' | 'contact' }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-4, 4, 3, -3, 0.1, 100)
    camera.position.set(0, 0, 20)
    const material = new THREE.LineBasicMaterial({ color: 0x5689c9, transparent: true, opacity: 0.38 })
    const geometries: THREE.BufferGeometry[] = []

    const makeGear = (teeth: number, radius: number, hole: number) => {
      const shape = new THREE.Shape()
      const steps = teeth * 4
      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2
        const r = radius * (i % 4 === 1 || i % 4 === 2 ? 1.13 : 1)
        const x = Math.cos(angle) * r
        const y = Math.sin(angle) * r
        if (i === 0) shape.moveTo(x, y)
        else shape.lineTo(x, y)
      }
      const cutout = new THREE.Path()
      cutout.absarc(0, 0, hole, 0, Math.PI * 2, true)
      shape.holes.push(cutout)
      const solid = new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: false, curveSegments: 48 })
      // 원형 구멍의 매 세그먼트마다 생기는 옆면 선은 숨긴다.
      const edges = new THREE.EdgesGeometry(solid, 16)
      solid.dispose()
      geometries.push(edges)

      const spokes: number[] = []
      const spokeCount = Math.max(6, Math.floor(teeth / 2))
      for (let i = 0; i < spokeCount; i++) {
        const angle = (i / spokeCount) * Math.PI * 2
        for (const z of [0, 0.3]) {
          spokes.push(
            Math.cos(angle) * hole, Math.sin(angle) * hole, z,
            Math.cos(angle) * radius, Math.sin(angle) * radius, z,
          )
        }
      }
      const spokeGeometry = new THREE.BufferGeometry()
      spokeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(spokes, 3))
      geometries.push(spokeGeometry)
      const gear = new THREE.Group()
      gear.add(new THREE.LineSegments(edges, material))
      gear.add(new THREE.LineSegments(spokeGeometry, material))
      return gear
    }

    const large = makeGear(18, 1.75, 0.55)
    large.position.set(0, 0.7, 0)
    large.rotation.set(0.35, -0.45, 0.12)
    scene.add(large)

    const small = makeGear(12, 0.95, 0.3)
    small.position.set(0, -1.05, -0.4)
    small.rotation.set(0.35, -0.45, 0.34)
    scene.add(small)

    const leftGear = makeGear(16, 1.45, 0.46)
    leftGear.position.set(0, 0.75, -0.4)
    leftGear.rotation.set(0.35, -0.45, 0.08)
    scene.add(leftGear)

    const rightGear = makeGear(11, 0.85, 0.27)
    rightGear.position.set(0, -1.25, 0)
    rightGear.rotation.set(0.35, -0.45, 0.38)
    scene.add(rightGear)

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container
      if (!width || !height) return
      const aspect = width / height
      const viewHeight = 7
      const halfWidth = (viewHeight * aspect) / 2
      const edge = Math.max(1.6, halfWidth - (variant === 'contact' ? 2.05 : 1.55))
      large.position.x = edge
      leftGear.position.x = -edge + 0.25
      small.position.x = leftGear.position.x + 1.85
      rightGear.position.x = edge - 1.9
      camera.left = (-viewHeight * aspect) / 2
      camera.right = (viewHeight * aspect) / 2
      camera.top = viewHeight / 2
      camera.bottom = -viewHeight / 2
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.render(scene, camera)
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let lastTime = 0
    const animate = (time: number) => {
      if (lastTime) {
        const delta = Math.min((time - lastTime) / 1000, 0.05)
        large.rotation.z += delta * 0.12
        small.rotation.z -= delta * 0.16
        leftGear.rotation.z += delta * 0.12
        rightGear.rotation.z -= delta * (0.12 * 18 / 11)
      }
      lastTime = time
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }
    const updateMotion = () => {
      cancelAnimationFrame(frame)
      lastTime = 0
      if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(animate)
      else renderer.render(scene, camera)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    reducedMotion.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateMotion)
    resize()
    updateMotion()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      reducedMotion.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateMotion)
      geometries.forEach((geometry) => geometry.dispose())
      material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [variant])

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${variant === 'contact' ? 'opacity-60' : ''}`}>
      <div ref={containerRef} className="absolute inset-0" />
      <div className={variant === 'contact'
        ? 'absolute inset-0 bg-[radial-gradient(ellipse_40%_70%_at_50%_50%,white,transparent)]'
        : 'absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_50%_50%,rgba(232,243,255,0.98)_25%,rgba(232,243,255,0.88)_55%,transparent_100%)]'} />
    </div>
  )
}
