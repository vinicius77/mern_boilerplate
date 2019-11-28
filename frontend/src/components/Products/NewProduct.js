import React from 'react';
import Input from '../Input/Input';
import './NewProduct.css';
import Button from '../Button/Button';

const NewProduct = props => {
  const priceChangeHandler = event => {
    setEnteredPrice(event.target.value);
  };

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const submitProductHandler = event => {
    event.preventDefault();
    props.onAddProduct(enteredTitle, enteredPrice);
  };

  return (
    <section id='new-product'>
      <h2>Add a New Product</h2>
      <form onSubmit={submitProductHandler}>
        <Input
          type='text'
          label='title'
          id='title'
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type='number'
          label='price'
          step={0.01}
          id='price'
          value={enteredPrice}
          onChange={priceChangeHandler}
        />

        <Button type='submit'>ADD PRODUCT</Button>
      </form>
    </section>
  );
};

export default NewProduct;
