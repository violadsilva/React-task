import React, { useState } from "react";

const h = React.createElement;

// NAVIGATION BAR

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        ["Home", "#home"],
        ["About", "#about"],
        ["Skills", "#skills"],
        ["Projects", "#projects"],
        ["Education", "#education"],
        ["Contact", "#contact"]
    ];

    return h("header", { className: "header" },
        h("nav", { className: "navbar container" },

            h("a", { href: "#home", className: "logo" },
                "Viola", h("span", null, ".")
            ),

            h("button", {
                className: "menu-button",
                onClick: () => setMenuOpen(!menuOpen)
            }, menuOpen ? "✕" : "☰"),

            h("div", {
                className: menuOpen ? "nav-links active" : "nav-links"
            },
                ...links.map(([name, url]) =>
                    h("a", {
                        key: name,
                        href: url,
                        onClick: () => setMenuOpen(false)
                    }, name)
                )
            )
        )
    );
}

// HERO SECTION

function Hero() {
    return h("section", {
        className: "hero section",
        id: "home"
    },
        h("div", { className: "container hero-container" },

            h("div", { className: "hero-content" },

                h("p", { className: "eyebrow" },
                    "WELCOME TO MY PORTFOLIO"
                ),

                h("h1", null,
                    "Hi, I'm ",
                    h("span", null, "Viola D'Silva")
                ),

                h("h2", null,
                    "Aspiring Software Developer"
                ),

                h("p", { className: "description" },
                    "I am a BSc Information Technology graduate passionate about software development, Artificial Intelligence and Cybersecurity. I enjoy learning new technologies and building meaningful digital experiences."
                ),

                h("div", { className: "hero-buttons" },

                    h("a", {
                        href: "#projects",
                        className: "button primary"
                    }, "View My Projects"),

                    h("a", {
                        href: "#contact",
                        className: "button secondary"
                    }, "Contact Me")
                )
            ),

            h("div", { className: "hero-visual" },
                h("div", { className: "profile-circle" },
                    h("span", null, "V")
                ),
                h("p", null, "CREATIVE MIND · DEVELOPER IN PROGRESS")
            )
        )
    );
}

// ABOUT SECTION

function About() {
    return h("section", {
        className: "section",
        id: "about"
    },
        h("div", { className: "container" },

            h("div", { className: "section-heading" },
                h("p", { className: "eyebrow" }, "GET TO KNOW ME"),
                h("h2", null, "About Me")
            ),

            h("div", { className: "about-content" },

                h("div", null,
                    h("h3", null, "A little introduction"),

                    h("p", null,
                        "Hello! I'm Viola D'Silva, a BSc Information Technology graduate from 2026 with a CGPA of 8.0."
                    ),

                    h("p", null,
                        "I am currently strengthening my programming foundations and learning modern frontend development using HTML, CSS, JavaScript and React."
                    ),

                    h("p", null,
                        "I am also interested in Artificial Intelligence, Cybersecurity, problem-solving and understanding how software works behind the scenes."
                    )
                ),

                h("div", { className: "about-card" },
                    h("h3", null, "My Focus"),

                    h("p", null, "Software Development"),

                    h("p", null, "Frontend Engineering"),

                    h("p", null, "Artificial Intelligence"),

                    h("p", null, "Cybersecurity")
                )
            )
        )
    );
}

// SKILLS SECTION

function Skills() {
    const skills = [
        ["HTML5", "Frontend"],
        ["CSS3", "Frontend"],
        ["JavaScript", "Programming"],
        ["React", "Frontend"],
        ["Git & GitHub", "Tools"],
        ["Node.js", "Backend"],
        ["Python", "Programming"],
        ["SQL", "Database"],
        ["Artificial Intelligence", "Interest"],
        ["Cybersecurity", "Interest"]
    ];

    return h("section", {
        className: "section alternate",
        id: "skills"
    },
        h("div", { className: "container" },

            h("div", { className: "section-heading" },
                h("p", { className: "eyebrow" }, "WHAT I WORK WITH"),
                h("h2", null, "My Skills"),
                h("p", null,
                    "Technologies and areas I am learning and practising."
                )
            ),

            h("div", { className: "skills-grid" },

                ...skills.map(([skill, category]) =>
                    h("div", {
                        className: "skill-card",
                        key: skill
                    },
                        h("div", { className: "skill-icon" },
                            skill.charAt(0)
                        ),
                        h("h3", null, skill),
                        h("p", null, category)
                    )
                )
            )
        )
    );
}

// PROJECTS SECTION

function Projects() {
    const projects = [
        {
            title: "React Chatbot",
            category: "React · JavaScript",
            description: "A chatbot interface built to practise React components, props, state and rendering."
        },
        {
            title: "Personal Finance Dashboard",
            category: "JavaScript",
            description: "A dashboard project exploring accounts, transactions, budgets and financial summaries."
        },
        {
            title: "Event Website",
            category: "HTML · CSS",
            description: "A website recreation focused on responsive layouts, navigation and styling."
        },
        {
            title: "Personal Portfolio",
            category: "React · CSS",
            description: "A personal portfolio website created to showcase my skills, education and projects."
        }
    ];

    return h("section", {
        className: "section",
        id: "projects"
    },
        h("div", { className: "container" },

            h("div", { className: "section-heading" },
                h("p", { className: "eyebrow" }, "MY WORK"),
                h("h2", null, "Featured Projects"),
                h("p", null,
                    "Some of the projects I have worked on while learning."
                )
            ),

            h("div", { className: "projects-grid" },

                ...projects.map((project, index) =>
                    h("article", {
                        className: "project-card",
                        key: project.title
                    },

                        h("span", { className: "project-number" },
                            "0" + (index + 1)
                        ),

                        h("p", { className: "project-category" },
                            project.category
                        ),

                        h("h3", null, project.title),

                        h("p", null, project.description),

                        h("span", { className: "project-footer" },
                            "Learning project"
                        )
                    )
                )
            )
        )
    );
}

// EDUCATION SECTION

function Education() {
    return h("section", {
        className: "section alternate",
        id: "education"
    },
        h("div", { className: "container" },

            h("div", { className: "section-heading" },
                h("p", { className: "eyebrow" }, "MY BACKGROUND"),
                h("h2", null, "Education")
            ),

            h("div", { className: "education-card" },

                h("span", { className: "education-year" }, "2026"),

                h("div", null,
                    h("h3", null,
                        "Bachelor of Science in Information Technology"
                    ),

                    h("p", null, "BSc Information Technology"),

                    h("p", null, "Graduated in 2026"),

                    h("p", { className: "grade" },
                        "CGPA: 8.0"
                    )
                )
            )
        )
    );
}

// EXPERIENCE SECTION

function Experience() {
    return h("section", { className: "section" },
        h("div", { className: "container" },

            h("div", { className: "section-heading" },
                h("p", { className: "eyebrow" }, "MY JOURNEY"),
                h("h2", null, "Experience & Learning")
            ),

            h("div", { className: "experience-card" },

                h("h3", null, "Practical Learning"),

                h("p", null,
                    "Currently developing practical skills through programming exercises, React projects, frontend development and hands-on learning."
                ),

                h("p", null,
                    "Add your internship organisation, role, dates and responsibilities here when ready."
                )
            )
        )
    );
}

// ACHIEVEMENTS SECTION

function Achievements() {
    return h("section", {
        className: "section alternate"
    },
        h("div", { className: "container" },

            h("div", { className: "section-heading" },
                h("p", { className: "eyebrow" }, "MY PROGRESS"),
                h("h2", null, "Achievements & Goals")
            ),

            h("div", { className: "achievement-grid" },

                h("div", { className: "achievement-card" },
                    h("h3", null, "2026"),
                    h("p", null, "BSc IT Graduation")
                ),

                h("div", { className: "achievement-card" },
                    h("h3", null, "React"),
                    h("p", null, "Building interactive applications")
                ),

                h("div", { className: "achievement-card" },
                    h("h3", null, "Continuous Learning"),
                    h("p", null, "Exploring AI and Cybersecurity")
                )
            )
        )
    );
}

// CONTACT SECTION

function Contact() {
    return h("section", {
        className: "section contact",
        id: "contact"
    },
        h("div", { className: "container" },

            h("p", { className: "eyebrow" }, "LET'S CONNECT"),

            h("h2", null, "Have an opportunity?",

                h("br"),

                h("span", null, "Let's talk!")
            ),

            h("p", null,
                "I would love to connect, learn, collaborate and explore opportunities in technology."
            ),

            h("a", {
                className: "button primary",
                href: "mailto:your-email@example.com"
            }, "Send Me an Email"),

            h("div", { className: "social-links" },

                h("a", {
                    href: "https://github.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "GitHub ↗"),

                h("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "LinkedIn ↗")
            ),

            h("p", { className: "contact-note" },
                "Replace the sample email and social links with your own."
            )
        )
    );
}

// FOOTER

function Footer() {
    return h("footer", { className: "footer" },
        h("div", { className: "container" },

            h("a", { href: "#home", className: "logo" },
                "Viola."
            ),

            h("p", null,
                "© 2026 Viola D'Silva. Built with React."
            )
        )
    );
}

// MAIN APP COMPONENT

function App() {
    return h(React.Fragment, null,

        h(Navbar),

        h("main", null,
            h(Hero),
            h(About),
            h(Skills),
            h(Projects),
            h(Education),
            h(Experience),
            h(Achievements),
            h(Contact)
        ),

        h(Footer)
    );
}

export default App;