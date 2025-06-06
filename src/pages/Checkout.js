import React, { useState } from 'react';
import './Checkout.css';

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: 'mpesa',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your order, ${form.name}! Payment method: ${form.paymentMethod}`);
    setForm({
      name: '',
      address: '',
      phone: '',
      email: '',
      notes: '',
      paymentMethod: 'mpesa',
    });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Delivery Address
          <input type="text" name="address" value={form.address} onChange={handleChange} required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          Email Address
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Additional Notes
          <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" />
        </label>

        <label>
          Payment Method
          <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="mpesa">M-PESA</option>
            <option value="card">Credit / Debit Card</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </label>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
