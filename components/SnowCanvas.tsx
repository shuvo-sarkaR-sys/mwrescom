'use client'
import { useEffect, useRef } from 'react'

interface Flake {
  x: number; y: number; r: number
  speed: number; wind: number; alpha: number
}

export default function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number

    const flakes: Flake[] = []

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        speed: Math.random() * 0.8 + 0.3,
        wind: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      flakes.forEach(f => {
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,238,255,${f.alpha})`
        ctx.fill()
        f.y += f.speed
        f.x += f.wind
        if (f.y > canvas!.height) { f.y = -5; f.x = Math.random() * canvas!.width }
        if (f.x > canvas!.width) f.x = 0
        if (f.x < 0) f.x = canvas!.width
      })
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="snow-canvas" ref={canvasRef} />
}
