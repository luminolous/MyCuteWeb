// ==============
// Site config
// ==============
const siteConfig = {
  name: "Lumy",
  repoUrl: "https://github.com/your-username",
  blogHubUrl: "https://medium.com/@your-username", // tombol "View articles"
};

// Types for filter (Projects)
const projectTypes = [
  "All",
  "Model Experiment",
  "Tools & Framework",
  "Dataset",
  "Website",
  "Game Dev",
];

// ==============
// Projects data
// ==============
// date format: "YYYY-MM"
const projects = [
  {
    id: "xlora-bilingual",
    title: "X-LoRA Bilingual Experiments",
    description: "Mixture of LoRA experts for English–Indonesian adaptation with evaluations and ablations.",
    type: "Model Experiment",
    tags: ["LLM", "PEFT", "Bilingual"],
    featured: true,
    date: "2026-02",
    image: "./assets/img/project-1.jpg",
    links: [
      { label: "GitHub", kind: "github", url: "https://github.com/your-username/your-repo" },
      { label: "Demo", kind: "globe", url: "https://your-demo-site.com" }
    ]
  },
  {
    id: "frameko",
    title: "Frameko",
    description: "Video frame search engine with embeddings + indexing for fast retrieval.",
    type: "Tools & Framework",
    tags: ["Python", "FAISS", "CLIP"],
    featured: true,
    date: "2026-01",
    image: "./assets/img/project-2.jpg",
    links: [
      { label: "GitHub", kind: "github", url: "https://github.com/your-username/frameko" }
    ]
  },
  {
    id: "moescraper",
    title: "MoeScraper",
    description: "Image dataset collector with filtering, metadata, and export.",
    type: "Tools & Framework",
    tags: ["Scraper", "Dataset", "CLI"],
    featured: false,
    date: "2025-12",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "GitHub", kind: "github", url: "https://github.com/your-username/moescraper" }
    ]
  },
  {
    id: "anime-dataset",
    title: "Anime Faces 128x128 Dataset",
    description: "Curated dataset ready for GAN/diffusion training experiments.",
    type: "Dataset",
    tags: ["CV", "Data Curation"],
    featured: false,
    date: "2025-11",
    image: "./assets/img/project-2.jpg",
    links: [
      { label: "Dataset", kind: "file", url: "https://huggingface.co/datasets/your-username/your-dataset" }
    ]
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website v1",
    description: "A clean and cute static portfolio with soft motion and sky gradients.",
    type: "Website",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    date: "2025-10",
    image: "./assets/img/project-1.jpg",
    links: [
      { label: "Live", kind: "globe", url: "https://your-username.github.io/your-repo/" },
      { label: "GitHub", kind: "github", url: "https://github.com/your-username/your-repo" }
    ]
  },
  {
    id: "game-proto",
    title: "Tiny Game Prototype",
    description: "Small game dev prototype for fun + UI experiments.",
    type: "Game Dev",
    tags: ["Web", "Prototype"],
    featured: false,
    date: "2025-08",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Live", kind: "globe", url: "https://your-game-link.com" }
    ]
  }
];

// ==============
// Articles data
// ==============
// date format: "YYYY-MM"
const articles = [
  {
    id: "article-1",
    title: "A Soft Intro to LoRA & Adapter Tuning",
    description: "Conceptual guide + practical notes for fine-tuning with adapters.",
    tags: ["LLM", "PEFT"],
    date: "2026-02",
    image: "./assets/img/article-1.jpg",
    url: "https://medium.com/@your-username/your-article"
  },
  {
    id: "article-2",
    title: "Diffusion Notes: Prompting Beyond Tags",
    description: "How to move from tag-style prompting to natural language prompts.",
    tags: ["Diffusion", "Prompting"],
    date: "2026-01",
    image: "./assets/img/article-2.jpg",
    url: "https://medium.com/@your-username/your-article-2"
  },
  {
    id: "article-3",
    title: "Building Cute UI Motion (Without Being Overwhelming)",
    description: "Small animation patterns + accessibility tips for soft motion.",
    tags: ["UI", "CSS"],
    date: "2025-12",
    image: "./assets/img/article-3.jpg",
    url: "https://medium.com/@your-username/your-article-3"
  }
];