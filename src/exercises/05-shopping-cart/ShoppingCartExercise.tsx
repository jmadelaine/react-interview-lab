import { useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { exercises } from '../../exercises'
import { initialItems } from './data'

const meta = exercises[4]
const formatMoney = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

export function ShoppingCartExercise() {
  const [items, setItems] = useState(initialItems)

  function updateQuantity(_id: string, _change: number) {
    // TODO: Exercise 05
    // Update the matching item without mutating the existing state.
  }

  function removeItem(_id: string) {
    // TODO: Exercise 05
    // Remove the matching item from the cart.
  }

  // TODO: Exercise 05
  // Calculate these values from items. Shipping is free at $100, otherwise $8.
  const itemCount: number = 0
  const subtotal: number = 0
  const shipping: number = 0
  const total: number = 0

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Implement quantity changes, removal, and the derived order totals.</p>
          </div>
          <a href="./src/exercises/05-shopping-cart/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card cart-workspace">
        <div className="cart-main">
          <div className="cart-heading">
            <div><p className="eyebrow">Your selection</p><h2>Shopping cart</h2></div>
            <span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
          </div>

          {items.length > 0 ? (
            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <div className="product-art" style={{ backgroundColor: item.accent }}><span /></div>
                  <div className="product-copy"><strong>{item.name}</strong><span>{item.variant}</span><button onClick={() => removeItem(item.id)}>Remove</button></div>
                  <div className="quantity-stepper" aria-label={`Quantity for ${item.name}`}>
                    <button onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                  </div>
                  <strong className="line-total">{formatMoney(item.unitPrice * item.quantity)}</strong>
                </article>
              ))}
            </div>
          ) : <div className="empty-state"><span>◫</span><h3>Your cart is empty</h3><p>Add an item to continue.</p></div>}
        </div>

        <aside className="order-summary">
          <p className="eyebrow">Order details</p>
          <h2>Summary</h2>
          <dl>
            <div><dt>Subtotal</dt><dd>{formatMoney(subtotal)}</dd></div>
            <div><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatMoney(shipping)}</dd></div>
            <div className="summary-total"><dt>Total</dt><dd>{formatMoney(total)}</dd></div>
          </dl>
          <p className="shipping-note">Free shipping on orders of $100 or more.</p>
          <button className="primary-button" disabled={items.length === 0}>Continue to checkout</button>
        </aside>
      </section>
    </ExerciseLayout>
  )
}
