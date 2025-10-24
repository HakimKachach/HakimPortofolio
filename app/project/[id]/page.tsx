"use client"
import Link from "next/link"
import Image from "next/image"

const projectCategories = [
  {
    id: 1,
    title: "Site Vitrine - Riad Marrakech",
    description: "Luxury riad accommodation showcase website.",
    example:
      "Elegant presentation of traditional Moroccan riads with room galleries, booking system, and guest testimonials. Features Arabic calligraphy and geometric patterns.",
    image: "/moroccan-riad-luxury.jpg",
    pages: ["Home", "Rooms", "Gallery", "About", "Contact"],
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    fullDescription:
      "Riad Marrakech is a premium luxury riad website showcasing traditional Moroccan hospitality. The platform features stunning room galleries, online booking system, guest testimonials, and cultural heritage information with authentic Moroccan design elements.",
    features: [
      "Beautiful room galleries with 360° views",
      "Online booking and reservation system",
      "Guest testimonials and reviews",
      "Cultural heritage information",
      "Traditional Moroccan design patterns",
      "Multi-language support (Arabic, French, English)",
    ],
    liveUrl: `/demo/site-vitrine-1`,
  },
  {
    id: 2,
    title: "Site Vitrine - Artisan Maroc",
    description: "Traditional Moroccan crafts and artisan portfolio.",
    example:
      "Showcases handmade carpets, leather goods, and traditional crafts. Includes artisan profiles, production process, and cultural heritage information.",
    image: "/moroccan-artisan-crafts.jpg",
    pages: ["Home", "Collections", "Artisans", "Process", "Contact"],
    tech: ["React", "TailwindCSS", "Gsap"],
    fullDescription:
      "Artisan Maroc celebrates traditional Moroccan craftsmanship with a beautiful portfolio of handmade products. Features artisan profiles, detailed production processes, and stories behind each creation.",
    features: [
      "Handmade product collections",
      "Artisan profiles and stories",
      "Production process documentation",
      "Fair trade certification",
      "Cultural heritage preservation",
      "Direct artisan contact",
    ],
    liveUrl: `/demo/site-vitrine-2`,
  },
  {
    id: 3,
    title: "Site Vitrine - Tagine Restaurant",
    description: "Authentic Moroccan restaurant website.",
    example:
      "Menu showcase with traditional dishes, reservation system, chef profiles, and cultural stories. Dark theme with warm Moroccan colors and traditional patterns.",
    image: "/moroccan-restaurant-tagine.jpg",
    pages: ["Home", "Menu", "Reservations", "Gallery", "Contact"],
    tech: ["Next.js", "TailwindCSS", "React Hook Form"],
    fullDescription:
      "Tagine Restaurant is an elegant fine dining website featuring authentic Moroccan cuisine. The site showcases traditional recipes, chef profiles, and an online reservation system with a sophisticated dark theme.",
    features: [
      "Interactive menu with descriptions",
      "Online reservation system",
      "Chef profiles and specialties",
      "Photo gallery of dishes",
      "Wine and beverage pairings",
      "Private event booking",
    ],
    liveUrl: `/demo/site-vitrine-3`,
  },
  {
    id: 4,
    title: "E-commerce - Moroccan Fashion",
    description: "Traditional and modern Moroccan clothing store.",
    example:
      "Product catalog of djellabas, kaftans, and modern Moroccan fashion. Shopping cart, checkout with payment integration, and customer reviews.",
    image: "/moroccan-fashion-store.jpg",
    pages: ["Home", "Shop", "Product Details", "Cart", "Checkout"],
    tech: ["Next.js", "Stripe", "TailwindCSS"],
    fullDescription:
      "Moroccan Fashion is a premium e-commerce platform offering traditional djellabas, kaftans, and contemporary Moroccan-inspired clothing with secure payment processing.",
    features: [
      "Product catalog with advanced filtering",
      "Customer reviews and ratings",
      "Shopping cart and wishlist",
      "Secure Stripe checkout",
      "Order tracking",
      "Size and color customization",
    ],
    liveUrl: `/demo/ecommerce-1`,
  },
  {
    id: 5,
    title: "E-commerce - Spice Bazaar",
    description: "Premium Moroccan spices and herbs online store.",
    example:
      "Curated collection of authentic Moroccan spices, argan oil, and traditional ingredients. Advanced filtering, inventory management, and order tracking.",
    image: "/moroccan-spice-bazaar.jpg",
    pages: ["Home", "Products", "Categories", "Cart", "Account"],
    tech: ["React", "Node.js", "MongoDB"],
    fullDescription:
      "Spice Bazaar is an authentic online marketplace for premium Moroccan spices, argan oil, and traditional ingredients sourced directly from local suppliers.",
    features: [
      "Authentic spice collections",
      "Real-time inventory tracking",
      "Customer dashboard",
      "Order history and tracking",
      "Recipe suggestions",
      "Bulk ordering options",
    ],
    liveUrl: `/demo/ecommerce-2`,
  },
  {
    id: 6,
    title: "E-commerce - Argan Beauty",
    description: "Natural Moroccan beauty and skincare products.",
    example:
      "Premium argan oil, natural cosmetics, and traditional beauty products. Features product recommendations, wishlist, and personalized skincare guides.",
    image: "/moroccan-argan-beauty.jpg",
    pages: ["Home", "Shop", "Collections", "Cart", "Checkout"],
    tech: ["Next.js", "Three.js", "Stripe"],
    fullDescription:
      "Argan Beauty is a premium marketplace for natural Moroccan beauty products featuring pure argan oil, traditional cosmetics, and personalized skincare recommendations.",
    features: [
      "3D product previews",
      "Beauty collections",
      "Personalized skincare guides",
      "Wishlist functionality",
      "Beauty tips and tutorials",
      "Expert consultations",
    ],
    liveUrl: `/demo/ecommerce-3`,
  },
  {
    id: 7,
    title: "Blog - Morocco Travel Guide",
    description: "Travel and tourism blog for Morocco.",
    example:
      "Articles on Moroccan destinations, travel tips, cultural insights, and hidden gems. Features search, categories, and travel photography galleries.",
    image: "/moroccan-travel-blog.jpg",
    pages: ["Home", "Articles", "Destinations", "Gallery", "Contact"],
    tech: ["Next.js", "Contentful", "TailwindCSS"],
    fullDescription:
      "Morocco Travel Guide is a comprehensive travel blog featuring in-depth articles, destination guides, travel tips, and stunning photography of Moroccan landscapes.",
    features: [
      "Destination guides",
      "Travel tips and advice",
      "Photography galleries",
      "Category and tag filtering",
      "Reader comments",
      "Travel planning resources",
    ],
    liveUrl: `/demo/blog-1`,
  },
  {
    id: 8,
    title: "Blog - Moroccan Culture Daily",
    description: "Culture, traditions, and lifestyle blog.",
    example:
      "Curated articles on Moroccan traditions, festivals, recipes, and cultural heritage. Includes interviews with local artisans and cultural experts.",
    image: "/moroccan-culture-blog.jpg",
    pages: ["Home", "Blog", "Recipes", "Interviews", "Newsletter"],
    tech: ["React", "Strapi", "TailwindCSS"],
    fullDescription:
      "Moroccan Culture Daily celebrates Moroccan traditions, festivals, recipes, and cultural heritage through curated articles and interviews with local experts.",
    features: [
      "Cultural articles",
      "Traditional recipes",
      "Expert interviews",
      "Newsletter subscription",
      "Festival coverage",
      "Community submissions",
    ],
    liveUrl: `/demo/blog-2`,
  },
  {
    id: 9,
    title: "Blog - Moroccan Wellness",
    description: "Wellness and traditional medicine blog.",
    example:
      "Articles on traditional Moroccan wellness practices, herbal remedies, and holistic health. Features expert profiles, wellness tips, and community discussions.",
    image: "/moroccan-wellness-blog.jpg",
    pages: ["Home", "Articles", "Remedies", "Experts", "Contact"],
    tech: ["Next.js", "Markdown", "TailwindCSS"],
    fullDescription:
      "Moroccan Wellness explores traditional Moroccan wellness practices, herbal remedies, and holistic health approaches with expert guidance and community support.",
    features: [
      "Wellness articles",
      "Herbal remedy guides",
      "Expert profiles",
      "Wellness tips",
      "Community discussions",
      "Email subscription",
    ],
    liveUrl: `/demo/blog-3`,
  },
  {
    id: 10,
    title: "Landing Page - Morocco Tours",
    description: "Tourism and travel packages landing page.",
    example:
      "Conversion-focused design showcasing Moroccan tour packages, destinations, pricing, and customer testimonials with stunning photography.",
    image: "/moroccan-tours-landing.jpg",
    pages: ["Hero", "Packages", "Destinations", "Testimonials", "CTA"],
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    fullDescription:
      "Morocco Tours is a conversion-optimized landing page showcasing curated tour packages, stunning destinations, and customer testimonials.",
    features: [
      "Tour package showcase",
      "Destination highlights",
      "Pricing comparison",
      "Customer testimonials",
      "FAQ section",
      "Booking inquiry form",
    ],
    liveUrl: `/demo/landing-1`,
  },
  {
    id: 11,
    title: "Landing Page - Moroccan Crafts Co",
    description: "Artisan cooperative marketplace landing page.",
    example:
      "Emphasizes fair trade and authentic craftsmanship. Includes artisan stories, product showcase, impact metrics, and direct purchase options.",
    image: "/moroccan-crafts-landing.jpg",
    pages: ["Hero", "Artisans", "Products", "Impact", "Shop"],
    tech: ["React", "TailwindCSS", "Stripe"],
    fullDescription:
      "Moroccan Crafts Co is a fair trade marketplace landing page highlighting authentic artisan craftsmanship and social impact.",
    features: [
      "Artisan stories",
      "Product showcase",
      "Impact metrics",
      "Fair trade certification",
      "Direct purchase options",
      "Community support info",
    ],
    liveUrl: `/demo/landing-2`,
  },
  {
    id: 12,
    title: "Landing Page - Moroccan Cooking School",
    description: "Online cooking class and culinary experience landing page.",
    example:
      "Engaging design with cooking class previews, chef profiles, recipe collections, and course enrollment with video tutorials.",
    image: "/moroccan-cooking-landing.jpg",
    pages: ["Hero", "Classes", "Chefs", "Recipes", "Enroll"],
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    fullDescription:
      "Moroccan Cooking School is an engaging landing page for online culinary classes featuring chef profiles, recipe collections, and course enrollment.",
    features: [
      "Cooking class previews",
      "Chef profiles",
      "Recipe collections",
      "Video tutorials",
      "Course enrollment",
      "Community forum",
    ],
    liveUrl: `/demo/landing-3`,
  },
  {
    id: 13,
    title: "Dashboard - Riad Management",
    description: "Hotel and riad management dashboard.",
    example:
      "Real-time booking management, guest profiles, revenue analytics, room availability, and staff scheduling with customizable reports.",
    image: "/moroccan-riad-dashboard.jpg",
    pages: ["Overview", "Bookings", "Guests", "Revenue", "Settings"],
    tech: ["React", "Chart.js", "TailwindCSS"],
    fullDescription:
      "Riad Management is a comprehensive hotel management dashboard with real-time booking management, guest profiles, and revenue analytics.",
    features: [
      "Real-time booking management",
      "Guest profile management",
      "Revenue analytics",
      "Room availability tracking",
      "Staff scheduling",
      "Customizable reports",
    ],
    liveUrl: `/demo/dashboard-1`,
  },
  {
    id: 14,
    title: "Dashboard - Artisan Hub",
    description: "Artisan cooperative management dashboard.",
    example:
      "Product inventory, order management, artisan profiles, sales analytics, and fair trade compliance tracking with real-time updates.",
    image: "/moroccan-artisan-dashboard.jpg",
    pages: ["Products", "Orders", "Artisans", "Analytics", "Reports"],
    tech: ["React", "Redux", "TailwindCSS"],
    fullDescription:
      "Artisan Hub is a cooperative management dashboard for tracking product inventory, orders, artisan profiles, and sales analytics.",
    features: [
      "Product inventory tracking",
      "Order management",
      "Artisan profile management",
      "Sales analytics",
      "Fair trade compliance",
      "Real-time notifications",
    ],
    liveUrl: `/demo/dashboard-2`,
  },
  {
    id: 15,
    title: "Dashboard - Tourism Analytics",
    description: "Tourism business analytics and reporting dashboard.",
    example:
      "Visitor tracking, booking analytics, revenue forecasting, destination insights, and marketing performance metrics with interactive visualizations.",
    image: "/moroccan-tourism-dashboard.jpg",
    pages: ["Overview", "Bookings", "Analytics", "Marketing", "Settings"],
    tech: ["Next.js", "PostgreSQL", "TailwindCSS"],
    fullDescription:
      "Tourism Analytics is a comprehensive dashboard for tracking visitor data, booking analytics, revenue forecasting, and marketing performance.",
    features: [
      "Visitor tracking",
      "Booking analytics",
      "Revenue forecasting",
      "Destination insights",
      "Marketing metrics",
      "Performance reports",
    ],
    liveUrl: `/demo/dashboard-3`,
  },
]

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projectCategories.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-foreground/60">The project you're looking for doesn't exist.</p>
          <Link href="/#projects" className="inline-block text-primary font-semibold hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-foreground/60">{project.fullDescription}</p>
        </div>
      </div>

      {/* Project Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative h-96 rounded-lg overflow-hidden border border-border">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Pages */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Pages</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.pages.map((page, index) => (
                  <div
                    key={index}
                    className="bg-secondary/50 border border-border rounded-lg p-3 text-center text-foreground/80 hover:bg-secondary transition-colors"
                  >
                    {page}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Project Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-foreground/60">Pages</p>
                  <p className="text-foreground font-semibold">{project.pages.length}</p>
                </div>
                <div>
                  <p className="text-foreground/60">Technologies</p>
                  <p className="text-foreground font-semibold">{project.tech.length}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={project.liveUrl}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors text-center block"
            >
              View Live Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
