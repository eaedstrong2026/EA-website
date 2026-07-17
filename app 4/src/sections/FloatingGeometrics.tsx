export default function FloatingGeometrics() {
  const shapes = [
    { size: 20, left: '5%', top: '8%', delay: 0, duration: 8, opacity: 0.35 },
    { size: 14, left: '15%', top: '25%', delay: 1.5, duration: 10, opacity: 0.30 },
    { size: 24, left: '85%', top: '5%', delay: 0.8, duration: 9, opacity: 0.38 },
    { size: 16, left: '75%', top: '45%', delay: 2, duration: 11, opacity: 0.32 },
    { size: 28, left: '8%', top: '65%', delay: 1.2, duration: 7, opacity: 0.40 },
    { size: 12, left: '30%', top: '80%', delay: 0.3, duration: 9, opacity: 0.28 },
    { size: 22, left: '60%', top: '15%', delay: 2.5, duration: 8, opacity: 0.35 },
    { size: 18, left: '45%', top: '55%', delay: 1.8, duration: 10, opacity: 0.33 },
    { size: 26, left: '90%', top: '75%', delay: 0.6, duration: 12, opacity: 0.36 },
    { size: 10, left: '20%', top: '42%', delay: 3, duration: 9, opacity: 0.25 },
    { size: 32, left: '55%', top: '88%', delay: 1, duration: 8, opacity: 0.42 },
    { size: 14, left: '70%', top: '30%', delay: 1.6, duration: 7, opacity: 0.30 },
    { size: 12, left: '35%', top: '12%', delay: 0.5, duration: 9, opacity: 0.28, color: '#3D8B7A' },
    { size: 18, left: '50%', top: '70%', delay: 2.2, duration: 10, opacity: 0.32, color: '#3D8B7A' },
    { size: 10, left: '95%', top: '50%', delay: 0.9, duration: 8, opacity: 0.25, color: '#3D8B7A' },
    { size: 16, left: '25%', top: '92%', delay: 1.4, duration: 11, opacity: 0.30, color: '#3D8B7A' },
    { size: 14, left: '80%', top: '60%', delay: 2.8, duration: 9, opacity: 0.28, color: '#3D8B7A' },
    { size: 22, left: '40%', top: '35%', delay: 0.4, duration: 12, opacity: 0.35, color: '#3D8B7A' },
    { size: 8, left: '12%', top: '55%', delay: 1.8, duration: 7, opacity: 0.22, color: '#C9A84C' },
    { size: 10, left: '65%', top: '82%', delay: 0.7, duration: 10, opacity: 0.25, color: '#C9A84C' },
    { size: 6, left: '88%', top: '38%', delay: 2.1, duration: 8, opacity: 0.20, color: '#C9A84C' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            backgroundColor: shape.color || '#1B2A3C',
            opacity: shape.opacity,
            animation: `float ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
