(function () {
  // ---------- helpers ----------
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function setYear() {
    const y = new Date().getFullYear();
    const el = $("#year");
    if (el) el.textContent = String(y);
  }

  function fmtMonthYear(yyyyMm) {
    // yyyy-mm
    const [y, m] = yyyyMm.split("-").map(Number);
    const d = new Date(y, (m || 1) - 1, 1);
    return d.toLocaleString(undefined, { month: "short", year: "numeric" });
  }

  const SIMPLE_ICONS_VERSION = "16.10.0";
  const SIMPLE_ICONS_BASE = `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/`;

  const BRAND_SLUG_BY_KIND = {
    github: "github",
    kaggle: "kaggle",
    huggingface: "huggingface",
    linkedin: "linkedin",
    medium: "medium",
    youtube: "youtube",
  };

  function brandSlugFromUrl(url) {
    try {
      const host = new URL(url, window.location.href)
        .hostname.replace(/^www\./, "")
        .toLowerCase();

      if (host.includes("github.com")) return "github";
      if (host.includes("huggingface.co")) return "huggingface";
      if (host.includes("kaggle.com")) return "kaggle";
      if (host.includes("linkedin.com")) return "linkedin";
      if (host.includes("medium.com")) return "medium";
      if (host.includes("youtube.com") || host.includes("youtu.be")) return "youtube";
    } catch (e) {}
    return null;
  }

  function brandIconImg(slug) {
    const safe = escapeHtml(slug);
    return `<img src="${SIMPLE_ICONS_BASE}${safe}.svg" alt="" aria-hidden="true" loading="lazy">`;
  }

  function renderLinkChip(linkObj) {
    const label = linkObj?.label || "Link";
    const url = linkObj?.url || "#";

    const kind = String(linkObj?.kind || "").toLowerCase();
    const slug = BRAND_SLUG_BY_KIND[kind] || brandSlugFromUrl(url);

    const innerIcon = slug ? brandIconImg(slug) : icon(kind || "globe");

    return `
      <a class="link-pill link-pill--brand"
         href="${escapeHtml(url)}"
         target="_blank" rel="noopener noreferrer"
         aria-label="${escapeHtml(label)}"
         title="${escapeHtml(label)}">
        <span class="brand-ico" aria-hidden="true">${innerIcon}</span>
        <span class="brand-label">${escapeHtml(label)}</span>
      </a>
    `;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[ch]));
  }

  function swapWithMotion(el, renderHtmlFn){
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.innerHTML = renderHtmlFn();
      return;
    }

    el.classList.add("is-swapping");

    // wait a tiny bit so the fade-out is visible
    window.setTimeout(() => {
      el.innerHTML = renderHtmlFn();

      // fade back in on next paint
      requestAnimationFrame(() => {
        el.classList.remove("is-swapping");
      });
    }, 140);
  }

  // ---------- icons (inline svg) ----------
  function icon(kind) {
    const common = `class="ico" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"`;
    if (kind === "github") {
      return `<svg ${common}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>`;
    }
    if (kind === "globe") {
      return `<svg ${common}><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" stroke-width="2"/><path d="M2 12h20" stroke="currentColor" stroke-width="2"/><path d="M12 2c2.5 2.7 4 6.3 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.3-4-10s1.5-7.3 4-10Z" stroke="currentColor" stroke-width="2"/></svg>`;
    }
    if (kind === "file") {
      return `<svg ${common}><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6Z" stroke="currentColor" stroke-width="2"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="2"/></svg>`;
    }
    if (kind === "star") {
      return `<svg class="star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 3l2.7 5.9 6.3.7-4.7 4.2 1.4 6.2L12 17.8 6.3 20l1.4-6.2L3 9.6l6.3-.7L12 3Z"
          fill="rgba(45,140,255,.95)" stroke="rgba(11,18,32,.15)" stroke-width="1"/>
      </svg>`;
    }
    return "";
  }

  // ---------- page transitions ----------
  function setupPageTransitions() {
    // fade in
    requestAnimationFrame(() => document.body.classList.add("is-ready"));

    // intercept internal nav
    $$("a[data-nav]").forEach((a) => {
      a.addEventListener("click", (e) => {
        const url = new URL(a.href, window.location.href);
        const sameOrigin = url.origin === window.location.origin;
        if (!sameOrigin) return;

        e.preventDefault();
        document.body.classList.add("is-leaving");
        window.setTimeout(() => {
          window.location.href = url.href;
        }, 180);
      });
    });
  }

  function setupActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    $$(".nav-link[data-nav]").forEach((a) => {
      const aPath = new URL(a.href, window.location.href).pathname.split("/").pop() || "index.html";
      a.classList.toggle("is-active", aPath === path);
    });
  }

  // ---------- home previews ----------
  function renderHomePreviews() {
    const pWrap = $("#homeProjects");
    const aWrap = $("#homeArticles");
    if (!pWrap && !aWrap) return;

    if (pWrap) {
      const top3 = [...projects]
        .sort((x, y) => (y.featured - x.featured) || (y.date.localeCompare(x.date)))
        .slice(0, 3);

      pWrap.innerHTML = top3.map((p) => `
        <a class="card link" href="./projects.html" data-nav aria-label="Go to projects page">
          <h4 class="card-title">${escapeHtml(p.title)}</h4>
          <p class="card-desc">${escapeHtml(p.description)}</p>
          <div class="card-meta">
            <span class="pill">${escapeHtml(p.type)}</span>
            <span>${escapeHtml(fmtMonthYear(p.date))}</span>
          </div>
        </a>
      `).join("");
    }

    if (aWrap) {
      const top3a = [...articles]
        .sort((x, y) => y.date.localeCompare(x.date))
        .slice(0, 3);

      aWrap.innerHTML = top3a.map((a) => `
        <a class="card link" href="./articles.html" data-nav aria-label="Go to articles page">
          <h4 class="card-title">${escapeHtml(a.title)}</h4>
          <p class="card-desc">${escapeHtml(a.description)}</p>
          <div class="card-meta">
            <span class="pill">${escapeHtml(a.tags?.[0] || "Article")}</span>
            <span>${escapeHtml(fmtMonthYear(a.date))}</span>
          </div>
        </a>
      `).join("");
    }
  }

  // ---------- projects page ----------
  function renderProjectFilters() {
    const wrap = $("#projectFilters");
    if (!wrap) return;

    wrap.innerHTML = projectTypes.map((t, idx) => `
      <button class="chip ${idx === 0 ? "is-active" : ""}" type="button" data-type="${escapeHtml(t)}" role="tab">
        <span class="chip-text">${escapeHtml(t)}</span>
        <span class="chip-count" aria-hidden="true">0</span>
      </button>
    `).join("");

    wrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      $$(".chip", wrap).forEach((x) => x.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyProjectsUI();
    });

    updateProjectFilterCounts();
  }

  function getProjectFilterValue() {
    const active = $("#projectFilters .chip.is-active");
    return active ? active.getAttribute("data-type") : "All";
  }

  function getProjectSearchValue() {
    const el = $("#projectSearch");
    return el ? String(el.value || "").trim().toLowerCase() : "";
  }

  function projectMatchesSearch(p, q) {
    if (!q) return true;
    const hay = [
      p.title || "",
      p.description || "",
      p.type || "",
      ...(p.tags || [])
    ].join(" ").toLowerCase();
    return hay.includes(q);
  }

  function updateProjectFilterCounts() {
    const q = getProjectSearchValue();
    const base = projects.filter((p) => projectMatchesSearch(p, q));

    $$("#projectFilters .chip").forEach((chip) => {
      const t = chip.getAttribute("data-type") || "All";
      const n = (t === "All") ? base.length : base.filter((p) => p.type === t).length;
      const el = chip.querySelector(".chip-count");
      if (el) el.textContent = String(n);
    });
  }

  function applyProjectsUI() {
    updateProjectFilterCounts();
    renderProjectsList();
  }

  function getProjectSortValue() {
  const dd = $("#sortDD");
  if (dd && dd.dataset.value) return dd.dataset.value;

  // fallback (kalau kamu masih pakai <select> di versi lain)
  const sel = $("#projectSort");
  return sel ? sel.value : "date_desc";
  }

  function sortProjects(list, mode) {
    const arr = [...list];
    if (mode === "date_desc") arr.sort((a, b) => b.date.localeCompare(a.date));
    if (mode === "date_asc") arr.sort((a, b) => a.date.localeCompare(b.date));
    if (mode === "az") arr.sort((a, b) => a.title.localeCompare(b.title));
    if (mode === "za") arr.sort((a, b) => b.title.localeCompare(a.title));
    return arr;
  }

  function renderFeaturedProjects() {
    const wrap = $("#featuredProjects");
    if (!wrap) return;

    const featured = projects
      .filter((p) => p.featured)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3);

    wrap.innerHTML = featured.map((p) => `
      <a class="card link" href="#${escapeHtml(p.id)}" aria-label="Jump to featured project ${escapeHtml(p.title)}">
        <h4 class="card-title">${escapeHtml(p.title)} ✦</h4>
        <p class="card-desc">${escapeHtml(p.description)}</p>
        <div class="card-meta">
          <span class="pill">${escapeHtml(p.type)}</span>
          <span>${escapeHtml(fmtMonthYear(p.date))}</span>
        </div>
      </a>
    `).join("");
  }

  function renderProjectsList() {
    const wrap = $("#projectList");
    if (!wrap) return;

    const filter = getProjectFilterValue();
    const sortMode = getProjectSortValue();
    const q = getProjectSearchValue();

    let list = projects.filter((p) => projectMatchesSearch(p, q));
    if (filter && filter !== "All") list = list.filter((p) => p.type === filter);
    list = sortProjects(list, sortMode);

    swapWithMotion(wrap, () => {
      if (!list.length) {
        return `<div class="empty-state">No projects found. Try a different keyword or filter.</div>`;
      }

      return list.map((p) => {
        const tags = (p.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
        const links = (p.links || []).map((l) => renderLinkChip(l)).join("");

        return `
          <article class="row row--no-media row--compact" id="${escapeHtml(p.id)}">
            <div class="row-main">
              <h3 class="row-title">
                ${p.featured ? icon("star") : ""}
                <a class="link" href="${escapeHtml((p.links?.[0]?.url) || "#")}" target="_blank" rel="noreferrer">
                  ${escapeHtml(p.title)}
                </a>
              </h3>

              <p class="row-desc">${escapeHtml(p.description)}</p>
              <div class="tags">${tags}</div>
              <div class="links" aria-label="Project links">${links}</div>

              <div class="row-foot">
                <span class="row-date--plain">${escapeHtml(fmtMonthYear(p.date))}</span>
              </div>
            </div>
          </article>
        `;
      }).join("");
    });
  }

function setupProjectsPage() {
    if (!$("#projectList")) return;

    renderProjectFilters();
    renderFeaturedProjects();
    setupSortDropdown();
    applyProjectsUI();

    const search = $("#projectSearch");
    if (search) {
      search.addEventListener("input", () => {
        applyProjectsUI();
      });
    }
  }

  function setupSortDropdown() {
    const dd = $("#sortDD");
    if (!dd) return;

    const btn = $(".dd-btn", dd);
    const pop = $(".dd-pop", dd);
    const items = $$(".dd-item", dd);

    function setOpen(open) {
      btn.setAttribute("aria-expanded", String(open));
      pop.hidden = !open;
      if (open) {
        const selected = items.find(x => x.getAttribute("aria-selected") === "true") || items[0];
        selected.focus();
      } else {
        btn.focus();
      }
    }

    function setValue(value) {
      dd.dataset.value = value;

      items.forEach((it) => {
        const isSel = it.dataset.value === value;
        it.setAttribute("aria-selected", String(isSel));
      });

      const selected = items.find(x => x.dataset.value === value) || items[0];
      $(".dd-btn-text", dd).textContent = selected.textContent.trim();

      renderProjectsList();
    }

    // init from data-value
    setValue(dd.dataset.value || "date_desc");
    setOpen(false);

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });

    // click item
    pop.addEventListener("click", (e) => {
      const it = e.target.closest(".dd-item");
      if (!it) return;
      setValue(it.dataset.value);
      setOpen(false);
    });

    // keyboard on button
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setOpen(true);
      }
    });

    // keyboard inside listbox
    pop.addEventListener("keydown", (e) => {
      const currentIndex = items.findIndex(x => x === document.activeElement);
      const open = btn.getAttribute("aria-expanded") === "true";

      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = items[Math.min(items.length - 1, currentIndex + 1)];
        (next || items[0]).focus();
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = items[Math.max(0, currentIndex - 1)];
        (prev || items[items.length - 1]).focus();
        return;
      }

      if (e.key === "Home") {
        e.preventDefault();
        items[0].focus();
        return;
      }

      if (e.key === "End") {
        e.preventDefault();
        items[items.length - 1].focus();
        return;
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const it = document.activeElement?.closest?.(".dd-item");
        if (it) {
          setValue(it.dataset.value);
          setOpen(false);  
        }
        return;
      }
    });

    // click outside closes  
    document.addEventListener("mousedown", (e) => {
      const open = btn.getAttribute("aria-expanded") === "true";
      if (!open) return;
      if (!dd.contains(e.target)) setOpen(false);
    });
  }

  // ---------- articles page ----------
  function setupArticlesPage() {
    const wrap = $("#articleList");
    if (!wrap) return;

    const btn = $("#blogHubBtn");
    if (btn && siteConfig.blogHubUrl) btn.href = siteConfig.blogHubUrl;

    const list = [...articles].sort((a, b) => b.date.localeCompare(a.date));

    swapWithMotion(wrap, () => {
      return list.map((a) => {
      const tags = (a.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
      const media = a.image
        ? `<img src="${escapeHtml(a.image)}" alt="Preview for ${escapeHtml(a.title)}">`
        : "";

      return `
        <article class="row">
          <div class="row-media">${media}</div>

          <div class="row-main">
            <div class="row-top">
              <h3 class="row-title">
                <a class="link" href="${escapeHtml(a.url)}" target="_blank" rel="noreferrer">
                  ${escapeHtml(a.title)}
                </a>
              </h3>
              <span class="row-date">${escapeHtml(fmtMonthYear(a.date))}</span>
            </div>

            <p class="row-desc">${escapeHtml(a.description)}</p>
            <div class="tags">${tags}</div>

            <div class="links">
              <a class="link-pill" href="${escapeHtml(a.url)}" target="_blank" rel="noreferrer">
                ${icon("file")} <span>View article</span>
              </a>
            </div>
          </div>
        </article>
        `;
    }).join("");
  });
  }

  // ---------- init ----------
  document.addEventListener("DOMContentLoaded", () => {
    setYear();
    setupPageTransitions();
    setupActiveNav();

    renderHomePreviews();
    setupProjectsPage();
    setupArticlesPage();
  });
})();