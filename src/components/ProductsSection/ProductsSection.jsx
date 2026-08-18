/* eslint-disable import/no-extraneous-dependencies */
import "./ProductsSection.css";
import { useState, useEffect } from "react";
import { productData } from "../../utils/data";
import { servicePricing } from "../../content/siteContent";
import ProductCard from "../ProductCard/ProductCard";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function ProductsSection() {
  const [productInModal, setProductInModal] = useState(null);
  const closeProductInModal = () => setProductInModal(null);

  useEffect(() => {
    document.body.style.overflow = productInModal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [productInModal]);

  return (
    <>
      <section className="products" id="services" tabIndex="-1">
        <div className="products__info">
          <h2 className="products__heading section-heading">Услуги</h2>
          <p className="products__text section-text">
            Разработка, автоматизация и сопровождение ИТ-инфраструктуры.
            Стоимость каждой услуги указана непосредственно в карточке.
          </p>
        </div>
        <div className="products__cards">
          {productData.map((card) => {
            return (
              <ProductCard
                key={card.cardHeading}
                image={card.cardIcon}
                name={card.cardHeading}
                text={card.cardSubtitle}
                price={card.cardPrice}
                priceLabel={
                  servicePricing[card.serviceId].minimumPrice
                    ? "Минимальная стоимость"
                    : "Стоимость"
                }
                checkList={card.cardCheckList}
                onCardClick={() => setProductInModal(card)}
              />
            );
          })}
        </div>
      </section>
      {productInModal && (
        <Modal
          onClose={closeProductInModal}
          title={`Услуга: ${productInModal.cardHeading}`}
        >
          <ProductDetails productData={productInModal} />
        </Modal>
      )}
    </>
  );
}
