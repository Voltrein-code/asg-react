import "./ProductsSection.css";
import { useState } from "react";
import { productData } from "../../utils/data";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsSection() {
  const [productInModal, setProductInModal] = useState(null);
  const closeProductInModal = () => setProductInModal(null);

  return (
    <section class="products" id="products">
      <div class="products__info">
        <h3 class="products__heading section-heading">Наши услуги</h3>
        <p class="products__text section-text"></p>
      </div>
      <div class="products__cards">
        {productData.map((card) => {
          return (
            <ProductCard
              image={card.cardIcon}
              name={card.cardHeading}
              text={card.cardSubtitle}
              checkList={card.cardCheckList}
              onCardClick={setProductInModal}
            />
          );
        })}
      </div>
    </section>
  );
}
