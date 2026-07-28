import { FaCircleCheck, FaLocationDot, FaSchool } from "react-icons/fa6";
import { experience, profile } from "../data/portfolio";

const About = () => {
    return (
        <section id="about" className="scroll-mt-28 rounded-[2rem] border border-base-300/50 bg-base-100/70 p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-info">Sobre mí</p>
                    <h2 className="mt-2 text-3xl font-black text-base-content sm:text-4xl">Perfil profesional</h2>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-base-content/75">
                        {profile.objective}
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-base-300/60 bg-base-200/80 p-5">
                            <div className="flex items-center gap-3 text-info">
                                <FaSchool />
                                <span className="font-semibold uppercase tracking-[0.2em]">Educación</span>
                            </div>
                            <p className="mt-3 text-lg font-semibold">{profile.education.title}</p>
                            <p className="text-sm text-base-content/70">{profile.education.status}</p>
                            <p className="mt-2 text-sm text-base-content/70">{profile.education.school}</p>
                        </div>
                        <div className="rounded-3xl border border-base-300/60 bg-base-200/80 p-5">
                            <div className="flex items-center gap-3 text-info">
                                <FaLocationDot />
                                <span className="font-semibold uppercase tracking-[0.2em]">Ubicación</span>
                            </div>
                            <p className="mt-3 text-lg font-semibold">Santa Cruz</p>
                            <p className="text-sm text-base-content/70">{profile.location}</p>
                            <p className="mt-2 text-sm text-base-content/70">{profile.email}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-[1.75rem] border border-base-300/60 bg-base-200/80 p-6 shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-info">Experiencia</p>
                    <div className="mt-4 space-y-4">
                        {experience.map((item) => (
                            <article key={item.title} className="rounded-3xl border border-base-300/60 bg-base-100 p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-base-content/60">{item.year}</p>
                                    </div>
                                    <span className="rounded-full bg-info/10 px-3 py-1 text-xs font-semibold text-info">Proyecto</span>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-base-content/70">{item.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.highlights.map((point) => (
                                        <span key={point} className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-2 text-xs text-base-content/75">
                                            <FaCircleCheck className="text-success" />
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;