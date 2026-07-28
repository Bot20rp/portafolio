import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "../data/portfolio";

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-28 rounded-[2rem] border border-base-300/50 bg-base-100/70 p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="mb-8 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-info">Proyectos destacados</p>
                <h2 className="mt-2 text-3xl font-black text-base-content sm:text-4xl">Proyectos destacados</h2>
                <p className="mt-3 text-base leading-7 text-base-content/70">
                    Proyectos alineados con experiencia universitaria y objetivos profesionales, presentados como base para futuras capturas, demos y despliegues reales.
                </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
                {projects.map((project) => (
                    <article key={project.title} className="rounded-[1.75rem] border border-base-300/60 bg-base-200/80 p-6 shadow-lg">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-info">{project.type}</p>
                                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                            </div>
                            <span className="rounded-full border border-base-300/60 bg-base-100 px-3 py-1 text-xs text-base-content/70">
                                2024 - 2025
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-base-content/75">{project.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="rounded-full bg-base-100 px-3 py-2 text-xs font-medium text-base-content/80">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a className="btn btn-outline btn-sm rounded-full" href={project.github}>
                                <FaGithub /> GitHub
                            </a>
                            <a className="btn btn-primary btn-sm rounded-full" href={project.live}>
                                Demostración <FaArrowUpRightFromSquare />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;