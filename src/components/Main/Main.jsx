import AboutSection from "../AboutSection/AboutSection";
import CoverSection from "../CoverSection/CoverSection";
import ITAccreditationSection from "../ITAccreditationSection/ITAccreditationSection";
import LeadSection from "../LeadSection/LeadSection";
import MetricsSection from "../MetricsSection/MetricsSection";
import OrderSection from "../OrderSection/OrderSection";
import PrivacySection from "../PrivacySection/PrivacySection";
import ProductsSection from "../ProductsSection/ProductsSection";
import TechnologiesSection from "../TechnologiesSection/TechnologiesSection";
import "./Main.css";

export default function Main() {
  return (
    <div className="page">
      <main className="main">
        <LeadSection />
        <AboutSection />
        <ProductsSection />
        <TechnologiesSection />
        <MetricsSection />
        <ITAccreditationSection />
        <PrivacySection />
        <CoverSection />
        <OrderSection />
      </main>
    </div>
  );
}
