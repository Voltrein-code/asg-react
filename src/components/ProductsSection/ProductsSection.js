/* eslint-disable import/no-extraneous-dependencies */
import "./ProductsSection.css";
import { useState, useEffect } from "react";
import { productData } from "../../utils/data";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function ProductsSection() {
  const [productInModal, setProductInModal] = useState(null);
  const closeProductInModal = () => setProductInModal(null);

  useEffect(() => {
    productInModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [productInModal]);

  return (
    <>
      <section className="products" id="products">
        <div className="products__info">
          <h3 className="products__heading section-heading">Услуги</h3>
          <p className="products__text section-text"></p>
        </div>
        <div className="products__cards">
          {productData.map((card, index) => {
            return (
              <ProductCard
                key={index}
                image={card.cardIcon}
                name={card.cardHeading}
                text={card.cardSubtitle}
                checkList={card.cardCheckList}
                onCardClick={() => setProductInModal(card)}
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
