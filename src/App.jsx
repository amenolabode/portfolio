import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { ENGINEERING_PROJECTS, PM_ITEMS } from "./portfolioData";
import heroWorkspaceAbstract from "./assets/hero/workspace-abstract.jpg";
import heroTopdown147 from "./assets/hero/topdown-147.jpg";
import heroTopdown150 from "./assets/hero/topdown-150.jpg";
import heroTopdown151 from "./assets/hero/topdown-151.jpg";
import heroTopdown148 from "./assets/hero/topdown-148.jpg";

const NAME_TEXT = "Amen O. Olabode.";
const HERO_IMAGES = [
  heroWorkspaceAbstract,
  heroTopdown147,
  heroTopdown150,
  heroTopdown151,
  heroTopdown148,
];
const SLANGS = ["Osheyyy! 🙌", "Ogaju! 🔥", "Check am!💯", "This one na gbedu! 🤯", "Na me do am! 🤏", "E choke!", "You no go open ke? 😌", "Check am! 🚀", "You dey feel am? 😎", "Normal Levels 😌"];
const SCROLL_SLANGS = ["You dey feel am? 😎", "E choke ba? 🔥", "No be beans! 💯", "See Work rate! 👀"];
const SCROLL_TRIGGERS = [0.25, 0.5, 0.75, 0.95];

function parsePmHeadline(headline) {
  const match = headline.match(/^\[\s*(.*?)\s*\]\s*(.*)$/);
  if (!match) return { tag: "Product", title: headline };
  const [, rawTag, title] = match;
  return {
    tag: rawTag.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    title,
  };
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [naijaPop, setNaijaPop] = useState(null);
  const [scrollBubble, setScrollBubble] = useState({ text: "", show: false });
  const [modalSlang, setModalSlang] = useState({ text: "", show: false });
  const [modal, setModal] = useState({
    title: "",
    type: "",
    descHtml: "",
    url: null,
    stack: null,
  });
  const lastHoverTimeRef = useRef(0);
  const popTimeoutRef = useRef(null);
  const scrollBubbleTimeoutRef = useRef(null);
  const modalSlangTimeoutRef = useRef(null);
  const modalSlangHideTimeoutRef = useRef(null);
  const scrollTriggeredRef = useRef([false, false, false, false]);
  const lastScrollSlangIndexRef = useRef(-1);
  const modalBodyRef = useRef(null);

  const closeModal = useCallback(() => setModalOpen(false), []);
  const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const randomFromNoRepeat = (arr, lastIndexRef) => {
    if (arr.length <= 1) return arr[0];
    let nextIndex = Math.floor(Math.random() * arr.length);
    while (nextIndex === lastIndexRef.current) {
      nextIndex = Math.floor(Math.random() * arr.length);
    }
    lastIndexRef.current = nextIndex;
    return arr[nextIndex];
  };

  const copyEmail = useCallback(async () => {
    const email = "amen.olabode@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setEmailCopied(true);
    window.setTimeout(() => {
      setEmailCopied(false);
    }, 2500);
  }, []);

  const triggerModalSlang = useCallback(() => {
    setModalSlang({ text: randomFrom(SLANGS), show: false });
    window.clearTimeout(modalSlangTimeoutRef.current);
    window.clearTimeout(modalSlangHideTimeoutRef.current);
    modalSlangTimeoutRef.current = window.setTimeout(() => {
      setModalSlang((prev) => ({ ...prev, show: true }));
      modalSlangHideTimeoutRef.current = window.setTimeout(() => {
        setModalSlang((prev) => ({ ...prev, show: false }));
      }, 3000);
    }, 300);
  }, []);

  const openPmModal = (item) => {
    setModal({
      title: item.modalTitle,
      type: item.modalType,
      descHtml: item.descHtml,
      url: null,
      stack: null,
    });
    setModalOpen(true);
    triggerModalSlang();
  };

  const openEngModal = (project) => {
    setModal({
      title: project.modalTitle,
      type: project.modalType,
      descHtml: project.descHtml,
      url: project.url,
      stack: project.stack,
    });
    setModalOpen(true);
    triggerModalSlang();
  };

  const pmItems = useMemo(
    () => PM_ITEMS.map((item) => ({ ...item, ...parsePmHeadline(item.headline) })),
    [],
  );

  useEffect(() => {
    setTypedName("");
    let i = 0;
    let timeoutId;

    const typeWriter = () => {
      if (i < NAME_TEXT.length) {
        setTypedName(NAME_TEXT.slice(0, i + 1));
        i += 1;
        timeoutId = window.setTimeout(typeWriter, 120 + Math.random() * 80);
      }
    };

    timeoutId = window.setTimeout(typeWriter, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return () => {};
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const denominator = document.documentElement.scrollHeight - window.innerHeight;
      if (denominator <= 0) return;
      const scrollPercent = window.scrollY / denominator;
      SCROLL_TRIGGERS.forEach((trigger, index) => {
        if (scrollPercent >= trigger && !scrollTriggeredRef.current[index]) {
          scrollTriggeredRef.current[index] = true;
          setScrollBubble({ text: randomFromNoRepeat(SCROLL_SLANGS, lastScrollSlangIndexRef), show: true });
          window.clearTimeout(scrollBubbleTimeoutRef.current);
          scrollBubbleTimeoutRef.current = window.setTimeout(() => {
            setScrollBubble((prev) => ({ ...prev, show: false }));
          }, 4000);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(scrollBubbleTimeoutRef.current);
      window.clearTimeout(popTimeoutRef.current);
      window.clearTimeout(modalSlangTimeoutRef.current);
      window.clearTimeout(modalSlangHideTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!modalOpen) {
      document.body.classList.remove("modal-open");
      return () => {};
    }
    document.body.classList.add("modal-open");
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [modalOpen, closeModal]);

  return (
    <>
      <div className="hero">
        <div className="hero-canvas">
          <div className="hero-bg-slider">
            {HERO_IMAGES.map((image, index) => (
              <div
                key={image}
                className={`hero-bg-slide${index === currentSlide ? " active" : ""}`}
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </div>
          <h1 id="typing-name">{typedName}</h1>
          <a
            href="#main-content"
            className="scroll-prompt"
            aria-label="Scroll to content"
            onMouseEnter={(event) => {
              const now = Date.now();
              if (now - lastHoverTimeRef.current < 3000) return;
              lastHoverTimeRef.current = now;
              setNaijaPop({
                text: randomFrom(SLANGS),
                x: event.clientX,
                y: event.clientY - 10,
                key: now,
              });
              window.clearTimeout(popTimeoutRef.current);
              popTimeoutRef.current = window.setTimeout(() => setNaijaPop(null), 2500);
            }}
          >
            <span>Scroll</span>
            <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="container">
        <header className="intro-header" id="main-content">
          <div className="notice">
            <strong>Status:</strong> Product Manager first, Developer second.
            <br />
            <strong>Mission:</strong> Shipping robust financial, HR, and consumer solutions.
          </div>
          <p>
            Welcome to the life of a PM who writes code, plays drums, and cooks his own food. I believe
            the best products are built at the intersection of strategic vision and technical execution.
            When I'm not architecting fintech platforms or managing complex deployments, you'll probably
            find me holding down a groove behind a drum kit or trying out a new recipe. Just keeping things
            easy! 🥁👨‍🍳
          </p>
          <div className={`email-wrapper${emailCopied ? " copied" : ""}`}>
            <div className="chat-bubble">{emailCopied ? "Sharp! I dey wait your email" : "Holla at me nau!"}</div>
            <button type="button" className="email-link email-copy-btn" onClick={copyEmail}>
              amen.olabode@gmail.com
            </button>
          </div>
        </header>

        <div className="section-header">
          <h2 className="section-title">Module 01: Product Leadership</h2>
          <p className="section-desc">
            Strategy, architecture, and cross-functional execution. These are the large-scale systems,
            integrations, and platforms where I owned the product vision and led the deployment from ideation
            to launch.
          </p>
        </div>
        <ul className="pm-list">
          {pmItems.map((item) => (
            <li
              key={item.modalTitle}
              className="pm-list-item"
              role="button"
              tabIndex={0}
              onClick={() => openPmModal(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openPmModal(item);
                }
              }}
            >
              <div className="pm-item-info">
                <span className="pm-tag">{item.tag}</span>
                <h3 className="pm-title">{item.title}</h3>
                <p className="pm-desc">{item.summary}</p>
              </div>
              <div className="pm-item-action">
                <span className="action-indicator">Read Story &rarr;</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="section-header">
          <h2 className="section-title">Module 02: Engineering & Deployments</h2>
          <p className="section-desc">
            The hands-on work. These are the shareable, public-facing applications, frontends, and mobile apps
            that I personally engineered, coded, and deployed from the ground up.
          </p>
        </div>
        <div className="grid">
          {ENGINEERING_PROJECTS.map((project) => (
            <div
              key={project.title}
              className="card"
              role="button"
              tabIndex={0}
              onClick={() => openEngModal(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openEngModal(project);
                }
              }}
            >
              <span className="badge">{project.modalType.charAt(0) + project.modalType.slice(1).toLowerCase()}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div style={{ marginTop: "auto" }}>
                <span className="action-indicator">Details &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        <footer className="site-footer">
          <div className="footer-copy">&copy; 2026 Amen O. Olabode. All rights reserved.</div>
          <div className="footer-links">
            <div className={`email-wrapper footer-email-wrapper${emailCopied ? " copied" : ""}`}>
              <div className="chat-bubble">{emailCopied ? "Sharp! I dey wait your email" : "Holla at me nau!"}</div>
              <button type="button" className="footer-link-btn" onClick={copyEmail}>
                Email
              </button>
            </div>
            <a href="http://linkedin.com/in/olabodeamen" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/OlabodeAmen" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </footer>
      </div>

      <div
        id="project-modal"
        className={`modal-overlay${modalOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close-btn" onClick={closeModal}>
              ✕
            </button>
          </div>
          <div ref={modalBodyRef} className="modal-body">
            <div className="modal-title-wrapper">
              <h2 id="modal-title">{modal.title}</h2>
              <span className={`modal-naija-slang${modalSlang.show ? " show" : ""}`}>{modalSlang.text}</span>
            </div>
            <span className="modal-badge">{modal.type}</span>

            <div className={`tech-stack${modal.stack?.length ? "" : " is-hidden"}`}>
              {modal.stack?.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <p className="story-text" dangerouslySetInnerHTML={{ __html: modal.descHtml }} />

            <a
              href={modal.url ?? "#"}
              className={`view-project-btn${modal.url ? "" : " is-hidden"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployment &rarr;
            </a>
          </div>
        </div>
      </div>
      {naijaPop && (
        <div
          key={naijaPop.key}
          className="naija-pop"
          style={{ left: `${naijaPop.x}px`, top: `${naijaPop.y}px` }}
        >
          {naijaPop.text}
        </div>
      )}
      <div className={`scroll-chat-bubble${scrollBubble.show ? " show" : ""}`}>{scrollBubble.text}</div>
    </>
  );
}
