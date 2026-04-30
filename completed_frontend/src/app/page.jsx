export default function Home() {
  return (
    <main>
        <section id="home" className="hero">
            <div className="hero-text">
                <h1>Find The Beauty in Everything</h1>
                <p>Emina is a beauty brand for teenagers with a playful and fun concept. We believe that everyone has a beauty that is unique and can be expressed in their own way.</p>
                <a href="#products" className="btn">Shop Now</a>
            </div>
        </section>

        <section id="about" className="about">
            <h2>About Emina</h2>
            <div className="about-content">
                <img src="/images/Emina-banner-2.png" alt="About Emina" />
                <p>Born to be loved, Emina is your beauty bestie. We believe that beauty is not about being perfect, but about having fun and expressing yourself. Our products are safe for teenagers, with gentle formulas and fun packaging. Let's explore the world of beauty together!</p>
            </div>
        </section>

        <section id="products" className="products">
            <h2>Our Best Sellers</h2>
            <div className="product-grid">
                <div className="product-card">
                    <img src="/images/glossy-stain.png" alt="Product 1" />
                    <h3>Glossy Stain</h3>
                    <p>A lip tint with a glossy finish that is long-lasting and moisturizing.</p>
                </div>
                <div className="product-card">
                    <img src="/images/bright-stuff.png" alt="Product 2" />
                    <h3>Bright Stuff Face Wash</h3>
                    <p>A face wash that cleanses and brightens the skin with a gentle formula.</p>
                </div>
                <div className="product-card">
                    <img src="/images/sun-battle.png" alt="Product 3" />
                    <h3>Sun Battle SPF 50</h3>
                    <p>A sunscreen with SPF 50 that protects the skin from UV rays.</p>
                </div>
                <div className="product-card">
                    <img src="/images/creamy-tint.png" alt="Product 4" />
                    <h3>Creamy Tint</h3>
                    <p>A lip tint with a creamy texture that is comfortable to wear.</p>
                </div>
                <div className="product-card">
                    <img src="/images/sleeping-mask.png" alt="Product 5" />
                    <h3>Aqua Infused Sleeping Mask</h3>
                    <p>A sleeping mask that provides extra hydration to the skin overnight.</p>
                </div>
                <div className="product-card">
                    <img src="/images/cheek-lit.png" alt="Product 6" />
                    <h3>Cheek Lit Cream Blush</h3>
                    <p>A cream blush that gives a natural and long-lasting flush to the cheeks.</p>
                </div>
            </div>
        </section>

        <section className="testimonials">
            <h2>What Our #EminaGirls Say</h2>
            <div className="testimonial-grid">
                <div className="testimonial-card">
                    <p>"I love the Glossy Stain! It's so lightweight and the color is beautiful. My lips feel moisturized all day."</p>
                    <h4>- Jessica</h4>
                </div>
                <div className="testimonial-card">
                    <p>"Bright Stuff Face Wash is a game changer! My skin feels so clean and fresh after using it. It really helps to brighten my skin."</p>
                    <h4>- Amanda</h4>
                </div>
                <div className="testimonial-card">
                    <p>"Sun Battle is my holy grail sunscreen. It's not sticky at all and doesn't leave a white cast. Perfect for everyday use."</p>
                    <h4>- Sarah</h4>
                </div>
            </div>
        </section>
    </main>
  );
}