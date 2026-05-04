import { useCallback, useEffect, useState } from "react";
import "./App.css";

const PROJECTS = [
  {
    title: "Otto Africa",
    type: "WEB",
    summary:
      "The primary landing page and main corporate website for Otto Africa's services and offerings.",
    description:
      "A comprehensive corporate landing page for Otto Africa, showcasing the company's core services, mission, and footprint. Designed with a focus on brand identity and corporate communication. Built to be fully responsive and performant across all devices.",
    url: "https://www.ottoafrica.com/",
  },
  {
    title: "Otto Business Portal",
    type: "WEB",
    summary:
      "The dedicated login and management portal tailored for Otto Africa's business partners and merchants.",
    description:
      "A robust B2B web portal designed specifically for Otto Africa's partners and merchants. It features secure authentication, dashboard analytics, and comprehensive management tools tailored for seamless daily business operations.",
    url: "https://business.ottoafrica.com/login",
  },
  {
    title: "Otto Customer App",
    type: "MOBILE",
    summary:
      "The official Android mobile application for Otto customers, available directly on the Google Play Store.",
    description:
      "The official native Android application for Otto customers. Built for high performance and sustained user engagement, it enables customers to access services on-the-go. Currently live and available for download directly from the Google Play Store.",
    url: "https://play.google.com/store/apps/details?id=com.otto.customer&hl=en-US&ah=qBtmCghPlA-ReaA82sEIIFNPN78",
  },
  {
    title: "Reconciliation Frontend",
    type: "WEB",
    summary:
      "A web-based dashboard application built for handling and viewing financial reconciliations.",
    description:
      "A specialized financial dashboard created to streamline the reconciliation process. It efficiently handles complex data sets, providing clear, actionable views for financial teams to verify transactions and maintain ledger accuracy.",
    url: "https://reconciliation-frontend-nu.vercel.app/",
  },
  {
    title: "Central Landing Page",
    type: "WEB",
    summary:
      "A centralized landing page architecture designed to direct traffic and highlight key features.",
    description:
      "A strategic central hub architecture designed to effectively route incoming traffic to various sub-products and services. Built with conversion optimization, fast load times, and clear call-to-actions in mind.",
    url: "https://central-landing-page.vercel.app/",
  },
  {
    title: "Deevo Technologies",
    type: "WEB",
    summary:
      "The official company website showcasing the tech solutions and services provided by Deevo Technologies.",
    description:
      "The digital storefront for Deevo Technologies. It highlights their broad range of technological solutions, showcases their portfolio of services, and provides a direct point of contact for potential enterprise clients.",
    url: "https://www.deevotechnologies.com/",
  },
  {
    title: "GenZ HR Client",
    type: "WEB",
    summary:
      "A modern, intuitive human resources management portal frontend tailored for today's workforce.",
    description:
      "A forward-thinking human resources management portal tailored to the modern workforce. It simplifies employee profile management, seamless onboarding, and self-service HR tasks with an intuitive and highly accessible interface.",
    url: "https://genzhr-client.vercel.app/",
  },
  {
    title: "GenZ HR Admin",
    type: "WEB",
    summary:
      "The administrative control panel and management dashboard for the GenZ HR ecosystem.",
    description:
      "The core administrative control panel for the GenZ HR ecosystem. It provides HR managers and system administrators with comprehensive, secure tools to oversee employee data, configure platform settings, and manage organizational structures.",
    url: "https://genzhr-admin.vercel.app/#/login",
  },
  {
    title: "Spark Deals",
    type: "WEB",
    summary: "An interactive frontend application for a deals and e-commerce platform.",
    description:
      "An interactive frontend application for a dynamic deals and e-commerce platform. Features include dynamic deal listings, promotional highlights, user-friendly navigation, and a streamlined, conversion-focused checkout flow.",
    url: "https://sparkdeals.vercel.app/",
  },
  {
    title: "Enterprise Web Portal",
    type: "WEB",
    summary:
      "A secure portal interface designed for enterprise-level operations and business workflows.",
    description:
      "A secure web portal interface designed for enterprise-level operations. It features comprehensive authentication flows and a robust operational dashboard tailored for internal business workflows and data management.",
    url: "https://frontend-ruby-eight-ejlw32wg4a.vercel.app/login",
  },
];

export default function App() {
  const [active, setActive] = useState(null);

  const closeModal = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) {
      document.body.classList.remove("modal-open");
      return;
    }
    document.body.classList.add("modal-open");

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [active, closeModal]);

  return (
    <>
      <div className="container">
        <header>
          <h1>
            Project Portfolio<span className="cursor" aria-hidden="true" />
          </h1>
          <div className="notice">
            &gt; Note: The applications and websites listed below are the shareable,
            public-facing versions of these projects.
          </div>
          <p>A curated collection of web applications, landing pages, and mobile platforms.</p>
        </header>

        <div className="grid">
          {PROJECTS.map((project) => (
            <article key={project.title} className="card">
              <span className="badge">[ {project.type} ]</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <button
                type="button"
                className="action-btn"
                onClick={() => setActive(project)}
              >
                Details &rarr;
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="modal-overlay"
          id="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="modal-content">
            <button type="button" className="close-btn" onClick={closeModal}>
              [ X ]
            </button>
            <h2 id="modal-title">{active.title}</h2>
            <span className="modal-badge">[ {active.type} ]</span>
            <p>{active.description}</p>
            <a
              href={active.url}
              className="view-project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project &rarr;
            </a>
          </div>
        </div>
      )}
    </>
  );
}
