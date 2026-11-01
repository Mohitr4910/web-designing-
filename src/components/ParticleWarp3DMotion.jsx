import React, { useEffect, useRef } from 'react';

/**
 * ParticleWarp3DMotion
 * High-speed 3D cyber particle tunnel & energy rings for Call-To-Action sections:
 * - 3D radial warp tunnel effect
 * - Pulsing developer energy rings expanding in 3D
 * - Neon particles rushing towards the camera with velocity trails
 * - 60FPS lightweight Canvas execution
 */
export default function ParticleWarp3DMotion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const NUM_STARS = 75;
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 600,
      z: Math.random() * 1000 + 20,
      speed: 3 + Math.random() * 4,
      size: 1 + Math.random() * 2,
      color: Math.random() > 0.4 ? '#38bdf8' : '#c084fc'
    }));

    // 3D expanding rings
    const rings = [
      { z: 150, speed: 2.2, maxRadius: 280 },
      { z: 450, speed: 2.2, maxRadius: 280 },
      { z: 750, speed: 2.2, maxRadius: 280 }
    ];

    const FOCAL = 340;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Subtle ambient glow
      const glow = ctx.createRadialGradient(centerX, centerY, 30, centerX, centerY, width * 0.6);
      glow.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
      glow.addColorStop(0.5, 'rgba(99, 102, 241, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Expanding Rings
      rings.forEach((ring) => {
        ring.z -= ring.speed;
        if (ring.z < 20) ring.z = 900;

        const scale = FOCAL / (FOCAL + ring.z);
        const radius = ring.maxRadius * scale;
        const alpha = Math.max(0, 0.3 * (1 - ring.z / 900));

        ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * 1.8, radius * 0.75, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Render 3D Warp Particles with motion streak
      stars.forEach((s) => {
        const prevZ = s.z;
        s.z -= s.speed;

        if (s.z < 15) {
          s.z = 1000;
          s.x = (Math.random() - 0.5) * 1400;
          s.y = (Math.random() - 0.5) * 600;
        }

        const scale1 = FOCAL / (FOCAL + s.z);
        const scale2 = FOCAL / (FOCAL + prevZ);

        const x1 = centerX + s.x * scale1;
        const y1 = centerY + s.y * scale1;
        const x2 = centerX + s.x * scale2;
        const y2 = centerY + s.y * scale2;

        const alpha = Math.min(1, Math.max(0.1, 0.85 * (1 - s.z / 1000)));

        ctx.strokeStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = Math.max(1, s.size * scale1 * 1.8);

        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.stroke();

        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-70"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
