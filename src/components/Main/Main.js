import AboutSection from "../AboutSection/AboutSection";
import LeadSection from "../LeadSection/LeadSection";
import "./Main.css";

export default function Main() {
  return (
    <div className="page">
      <main className="main">
        <LeadSection />
        <AboutSection />
      </main>
    </div>
  );
}
