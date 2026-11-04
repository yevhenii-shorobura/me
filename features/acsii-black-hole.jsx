"use client"

import React, { useEffect, useRef, useState } from 'react';

// ==========================================
// НАЛАШТУВАННЯ ЗА ЗАМОВЧУВАННЯМ (CONFIG)
// ==========================================
import {
    DEFAULT_CONFIG
} from "./config"
import COLOR_LUT from "../components/aura-gradients-component"
import { PauseBlackHoleButton } from '../components/pause-black-hole-button';

// Попередньо обчислений градієнт палітри "Aura" (256 рівнів яскравості)
// Створюється один раз поза компонентом для максимальної продуктивності


export function ASCIIBlackHoleComponent({
  fontSize = DEFAULT_CONFIG.fontSize,
  maxZoom = DEFAULT_CONFIG.maxZoom,
  scrollLerp = DEFAULT_CONFIG.scrollLerp,
  rotationSpeed = DEFAULT_CONFIG.rotationSpeed,
  diskTilt = DEFAULT_CONFIG.diskTilt,
  scrollHeight = 'auto', // Дозволяє динамічну висоту за контентом або фіксовану
  children                // Твій контент портфоліо, який можна рендерити поверх
}) {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const isPausedRef = useRef(false);

  useEffect(() => {
    isPausedRef.current = isPaused;
  },[isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    let width = window.innerWidth;
    let height = window.innerHeight;
    let charHeight = fontSize;
    let charWidth = fontSize * 0.6;
    let cols = 0;
    let rows = 0;

    let targetScroll = 0;
    let currentScroll = 0;
    let time = 0;
    let animationFrameId;

    const asciiChars = DEFAULT_CONFIG.asciiChars;
    const charLen = asciiChars.length - 1;
    const cosT = Math.cos(diskTilt);
    const sinT = Math.sin(diskTilt);

    const initCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      charHeight = fontSize;
      charWidth = fontSize * 0.6;
      cols = Math.ceil(width / charWidth);
      rows = Math.ceil(height / charHeight);

      // "bold" дає символам площу світіння замість тонких павутинок
      ctx.font = `bold ${fontSize}px 'Courier New', Courier, monospace`;
      ctx.textBaseline = 'top';
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    };

    initCanvas();
    handleScroll();

    window.addEventListener('resize', initCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Основний цикл рендерингу
    const render = () => {
      if(!isPausedRef.current) {
        time += 0.016 * rotationSpeed; 
      }

      currentScroll += (targetScroll - currentScroll) * scrollLerp;

      // Очищення фону в глибокий бордово-чорний
      ctx.fillStyle = '#050102';
      ctx.fillRect(0, 0, width, height);

      // Експоненціальний зум для ефекту прольоту крізь горизонт подій
      const zoom = 1 + Math.pow(currentScroll, 2.3) * (maxZoom - 1);
      const baseScale = Math.min(width, height) * 0.22 * zoom;

      const cx = width * 0.5;
      const cy = height * 0.5;

      for (let r = 0; r < rows; r++) {
        const py = r * charHeight;
        const dy = (py - cy) / baseScale;

        for (let c = 0; c < cols; c++) {
          const px = c * charWidth;
          const dx = (px - cx) / baseScale;

          // Поворот координат під кут нахилу диска
          const x = dx * cosT - dy * sinT;
          const y = dx * sinT + dy * cosT;

          const distSq = x * x + y * y;
          const dist = Math.sqrt(distSq);

          // Швидке відсікання порожнього космосу або внутрішньої сингулярності
          if (dist < 0.72 || dist > 4.2) continue;

          // 1. Тінь горизонту подій (Event Horizon)
          const shadowMask = Math.min(1, Math.max(0, (dist - 0.75) / 0.12));

          // 2. Тонке фотонне кільце (Photon Ring)
          const photonRing = Math.exp(-Math.pow((dist - 0.88) / 0.055, 2)) * 1.15;

          // 3. Гравітаційне лінзування (верхнє та нижнє гало як у Гаргантюа)
          const haloEnv = Math.exp(-Math.pow((dist - 1.08) / 0.34, 2));
          const haloArch = Math.pow(Math.abs(y) / (dist + 0.001), 1.35);
          const haloAngle = Math.atan2(y, x);
          const haloSpiral = 0.82 + 0.18 * Math.sin(haloAngle * 5 - time * 1.8 + dist * 6);
          const lensedHalo = haloEnv * haloArch * haloSpiral * 0.9;

          // 4. Головний акреційний диск у перспективі (сплющений по Y)
          const diskR = Math.sqrt(x * x + Math.pow(y * 5.2, 2));
          let mainDisk = 0;

          if (diskR > 0.78 && diskR < 4.0) {
            const innerFade = Math.min(1, Math.max(0, (diskR - 0.78) / 0.25));
            const outerFade = Math.exp(-Math.pow((diskR - 1.15) / 1.45, 2));
            const diskAngle = Math.atan2(y * 5.2, x);

            // Спіральні хвилі плазми в диску
            const spiral1 = Math.sin(diskR * 15 - time * 3.2 + diskAngle * 2);
            const spiral2 = Math.cos(diskR * 27 - time * 4.8 - diskAngle * 3);
            const texture = 0.68 + 0.22 * spiral1 + 0.10 * spiral2;

            mainDisk = innerFade * outerFade * texture * 1.45;
          }

          // Передній рукав диска перекриває нижню частину чорної діри
          const frontOverlap = y > -0.18 && y < 0.22 ? Math.min(1, Math.max(0, (1.2 - Math.abs(y) * 5))) : 0;
          const combinedHalo = (photonRing + lensedHalo) * shadowMask;
          const totalRaw = Math.max(combinedHalo, mainDisk * (0.4 + 0.6 * frontOverlap)) + combinedHalo * 0.35;

          // 5. Релятивістський ефект Доплера (ліва сторона рухається на нас і світиться яскравіше)
          const doppler = 1.0 - 0.32 * (x / (dist + 0.35));

          // 6. М'яка зовнішня бордова аура
          const outerAura = Math.exp(-dist * 0.75) * 0.16 * shadowMask;

          let intensity = (totalRaw * doppler) + outerAura;

          if (intensity > 0.035) {
            const clamped = Math.min(1, intensity);
            const charIdx = Math.min(charLen, Math.floor(clamped * charLen));
            const colorIdx = Math.min(255, Math.floor(clamped * 255));

            ctx.fillStyle = COLOR_LUT[colorIdx];
            ctx.fillText(asciiChars[charIdx], px, py);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Очищення ресурсів при розмонтуванні компонента
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', initCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fontSize, maxZoom, scrollLerp, rotationSpeed, diskTilt]);

  return (
    <div style={{ position: 'relative', minHeight: scrollHeight, backgroundColor: '#050102', overflowX: 'hidden', width: '100%' }}>
      <canvas
        ref={canvasRef}
        
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      {/* Контейнер для твого контенту портфоліо поверх чорної діри */}
      <div className="relative min-h-screen w-full h-full z-10 pointer-events-auto">
          {children}
          <PauseBlackHoleButton onClick={() => setIsPaused(!isPaused)} state={isPaused} />
      </div>
    </div>
  );
}