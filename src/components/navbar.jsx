import icon from '../assets/_image.jpg'

const Navbar = ({ theme, setTheme }) => {

    const menu = [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <div  className="fixed left-1/2 top-4 z-50 w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 px-2 sm:px-0">
            <div data-theme="dark" className="navbar rounded-2xl border border-base-300/60 shadow-lg backdrop-blur-xl">
                <div className="flex-1">
                    <a className="btn btn-ghost text-lg font-semibold normal-case" href="#hero">
                        Demetrio
                    </a>
                </div>
                <ul className="menu menu-horizontal hidden gap-1 px-1 lg:flex">
                    {menu.map((item) => (
                        <li key={item.href}>
                            <a className="rounded-full" href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <label className="toggle text-base-content">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            }
                        />
                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-base-300/60 ring-offset-2 ring-offset-base-100">
                            <img
                                alt="Demetrio Rojas Poñe"
                                src={icon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;