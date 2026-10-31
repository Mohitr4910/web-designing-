import React, { useEffect, useRef } from 'react';

/**
 * Developer3DMotionBackground
 * High-performance 60FPS 3D Canvas engine rendering a cinematic developer cyber-space:
 * - Infinite 3D perspective cyber grid
 * - Rotating 3D wireframe code cubes
 * - Floating developer syntax tokens (<div />, { code }, git push, SELECT *, etc.)
 * - 3D particle constellation with glowing synapse links
 * - Warp-speed light beams & interactive mouse tilt parallax
 */
export default function Developer3DMotionBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse tracking for 3D camera parallax
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouse.targetX = x * 120;
      mouse.targetY = y * 80;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Engine Constants
    const FOCAL_LENGTH = 380;
    let time = 0;

    // 1. Floating Developer Syntax Tokens in 3D
    const CODE_SNIPPETS = [
      '</> HTML5 / React',
      '{ status: 200, speed: "99ms" }',
      'const dev = async () => {}',
      'git push origin main',
      'SELECT * FROM clients;',
      'npm run build --prod',
      'PHP 8.5 • MySQL PDO',
      '<div className="flex-1" />',
      '[ 01101100 01101111 ]',
      'Vite • TailwindCSS 3.4',
      'async function deploy()',
      'API.POST("/order/create")',
      '{ secure_ssl: true }',
      'docker-compose up -d',
      'Cache-Control: max-age=31536000'
    ];

    const tokens = CODE_SNIPPETS.map((text, i) => ({
      text,
      x: (Math.random() - 0.5) * 1100,
      y: (Math.random() - 0.5) * 700,
      z: (i / CODE_SNIPPETS.length) * 1200 + 100,
      speedZ: 0.8 + Math.random() * 0.9,
      color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#34d399',
      opacity: 0.2 + Math.random() * 0.6
    }));

    // 2. 3D Rotating Wireframe Cubes
    function createCube(size, x, y, z, rotSpeedX, rotSpeedY) {
      const s = size / 2;
      const vertices = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s],  [s, -s, s],  [s, s, s],  [-s, s, s]
      ];
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back face
        [4, 5], [5, 6], [6, 7], [7, 4], // front face
        [0, 4], [1, 5], [2, 6], [3, 7]  // connecting edges
      ];
      return {
        x, y, z, size, vertices, edges,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        rotSpeedX,
        rotSpeedY,
        rotSpeedZ: rotSpeedX * 0.6
      };
    }

    const cubes = [
      createCube(140, -320, -120, 450, 0.008, 0.012),
      createCube(95, 360, -140, 380, -0.011, 0.009),
      createCube(110, 420, 180, 520, 0.007, -0.014),
      createCube(80, -380, 200, 320, -0.009, -0.008)
    ];

    // 3. 3D Particles Constellation
    const NUM_PARTICLES = 55;
    const particles = Array.from({ length: NUM_PARTICLES }, () => ({
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 900,
      z: Math.random() * 1200 + 50,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: -(0.6 + Math.random() * 0.8),
      size: 1.5 + Math.random() * 2.5,
      hue: Math.random() > 0.5 ? 195 : 225 // Cyan or Blue
    }));

    // 4. Warp-speed Light Beams
    const NUM_BEAMS = 18;
    const beams = Array.from({ length: NUM_BEAMS }, () => ({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 1000,
      z: Math.random() * 1400 + 100,
      length: 80 + Math.random() * 120,
      speed: 4 + Math.random() * 6
    }));

    // Main 3D Render Loop
    const render = () => {
      time += 0.02;

      // Smooth mouse camera inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2 + mouse.x;
      const centerY = height / 2 + mouse.y;

      // Clear with deep tech cyber backdrop
      ctx.fillStyle = '#060f24';
      ctx.fillRect(0, 0, width, height);

      // Ambient radial neon glows
      const bgGrad = ctx.createRadialGradient(
        centerX, centerY - 60, 50,
        centerX, centerY, width * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(14, 116, 244, 0.22)');
      bgGrad.addColorStop(0.4, 'rgba(6, 40, 95, 0.35)');
      bgGrad.addColorStop(1, 'rgba(6, 15, 36, 0.95)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Cyan ambient pulse on top-right
      const cyanGrad = ctx.createRadialGradient(width * 0.8, height * 0.2, 20, width * 0.8, height * 0.2, 450);
      cyanGrad.addColorStop(0, 'rgba(6, 182, 212, 0.16)');
      cyanGrad.addColorStop(1, 'rgba(6, 15, 36, 0)');
      ctx.fillStyle = cyanGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // DRAW 1: 3D Infinite Perspective Floor Grid
      // ----------------------------------------------------
      ctx.save();
      const horizonY = centerY + 90;
      const gridZStart = 100;
      const gridZEnd = 900;
      const gridSpacingZ = 60;
      const gridOffsetX = (time * 25) % gridSpacingZ;
      const gridOffsetZ = (time * 50) % gridSpacingZ;

      ctx.lineWidth = 1;

      // Z lines (receding into the distance)
      const numXLines = 26;
      for (let i = -numXLines / 2; i <= numXLines / 2; i++) {
        const worldX = i * 75;
        const p1Scale = FOCAL_LENGTH / (FOCAL_LENGTH + gridZStart);
        const p2Scale = FOCAL_LENGTH / (FOCAL_LENGTH + gridZEnd);

        const x1 = centerX + worldX * p1Scale;
        const y1 = horizonY + 280 * p1Scale;
        const x2 = centerX + worldX * p2Scale;
        const y2 = horizonY + 280 * p2Scale;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
        grad.addColorStop(0.7, 'rgba(59, 130, 246, 0.1)');
        grad.addColorStop(1, 'rgba(6, 15, 36, 0)');

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // X lines (moving forward)
      for (let z = gridZStart; z <= gridZEnd; z += gridSpacingZ) {
        const curZ = z - gridOffsetZ;
        if (curZ < gridZStart) continue;

        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + curZ);
        const y = horizonY + 280 * scale;
        const halfWidth = (width * 0.75) * scale;

        const alpha = Math.max(0, 0.35 * (1 - curZ / gridZEnd));
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(centerX - halfWidth, y);
        ctx.lineTo(centerX + halfWidth, y);
        ctx.stroke();
      }
      ctx.restore();

      // ----------------------------------------------------
      // DRAW 2: Warp-speed Light Beams
      // ----------------------------------------------------
      beams.forEach((b) => {
        b.z -= b.speed;
        if (b.z < 20) {
          b.z = 1400;
          b.x = (Math.random() - 0.5) * 1600;
          b.y = (Math.random() - 0.5) * 1000;
        }

        const z1 = b.z;
        const z2 = b.z + b.length;
        const scale1 = FOCAL_LENGTH / (FOCAL_LENGTH + z1);
        const scale2 = FOCAL_LENGTH / (FOCAL_LENGTH + z2);

        const x1 = centerX + b.x * scale1;
        const y1 = centerY + b.y * scale1;
        const x2 = centerX + b.x * scale2;
        const y2 = centerY + b.y * scale2;

        const alpha = Math.min(1, Math.max(0, 0.45 * (1 - z1 / 1400)));
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = Math.max(1, 2 * scale1);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // ----------------------------------------------------
      // DRAW 3: 3D Wireframe Rotating Code Cubes
      // ----------------------------------------------------
      cubes.forEach((cube) => {
        cube.rotX += cube.rotSpeedX;
        cube.rotY += cube.rotSpeedY;
        cube.rotZ += cube.rotSpeedZ;

        // Rotate vertices around cube local origin
        const cosX = Math.cos(cube.rotX), sinX = Math.sin(cube.rotX);
        const cosY = Math.cos(cube.rotY), sinY = Math.sin(cube.rotY);
        const cosZ = Math.cos(cube.rotZ), sinZ = Math.sin(cube.rotZ);

        const projected = cube.vertices.map(([vx, vy, vz]) => {
          // Rotate Y
          let x1 = vx * cosY + vz * sinY;
          let y1 = vy;
          let z1 = -vx * sinY + vz * cosY;

          // Rotate X
          let x2 = x1;
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;

          // Rotate Z
          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          // Translate to world space
          const wx = cube.x + x3;
          const wy = cube.y + y3;
          const wz = cube.z + z3;

          const scale = FOCAL_LENGTH / (FOCAL_LENGTH + wz);
          return {
            x: centerX + wx * scale,
            y: centerY + wy * scale,
            scale,
            z: wz
          };
        });

        // Draw cube edges with neon gradient
        ctx.lineWidth = 1.4;
        cube.edges.forEach(([i1, i2]) => {
          const p1 = projected[i1];
          const p2 = projected[i2];
          if (p1.z <= 0 || p2.z <= 0) return;

          const edgeAlpha = Math.max(0.12, 0.55 * (FOCAL_LENGTH / p1.z));
          ctx.strokeStyle = `rgba(56, 189, 248, ${edgeAlpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        // Draw glowing vertex joints
        projected.forEach((p) => {
          if (p.z <= 0) return;
          const r = Math.max(1.5, 3.5 * p.scale);
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // ----------------------------------------------------
      // DRAW 4: 3D Particles Constellation & Dynamic Synapses
      // ----------------------------------------------------
      particles.forEach((p) => {
        p.z += p.vz;
        p.x += p.vx;
        p.y += p.vy;

        if (p.z < 20) {
          p.z = 1200;
          p.x = (Math.random() - 0.5) * 1400;
          p.y = (Math.random() - 0.5) * 900;
        }

        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + p.z);
        p.screenX = centerX + p.x * scale;
        p.screenY = centerY + p.y * scale;
        p.scale = scale;

        // Render particle dot
        const radius = Math.max(1, p.size * scale);
        const alpha = Math.min(1, Math.max(0.15, 0.8 * (1 - p.z / 1200)));
        ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw synapse links between nearby particles in 3D
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 190) {
            const linkAlpha = (1 - dist3D / 190) * 0.28;
            ctx.strokeStyle = `rgba(56, 189, 248, ${linkAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);
            ctx.stroke();
          }
        }
      }

      // ----------------------------------------------------
      // DRAW 5: Floating Developer Syntax Tokens in 3D
      // ----------------------------------------------------
      tokens.forEach((token) => {
        token.z -= token.speedZ;
        if (token.z < 30) {
          token.z = 1200;
          token.x = (Math.random() - 0.5) * 1100;
          token.y = (Math.random() - 0.5) * 700;
        }

        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + token.z);
        const screenX = centerX + token.x * scale;
        const screenY = centerY + token.y * scale;

        if (screenX < -150 || screenX > width + 150 || screenY < -50 || screenY > height + 50) return;

        const fontSize = Math.max(9, Math.round(15 * scale));
        ctx.font = `bold ${fontSize}px "JetBrains Mono", Consolas, "Fira Code", monospace`;
        const alpha = Math.min(token.opacity, Math.max(0.12, 0.75 * (1 - token.z / 1200)));

        // Pill backdrop for the code badge
        const textWidth = ctx.measureText(token.text).width;
        const padX = 7 * scale;
        const padY = 4 * scale;

        ctx.fillStyle = `rgba(8, 24, 60, ${alpha * 0.7})`;
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.45})`;
        ctx.lineWidth = 1;

        // Rounded rect for badge
        ctx.beginPath();
        ctx.roundRect(
          screenX - padX,
          screenY - fontSize - padY / 2,
          textWidth + padX * 2,
          fontSize + padY * 2,
          4 * scale
        );
        ctx.fill();
        ctx.stroke();

        // Code text with soft glow
        ctx.fillStyle = token.color;
        ctx.globalAlpha = alpha;
        ctx.fillText(token.text, screenX, screenY);
        ctx.globalAlpha = 1;
      });

      // Overlay bottom dark-to-light gradient so the hero merges seamlessly into the next white section
      const bottomFade = ctx.createLinearGradient(0, height - 120, 0, height);
      bottomFade.addColorStop(0, 'rgba(6, 15, 36, 0)');
      bottomFade.addColorStop(1, 'rgba(6, 15, 36, 1)');
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, height - 120, width, 120);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 3D Motion Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Cyber scanline / vignette texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, transparent 30%, rgba(3, 7, 18, 0.8) 100%)'
        }}
      />
    </div>
  );
}
