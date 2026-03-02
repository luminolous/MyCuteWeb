// ==============
// Site config
// ==============
const siteConfig = {
  name: "Lumy",
  repoUrl: "https://github.com/luminolous",
  blogHubUrl: "https://medium.com/@your-username", // tombol "View articles"
};

// Types for filter (Projects)
const projectTypes = [
  "All",
  "Model Experiment",
  "Tools & Framework",
  "Dataset",
  "Web App",
  "Game Dev",
];

// ==============
// Projects data
// ==============
// date format: "YYYY-MM"
const projects = [
  {
    id: "quantum-lite-chess",
    title: "Quantum Lite Chess",
    description: "A Pygame-based chess game that adds a “quantum-lite” layer on top of standard chess rules: pieces can split into two destinations, the game can maintain multiple classical branches at once, and some events behave like probabilistic measurement/collapse.",
    type: "Game Dev",
    tags: ["PyGame", "OOP", "Chess"],
    featured: false,
    date: "2025-12",
    image: "./assets/img/project-qlc.jpg",
    links: [
      { label: "Code", kind: "github", url: "https://github.com/luminolous/quantum-lite-chess" }
    ]
  },
  {
    id: "cross-lingual-web-app",
    title: "Waguri AI: Cross Lingual Web App for LLM's LoRA",
    description: "Waguri AI is a bilingual chatbot web app built as a demonstration of fine-tuning Qwen2.5-0.5B using Mixture of LoRA Experts (X-LoRA) for the English–Indonesian pair. This web app is built using Next.js, Typescript, and Tailwind CSS for the frontend and FastAPI for the backend.",
    type: "Web App",
    tags: ["Next.js", "Tailwind CSS", "Typescript", "AI Deployment"],
    featured: false,
    date: "2025-12",
    image: "./assets/img/project-waguri-ai.jpg",
    links: [
      { label: "Code", kind: "github", url: "https://github.com/luminolous/CrossLingual-WaguriAI" }
    ]
  },
  {
    id: "instruction-poems",
    title: "Instruction Poems Dataset",
    description: "A Poems Dataset with ~34.8K training examples, stored as prompt-completion pairs. Each prompt asks for a poem with specific constraints (e.g., tone, theme, and number of lines), and the completion provides the corresponding poem text. This dataset is useful for instruction-tuning and evaluating creative writing models.",
    type: "Dataset",
    tags: ["Poems", "Instruction-Completion", "NLP"],
    featured: false,
    date: "2025-09",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "HF Dataset", kind: "huggingface", url: "https://huggingface.co/datasets/lumicero/instruction-poems" }
    ]   
  },
  {
    id: "dessert-ingredients",
    title: "Dessert Ingredients to Instructions",
    description: "Dataset of ~60K dessert recipes designed for text generation, pairing ingredient lists with their corresponding cooking instructions. Provided as a CSV file, it’s well-suited for training and evaluating seq2seq/LLM models that generate recipe steps from ingredients.",
    type: "Dataset",
    tags: ["Food", "NLP", "Text Generation"],
    featured: false,
    date: "2025-11",
    image: "./assets/img/project-2.jpg",
    links: [
      { label: "Kaggle Dataset", kind: "kaggle", url: "https://www.kaggle.com/datasets/luminolous/dessert-ingredients-to-instructions" },
      { label: "HF Dataset", kind: "huggingface", url: "https://huggingface.co/datasets/lumicero/recipes-ing2inst" }
    ]
  },
  {
    id: "chibi-style",
    title: "Chibi Style Anime Images",
    description: "Dataset of ~60K dessert recipes designed for text generation, pairing ingredient lists with their corresponding cooking instructions. Provided as a CSV file, it’s well-suited for training and evaluating seq2seq/LLM models that generate recipe steps from ingredients.",
    type: "Dataset",
    tags: ["Anime", "Scraping", "Chibi Style"],
    featured: false,
    date: "2026-01",
    image: "./assets/img/project-1.jpg",
    links: [
      { label: "Kaggle Dataset", kind: "kaggle", url: "https://www.kaggle.com/datasets/luminolous/chibi-style-anime-image" },
      { label: "HF Dataset", kind: "huggingface", url: "https://huggingface.co/datasets/lumicero/chibi-style-image" }
    ]
  },
  {
    id: "quintessential-quintuplets",
    title: "The Quintessential Quintuplets Images",
    description: "An ImageFolder-formatted dataset containing ~2.5K images of characters from The Quintessential Quintuplets, curated for fine-grained visual classification (FGVC) or other Image Classification tasks. The dataset focuses on the Nakano quintuplets (Ichika, Nino, Miku, Yotsuba, and Itsuki) where inter-class differences can be subtle (e.g., hairstyle details, accessories, facial features, and consistent character design cues).",
    type: "Dataset",
    tags: ["Anime", "Images", "Scraping", "Nakano Siblings"],
    featured: false,
    date: "2026-01",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Kaggle", kind: "kaggle", url: "https://www.kaggle.com/datasets/luminolous/the-quintessential-quintuplets-images" }
    ]
  },
  {
    id: "yae-miko-face-images",
    title: "Yae Miko Genshin Impact | Face Image (128x128)",
    description: "This dataset contains a curated set of anime style face images focused on Yae Miko, a character from Genshin Impact. The images are intended for tasks such as face centered generative modeling, character specific style studies, and visual similarity analysis. Each sample emphasizes clear facial features and consistent framing to support reliable downstream training and evaluation.",
    type: "Dataset",
    tags: ["Anime", "Images", "Scraping", "Genshin Impact"],
    featured: false,
    date: "2026-02",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Kaggle", kind: "kaggle", url: "https://www.kaggle.com/datasets/luminolous/hu-tao-face-image-dataset" }
    ]
  },
  {
    id: "moescraper",
    title: "MoeScraper",
    description: "Python toolkit/library to help retrieve and collect image data from anime image websites like danbooru, safebooru, and zerochan. It also supports searches based on desired tags and filters for NSFW images.",
    type: "Tools & Framework",
    tags: ["Scraper", "Anime Fan Art", "Image", "Python Tools"],
    featured: true,
    date: "2026-01",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Installation", kind: "github", url: "https://github.com/luminolous/moescraper" }
    ]
  },
  {
    id: "frameko",
    title: "Frameko",
    description: "Python toolkit to convert video (animation or else) into multiple frames and collect them into an image dataset. This tool is can be used to add more data or collect a dataset that will be used to train a model.",
    type: "Tools & Framework",
    tags: ["Video Processing", "Scraping", "Image Collector"],
    featured: false,
    date: "2026-01",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Installation", kind: "github", url: "https://github.com/luminolous/frameko" }
    ]
  },
  {
    id: "xids",
    title: "X-IDS",
    description: "An Explainable Intrusion Detection System for Network Security using Neural Autoencoders, Gradient Boosting, and T5-Small Text Generation.",
    type: "Model Experiment",
    tags: ["Network Security", "Autoencoders", "Gradient Boosting", "T5-Small", "Anomaly Detection"],
    featured: false,
    date: "2025-07",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Code", kind: "github", url: "https://github.com/luminolous/xids-pipeline" }
    ]
  },
  {
    id: "qwen3-astrophysics",
    title: "Qwen3 LoRA Astrophysics",
    description: "  Fine tuning Qwen3-1.7B using LoRA for Astronomy QA.",
    type: "Model Experiment",
    tags: ["LLMs", "PEFT", "QA Task"],
    featured: false,
    date: "2025-09",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Model", kind: "huggingface", url: "https://huggingface.co/lumicero/qwen3-astroph-lora" }
    ]
  },
  {
    id: "llama-lora-wikindo",
    title: "Llama 3.2 LoRA Wiki Indonesian Domain",
    description: "Comparing three data sampling techniques (Random, Uniform, Cluster Clip) on the performance of an SFT LLM (Llama 3.2 - 3B) with LoRA in the Indonesian Wiki domain.",
    type: "Model Experiment",
    tags: ["Indonesia Wiki", "Llama 3.2", "PEFT"],
    featured: false,
    date: "2025-10",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Model", kind: "huggingface", url: "https://huggingface.co/lumicero/llama-wikindo-lora" }
    ]
  },
  {
    id: "cnn-lora",
    title: "LoRA Implementation in CNN Architecture (LoRA-C)",
    description: "Trying to apply the LoRA concept to a model with a CNN architecture (based on the LoRA-C paper) where there will be 3 testing scenarios, namely the first using the pre-trained ResNet18 model, the second by building its own CNN architecture and later trained with 10% of the dataset, and the third by building a CNN architecture and trained with the entire dataset.",
    type: "Model Experiment",
    tags: ["Computer Vision", "PEFT", "CNN"],
    featured: false,
    date: "2025-11",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Code", kind: "kaggle", url: "https://www.kaggle.com/code/luminolous/lora-implementation-in-cnn-architecture" }
    ]
  },
  {
    id: "lora-soups-weighting-algo",
    title: "Analysis of the Effect of Several Optimization Algorithms on Merged LoRA (LoRA-Soups) Weighting on Large Language Models",
    description: "Final Project Computational Intelligence course. Try to comparing 3 optimization algorithms (Grey Wolf Optimization, CMA-ES, and Genetic Algorithm) in finding the best weight of Merged LoRA (LoRA-Soups). For the evaluation, BLEU, ROUGE-1, ROUGE-2, and ROUGE-L metrics were used with datasets from CendolCollectionv2 and OpenOrca",
    type: "Model Experiment",
    tags: ["LoRA", "Merge LoRA", "LLMs", "Weighting Adapter"],
    featured: false,
    date: "2025-12",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Code", kind: "github", url: "https://github.com/luminolous/fp-kk" }
    ]
  },
  {
    id: "cross-lingual-x-lora",
    title: "Implementation of Mixture of Low-Rank Adapter Experts (X-LoRA) Architecture in English-Indonesian Cross-Lingual Adaptation with Qwen2.5-0.5B",
    description: "Attempting to implement the X-LoRA architecture in a Bilingual (English-Indonesian) task. The datasets used were CendolCollectionv2 for Indonesian and OpenOrca for English, both of which were pre-sampled to maximize results and save computation. Evaluation was conducted using BLEU, ROUGE-1, ROUGE-2, and ROUGE-L metrics.",
    type: "Model Experiment",
    tags: ["LLMs", "PEFT", "X-LoRA", "Cross Lingual"],
    featured: true,
    date: "2025-12",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Model", kind: "huggingface", url: "https://huggingface.co/lumicero/Qwen2.5-bilingual-xlora" },
      { label: "Demo", kind: "huggingface", url: "https://huggingface.co/spaces/lumicero/cross-lingual-waguri-ai" }
    ]
  },
  {
    id: "chibi-style-detection",
    title: "Chibi Style Detection using Anomalib for Anomaly Detection Task",
    description: "Chibi Style Detection is a computer-vision project that determines whether an input image looks “chibi” or “non-chibi.” It’s built with Anomalib’s PatchCore, a memory-bank anomaly detection approach that compares patch-level CNN features against a stored set of “normal” features to produce an anomaly score and a localization heatmap. In the AUROC metrics, the model got a score of 0.72, which is quite good for a model that can distinguish between 'chibi' and 'non-chibi'. ",
    type: "Model Experiment",
    tags: ["Anomaly Detection", "Computer Vision", "Art Style"],
    featured: false,
    date: "2026-01",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Demo", kind: "huggingface", url: "https://huggingface.co/spaces/lumicero/Chibi-Style-Detection" }
    ]
  },
  {
    id: "nakano-fgvc",
    title: "Implementation of Fine-Grained Visual Categorization (FGVC) on The Quintessential Quintuplets Images Dataset using TransFG",
    description: "Implementation of Fine-Grained Visual Categorization (FGVC) on The Quintessential Quintuplets Images Dataset using TransFG is a project that trains a fine-grained image classifier to distinguish between the five visually similar Nakano sisters (Ichika, Nino, Miku, Yotsuba, and Itsuki) using The Quintessential Quintuplets Images dataset. The pipeline fine-tunes a Vision Transformer with the TransFG idea of leveraging transformer attention to focus on the most discriminative local patches (“part/patch selection”), which is especially useful for FGVC where class differences are subtle and often concentrated in small visual cues rather than global shape. Using this TransFG-style setup, the trained model performs end-to-end inference to output the predicted sister label for a given image, achieving test loss = 0.4902 and test accuracy = 0.8433 (84.33%) on the held-out test split.",
    type: "Model Experiment",
    tags: ["FGVC", "Computer Vision", "Image Classification"],
    featured: false,
    date: "2026-01",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Demo", kind: "huggingface", url: "https://huggingface.co/spaces/lumicero/FGVC-Nakano-Quintuplets" }
    ]
  },
  {
    id: "frieren-diffusion-lora",
    title: "Waifu-Diffusion PEFT (LoRA) in Frieren Image Dataset",
    description: "In this project, I fine-tune a lightweight LoRA adapter for the Waifu Diffusion text-to-image model (hakurei/waifu-diffusion) using the CyberHarem Frieren dataset, converts the dataset’s image-tag information into captions for training, trains the adapter with Diffusers’ train_text_to_image_lora.py workflow, exports the result as a compact pytorch_lora_weights.safetensors, and uploads it to the Hugging Face Hub so you can later attach it back to the base model with load_lora_weights() for inference.",
    type: "Model Experiment",
    tags: ["Image Generation", "Waifu Diffusion", "Anime Image", "PEFT"],
    featured: true,
    date: "2026-02",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Model", kind: "huggingface", url: "https://huggingface.co/lumicero/frieren-waifu-diffusion-lora" }
    ]
  },
  {
    id: "frieren-dreambooth-lora",
    title: "Waifu-Diffusion PEFT (LoRA) using Dreambooth in Frieren Image Dataset",
    description: "In this project, I fine-tune waifu-diffusion model using DreamBooth with a lightweight LoRA adapter to learn Frieren’s identity. The notebook downloads and prepares the CyberHarem/frieren_sousounofrieren dataset, including the stage3-p480-1200 package with 1058 cropped IMG+TXT samples.　Training is run with the official Diffusers train_dreambooth_lora.py script and supports options like prior preservation, mixed precision, checkpointing and others. Finally, it loads the saved LoRA weights via load_lora_weights() to generate validation images and compare base vs LoRA outputs during inference.",
    type: "Model Experiment",
    tags: ["Image Generation", "Dreambooth", "Waifu Diffusion", "PEFT"],
    featured: false,
    date: "2026-02",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Model", kind: "huggingface", url: "https://huggingface.co/lumicero/frieren-waifu-diffusion-lora-db" }
    ]
  },
  {
    id: "waifu-diffusion-lora-demo",
    title: "HF Space for Waifu Diffusion LoRA Live Demonstration",
    description: "",
    type: "Web App",
    tags: ["Gradio", "Hugging Face Space", "Model Demo"],
    featured: false,
    date: "2026-02",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Demo", kind: "huggingface", url: "https://huggingface.co/spaces/lumicero/waifu-diffusion-lora-demo" }
    ]
  },
  {
    id: "frieren-dreambooth-lora",
    title: "HF Space for Waifu Diffusion Dreambooth LoRA Live Demonstration",
    description: "",
    type: "Web App",
    tags: ["Gradio", "Python", "Model Demo", "Hugging Face Space"],
    featured: false,
    date: "2026-02",
    image: "./assets/img/project-3.jpg",
    links: [
      { label: "Demo", kind: "huggingface", url: "https://huggingface.co/spaces/lumicero/waifu-diffusion-lora-db-demo" }
    ]
  },
];

// ==============
// Articles data
// ==============
// date format: "YYYY-MM"
const articles = [
//   {
//     id: "article-1",
//     title: "A Soft Intro to LoRA & Adapter Tuning",
//     description: "Conceptual guide + practical notes for fine-tuning with adapters.",
//     tags: ["LLM", "PEFT"],
//     date: "2026-02",
//     image: "./assets/img/article-1.jpg",
//     url: "https://medium.com/@your-username/your-article"
//   },
//   {
//     id: "article-2",
//     title: "Diffusion Notes: Prompting Beyond Tags",
//     description: "How to move from tag-style prompting to natural language prompts.",
//     tags: ["Diffusion", "Prompting"],
//     date: "2026-01",
//     image: "./assets/img/article-2.jpg",
//     url: "https://medium.com/@your-username/your-article-2"
//   },
//   {
//     id: "article-3",
//     title: "Building Cute UI Motion (Without Being Overwhelming)",
//     description: "Small animation patterns + accessibility tips for soft motion.",
//     tags: ["UI", "CSS"],
//     date: "2025-12",
//     image: "./assets/img/article-3.jpg",
//     url: "https://medium.com/@your-username/your-article-3"
//   }
];