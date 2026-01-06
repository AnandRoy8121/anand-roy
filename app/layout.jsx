import '@/styles/globals.css'

export const metadata = {
    title: "Anand's Portfolio",
    description: "Portfolio of Anand Roy - I am a full Stack Developer, Front End Developer,Back End Developer, RPA Developer with over 5 years of experience",
    keywords: "portfolio, full Stack Developer, Front End Developer,Back End Developer, RPA Developer",
    authors: [{ name: "Anand Roy" }],
    openGraph: {
        title: "Portfolio of Anand Roy",
        description: "🚀 Full Stack Developer | 🎨 Front End Enthusiast | ⚙️ Back End Magician | 🤖 RPA Enabler 🕰️ 5+ Years of Crafting Digital Experiences Passionate about coding.",
        url: "https://anand-roy.github.io/personal-portfolio/", // Assuming this based on context, or use metadataBase
        images: [
            {
                url: "https://www.linkedin.com/in/anand-roy-2ba991127/", // This was in the original code as image... interesting
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Portfolio of Anand Roy",
        description: "🚀 Full Stack Developer | 🎨 Front End Enthusiast | ⚙️ Back End Magician | 🤖 RPA Enabler 🕰️ 5+ Years of Crafting Digital Experiences Passionate about coding.",
        images: ["https://twitter.com/Anand08121/photo"],
    },
    icons: {
        icon: '/anand.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
