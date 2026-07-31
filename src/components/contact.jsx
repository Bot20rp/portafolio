import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { profile } from "../data/portfolio";

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-28 rounded-[2rem] border border-base-300/50 bg-base-100/70 p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-info">Contacto</p>
                    <h2 className="mt-2 text-3xl font-black text-base-content sm:text-4xl">Hablemos de tu próximo proyecto</h2>
                    <p className="mt-4 text-base leading-8 text-base-content/75">
                        Si necesitas una página, un sistema web o una solución integrada con APIs, este es el canal directo para coordinar.
                    </p>
                    <div className="mt-6 space-y-3">
                        <a className="flex items-center gap-3 rounded-2xl border border-base-300/60 bg-base-200/80 px-4 py-3" href={`mailto:${profile.email}`}>
                            <FaEnvelope className="text-info" />
                            <span>{profile.email}</span>
                        </a>
                        <div className="flex items-center gap-3 rounded-2xl border border-base-300/60 bg-base-200/80 px-4 py-3">
                            <FaPhone className="text-info" />
                            <span>{profile.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-base-300/60 bg-base-200/80 px-4 py-3">
                            <FaLocationDot className="text-info" />
                            <span>{profile.location}</span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                        <a className="btn btn-ghost btn-circle" href={profile.links.github} aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a className="btn btn-ghost btn-circle" href={profile.links.linkedin} aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* <form className="grid gap-4 rounded-[1.75rem] border border-base-300/60 bg-base-200/80 p-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="form-control">
                            <span className="label-text mb-2 text-sm font-medium">Nombre</span>
                            <input type="text" className="input input-bordered w-full" placeholder="Tu nombre" />
                        </label>
                        <label className="form-control">
                            <span className="label-text mb-2 text-sm font-medium">Correo</span>
                            <input type="email" className="input input-bordered w-full" placeholder="tu@email.com" />
                        </label>
                    </div>
                    <label className="form-control">
                        <span className="label-text mb-2 text-sm font-medium">Asunto</span>
                        <input type="text" className="input input-bordered w-full" placeholder="¿En qué puedo ayudarte?" />
                    </label>
                    <label className="form-control">
                        <span className="label-text mb-2 text-sm font-medium">Mensaje</span>
                        <textarea className="textarea textarea-bordered min-h-40 w-full" placeholder="Cuéntame un poco más sobre tu idea o proyecto." />
                    </label>
                    <button type="button" className="btn btn-primary rounded-full justify-self-start px-6">
                        Enviar mensaje
                    </button>
                </form> */}
            </div>

            <footer className="mt-10 border-t border-base-300/60 pt-6 text-sm text-base-content/60">
                <p>© 2026 Demetrio Rojas Poñe.</p>
            </footer>
        </section>
    );
}

export default Contact;