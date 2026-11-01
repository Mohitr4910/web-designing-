import React, { useEffect, useRef } from 'react';

/**
 * CyberMatrix3DMotion
 * 3D Developer Matrix & Neural Geometry canvas engine:
 * - 3D rotating isometric wireframe octahedrons & cubes
 * - Streaming vertical binary / syntax code rain trails
 * - 3D glowing particle mesh with dynamic laser links
 * - Subtle camera mouse parallax
 */
export default function CyberMatrix3DMotion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / width - 0.5) * 80;
      mouse.targetY = ((e.clientY - rect.top) / height - 0.5) * 60;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const FOCAL = 360;
    let time = 0;

    // 1. 3D Rotating Octahedrons / Polyhedra
    function createPoly(x, y, z, size, speedX, speedY) {
      const s = size;
      const vertices = [
        [0, -s, 0],  // top
        [s, 0, 0],   // right
        [0, 0, s],   // front
        [-s, 0, 0],  // left
        [0, 0, -s],  // back
        [0, s, 0]    // bottom
      ];
      const edges = [
        [0, 1], [0, 2], [0, 3], [0, 4], // top to equator
        [5, 1], [5, 2], [5, 3], [5, 4], // bottom to equator
        [1, 2], [2, 3], [3, 4], [4, 1]  // equator loop
      ];
      return {
        x, y, z, vertices, edges,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        speedX, speedY
      };
    }

    const polys = [
      createPoly(-380, -90, 420, 75, 0.012, 0.015),
      createPoly(390, 120, 380, 85, -0.010, 0.014),
      createPoly(-410, 180, 460, 65, 0.014, -0.009),
      createPoly(350, -140, 440, 70, -0.012, -0.011)
    ];

    // 2. Binary / Syntax Vertical Matrix Streams
    const MATRIX_CHARS = ['0', '1', '<', '>', '{', '}', '/', ';', '#', ':', '$', '*'];
    const numColumns = Math.max(12, Math.floor(width / 70));
    const columns = Array.from({ length: numColumns }, (_, i) => ({
      x: (i / numColumns) * width + (Math.random() - 0.5) * 30,
      y: Math.random() * height,
      speed: 1.5 + Math.random() * 2.5,
      chars: Array.from({ length: 7 }, () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]),
      opacity: 0.12 + Math.random() * 0.22
    }));

    // 3. 3D Particles
    const particles = Array.from({ length: 42 }, () => ({
      x: (Math.random() - 0.5) * 1200,
      y: (Math.random() - 0.5) * 750,
      z: Math.random() * 1000 + 60,
      vz: -(0.5 + Math.random() * 0.6),
      size: 1.5 + Math.random() * 2
    }));

    const render = () => {
      time += 0.02;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      const centerX = width / 2 + mouse.x;
      const centerY = height / 2 + mouse.y;

      ctx.clearRect(0, 0, width, height);

      // Deep cyan-blue radial atmosphere
      const bgGrad = ctx.createRadialGradient(
        centerX, centerY, 50,
        centerX, centerY, width * 0.75
      );
      bgGrad.addColorStop(0, 'rgba(12, 74, 180, 0.22)');
      bgGrad.addColorStop(0.5, 'rgba(6, 28, 78, 0.15)');
      bgGrad.addColorStop(1, 'rgba(4, 12, 36, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Matrix Code Drops
      ctx.font = '11px "JetBrains Mono", Consolas, monospace';
      columns.forEach((col) => {
        col.y += col.speed;
        if (col.y > height + 100) {
          col.y = -100;
          col.chars = Array.from({ length: 7 }, () => MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]);
        }

        col.chars.forEach((ch, idx) => {
          const cy = col.y + idx * 15;
          if (cy > 0 && cy < height) {
            const alpha = col.opacity * (1 - idx / col.chars.length);
            ctx.fillStyle = idx === 0 ? `rgba(103, 232, 249, ${alpha * 1.5})` : `rgba(56, 189, 248, ${alpha})`;
            ctx.fillText(ch, col.x, cy);
          }
        });
      });

      // Draw 3D Rotating Polyhedra
      polys.forEach((p) => {
        p.rotX += p.speedX;
        p.rotY += p.speedY;

        const cosX = Math.cos(p.rotX), sinX = Math.sin(p.rotX);
        const cosY = Math.cos(p.rotY), sinY = Math.sin(p.rotY);

        const proj = p.vertices.map(([vx, vy, vz]) => {
          // Rotate Y
          const x1 = vx * cosY + vz * sinY;
          const y1 = vy;
          const z1 = -vx * sinY + vz * cosY;

          // Rotate X
          const x2 = x1;
          const y2 = y1 * cosX - z1 * sinX;
          const z2 = y1 * sinX + z1 * cosX;

          const wx = p.x + x2;
          const wy = p.y + y2;
          const wz = p.z + z2;

          const scale = FOCAL / (FOCAL + wz);
          return {
            x: centerX + wx * scale,
            y: centerY + wy * scale,
            scale,
            z: wz
          };
        });

        // Draw edges with glowing gradient
        ctx.lineWidth = 1.2;
        p.edges.forEach(([i1, i2]) => {
          const pt1 = proj[i1];
          const pt2 = proj[i2];
          if (pt1.z <= 0 || pt2.z <= 0) return;

          const edgeAlpha = Math.max(0.1, 0.45 * (FOCAL / pt1.z));
          ctx.strokeStyle = `rgba(56, 189, 248, ${edgeAlpha})`;
          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.stroke();
        });

        // Vertex dots
        proj.forEach((pt) => {
          if (pt.z <= 0) return;
          ctx.fillStyle = '#67e8f9';
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(1.2, 2.5 * pt.scale), 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Draw 3D Particle Cloud & Links
      particles.forEach((pt) => {
        pt.z += pt.vz;
        if (pt.z < 20) {
          pt.z = 1000;
          pt.x = (Math.random() - 0.5) * 1200;
          pt.y = (Math.random() - 0.5) * 750;
        }

        const scale = FOCAL / (FOCAL + pt.z);
        pt.screenX = centerX + pt.x * scale;
        pt.screenY = centerY + pt.y * scale;

        const alpha = Math.max(0.12, 0.65 * (1 - pt.z / 1000));
        ctx.fillStyle = `rgba(103, 232, 249, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, Math.max(1, pt.size * scale), 0, Math.PI * 2);
        ctx.fill();
      });

      // Connections between close particles
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.22;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
