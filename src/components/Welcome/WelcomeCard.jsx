import React from "react";

const WelcomeCard = () => (
  <div class="draggable grab panel-wrapper ui-draggable ui-draggable-handle ui-droppable">
    <div class="panel panel-order" data-id="order">
      <div class="panel-heading">
        <h3>Shop</h3>
        <h4>Access the online shop - buy phones, tablets and accessories</h4>
      </div>
      <div class="panel-body text-center panel-image">
        <div>
          <span
            class="panel-icon sk-icon sk-icon-shopping-trolley"
            role="presentation"
          ></span>
        </div>
        <div class="btn-group">
          <button class="button" aria-label="Shop now">
            Shop now
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeCard;
