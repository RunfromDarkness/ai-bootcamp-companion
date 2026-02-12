// ===== CURRICULUM DATA =====
// This file contains all the Week 1 training content

const CURRICULUM = {
    week1: {
        day1: {
            title: "What is AI, really?",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Recall & Review",
                    type: "recall",
                    content: `Since you're starting fresh today, use this block to establish your baseline:
                    
• Write down what you think AI is and does (even if uncertain)
• Ask your AI assistant: "Explain AI to me as if I'm 10 years old; then again as if I'm a busy adult"
• Compare with your initial guess
• Note 3-5 key ideas you learned`,
                    tasks: [
                        "Write initial understanding of AI",
                        "Get two explanations from AI assistant",
                        "List 3-5 key takeaways"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: New Learning (Foundations)",
                    type: "learning",
                    content: `Watch or read one beginner-friendly AI introduction.
                    
As you learn, document:
• 5 key terms: artificial intelligence, machine learning, neural network, generative AI, large language model
• 3-5 questions that confuse you

Then ask your AI assistant:
• "Define each of these terms in 2-3 simple sentences with an example"
• "Turn this material into 5 quiz questions for me"`,
                    tasks: [
                        "Watch/read AI basics resource",
                        "Document 5 key terms",
                        "List 3-5 confusion points",
                        "Get definitions and quiz questions from AI"
                    ],
                    keyTerms: ["Artificial Intelligence", "Machine Learning", "Neural Network", "Generative AI", "Large Language Model"]
                },
                {
                    id: 3,
                    title: "Block 3: Mixed Practice (Mini Project)",
                    type: "project",
                    content: `Mini Project: "AI for My Grandma"
                    
• From memory, write a short paragraph explaining AI in simple language
• Ask AI: "Please critique and gently correct this explanation for a complete beginner; improve it but keep my voice"
• Save this as Version 1 of your "plain language AI explainer"`,
                    tasks: [
                        "Write plain-language AI explanation",
                        "Get AI critique",
                        "Save Version 1"
                    ],
                    projectName: "AI for My Grandma - V1"
                },
                {
                    id: 4,
                    title: "Block 4: Meta & Strategy",
                    type: "meta",
                    content: `Strategic planning session:
                    
• Ask AI: "I'm starting to learn AI from almost zero. Suggest 10 core concepts I should know in my first month"
• Copy those 10 concepts into your notes
• For 3 of them, ask: "Explain this concept briefly and give me one question I can use to test myself"
• You now have your first small question bank for recall`,
                    tasks: [
                        "Get 10 core AI concepts from assistant",
                        "Document all 10",
                        "Get explanations + test questions for 3 concepts",
                        "Start question bank"
                    ]
                }
            ]
        },
        day2: {
            title: "Kinds of AI & where it shows up",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Recall & Review",
                    type: "recall",
                    content: `Without notes, answer these questions:

• What is AI?
• What is generative AI?
• What is a large language model?

Then:
• Check your answers with your AI assistant
• Answer yesterday's 5 quiz questions from memory
• Refine any weak understanding`,
                    tasks: [
                        "Answer 3 core questions from memory",
                        "Verify with AI assistant",
                        "Complete Day 1 quiz questions",
                        "Note areas needing work"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: New Learning (Foundations)",
                    type: "learning",
                    content: `Learn about different types of AI:

• Symbolic/"rules-based" vs. machine learning
• Generative AI vs. traditional AI
• Everyday examples: spam filters, recommendation systems, voice assistants, chatbots

Create:
• A simple list: "3 types of AI + 2 real-world examples for each"
• 5 new self-test questions`,
                    tasks: [
                        "Study AI types and categories",
                        "Create 3×2 example list",
                        "Generate 5 test questions",
                        "Add to question bank"
                    ],
                    keyTerms: ["Symbolic AI", "Rules-Based Systems", "Machine Learning", "Traditional AI", "Generative AI"]
                },
                {
                    id: 3,
                    title: "Block 3: Mixed Practice (Mini Project)",
                    type: "project",
                    content: `Mini Project: "AI Around Me"

• List every place you think AI might be touching your life (YouTube recommendations, maps, email filters, etc.)
• Ask AI: "Which of these really use AI, and what kind?"
• Rewrite your "AI for My Grandma" explainer with 2-3 real examples from your life`,
                    tasks: [
                        "List potential AI touchpoints in your life",
                        "Verify and categorize with AI assistant",
                        "Update 'Grandma' explainer with examples"
                    ],
                    projectName: "AI Around Me"
                },
                {
                    id: 4,
                    title: "Block 4: Meta & Strategy",
                    type: "meta",
                    content: `Build your reference materials:

• Ask AI: "Help me build a glossary of 15 AI terms with simple definitions and 1-sentence examples"
• Save this glossary
• Each term becomes a recall target in future days`,
                    tasks: [
                        "Generate 15-term AI glossary",
                        "Save to notes",
                        "Review all terms once"
                    ]
                }
            ]
        },
        day3: {
            title: "What is a model? What is training?",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Recall & Review",
                    type: "recall",
                    content: `From memory, write:

• Definitions of AI, generative AI, and large language model
• 3 examples of AI in daily life

Then:
• Quiz yourself on 5-10 glossary terms (no notes)
• Check answers with AI assistant`,
                    tasks: [
                        "Write 3 core definitions",
                        "List 3 daily AI examples",
                        "Quiz on 5-10 glossary terms",
                        "Verify and correct"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: New Learning (Foundations)",
                    type: "learning",
                    content: `Learn about models and training:

• A "model" as a mathematical system that maps input → output
• Training: providing large amounts of data so the model learns patterns
• The idea of "parameters" and why bigger isn't always better

Ask AI:
• "Explain what an AI model is in a non-technical way, then in a slightly more technical way"
• "Give me 5 questions to test my understanding of models and training"`,
                    tasks: [
                        "Study models and training concepts",
                        "Get dual-level explanations",
                        "Generate 5 test questions",
                        "Add to question bank"
                    ],
                    keyTerms: ["AI Model", "Training", "Parameters", "Input-Output Mapping", "Pattern Recognition"]
                },
                {
                    id: 3,
                    title: "Block 3: Mixed Practice (Mini Project)",
                    type: "project",
                    content: `Mini Project: "Model Metaphor"

• Invent a metaphor for a model (e.g., a really good autocomplete or a hyper-trained guesser)
• Ask AI to improve the metaphor and give use cases
• Ask: "Where does this metaphor help, and where does it break?"`,
                    tasks: [
                        "Create your own model metaphor",
                        "Get AI feedback and improvements",
                        "Document strengths and limitations"
                    ],
                    projectName: "Model Metaphor"
                },
                {
                    id: 4,
                    title: "Block 4: Meta & Strategy",
                    type: "meta",
                    content: `Prompt experimentation:

• Ask: "What is a large language model?" using a basic prompt
• Then ask: "Explain what a large language model is to a 12-year-old who likes basketball and video games; give 3 examples"
• Compare responses
• Write down 3 "prompt rules" you've discovered (e.g., "give context," "specify level," "ask for examples")`,
                    tasks: [
                        "Test basic vs. detailed prompt",
                        "Compare quality of responses",
                        "Document 3 prompt best practices"
                    ]
                }
            ]
        },
        day4: {
            title: "How to use AI: good prompts",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Recall & Review",
                    type: "recall",
                    content: `Recall from memory:

• Your model metaphor
• Your 3 prompt rules
• Answer the 5 questions about models and training from Day 3`,
                    tasks: [
                        "Recite model metaphor",
                        "List 3 prompt rules",
                        "Answer Day 3 quiz questions"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: New Learning (Foundations)",
                    type: "learning",
                    content: `Learn prompt basics:

• Clear instruction, context, constraints (length, tone), and examples
• The idea of iterating: ask → review → refine

Ask AI:
• "Teach me the basics of prompting with 5 examples: research, writing, learning, coding, and planning"
• Turn each into a cue card: "Task → Example prompt"`,
                    tasks: [
                        "Study prompt engineering basics",
                        "Get 5 domain-specific examples",
                        "Create prompt cue cards"
                    ],
                    keyTerms: ["Prompt Engineering", "Context", "Constraints", "Iteration", "Specificity"]
                },
                {
                    id: 3,
                    title: "Block 3: Mixed Practice (Mini Project)",
                    type: "project",
                    content: `Mini Project: "Prompt Clinic"

• Choose 1-2 tasks you actually care about (e.g., outline a video, research a topic)
• Write a "bad" prompt, see the result
• Improve it 3 times, each time making it more specific and adding context
• Save the "before vs. after" prompts and outputs as your first prompt library`,
                    tasks: [
                        "Select 1-2 real tasks",
                        "Write initial 'bad' prompts",
                        "Iterate 3 times per task",
                        "Document prompt evolution"
                    ],
                    projectName: "Prompt Clinic"
                },
                {
                    id: 4,
                    title: "Block 4: Meta & Strategy",
                    type: "meta",
                    content: `Build your prompt toolkit:

• Ask AI: "Given my interests and background, generate 10 prompt templates I can reuse for content, research, and learning"
• Store these templates
• You'll refine them throughout the month`,
                    tasks: [
                        "Generate 10 personalized prompt templates",
                        "Organize by category",
                        "Save for future refinement"
                    ]
                }
            ]
        },
        day5: {
            title: "AI for research & summarizing",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Recall & Review",
                    type: "recall",
                    content: `Recall from memory:

• 3 types of AI
• 3-5 use cases where AI can help you personally
• Quiz yourself on 5 glossary terms and 5 prompt templates`,
                    tasks: [
                        "List 3 AI types",
                        "List 3-5 personal use cases",
                        "Quiz on terms and templates"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: New Learning (Foundations)",
                    type: "learning",
                    content: `Learn AI as research assistant:

• How to ask for overviews, comparisons, pros/cons, and cited sources
• How to ask AI to critique its own answer ("Where might this be wrong or incomplete?")

Practice:
• Give AI a topic you care about
• Ask: "Give me a 10-bullet overview with sources, then 3 questions I should ask to go deeper"`,
                    tasks: [
                        "Study research prompting techniques",
                        "Practice with real topic",
                        "Learn self-critique prompting"
                    ],
                    keyTerms: ["Research Prompts", "Source Verification", "Critical Analysis", "Comparative Analysis"]
                },
                {
                    id: 3,
                    title: "Block 3: Mixed Practice (Mini Project)",
                    type: "project",
                    content: `Mini Project: "Research Brief"

• Use AI to research a topic
• Write (in your own words) a one-page brief:
  - Overview
  - 3 key points
  - 2 potential risks or concerns
• Ask AI to critique your brief and suggest improvements`,
                    tasks: [
                        "Choose research topic",
                        "Conduct AI-assisted research",
                        "Write one-page brief",
                        "Get AI critique"
                    ],
                    projectName: "Research Brief"
                },
                {
                    id: 4,
                    title: "Block 4: Meta & Strategy",
                    type: "meta",
                    content: `Responsible AI use:

• Ask AI: "Help me design a checklist for responsible AI use (hallucinations, bias, privacy, etc.)"
• Add this checklist to your notes
• You'll use it every time you rely on AI for important decisions`,
                    tasks: [
                        "Create responsible AI checklist",
                        "Document key concerns",
                        "Commit to using before important decisions"
                    ]
                }
            ]
        },
        day6: {
            title: "Putting it together + content angle",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Recall & Review",
                    type: "recall",
                    content: `Without notes, answer:

• What is AI?
• What is generative AI?
• What is a model and what is training?
• Name 3 prompt best practices; give an example

Compare with your notes and AI's corrections`,
                    tasks: [
                        "Answer 4 comprehensive questions",
                        "Verify accuracy",
                        "Note remaining gaps"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: New Learning (Foundations)",
                    type: "learning",
                    content: `Learn basic AI ethics/responsible use:

• Why misuse (harmful content, deception, privacy violations) is a problem
• How policies restrict uses rather than people

Ask AI:
• "Summarize the main ethical issues with generative AI in 5 bullet points, each with a simple example"`,
                    tasks: [
                        "Study AI ethics basics",
                        "Get 5 ethical issues with examples",
                        "Reflect on personal responsibility"
                    ],
                    keyTerms: ["AI Ethics", "Responsible Use", "Bias", "Privacy", "Transparency"]
                },
                {
                    id: 3,
                    title: "Block 3: Mixed Practice (Mini Project)",
                    type: "project",
                    content: `Mini Project: "Beginner's AI Guide Script - Part 1"

• Use AI to help outline a short script explaining:
  - What AI is
  - Where we see it
  - Why we must use it responsibly
• Make sure the script uses your earlier metaphors and examples`,
                    tasks: [
                        "Outline AI guide script",
                        "Incorporate previous work",
                        "Focus on clarity for beginners"
                    ],
                    projectName: "Beginner's AI Guide Script"
                },
                {
                    id: 4,
                    title: "Block 4: Meta & Strategy",
                    type: "meta",
                    content: `Week 1 reflection:

• Write: "What do I genuinely understand now that I didn't on Day 1?"
• Write: "What still feels fuzzy?"
• Ask AI: "Given my answers, suggest 10 specific topics to focus on in Week 2 to firm up my foundation"`,
                    tasks: [
                        "Document learning wins",
                        "Identify gaps",
                        "Plan Week 2 focus areas"
                    ]
                }
            ]
        },
        day7: {
            title: "Week 1 consolidation",
            blocks: [
                {
                    id: 1,
                    title: "Block 1: Big Recall",
                    type: "recall",
                    content: `30-40 minute comprehensive review:

Without notes, write a "Week 1 Summary" covering:
• Definitions: AI, ML, generative AI, model, training, prompt
• 5-10 real-world AI use cases
• 3-5 prompt best practices

Then ask AI to highlight inaccuracies and missing concepts`,
                    tasks: [
                        "Write comprehensive summary",
                        "Cover all major topics",
                        "Get AI feedback",
                        "Fill gaps"
                    ]
                },
                {
                    id: 2,
                    title: "Block 2: Light Review & Q&A",
                    type: "learning",
                    content: `Review session:

• Skim your glossary, notes, and mini projects
• Make a list of:
  - 10 questions you can now answer confidently
  - 10 questions you cannot answer yet (these feed Week 2)`,
                    tasks: [
                        "Review all Week 1 materials",
                        "List 10 confident answers",
                        "List 10 remaining questions"
                    ]
                },
                {
                    id: 3,
                    title: "Block 3: Capstone Mini Project",
                    type: "project",
                    content: `"Teach a Beginner" piece:

• Write an 800-1,200 word article or script titled "What I Learned About AI in My First Week"
• Ask AI to edit for clarity, but keep your voice and structure`,
                    tasks: [
                        "Write 800-1,200 word article",
                        "Cover Week 1 journey",
                        "Get AI editing help",
                        "Maintain personal voice"
                    ],
                    projectName: "What I Learned About AI in My First Week"
                },
                {
                    id: 4,
                    title: "Block 4: Plan Week 2",
                    type: "meta",
                    content: `Strategic planning:

• With AI, design Week 2 focus areas
• Possible topics: "More on models & the AI landscape," "Using AI daily," "Early monetization ideas"
• Decide 3-5 "can do" outcomes for Week 2 (e.g., "I can compare at least three major AI assistants")`,
                    tasks: [
                        "Define Week 2 learning goals",
                        "Set 3-5 concrete outcomes",
                        "Plan daily focus areas"
                    ]
                }
            ]
        }
    }
};

// Glossary terms that accumulate throughout Week 1
const GLOSSARY_TERMS = [
    {
        term: "Artificial Intelligence (AI)",
        definition: "Software systems that can perform tasks that typically require human intelligence, such as learning from data, recognizing patterns, and making decisions.",
        example: "Spam filters use AI to learn what emails you consider junk."
    },
    {
        term: "Machine Learning (ML)",
        definition: "A subset of AI where systems learn and improve from experience without being explicitly programmed for every scenario.",
        example: "Netflix recommendations get better as you watch more shows."
    },
    {
        term: "Neural Network",
        definition: "A computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) that process information in layers.",
        example: "Image recognition systems use neural networks to identify objects in photos."
    },
    {
        term: "Generative AI",
        definition: "AI systems that can create new content (text, images, code, audio) based on patterns learned from training data.",
        example: "ChatGPT generates human-like text responses to your questions."
    },
    {
        term: "Large Language Model (LLM)",
        definition: "A type of AI model trained on vast amounts of text data to understand and generate human language.",
        example: "GPT-4 is an LLM that powers ChatGPT and can write essays, code, and more."
    },
    {
        term: "Training",
        definition: "The process of teaching an AI model by feeding it large amounts of data so it can learn patterns and relationships.",
        example: "An image classifier is trained on millions of labeled photos to recognize cats vs. dogs."
    },
    {
        term: "Parameters",
        definition: "The adjustable values within an AI model that get tuned during training to improve accuracy. More parameters generally mean more capability but also more computational cost.",
        example: "GPT-3 has 175 billion parameters, while smaller models might have millions."
    },
    {
        term: "Prompt",
        definition: "The input or instruction you give to an AI system to get a desired output.",
        example: "'Explain quantum physics to a 10-year-old' is a prompt for an AI assistant."
    },
    {
        term: "Prompt Engineering",
        definition: "The practice of carefully crafting prompts to get better, more accurate, or more useful responses from AI systems.",
        example: "Adding 'be concise' or 'use simple language' to your prompt helps tailor the AI's response."
    },
    {
        term: "Context Window",
        definition: "The amount of text (measured in tokens) that an AI model can 'remember' or process at one time.",
        example: "If a model has a 4,000 token context window, it can only consider about 3,000 words of conversation history."
    },
    {
        term: "Hallucination",
        definition: "When an AI confidently generates false or nonsensical information that sounds plausible.",
        example: "An AI might cite a scientific paper that doesn't actually exist."
    },
    {
        term: "Token",
        definition: "The basic unit of text that AI models process. Roughly, one token equals about 4 characters or 0.75 words in English.",
        example: "The sentence 'AI is amazing' is about 4 tokens."
    },
    {
        term: "Fine-tuning",
        definition: "Further training a pre-trained model on specific data to specialize it for particular tasks or domains.",
        example: "A general LLM fine-tuned on medical texts becomes better at answering health questions."
    },
    {
        term: "Bias (in AI)",
        definition: "Systematic unfairness in AI outputs that reflects prejudices in training data or model design.",
        example: "A hiring AI trained on historically biased data might unfairly favor certain demographics."
    },
    {
        term: "Inference",
        definition: "The process of using a trained AI model to make predictions or generate outputs on new data.",
        example: "When you ask ChatGPT a question, it's performing inference to generate an answer."
    }
];
