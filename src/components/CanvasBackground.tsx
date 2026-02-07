import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function Stars() {
    const ref = useRef<any>(null);
    // Further reduced star count for maximum performance
    const sphere = useMemo(() => random.inSphere(new Float32Array(800), { radius: 1.5 }), []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30; // Slower rotation is often smoother
            ref.current.rotation.y -= delta / 35;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color="#80011f"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export const CanvasBackground = () => {
    return (
        <div className="canvas-container">
            <Canvas
                flat
                camera={{ position: [0, 0, 1] }}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: false
                }}
                dpr={[1, 1]} // strictly limit to 1x for performance
            >
                <Stars />
            </Canvas>
        </div>
    );
};
