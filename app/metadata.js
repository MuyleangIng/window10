export default function generateMetadata() {
  const title = "Interactive Portfolio by IngMuyleang"
  const description =
      "An interactive portfolio website designed . Explore quantum computing research, AI convergence projects, and academic achievements through a familiar Windows 10 interface."
  const url = "https://muyleanging.com"
  const ogImage = "https://portfolio.ingmuyleang.com/images/og-image.png"

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: "IngMuyleang Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Portfolio - IngMuyleang",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@muyleanging",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    authors: [{ name: "Ing Muyleang", url: "https://github.com/MuyleangIng" }],
    creator: "Ing Muyleang",
    publisher: "IngMuyleang",
    keywords: [
      "portfolio",
      "windows 10",
      "ui clone",
      "quantum computing",
      "quantum machine learning",
      "quantum error correction",
      "react",
      "next.js",
      "interactive portfolio",
      "ing muyleang",
      "ingmuyleang",
      "quantum researcher",
      "ai convergence",
      "pknu",
      "cambodian researcher",
      "quantum cryptography",
      "khmer nlp",
    ],
  }
}
