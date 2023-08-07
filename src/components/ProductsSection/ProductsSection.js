import "./ProductsSection.css";
import { useState } from "react";
import { productData } from "../../utils/data";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function ProductsSection() {
  const [productInModal, setProductInModal] = useState({
    title: "hello",
    subtitle: "world",
    picture: "",
    text: "text",
  });
  const closeProductInModal = () => setProductInModal(null);

  return (
    <>
      <section className="products" id="products">
        <div className="products__info">
          <h3 className="products__heading section-heading">Наши услуги</h3>
          <p className="products__text section-text"></p>
        </div>
        <div className="products__cards">
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
      {productInModal && (
        <Modal onClose={closeProductInModal} title="Детали по услуге">
          <ProductDetails productData={productInModal} />
        </Modal>
      )}
    </>
  );
}
