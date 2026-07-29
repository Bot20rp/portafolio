import SplitText from "../efecct/SplitText";
import SoftAurora from "../efecct/GhostCursor";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/portfolio";
import heroImage from "../assets/hero1.jpg";
import yoSiempre from "../assets/yo.jpeg"

const Hero = () => {

    return (
        <section id="hero" className="relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-base-300/50 bg-base-100/80 p-6 shadow-2xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
                <SoftAurora
                    speed={0.6}
                    scale={1.5}
                    brightness={1}
                    color1="#f7f7f7"
                    color2="#e100ff"
                    noiseFrequency={2.5}
                    noiseAmplitude={1}
                    bandHeight={0.5}
                    bandSpread={1}
                    octaveDecay={0.1}
                    layerOffset={0}
                    colorSpeed={1}
                    enableMouseInteraction
                    mouseInfluence={0.25}
                />
            </div>
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <div className="space-y-4">
                        <SplitText
                            text={profile.name}
                            className="block text-5xl font-black leading-tight text-base-content sm:text-6xl lg:text-7xl"
                            delay={35}
                            duration={1.1}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 36 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            tag="h1"
                        />
                        <p className="inline-flex items-center rounded-full border border-green-600/20 bg-green-600/10 px-6 py-2 text-lg font-bold uppercase tracking-[0.3em] text-green-600 shadow-sm">
                            {profile.headline}
                        </p>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-base-content/75 lg:mx-0">
                            {profile.summary}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                        <a className="btn btn-primary rounded-full px-6" href="#contact">
                            Contactarme <FaArrowRight />
                        </a>
                        <a className="btn btn-outline rounded-full px-6" href="#projects">
                            Ver proyectos
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                        {profile.highlights.map((item) => (
                            <span key={item} className="rounded-full border border-base-300/60 bg-base-200/70 px-4 py-2 text-sm text-base-content/75">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 lg:justify-start">
                        <a className="btn btn-ghost btn-circle" href={profile.links.github} aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a className="btn btn-ghost btn-circle" href={profile.links.linkedin} aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a className="btn btn-ghost btn-circle" href={profile.links.email} aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-info/15 via-transparent to-primary/10 blur-2xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-base-300/60 bg-base-200/80 p-4 shadow-xl backdrop-blur-md">
                        <img
                            src={yoSiempre}
                            alt={profile.name}
                            className="h-[460px] w-full rounded-[1.5rem] object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;