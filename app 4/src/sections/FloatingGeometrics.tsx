export default function FloatingGeometrics() {
  const shapes = [
    { type: 'circle', size: 8, left: '5%', top: '12%', delay: 0, duration: 7 },
    { type: 'dot', size: 4, left: '12%', top: '35%', delay: 1.2, duration: 9 },
    { type: 'circle', size: 6, left: '88%', top: '8%', delay: 0.5, duration: 8 },
    { type: 'dot', size: 3, left: '92%', top: '28%', delay: 2, duration: 6 },
    { type: 'circle', size: 10, left: '78%', top: '55%', delay: 0.8, duration: 10 },
    { type: 'dot', size: 5, left: '8%', top: '62%', delay: 1.5, duration: 7.5 },
    { type: 'circle', size: 7, left: '25%', top: '78%', delay: 0.3, duration: 8.5 },
    { type: 'dot', size: 4, left: '68%', top: '82%', delay: 1.8, duration: 9 },
    { type: 'circle', size: 5, left: '45%', top: '15%', delay: 2.5, duration: 7 },
    { type: 'dot', size: 6, left: '55%', top: '68%', delay: 0.6, duration: 8 },
    { type: 'circle', size: 4, left: '15%', top: '88%', delay: 1, duration: 10 },
    { type: 'dot', size: 3, left: '85%', top: '92%', delay: 1.3, duration: 7 },
    { type: 'circle', size: 6, left: '35%', top: '45%', delay: 0.9, duration: 9 },
    { type: 'dot', size: 5, left: '60%', top: '38%', delay: 1.6, duration: 8.5 },
    { type: 'circle', size: 8, left: '48%', top: '88%', delay: 0.4, duration: 7.5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-[0.12]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            backgroundColor: shape.type === 'circle' ? '#1B2A3C' : '#3D8B7A',
            animation: `float ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
