export default function FloatingGeometrics() {
  const shapes = [
    { size: 48, left: '8%', top: '10%', delay: 0, duration: 9, opacity: 0.55, color: '#1B2A3C' },
    { size: 36, left: '78%', top: '8%', delay: 1.2, duration: 11, opacity: 0.50, color: '#1B2A3C' },
    { size: 56, left: '5%', top: '55%', delay: 0.8, duration: 8, opacity: 0.60, color: '#1B2A3C' },
    { size: 40, left: '85%', top: '65%', delay: 2, duration: 10, opacity: 0.52, color: '#1B2A3C' },
    { size: 64, left: '45%', top: '85%', delay: 0.5, duration: 12, opacity: 0.58, color: '#1B2A3C' },
    { size: 32, left: '30%', top: '30%', delay: 1.5, duration: 9, opacity: 0.48, color: '#1B2A3C' },
    { size: 44, left: '60%', top: '40%', delay: 2.5, duration: 7, opacity: 0.54, color: '#1B2A3C' },
    { size: 28, left: '20%', top: '75%', delay: 1, duration: 10, opacity: 0.45, color: '#1B2A3C' },
    { size: 38, left: '55%', top: '15%', delay: 0.3, duration: 10, opacity: 0.50, color: '#3D8B7A' },
    { size: 30, left: '15%', top: '42%', delay: 1.8, duration: 8, opacity: 0.46, color: '#3D8B7A' },
    { size: 46, left: '70%', top: '50%', delay: 2.2, duration: 11, opacity: 0.52, color: '#3D8B7A' },
    { size: 26, left: '90%', top: '30%', delay: 0.9, duration: 9, opacity: 0.42, color: '#3D8B7A' },
    { size: 34, left: '35%', top: '68%', delay: 1.6, duration: 10, opacity: 0.48, color: '#3D8B7A' },
    { size: 24, left: '50%', top: '55%', delay: 2.8, duration: 8, opacity: 0.40, color: '#C9A84C' },
    { size: 18, left: '80%', top: '20%', delay: 0.7, duration: 10, opacity: 0.35, color: '#C9A84C' },
    { size: 22, left: '25%', top: '88%', delay: 1.3, duration: 9, opacity: 0.38, color: '#C9A84C' },
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
            backgroundColor: shape.color,
            opacity: shape.opacity,
            boxShadow: `0 0 ${shape.size}px ${shape.size / 3}px ${shape.color}40`,
            animation: `float ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
