import { FaCode, FaDatabase, FaGear } from "react-icons/fa6";
import { skills } from "../data/portfolio";

const groups = [
    { title: "Frontend", icon: FaCode, items: skills.frontend },
    { title: "Backend", icon: FaGear, items: skills.backend },
    { title: "Bases de datos", icon: FaDatabase, items: skills.databases },
    { title: "Herramientas", icon: FaGear, items: skills.tools }
];

const Skills = () => {
    return (
        <section id="skills" className="scroll-mt-28 rounded-[2rem] border border-base-300/50 bg-base-100/70 p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="mb-8 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-info">Habilidades</p>
                <h2 className="mt-2 text-3xl font-black text-base-content sm:text-4xl">Tecnologías y herramientas</h2>
                <p className="mt-3 text-base leading-7 text-base-content/70">
                    Organización de componentes, backend estructurado y manejo de bases de datos relacionales con foco en proyectos escalables.
                </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {groups.map((group) => {
                    const Icon = group.icon;
                    return (
                        <article key={group.title} className="rounded-3xl border border-base-300/60 bg-base-200/80 p-5 shadow-lg">
                            <div className="flex items-center gap-3">
                                <span className="rounded-2xl bg-info/15 p-3 text-info">
                                    <Icon />
                                </span>
                                <h3 className="text-xl font-semibold">{group.title}</h3>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span key={item} className="rounded-full border border-base-300/60 bg-base-100 px-3 py-2 text-sm text-base-content/80">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;