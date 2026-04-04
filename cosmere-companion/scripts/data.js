export const books = [
    {
        id: "mistborn",
        title: "Mistborn",
        world: "Scadrial",
        category: "action",
        level: "beginner",
        magic: "Allomancy, Feruchemy, and Hemalurgy",
        description: "A fast-paced fantasy story about rebellion, survival, and metal-based magic.",
        whyStart: "Mistborn is a strong first choice because it is exciting, accessible, and introduces the Cosmere clearly.",
        featured: true
    },
    {
        id: "stormlight",
        title: "The Stormlight Archive",
        world: "Roshar",
        category: "epic",
        level: "advanced",
        magic: "Surgebinding",
        description: "A massive epic fantasy series with deep worldbuilding and large-scale conflict.",
        whyStart: "This is best for readers who already know they enjoy long fantasy stories with multiple plotlines.",
        featured: true
    },
    {
        id: "warbreaker",
        title: "Warbreaker",
        world: "Nalthis",
        category: "standalone",
        level: "beginner",
        magic: "Awakening and BioChromatic Breath",
        description: "A colorful standalone story with politics, mystery, and inventive magic.",
        whyStart: "Warbreaker works well if you want one complete Cosmere novel before diving into larger series.",
        featured: true
    },
    {
        id: "elantris",
        title: "Elantris",
        world: "Sel",
        category: "mystery",
        level: "intermediate",
        magic: "AonDor",
        description: "A story of political intrigue, broken magic, and the mystery of a fallen city.",
        whyStart: "Elantris is a good option for readers who enjoy mysteries and slower world discovery.",
        featured: false
    },
    {
        id: "tress",
        title: "Tress of the Emerald Sea",
        world: "Lumar",
        category: "standalone",
        level: "beginner",
        magic: "Aether spores and magical seas",
        description: "A whimsical adventure with heart, danger, and a lighter tone than many other Cosmere books.",
        whyStart: "Tress is approachable, self-contained, and great for readers who want something charming.",
        featured: false
    },
    {
        id: "sunlit",
        title: "The Sunlit Man",
        world: "Canticle",
        category: "action",
        level: "advanced",
        magic: "Investiture-based powers and wider Cosmere connections",
        description: "A quick, intense story with major connections to the wider Cosmere.",
        whyStart: "This is better for readers who already know some Cosmere background and want deeper connections.",
        featured: false
    }
];

export const worlds = [
    {
        name: "Scadrial",
        books: "Mistborn",
        magic: "Allomancy, Feruchemy, Hemalurgy",
        summary: "A world shaped by metal-based magic, revolution, and major Cosmere history."
    },
    {
        name: "Roshar",
        books: "The Stormlight Archive",
        magic: "Surgebinding",
        summary: "A storm-battered world with ancient history, radiant powers, and large-scale conflict."
    },
    {
        name: "Nalthis",
        books: "Warbreaker",
        magic: "Awakening",
        summary: "A colorful world where Breath powers objects, identities, and political tension."
    },
    {
        name: "Sel",
        books: "Elantris",
        magic: "AonDor",
        summary: "A world of region-based magic systems and fallen power waiting to be understood again."
    },
    {
        name: "Lumar",
        books: "Tress of the Emerald Sea",
        magic: "Aether spores",
        summary: "A unique setting built around dangerous seas and a more adventurous story tone."
    },
    {
        name: "Canticle",
        books: "The Sunlit Man",
        magic: "Sunheart / Investiture-based powers",
        summary: "An extremely dangerous world with intense sunlight, constant motion, and survival-driven magic tied to its environment."
    }
];

export const magicSystems = [
    {
        id: "allomancy",
        name: "Allomancy",
        world: "Scadrial",
        appearsIn: "Mistborn",
        type: "metal-based",
        summary: "Allomancy allows users to burn metals to gain specific abilities such as pushing metals, enhancing senses, or influencing emotions.",
        whyInteresting: "It is one of the clearest and most structured magic systems in the Cosmere, which makes it very approachable for new readers.",
        slides: [
            {
                image: "images/allomancy-slide-1.webp",
                kicker: "Scadrial • Metal-Based",
                title: "What Is Allomancy?",
                description: "Allomancy is a magic system where users burn specific metals inside their bodies to access different powers."
            },
            {
                image: "images/allomancy-slide-2.webp",
                kicker: "How It Works",
                title: "Different Metals, Different Powers",
                description: "Each metal produces a specific effect, such as enhanced strength, emotional influence, or the ability to push and pull on nearby metals."
            },
            {
                image: "images/allomancy-slide-3.webp",
                kicker: "Why It Stands Out",
                title: "A Clear and Structured System",
                description: "Allomancy feels easy to understand because its rules are consistent, logical, and strongly tied to action scenes and strategy."
            }
        ]
    },
    {
        id: "surgebinding",
        name: "Surgebinding",
        world: "Roshar",
        appearsIn: "The Stormlight Archive",
        type: "stormlight-based",
        summary: "Surgebinding grants powers tied to natural forces and movement, fueled by Stormlight and connected to ancient oaths.",
        whyInteresting: "It feels large in scale and deeply connected to Roshar’s history, making it exciting for readers who enjoy epic fantasy.",
        slides: [
            {
                image: "images/surgebinding-slide-1.webp",
                kicker: "Roshar • Stormlight-Based",
                title: "What Is Surgebinding?",
                description: "Surgebinding is a powerful system that allows certain people to use Stormlight to manipulate natural forces like gravity, motion, and transformation."
            },
            {
                image: "images/surgebinding-slide-2.webp",
                kicker: "How It Works",
                title: "Power Through Oaths and Stormlight",
                description: "Surgebinders gain abilities through bonds to spren and oaths, and they fuel those powers with Stormlight gathered from the gemstones in the world and from the huge storm that regularly hits Roshar."
            },
            {
                image: "images/surgebinding-slide-3.webp",
                kicker: "Why It Stands Out",
                title: "Epic in Scale",
                description: "Surgebinding feels larger than life because it is tied to Roshar’s history, its conflicts, and some of the biggest moments in the Cosmere."
            }
        ]
    },
    {
        id: "awakening",
        name: "Awakening",
        world: "Nalthis",
        appearsIn: "Warbreaker",
        type: "Breath-based",
        summary: "Awakening uses BioChromatic Breath to animate objects and give them commands.",
        whyInteresting: "It stands out because it feels creative, colorful, and different from more combat-focused systems.",
        slides: [
            {
                image: "images/awakening-slide-1.webp",
                kicker: "Nalthis • Breath-Based",
                title: "What Is Awakening?",
                description: "Awakening is a magic system where people use BioChromatic Breath to bring objects to life and give them commands."
            },
            {
                image: "images/awakening-slide-2.webp",
                kicker: "How It Works",
                title: "Commands and Intent",
                description: "The system depends on spoken commands, color, and intent, which allows the user to control the Awakened objects in unique ways."
            },
            {
                image: "images/awakening-slide-3.webp",
                kicker: "Why It Stands Out",
                title: "Creative and Unusual",
                description: "Awakening feels memorable because it blends color, personality, and strategy into a system that can be both practical and surprising."
            }
        ]
    },
    {
        id: "aondor",
        name: "AonDor",
        world: "Sel",
        appearsIn: "Elantris",
        type: "symbol-based",
        summary: "AonDor uses magical symbols called Aons to create effects tied to location and knowledge.",
        whyInteresting: "It appeals to readers who enjoy mystery and systems that feel intellectual and discovery-based.",
        slides: [
            {
                image: "images/aondor-slide-1.webp",
                kicker: "Sel • Symbol-Based",
                title: "What Is AonDor?",
                description: "AonDor is a magical system based on drawing symbols called Aons to produce different effects."
            },
            {
                image: "images/aondor-slide-2.webp",
                kicker: "How It Works",
                title: "Knowledge Shapes Power",
                description: "The power of AonDor depends on understanding the right symbols and how they connect to geography, meaning, and intent."
            },
            {
                image: "images/aondor-slide-3.webp",
                kicker: "Why It Stands Out",
                title: "A Magic System Built on Discovery",
                description: "AonDor feels especially interesting because it rewards curiosity and problem-solving rather than only raw strength."
            }
        ]
    },
    {
        id: "aether-spores",
        name: "Aether Spores",
        world: "Lumar",
        appearsIn: "Tress of the Emerald Sea",
        type: "spore-based",
        summary: "Aether spores react with water and create dangerous magical effects that shape the world and its seas.",
        whyInteresting: "It feels unusual and imaginative, giving readers a very different type of fantasy setting.",
        slides: [
            {
                image: "images/aether-spores-slide-1.webp",
                kicker: "Lumar • Spore-Based",
                title: "What Are Aether Spores?",
                description: "Aether spores are spores from the planet's various moons that react dramatically when they come into contact with water."
            },
            {
                image: "images/aether-spores-slide-2.webp",
                kicker: "How It Works",
                title: "Dangerous Seas and Strange Reactions",
                description: "Different spores create different effects, and that shapes both the environment and the dangers people face on Lumar. The entire planet is covered by different seas of spores, which creates a unique setting and story tone."
            },
            {
                image: "images/aether-spores-slide-3.webp",
                kicker: "Why It Stands Out",
                title: "A Highly Imaginative Setting",
                description: "This system stands out because it creates a fantasy world that feels adventurous, unusual, and visually distinct from other Cosmere stories."
            }
        ]
    },
    {
        id: "sunheart",
        name: "Sunheart Powers",
        world: "Canticle",
        appearsIn: "The Sunlit Man",
        type: "investiture-based",
        summary: "The magic on Canticle is tied to extreme environmental conditions and stored power, creating high-risk abilities focused on survival.",
        whyInteresting: "It stands out because it combines harsh worldbuilding with fast-paced action and strong connections to the wider Cosmere.",
        slides: [
            {
                image: "images/sunheart-slide-1.webp",
                kicker: "Canticle • Investiture-Based",
                title: "What Are Sunheart Powers?",
                description: "The magic on Canticle is tied to dangerous environmental conditions, stored power, and survival in an unforgiving world."
            },
            {
                image: "images/sunheart-slide-2.webp",
                kicker: "How It Works",
                title: "Power Under Pressure",
                description: "This system feels intense because the world itself is part of the danger, and magic is closely tied to movement, energy, and endurance."
            },
            {
                image: "images/sunheart-slide-3.webp",
                kicker: "Why It Stands Out",
                title: "Fast-Paced and Deeply Connected",
                description: "Sunheart powers stand out because they support a quick, high-stakes story while also connecting strongly to the larger Cosmere."
            }
        ]
    }
];

export const readingPaths = [
    {
        id: "beginner",
        label: "Best First Choice",
        startWith: "Mistborn",
        reason: "Mistborn is often the easiest first step into the Cosmere because it has strong pacing, clear stakes, and a very understandable magic system."
    },
    {
        id: "action",
        label: "Action",
        startWith: "Mistborn",
        reason: "Mistborn is a great choice for readers who want a fast-moving story with fights, tension, and a memorable magic system."
    },
    {
        id: "epic",
        label: "Epic Fantasy",
        startWith: "The Stormlight Archive",
        reason: "The Stormlight Archive is the best fit for readers who want a huge world, multiple viewpoints, and a deep long-form fantasy experience. This can then be followed up by The Sunlit Man if you want a more epic and high-stakes story with a familiar character."
    },
    {
        id: "shorter",
        label: "Shorter Read",
        startWith: "Warbreaker or Tress of the Emerald Sea",
        reason: "These are more approachable starting points for readers who want something self-contained before diving into a larger series."
    },
    {
        id: "mystery",
        label: "Mystery",
        startWith: "Elantris",
        reason: "Elantris is a strong option for readers who enjoy uncovering how a broken world and its magic system work."
    }
];