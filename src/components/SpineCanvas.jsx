import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpineCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 27);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    /* ---- lights ---- */
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 1.0);
    key.position.set(6, 9, 8);
    scene.add(key);
    const rim = new THREE.PointLight(0x0071e3, 1.6, 60);
    rim.position.set(-8, -3, -6);
    scene.add(rim);
    const fill = new THREE.PointLight(0x66b5ff, 0.7, 60);
    fill.position.set(-6, 5, 8);
    scene.add(fill);

    /* ---- spine ---- */
    const spine = new THREE.Group();
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xeceef2,
      roughness: 0.32,
      metalness: 0.12,
    });
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x0a84ff,
      emissive: 0x0a5cd6,
      emissiveIntensity: 0.55,
      roughness: 0.25,
      metalness: 0.2,
    });

    const bodyGeo = new THREE.CylinderGeometry(0.92, 0.92, 0.58, 28);
    const discGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.26, 24);
    const procGeo = new THREE.SphereGeometry(0.24, 14, 12);
    const spinGeo = new THREE.BoxGeometry(0.26, 0.26, 0.9);

    const COUNT = 14;
    const spacing = 1.35;
    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1);
      const y = (i - (COUNT - 1) / 2) * spacing;
      const x = Math.sin(t * Math.PI * 1.6 + 0.4) * 0.9;

      const seg = new THREE.Group();
      seg.position.set(x, y, 0);

      seg.add(new THREE.Mesh(bodyGeo, boneMat));

      const scaleT = 0.85 + Math.sin(t * Math.PI) * 0.35;
      const pL = new THREE.Mesh(procGeo, boneMat);
      pL.position.set(-1.05 * scaleT, 0, -0.1);
      const pR = new THREE.Mesh(procGeo, boneMat);
      pR.position.set(1.05 * scaleT, 0, -0.1);
      seg.add(pL, pR);

      const sp = new THREE.Mesh(spinGeo, boneMat);
      sp.position.set(0, 0, -1.05);
      seg.add(sp);

      if (i < COUNT - 1) {
        const nt = (i + 1) / (COUNT - 1);
        const nx = Math.sin(nt * Math.PI * 1.6 + 0.4) * 0.9;
        const disc = new THREE.Mesh(discGeo, discMat);
        disc.position.set((x + nx) / 2, y + spacing / 2, 0);
        spine.add(disc);
      }
      spine.add(seg);
    }
    spine.rotation.z = 0.06;
    scene.add(spine);

    /* ---- mouse tilt ---- */
    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);

    /* ---- responsive placement ---- */
    let desktop = true;
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      desktop = w >= 768;
      spine.position.x = desktop ? 6.5 : 0;
      spine.scale.setScalar(desktop ? 1 : 0.78);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---- animation loop ---- */
    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        spine.rotation.y = t * 0.22 + (desktop ? mouse.x * 0.35 : 0);
        spine.rotation.x = desktop ? mouse.y * 0.12 : 0;
        spine.position.y = Math.sin(t * 0.8) * 0.3;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      bodyGeo.dispose();
      discGeo.dispose();
      procGeo.dispose();
      spinGeo.dispose();
      boneMat.dispose();
      discMat.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 opacity-60 md:opacity-100" />;
}
