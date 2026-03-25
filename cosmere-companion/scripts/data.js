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
        world: "Cosmere",
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
        whyInteresting: "It is one of the clearest and most structured magic systems in the Cosmere, which makes it very approachable for new readers."
    },
    {
        id: "surgebinding",
        name: "Surgebinding",
        world: "Roshar",
        appearsIn: "The Stormlight Archive",
        type: "stormlight-based",
        summary: "Surgebinding grants powers tied to natural forces and movement, fueled by Stormlight and connected to ancient oaths.",
        whyInteresting: "It feels large in scale and deeply connected to Roshar’s history, making it exciting for readers who enjoy epic fantasy."
    },
    {
        id: "awakening",
        name: "Awakening",
        world: "Nalthis",
        appearsIn: "Warbreaker",
        type: "Breath-based",
        summary: "Awakening uses BioChromatic Breath to animate objects and give them commands.",
        whyInteresting: "It stands out because it feels creative, colorful, and different from more combat-focused systems."
    },
    {
        id: "aondor",
        name: "AonDor",
        world: "Sel",
        appearsIn: "Elantris",
        type: "symbol-based",
        summary: "AonDor uses magical symbols called Aons to create effects tied to location and knowledge.",
        whyInteresting: "It appeals to readers who enjoy mystery and systems that feel intellectual and discovery-based."
    },
    {
        id: "aether-spores",
        name: "Aether Spores",
        world: "Lumar",
        appearsIn: "Tress of the Emerald Sea",
        type: "spore-based",
        summary: "Aether spores react with water and create dangerous magical effects that shape the world and its seas.",
        whyInteresting: "It feels unusual and imaginative, giving readers a very different type of fantasy setting."
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
        reason: "The Stormlight Archive is the best fit for readers who want a huge world, multiple viewpoints, and a deep long-form fantasy experience."
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