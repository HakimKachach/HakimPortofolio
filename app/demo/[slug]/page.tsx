"use client"

import Link from "next/link"
import { useState } from "react"

const demoProjects = {
  "site-vitrine-1": {
    title: "Riad Marrakech - Luxury Accommodation",
    description: "Premium traditional Moroccan riad with modern amenities",
    pages: ["Home", "Rooms", "Gallery", "About", "Contact"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/moroccan-riad-luxury.jpg" alt="Riad Marrakech" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Riad Marrakech</h1>
                <p className="text-xl mb-6">Experience authentic Moroccan luxury</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={`/moroccan-riad-luxury.jpg?height=250&width=400&query=riad-room-${i}`}
                    alt={`Room ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Deluxe Suite {i}</h3>
                    <p className="text-foreground/60 mb-4">Traditional Moroccan design with modern comfort</p>
                    <p className="text-2xl font-bold text-primary mb-4">$180/night</p>
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
                      Reserve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Why Choose Riad Marrakech</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Authentic Experience", "Prime Location", "Exceptional Service"].map((item) => (
                <div key={item} className="text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-bold text-lg mb-2">{item}</h3>
                  <p className="text-foreground/60">Premium Moroccan hospitality at its finest</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Rooms: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/moroccan-riad-luxury.jpg?height=250&width=500&query=room-${i}`}
                  alt={`Room ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Room {i}</h3>
                  <p className="text-foreground/60 text-sm mb-4">Luxury Moroccan accommodation</p>
                  <p className="text-primary font-bold">$150-250/night</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Gallery: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/moroccan-riad-luxury.jpg?height=250&width=400&query=gallery-${i}`}
                alt={`Gallery ${i}`}
                className="rounded-lg hover:shadow-lg transition-shadow h-48 object-cover"
              />
            ))}
          </div>
        </div>
      ),
      About: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="/moroccan-riad-luxury.jpg" alt="Riad Marrakech" className="rounded-lg" />
            <div>
              <h2 className="text-3xl font-bold mb-4">About Riad Marrakech</h2>
              <p className="text-foreground/60 mb-4 leading-relaxed">
                Riad Marrakech is a beautifully restored traditional Moroccan riad in the heart of the medina. With over
                15 years of hospitality excellence, we offer authentic Moroccan experiences combined with modern comfort
                and luxury amenities.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-foreground/60 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <p className="text-foreground/60 text-sm">Luxury Rooms</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9★</div>
                  <p className="text-foreground/60 text-sm">Guest Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      Contact: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-foreground/60">Derb Sidi Ahmed Soussi, Medina, Marrakech 40000</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <p className="text-foreground/60">+212 5 24 38 26 26</p>
              <p className="text-foreground/60">info@riadmarrakech.com</p>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Your Email" className="w-full border border-border rounded px-4 py-2" />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-border rounded px-4 py-2"
            ></textarea>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
              Send Message
            </button>
          </form>
        </div>
      ),
    },
  },
  "site-vitrine-2": {
    title: "TechStudio - Creative Agency",
    description: "Award-winning creative agency specializing in digital design",
    pages: ["Home", "Portfolio", "Services", "Team", "Contact"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="/creative-agency-modern-office.jpg"
              alt="Creative studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Creative Solutions</h1>
                <p className="text-xl mb-6">Design that inspires and transforms brands</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  View Our Work
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Branding", "Web Design", "Motion Graphics"].map((service) => (
                <div
                  key={service}
                  className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors"
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="font-bold text-lg">{service}</h3>
                  <p className="text-foreground/60 text-sm mt-2">Professional {service.toLowerCase()} services</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Portfolio: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/design-project-.jpg?height=250&width=500&query=design-project-${i}`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Project {i}</h3>
                  <p className="text-foreground/60 text-sm">Award-winning design project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Services: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Services</h2>
          <div className="space-y-4">
            {["Brand Strategy", "UI/UX Design", "Web Development", "Motion Design"].map((service) => (
              <div
                key={service}
                className="border border-border rounded-lg p-6 hover:bg-secondary/30 transition-colors"
              >
                <h3 className="font-bold text-lg mb-2">{service}</h3>
                <p className="text-foreground/60">
                  Professional {service.toLowerCase()} services tailored to your brand needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
      Team: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Designer", "Developer", "Manager"].map((role) => (
              <div key={role} className="border border-border rounded-lg p-6 text-center">
                <img
                  src={`/team-member-.jpg?height=150&width=150&query=team-member-${role}`}
                  alt={role}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg">{role}</h3>
                <p className="text-foreground/60 text-sm">Expert professional</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Contact: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Your Email" className="w-full border border-border rounded px-4 py-2" />
            <textarea
              placeholder="Project Details"
              rows={5}
              className="w-full border border-border rounded px-4 py-2"
            ></textarea>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
              Send Inquiry
            </button>
          </form>
        </div>
      ),
    },
  },
  "site-vitrine-3": {
    title: "RestaurantHub - Fine Dining",
    description: "Upscale restaurant with exquisite culinary experience",
    pages: ["Home", "Menu", "Reservations", "Gallery", "Contact"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/fine-dining-restaurant-interior.jpg" alt="Restaurant" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Fine Dining Experience</h1>
                <p className="text-xl mb-6">Culinary excellence in an elegant setting</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Reserve Table
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Signature Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/gourmet-dish-.jpg?height=250&width=400&query=gourmet-dish-${i}`}
                    alt={`Dish ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Signature Dish {i}</h3>
                    <p className="text-foreground/60 text-sm">Chef's special creation with premium ingredients</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Menu: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Menu</h2>
          {["Appetizers", "Main Course", "Desserts"].map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold text-lg">
                        Exquisite {category.slice(0, -1)} {i}
                      </h4>
                      <span className="text-primary font-bold">$28</span>
                    </div>
                    <p className="text-foreground/60 text-sm">
                      Carefully prepared with premium ingredients and artistic presentation
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
      Reservations: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Make a Reservation</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Your Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="date" className="w-full border border-border rounded px-4 py-2" />
            <select className="w-full border border-border rounded px-4 py-2">
              <option>Select Time</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
            </select>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
              Reserve Table
            </button>
          </form>
        </div>
      ),
      Gallery: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/restaurant-gallery-.jpg?height=250&width=400&query=restaurant-gallery-${i}`}
                alt={`Gallery ${i}`}
                className="rounded-lg hover:shadow-lg transition-shadow h-48 object-cover"
              />
            ))}
          </div>
        </div>
      ),
      Contact: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> 123 Gourmet Street, Culinary City
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong> info@restauranthub.com
            </p>
            <p>
              <strong>Hours:</strong> Tue-Sun 6PM-11PM, Closed Mondays
            </p>
          </div>
        </div>
      ),
    },
  },
  "ecommerce-1": {
    title: "UrbanWear - Fashion Store",
    description: "Trendy fashion e-commerce platform",
    pages: ["Home", "Shop", "Product Details", "Cart", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/fashion-store-hero.jpg" alt="Fashion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Urban Fashion</h1>
                <p className="text-xl mb-6">Trendy styles for modern living</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/fashion-item-.jpg?height=250&width=300&query=fashion-item-${i}`}
                    alt={`Product ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Product {i}</h3>
                    <p className="text-primary font-bold">$49.99</p>
                    <button className="w-full mt-2 bg-primary text-primary-foreground py-2 rounded text-sm hover:bg-primary/90 font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Shop: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shop All</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/fashion-product-.jpg?height=200&width=300&query=fashion-product-${i}`}
                  alt={`Item ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1">Item {i}</h3>
                  <p className="text-primary font-bold text-sm">$39.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      "Product Details": (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="/premium-tshirt-product.jpg" alt="Product" className="rounded-lg h-96 object-cover" />
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Premium T-Shirt</h2>
              <p className="text-2xl text-primary font-bold">$49.99</p>
            </div>
            <div>
              <p className="text-foreground/60">
                High-quality cotton blend with modern design. Available in multiple colors and sizes. Perfect for
                everyday wear.
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Size</label>
              <select className="w-full border border-border rounded px-4 py-2">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Product {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$49.99</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4">
            <div className="flex justify-between mb-4">
              <span>Subtotal:</span>
              <span className="font-bold">$99.98</span>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Purchase
            </button>
          </form>
        </div>
      ),
    },
  },
  "ecommerce-2": {
    title: "TechGear - Electronics Store",
    description: "Premium electronics and gadgets",
    pages: ["Home", "Products", "Categories", "Cart", "Account"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/tech-gadgets-store.jpg" alt="Tech" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Latest Tech Gadgets</h1>
                <p className="text-xl mb-6">Innovation at your fingertips</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/tech-gadget-.jpg?height=250&width=300&query=tech-gadget-${i}`}
                    alt={`Gadget ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Gadget {i}</h3>
                    <p className="text-primary font-bold">$299.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Products: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/tech-item-.jpg?height=200&width=300&query=tech-item-${i}`}
                  alt={`Item ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1">Tech Item {i}</h3>
                  <p className="text-primary font-bold text-sm">$199.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Categories: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Smartphones", "Laptops", "Accessories", "Tablets", "Wearables", "Audio"].map((cat) => (
              <div
                key={cat}
                className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Your Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Tech Product {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$299.99</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
            Checkout
          </button>
        </div>
      ),
      Account: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">My Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-4">Profile</h3>
              <p className="text-foreground/60 text-sm">Manage your account information</p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-4">Orders</h3>
              <p className="text-foreground/60 text-sm">View your order history</p>
            </div>
          </div>
        </div>
      ),
    },
  },
  "ecommerce-3": {
    title: "HomeDecor - Interior Design",
    description: "Premium home decor and furniture",
    pages: ["Home", "Shop", "Collections", "Cart", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=1200" alt="Home Decor" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Home Decor</h1>
                <p className="text-xl mb-6">Transform your space</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/decor-item-.jpg?height=250&width=300&query=decor-item-${i}`}
                    alt={`Item ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Decor Item {i}</h3>
                    <p className="text-primary font-bold">$79.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Shop: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shop All Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/home-item-.jpg?height=200&width=300&query=home-item-${i}`}
                  alt={`Item ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1">Item {i}</h3>
                  <p className="text-primary font-bold text-sm">$59.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Collections: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Modern", "Vintage", "Minimalist", "Bohemian", "Industrial", "Scandinavian"].map((col) => (
              <div
                key={col}
                className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-bold">{col}</h3>
              </div>
            ))}
          </div>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Decor Item {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$79.99</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
            Proceed to Checkout
          </button>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Order
            </button>
          </form>
        </div>
      ),
    },
  },
  "blog-1": {
    title: "DevInsights - Tech Blog",
    description: "Web development insights and tutorials",
    pages: ["Home", "Articles", "Categories", "Author Profile", "Contact"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=1200" alt="Tech Blog" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">DevInsights</h1>
                <p className="text-xl mb-6">Web development insights and tutorials</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/tech-article-.jpg?height=200&width=800&query=tech-article-${i}`}
                  alt={`Article ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Article {i}: Web Development Tips</h3>
                  <p className="text-foreground/60 text-sm mb-4">Published on {new Date().toLocaleDateString()}</p>
                  <p className="text-foreground/60">
                    Discover the latest trends and best practices in web development...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Articles: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Articles</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <h3 className="font-bold mb-2">Article {i}</h3>
                <p className="text-foreground/60 text-sm">Technical insights and tutorials for developers</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Categories: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["React", "Next.js", "TypeScript", "CSS", "Performance", "Security"].map((cat) => (
              <div
                key={cat}
                className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <h3 className="font-bold">{cat}</h3>
                <p className="text-foreground/60 text-sm">12 articles</p>
              </div>
            ))}
          </div>
        </div>
      ),
      "Author Profile": (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Author"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-3xl font-bold mb-2">John Developer</h2>
            <p className="text-foreground/60">Full-stack developer and tech writer with 10+ years of experience</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-4">Recent Articles</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <p key={i} className="text-foreground/60">
                  Article {i}
                </p>
              ))}
            </div>
          </div>
        </div>
      ),
      Contact: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Your Email" className="w-full border border-border rounded px-4 py-2" />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-border rounded px-4 py-2"
            ></textarea>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
              Send Message
            </button>
          </form>
        </div>
      ),
    },
  },
  "blog-2": {
    title: "DesignDaily - Design Blog",
    description: "Design inspiration and trends",
    pages: ["Home", "Blog", "Galleries", "Interviews", "Newsletter"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=1200"
              alt="Design Blog"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">DesignDaily</h1>
                <p className="text-xl mb-6">Design inspiration and trends</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/design-trend-.jpg?height=250&width=800&query=design-trend-${i}`}
                  alt={`Trend ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Design Trend {i}</h3>
                  <p className="text-foreground/60">Explore the latest design trends and inspiration</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Blog: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Design Blog</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <h3 className="font-bold mb-2">Design Article {i}</h3>
                <p className="text-foreground/60 text-sm">Insights on modern design practices and trends</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Galleries: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Design Galleries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/design-gallery-.jpg?height=250&width=400&query=design-gallery-${i}`}
                alt={`Gallery ${i}`}
                className="rounded-lg hover:shadow-lg transition-shadow h-48 object-cover"
              />
            ))}
          </div>
        </div>
      ),
      Interviews: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Designer Interviews</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:bg-secondary/30 transition-colors">
                <h3 className="font-bold mb-2">Interview with Designer {i}</h3>
                <p className="text-foreground/60">Insights from renowned design professionals</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Newsletter: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Subscribe to Newsletter</h2>
          <p className="text-foreground/60">Get weekly design inspiration and trends delivered to your inbox</p>
          <form className="space-y-4">
            <input type="email" placeholder="Your Email" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      ),
    },
  },
  "blog-3": {
    title: "LifeStyle - Wellness Blog",
    description: "Health, wellness, and personal growth",
    pages: ["Home", "Articles", "Categories", "Authors", "Contact"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=1200" alt="Wellness" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">LifeStyle</h1>
                <p className="text-xl mb-6">Health, wellness, and personal growth</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:bg-secondary/30 transition-colors">
                <h3 className="text-2xl font-bold mb-2">Wellness Article {i}</h3>
                <p className="text-foreground/60">Tips for a healthier and happier lifestyle</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Articles: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Articles</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <h3 className="font-bold mb-2">Article {i}</h3>
                <p className="text-foreground/60 text-sm">Wellness and lifestyle insights</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Categories: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Health", "Travel", "Fitness", "Nutrition", "Mindfulness", "Lifestyle"].map((cat) => (
              <div
                key={cat}
                className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <h3 className="font-bold">{cat}</h3>
                <p className="text-foreground/60 text-sm">15 articles</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Authors: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Our Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 text-center">
                <img
                  src={`/wellness-author-.jpg?height=120&width=120&query=wellness-author-${i}`}
                  alt={`Author ${i}`}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold">Author {i}</h3>
                <p className="text-foreground/60 text-sm">Wellness expert</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Contact: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Your Email" className="w-full border border-border rounded px-4 py-2" />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-border rounded px-4 py-2"
            ></textarea>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
              Send Message
            </button>
          </form>
        </div>
      ),
    },
  },
  "landing-1": {
    title: "TaskFlow - SaaS Landing",
    description: "Productivity management SaaS platform",
    pages: ["Hero", "Features", "Pricing", "Testimonials", "CTA"],
    content: {
      Hero: (
        <div className="space-y-12">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=1200" alt="TaskFlow" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Boost Your Productivity</h1>
                <p className="text-xl text-white/90 mb-6">
                  TaskFlow helps teams collaborate and manage projects efficiently
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      Features: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Task Management",
              "Team Collaboration",
              "Real-time Updates",
              "Analytics",
              "Integrations",
              "Mobile App",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      ),
      Pricing: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Starter", "Professional", "Enterprise"].map((plan) => (
              <div
                key={plan}
                className="border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  ${plan === "Starter" ? "29" : plan === "Professional" ? "79" : "199"}/mo
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
      Testimonials: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <p className="text-foreground/60 mb-4">
                  "TaskFlow has transformed how our team works. Highly recommended!"
                </p>
                <p className="font-bold">User {i}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      CTA: (
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Join thousands of teams using TaskFlow to manage their projects
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-bold">
            Start Your Free Trial
          </button>
        </div>
      ),
    },
  },
  "landing-2": {
    title: "CloudSync - Cloud Storage",
    description: "Secure cloud storage solution",
    pages: ["Hero", "Features", "Security", "Pricing", "FAQ"],
    content: {
      Hero: (
        <div className="space-y-12">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=1200" alt="CloudSync" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Secure Cloud Storage</h1>
                <p className="text-xl text-white/90 mb-6">Store, sync, and share your files securely</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      Features: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Unlimited Storage",
              "File Versioning",
              "Sharing Controls",
              "Offline Access",
              "Advanced Search",
              "Team Collaboration",
            ].map((feature) => (
              <div key={feature} className="border border-border rounded-lg p-4 flex items-start gap-4">
                <div className="text-2xl">☁️</div>
                <div>
                  <h3 className="font-bold">{feature}</h3>
                  <p className="text-foreground/60 text-sm">Premium feature for all users</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Security: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Security & Privacy</h2>
          <div className="space-y-4">
            {[
              "End-to-End Encryption",
              "Two-Factor Authentication",
              "GDPR Compliant",
              "Regular Backups",
              "Security Audits",
            ].map((item) => (
              <div key={item} className="border border-border rounded-lg p-4 flex items-center gap-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      Pricing: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Basic", "Pro", "Business"].map((plan) => (
              <div
                key={plan}
                className="border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  ${plan === "Basic" ? "9.99" : plan === "Pro" ? "19.99" : "99.99"}/mo
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
      FAQ: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              "How much storage do I get?",
              "Can I share files with others?",
              "Is my data secure?",
              "What payment methods do you accept?",
            ].map((q) => (
              <div key={q} className="border border-border rounded-lg p-4">
                <h3 className="font-bold mb-2">{q}</h3>
                <p className="text-foreground/60 text-sm">
                  Detailed answer to your question about CloudSync features and services.
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  },
  "landing-3": {
    title: "FitPro - Fitness App",
    description: "Personal fitness coaching app",
    pages: ["Hero", "Features", "Trainers", "Success Stories", "Download"],
    content: {
      Hero: (
        <div className="space-y-12">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=1200" alt="FitPro" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Your Personal Fitness Coach</h1>
                <p className="text-xl text-white/90 mb-6">Achieve your fitness goals with FitPro</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
      Features: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">App Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Personalized Workouts",
              "Progress Tracking",
              "Nutrition Plans",
              "Community Support",
              "Live Classes",
              "Expert Guidance",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors"
              >
                <div className="text-4xl mb-4">💪</div>
                <h3 className="font-bold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      ),
      Trainers: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Meet Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 text-center">
                <img
                  src={`/fitness-trainer-.jpg?height=150&width=150&query=fitness-trainer-${i}`}
                  alt={`Trainer ${i}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold">Trainer {i}</h3>
                <p className="text-foreground/60 text-sm">Certified fitness expert</p>
              </div>
            ))}
          </div>
        </div>
      ),
      "Success Stories": (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <p className="text-foreground/60 mb-4">"FitPro helped me lose 30 pounds and transform my life!"</p>
                <p className="font-bold">User {i}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Download: (
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Download FitPro Today</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Available on iOS and Android</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 font-semibold">
              App Store
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 font-semibold">
              Google Play
            </button>
          </div>
        </div>
      ),
    },
  },
  "dashboard-1": {
    title: "Analytics Pro - Dashboard",
    description: "Advanced analytics dashboard",
    pages: ["Overview", "Reports", "Analytics", "Settings", "Users"],
    content: {
      Overview: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Total Users", "Revenue", "Conversions", "Bounce Rate"].map((metric) => (
              <div key={metric} className="border border-border rounded-lg p-6 bg-secondary/30">
                <p className="text-foreground/60 text-sm mb-2">{metric}</p>
                <p className="text-3xl font-bold text-primary">12,345</p>
              </div>
            ))}
          </div>
          <div className="border border-border rounded-lg p-6 h-64 bg-secondary/30 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=250&width=800"
              alt="Chart"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      ),
      Reports: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Reports</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 flex justify-between items-center hover:bg-secondary/30 transition-colors"
              >
                <div>
                  <h3 className="font-bold">Report {i}</h3>
                  <p className="text-foreground/60 text-sm">Generated on {new Date().toLocaleDateString()}</p>
                </div>
                <button className="text-primary hover:underline font-semibold">Download</button>
              </div>
            ))}
          </div>
        </div>
      ),
      Analytics: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/placeholder.svg?height=250&width=500" alt="Chart 1" className="rounded-lg h-64 object-cover" />
            <img src="/placeholder.svg?height=250&width=500" alt="Chart 2" className="rounded-lg h-64 object-cover" />
          </div>
        </div>
      ),
      Settings: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Settings</h2>
          <div className="space-y-4">
            {["Account Settings", "Notification Preferences", "Data Export", "Security"].map((setting) => (
              <div key={setting} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <h3 className="font-bold">{setting}</h3>
                <button className="text-primary hover:underline font-semibold">Configure</button>
              </div>
            ))}
          </div>
        </div>
      ),
      Users: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">User Management</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">User {i}</h3>
                  <p className="text-foreground/60 text-sm">user{i}@example.com</p>
                </div>
                <button className="text-primary hover:underline font-semibold">Edit</button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  },
  "dashboard-2": {
    title: "ProjectHub - Management",
    description: "Project management dashboard",
    pages: ["Projects", "Tasks", "Team", "Timeline", "Reports"],
    content: {
      Projects: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Project {i}</h3>
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${50 + i * 10}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Tasks: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Tasks</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors"
              >
                <input type="checkbox" className="w-5 h-5" />
                <div className="flex-1">
                  <h3 className="font-bold">Task {i}</h3>
                  <p className="text-foreground/60 text-sm">Assigned to Team Member</p>
                </div>
                <span className="text-sm text-foreground/60">Due: {new Date().toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      Team: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 text-center">
                <img
                  src={`/team-member-.jpg?height=100&width=100&query=team-member-${i}`}
                  alt={`Member ${i}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold">Member {i}</h3>
                <p className="text-foreground/60 text-sm">Developer</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Timeline: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Project Timeline</h2>
          <img
            src="/placeholder.svg?height=300&width=1000"
            alt="Timeline"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
      ),
      Reports: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/placeholder.svg?height=250&width=500" alt="Progress" className="rounded-lg h-48 object-cover" />
            <img
              src="/placeholder.svg?height=250&width=500"
              alt="Performance"
              className="rounded-lg h-48 object-cover"
            />
          </div>
        </div>
      ),
    },
  },
  "dashboard-3": {
    title: "InventoryMax - Management",
    description: "Inventory management system",
    pages: ["Inventory", "Orders", "Suppliers", "Reports", "Settings"],
    content: {
      Inventory: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Inventory</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">Product {i}</h3>
                    <p className="text-foreground/60 text-sm">SKU: SKU-{1000 + i}</p>
                  </div>
                  <span className="font-bold text-primary">{100 + i * 10} units</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${60 + i * 5}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Orders: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 flex justify-between items-center hover:bg-secondary/30 transition-colors"
              >
                <div>
                  <h3 className="font-bold">Order #{1000 + i}</h3>
                  <p className="text-foreground/60 text-sm">Placed on {new Date().toLocaleDateString()}</p>
                </div>
                <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded">Pending</span>
              </div>
            ))}
          </div>
        </div>
      ),
      Suppliers: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Suppliers</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <h3 className="font-bold mb-2">Supplier {i}</h3>
                <p className="text-foreground/60 text-sm">Contact: supplier{i}@company.com</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Reports: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/placeholder.svg?height=250&width=500" alt="Stock" className="rounded-lg h-48 object-cover" />
            <img src="/placeholder.svg?height=250&width=500" alt="Orders" className="rounded-lg h-48 object-cover" />
          </div>
        </div>
      ),
      Settings: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Settings</h2>
          <div className="space-y-4">
            {["Warehouse Settings", "Alert Thresholds", "Reporting Preferences", "Integration Settings"].map(
              (setting) => (
                <div key={setting} className="border border-border rounded-lg p-4 flex justify-between items-center">
                  <h3 className="font-bold">{setting}</h3>
                  <button className="text-primary hover:underline font-semibold">Configure</button>
                </div>
              ),
            )}
          </div>
        </div>
      ),
    },
  },
  "ecommerce-4": {
    title: "Moroccan Leather Goods - Premium Accessories",
    description: "Handcrafted leather products by Moroccan artisans",
    pages: ["Home", "Shop", "Custom Orders", "Cart", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/moroccan-leather-goods.jpg" alt="Leather Goods" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Moroccan Leather</h1>
                <p className="text-xl mb-6">Handcrafted leather goods by artisans</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/moroccan-leather-goods.jpg?height=250&width=300&query=leather-item-${i}`}
                    alt={`Item ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Leather Item {i}</h3>
                    <p className="text-primary font-bold">$89.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Shop: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/moroccan-leather-goods.jpg?height=200&width=300&query=leather-product-${i}`}
                  alt={`Product ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1">Leather Product {i}</h3>
                  <p className="text-primary font-bold text-sm">$79.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      "Custom Orders": (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Custom Leather Orders</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Product Type</label>
              <select className="w-full border border-border rounded px-4 py-2">
                <option>Bag</option>
                <option>Belt</option>
                <option>Wallet</option>
                <option>Shoes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Leather Color</label>
              <select className="w-full border border-border rounded px-4 py-2">
                <option>Brown</option>
                <option>Black</option>
                <option>Tan</option>
                <option>Red</option>
              </select>
            </div>
            <textarea
              placeholder="Special requests or design details"
              rows={4}
              className="w-full border border-border rounded px-4 py-2"
            ></textarea>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Request Custom Order
            </button>
          </form>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Leather Item {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$89.99</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
            Proceed to Checkout
          </button>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Purchase
            </button>
          </form>
        </div>
      ),
    },
  },
  "ecommerce-5": {
    title: "Moroccan Textiles - Rugs & Carpets",
    description: "Traditional Moroccan rugs and woven fabrics",
    pages: ["Home", "Collections", "Size Guide", "Cart", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/moroccan-textiles.jpg" alt="Textiles" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Moroccan Textiles</h1>
                <p className="text-xl mb-6">Traditional rugs and woven fabrics</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Rugs</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/moroccan-textiles.jpg?height=250&width=300&query=rug-${i}`}
                    alt={`Rug ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Rug {i}</h3>
                    <p className="text-primary font-bold">$299.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Collections: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Berber Rugs", "Kilim Patterns", "Modern Designs", "Vintage Collection", "Custom Weaves", "Runners"].map(
              (col) => (
                <div
                  key={col}
                  className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer"
                >
                  <div className="text-4xl mb-4">🧵</div>
                  <h3 className="font-bold">{col}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      ),
      "Size Guide": (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Size Guide</h2>
          <div className="space-y-4">
            {["Small (3x5)", "Medium (5x8)", "Large (8x10)", "Extra Large (10x14)"].map((size) => (
              <div key={size} className="border border-border rounded-lg p-4">
                <h3 className="font-bold mb-2">{size}</h3>
                <p className="text-foreground/60 text-sm">Perfect for living rooms, bedrooms, and entryways</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Moroccan Rug {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$299.99</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
            Proceed to Checkout
          </button>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Purchase
            </button>
          </form>
        </div>
      ),
    },
  },
  "ecommerce-6": {
    title: "Moroccan Ceramics - Handmade Pottery",
    description: "Beautiful handcrafted ceramics and pottery",
    pages: ["Home", "Shop", "Artisans", "Cart", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/moroccan-ceramics.jpg" alt="Ceramics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Moroccan Ceramics</h1>
                <p className="text-xl mb-6">Handmade pottery and decorative pieces</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Pieces</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/moroccan-ceramics.jpg?height=250&width=300&query=ceramic-${i}`}
                    alt={`Ceramic ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Ceramic Piece {i}</h3>
                    <p className="text-primary font-bold">$49.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Shop: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Ceramics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/moroccan-ceramics.jpg?height=200&width=300&query=ceramic-product-${i}`}
                  alt={`Product ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1">Ceramic {i}</h3>
                  <p className="text-primary font-bold text-sm">$39.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Artisans: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Meet Our Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 text-center">
                <img
                  src={`/moroccan-ceramics.jpg?height=150&width=150&query=artisan-${i}`}
                  alt={`Artisan ${i}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold">Artisan {i}</h3>
                <p className="text-foreground/60 text-sm">Master ceramicist from Fez</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Ceramic Piece {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$49.99</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
            Proceed to Checkout
          </button>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Purchase
            </button>
          </form>
        </div>
      ),
    },
  },
  "ecommerce-7": {
    title: "Moroccan Jewelry - Traditional & Modern",
    description: "Berber jewelry and traditional designs",
    pages: ["Home", "Collections", "Customization", "Cart", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/moroccan-jewelry.jpg" alt="Jewelry" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Moroccan Jewelry</h1>
                <p className="text-xl mb-6">Traditional and modern designs</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Pieces</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/moroccan-jewelry.jpg?height=250&width=300&query=jewelry-${i}`}
                    alt={`Jewelry ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Jewelry {i}</h3>
                    <p className="text-primary font-bold">$129.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Collections: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Berber Silver", "Modern Designs", "Vintage Pieces", "Engagement Rings", "Bracelets", "Necklaces"].map(
              (col) => (
                <div
                  key={col}
                  className="border border-border rounded-lg p-6 text-center hover:bg-secondary/30 transition-colors cursor-pointer"
                >
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="font-bold">{col}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      ),
      Customization: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Custom Jewelry</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Jewelry Type</label>
              <select className="w-full border border-border rounded px-4 py-2">
                <option>Ring</option>
                <option>Necklace</option>
                <option>Bracelet</option>
                <option>Earrings</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Metal</label>
              <select className="w-full border border-border rounded px-4 py-2">
                <option>Silver</option>
                <option>Gold</option>
                <option>Bronze</option>
              </select>
            </div>
            <textarea
              placeholder="Design details and preferences"
              rows={4}
              className="w-full border border-border rounded px-4 py-2"
            ></textarea>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Request Custom Design
            </button>
          </form>
        </div>
      ),
      Cart: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Jewelry Piece {i}</h3>
                  <p className="text-foreground/60 text-sm">Qty: 1</p>
                </div>
                <p className="font-bold">$129.99</p>
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
            Proceed to Checkout
          </button>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Purchase
            </button>
          </form>
        </div>
      ),
    },
  },
  "ecommerce-8": {
    title: "Moroccan Cosmetics - Natural Beauty",
    description: "Organic cosmetics and traditional beauty products",
    pages: ["Home", "Shop", "Tutorials", "Subscription", "Checkout"],
    content: {
      Home: (
        <div className="space-y-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img src="/moroccan-cosmetics.jpg" alt="Cosmetics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Moroccan Cosmetics</h1>
                <p className="text-xl mb-6">Natural beauty products</p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/moroccan-cosmetics.jpg?height=250&width=300&query=cosmetic-${i}`}
                    alt={`Product ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Beauty Product {i}</h3>
                    <p className="text-primary font-bold">$24.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      Shop: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/moroccan-cosmetics.jpg?height=200&width=300&query=cosmetic-product-${i}`}
                  alt={`Product ${i}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1">Product {i}</h3>
                  <p className="text-primary font-bold text-sm">$19.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      Tutorials: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Beauty Tutorials</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <h3 className="font-bold mb-2">Tutorial {i}: Moroccan Beauty Tips</h3>
                <p className="text-foreground/60 text-sm">Learn traditional beauty techniques and product usage</p>
              </div>
            ))}
          </div>
        </div>
      ),
      Subscription: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Beauty Box Subscription</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Monthly", "Quarterly", "Annual"].map((plan) => (
              <div
                key={plan}
                className="border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  ${plan === "Monthly" ? "29.99" : plan === "Quarterly" ? "79.99" : "249.99"}
                </p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 font-semibold">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
      Checkout: (
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Checkout</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-border rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Address" className="w-full border border-border rounded px-4 py-2" />
            <input type="text" placeholder="Card Number" className="w-full border border-border rounded px-4 py-2" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 font-bold">
              Complete Purchase
            </button>
          </form>
        </div>
      ),
    },
  },
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  const [currentPage, setCurrentPage] = useState<string>("")

  const demo = demoProjects[params.slug as keyof typeof demoProjects]

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Demo Not Found</h1>
          <Link href="/#projects" className="inline-block text-primary font-semibold hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const activePage = currentPage || demo.pages[0]
  const pageContent = demo.content[activePage as keyof typeof demo.content]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#projects" className="text-primary hover:underline font-semibold">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl font-bold text-foreground">{demo.title}</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-secondary/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            {demo.pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors font-semibold ${
                  activePage === page
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{pageContent}</div>
    </main>
  )
}
