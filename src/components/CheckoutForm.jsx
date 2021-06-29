import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkout.css';

export default class CheckoutForm extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form className="checkout-form">
        <fieldset className="client-info">
          <h2>Informações do Comprador</h2>
          <div className="name-cpf">
            <label htmlFor="checkout-fullname">
              <input
                type="text"
                data-testid="checkout-fullname"
                placeholder="Nome Completo"
                name="fullname"
                onChange={ handleChange }
                required
              />
            </label>
            <label htmlFor="checkout-cpf">
              <input
                type="text"
                maxLength="11"
                data-testid="checkout-cpf"
                placeholder="CPF"
                name="cpf"
                onChange={ handleChange }
                required
              />
            </label>
          </div>
          <div className="email-phone">
            <label htmlFor="checkout-email">
              <input
                type="text"
                data-testid="checkout-email"
                placeholder="Email"
                name="email"
                onChange={ handleChange }
                required
              />
            </label>
            <label htmlFor="checkout-phone">
              <input
                type="text"
                data-testid="checkout-phone"
                placeholder="Telefone"
                name="phone"
                onChange={ handleChange }
                required
              />
            </label>
          </div>
          <div className="adress">
            <label htmlFor="checkout-cep">
              <input
                type="text"
                data-testid="checkout-cep"
                placeholder="CEP"
                name="cep"
                maxLength="8"
                onChange={ handleChange }
                required
              />
            </label>
            <label htmlFor="checkout-address">
              <input
                type="text"
                data-testid="checkout-address"
                placeholder="Endereço"
                name="address"
                onChange={ handleChange }
                required
              />
            </label>
          </div>
        </fieldset>
        <fieldset className="payment-method">
          <h2>Método de Pagamento</h2>
          <label htmlFor="boleto">
            <input
              type="radio"
              name="paymentMethod"
              onChange={ handleChange }
            />
            Boleto
          </label>
          <label htmlFor="card">
            <h4>Cartão de Crédito</h4>
            <input
              type="radio"
              value="visa"
              name="paymentMethod"
              onChange={ handleChange }
            />
            Visa
            <input
              type="radio"
              value="masterCard"
              name="paymentMethod"
              onChange={ handleChange }
            />
            MasterCard
            <input
              type="radio"
              value="elo"
              name="paymentMethod"
              onChange={ handleChange }
            />
            Elo
          </label>
        </fieldset>
        <button
          className="finish-checkout-button"
          type="submit"
          onClick={ handleSubmit }
        >
          Finalizar Compra
        </button>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
