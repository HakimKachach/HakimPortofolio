"use client"

import ProjectCard from "./project-card"

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
  },
  {
    id: 16,
    title: "E-commerce - Moroccan Leather Goods",
    description: "Handcrafted leather bags, belts, and accessories.",
    example:
      "Premium leather products handmade by Moroccan artisans. Features custom orders, leather care guides, and artisan stories. Includes product customization options.",
    image: "/moroccan-leather-goods.jpg",
    pages: ["Home", "Shop", "Custom Orders", "Cart", "Checkout"],
    tech: ["Next.js", "Stripe", "TailwindCSS"],
  },
  {
    id: 17,
    title: "E-commerce - Moroccan Textiles",
    description: "Traditional rugs, carpets, and woven fabrics.",
    example:
      "Authentic Moroccan rugs and textiles with traditional patterns. Features size guides, care instructions, and virtual room preview. Includes bulk ordering for businesses.",
    image: "/moroccan-textiles.jpg",
    pages: ["Home", "Collections", "Size Guide", "Cart", "Checkout"],
    tech: ["React", "Stripe", "TailwindCSS"],
  },
  {
    id: 18,
    title: "E-commerce - Moroccan Ceramics",
    description: "Handmade pottery and ceramic home decor.",
    example:
      "Beautiful handcrafted ceramics including tagines, plates, and decorative pieces. Features artisan profiles, production videos, and gift wrapping options.",
    image: "/moroccan-ceramics.jpg",
    pages: ["Home", "Shop", "Artisans", "Cart", "Checkout"],
    tech: ["Next.js", "Stripe", "TailwindCSS"],
  },
  {
    id: 19,
    title: "E-commerce - Moroccan Jewelry",
    description: "Traditional and modern Moroccan jewelry.",
    example:
      "Berber jewelry, silver pieces, and traditional designs. Features jewelry care guides, customization options, and authentication certificates for premium pieces.",
    image: "/moroccan-jewelry.jpg",
    pages: ["Home", "Collections", "Customization", "Cart", "Checkout"],
    tech: ["React", "Stripe", "TailwindCSS"],
  },
  {
    id: 20,
    title: "E-commerce - Moroccan Cosmetics",
    description: "Natural beauty products and traditional remedies.",
    example:
      "Organic cosmetics, henna, kohl, and traditional beauty products. Features ingredient sourcing information, beauty tutorials, and subscription boxes.",
    image: "/moroccan-cosmetics.jpg",
    pages: ["Home", "Shop", "Tutorials", "Subscription", "Checkout"],
    tech: ["Next.js", "Stripe", "TailwindCSS"],
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
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">My Projects</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore 20 projects across 5 categories showcasing my expertise in web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCategories.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
