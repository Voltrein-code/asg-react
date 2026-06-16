import AboutSection from "../AboutSection/AboutSection";
import CoverSection from "../CoverSection/CoverSection";
import LeadSection from "../LeadSection/LeadSection";
import MetricsSection from "../MetricsSection/MetricsSection";
import OrderSection from "../OrderSection/OrderSection";
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
        <CoverSection />
        <OrderSection />
      </main>
    </div>
  );
}
