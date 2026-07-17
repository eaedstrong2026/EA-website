import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Node {
  id: number
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
}

function FloatingNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animRef = useRef<number>(0)
  const [dimensions, setDimensions] = useState({ w: 1440, h: 900 })

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setDimensions({ w, h })
      if (canvasRef.current) {
        canvasRef.current.width = w
        canvasRef.current.height = h
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const count = Math.min(35, Math.floor(dimensions.w * dimensions.h / 25000))
    nodesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.w,
      y: Math.random() * dimensions.h,
      baseX: 0,
      baseY: 0,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))
    nodesRef.current.forEach(n => { n.baseX = n.x; n.baseY = n.y })
  }, [dimensions])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0
    const animate = () => {
      time += 0.008
      ctx.clearRect(0, 0, dimensions.w, dimensions.h)
      const nodes = nodesRef.current

      nodes.forEach(n => {
        const driftX = Math.sin(time + n.id * 1.3) * 30
        const driftY = Math.cos(time * 0.7 + n.id * 0.9) * 25
        n.x = n.baseX + driftX + n.vx * time * 10
        n.y = n.baseY + driftY + n.vy * time * 10

        if (n.x < -50) n.baseX += dimensions.w + 100
        if (n.x > dimensions.w + 50) n.baseX -= dimensions.w + 100
        if (n.y < -50) n.baseY += dimensions.h + 100
        if (n.y > dimensions.h + 50) n.baseY -= dimensions.h + 100
      })

      ctx.strokeStyle = 'rgba(27, 42, 60, 0.15)'
      ctx.lineWidth = 0.8
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.2
            ctx.strokeStyle = `rgba(27, 42, 60, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          for (let k = j + 1; k < nodes.length; k++) {
            const d = (a: Node, b: Node) => {
              const dx = a.x - b.x, dy = a.y - b.y
              return Math.sqrt(dx * dx + dy * dy)
            }
            const d12 = d(nodes[i], nodes[j])
            const d23 = d(nodes[j], nodes[k])
            const d13 = d(nodes[i], nodes[k])
            const maxSide = Math.max(d12, d23, d13)
            if (maxSide < 200) {
              const alpha = (1 - maxSide / 200) * 0.04
              ctx.fillStyle = `rgba(61, 139, 122, ${alpha})`
              ctx.beginPath()
              ctx.moveTo(nodes[i].x, nodes[i].y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
              ctx.lineTo(nodes[k].x, nodes[k].y)
              ctx.closePath()
              ctx.fill()
            }
          }
        }
      }

      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(27, 42, 60, 0.08)'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(27, 42, 60, 0.5)'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(27, 42, 60, 0.85)'
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animRef.current)
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      width={dimensions.w}
      height={dimensions.h}
    />
  )
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F1EB' }}>
      <FloatingNetwork />

      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#1B2A3C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 2 }}>
        {[
          { s: 48, l: '8%', t: '10%', d: 0, dur: 9, o: 0.55, img: '/images/apple-navy.png' },
          { s: 36, l: '78%', t: '8%', d: 1.2, dur: 11, o: 0.50, img: '/images/apple-navy.png' },
          { s: 56, l: '5%', t: '55%', d: 0.8, dur: 8, o: 0.60, img: '/images/apple-navy.png' },
          { s: 40, l: '85%', t: '65%', d: 2, dur: 10, o: 0.52, img: '/images/apple-navy.png' },
          { s: 64, l: '45%', t: '85%', d: 0.5, dur: 12, o: 0.58, img: '/images/apple-navy.png' },
          { s: 32, l: '30%', t: '30%', d: 1.5, dur: 9, o: 0.48, img: '/images/apple-navy.png' },
          { s: 44, l: '60%', t: '40%', d: 2.5, dur: 7, o: 0.54, img: '/images/apple-navy.png' },
          { s: 28, l: '20%', t: '75%', d: 1, dur: 10, o: 0.45, img: '/images/apple-navy.png' },
          { s: 38, l: '55%', t: '15%', d: 0.3, dur: 10, o: 0.50, img: '/images/apple-teal.png' },
          { s: 30, l: '15%', t: '42%', d: 1.8, dur: 8, o: 0.46, img: '/images/apple-teal.png' },
          { s: 46, l: '70%', t: '50%', d: 2.2, dur: 11, o: 0.52, img: '/images/apple-teal.png' },
          { s: 26, l: '90%', t: '30%', d: 0.9, dur: 9, o: 0.42, img: '/images/apple-teal.png' },
          { s: 34, l: '35%', t: '68%', d: 1.6, dur: 10, o: 0.48, img: '/images/apple-teal.png' },
          { s: 24, l: '50%', t: '55%', d: 2.8, dur: 8, o: 0.40, img: '/images/apple-gold.png' },
          { s: 18, l: '80%', t: '20%', d: 0.7, dur: 10, o: 0.35, img: '/images/apple-gold.png' },
          { s: 22, l: '25%', t: '88%', d: 1.3, dur: 9, o: 0.38, img: '/images/apple-gold.png' },
        ].map((sh, i) => (
          <img key={i} src={sh.img} alt="" className="absolute" style={{
            width: sh.s, height: sh.s, left: sh.l, top: sh.t, opacity: sh.o,
            animation: `float ${sh.dur}s ease-in-out ${sh.d}s infinite`,
          }} />
        ))}
      </div>

      <div className="relative z-10 container-s text-center pt-24 pb-20">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="section-label justify-center flex">
          Educational Consulting
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="font-serif text-6xl md:text-7xl lg:text-[90px] text-navy leading-[0.95] mb-6">
          Empowering<br />Schools
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="font-sans text-base text-body max-w-[540px] mx-auto mb-10 leading-relaxed">
          With over 25 years of combined experience, Educators Alliance has partnered with schools to strengthen instructional initiatives, boost operational efficiency, and foster meaningful community engagement.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <a href="#about" onClick={handleExplore} className="btn-pill">
            Explore Our Approach
          </a>
        </motion.div>
      </div>
    </section>
  )
}
