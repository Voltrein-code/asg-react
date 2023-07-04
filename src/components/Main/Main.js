import AboutSection from "../AboutSection/AboutSection";
import LeadSection from "../LeadSection/LeadSection";
import MetricsSection from "../MetricsSection/MetricsSection";
import ProductsSection from "../ProductsSection/ProductsSection";
import "./Main.css";

export default function Main() {
  return (
    <div className="page">
      <main className="main">
        <LeadSection />
        <AboutSection />
        <ProductsSection />
        <MetricsSection />
      </main>
    </div>
  );
}
