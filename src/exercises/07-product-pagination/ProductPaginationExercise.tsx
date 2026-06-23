import { useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { exercises } from '../../exercises'
import { products, type Product } from './data'

const meta = exercises[6]
const pageSize = 6
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export function ProductPaginationExercise() {
  const [currentPage, setCurrentPage] = useState(1)

  // TODO: Exercise 07
  // Calculate the page count, start index, and products for the active page.
  const totalPages: number = 0
  const startIndex: number = 0
  const visibleProducts: Product[] = []

  function goToPage(_page: number) {
    // TODO: Exercise 07
    // Update the page while keeping it between 1 and totalPages.
  }

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Calculate each page of products and implement safe page navigation.</p>
          </div>
          <a href="./src/exercises/07-product-pagination/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card products-workspace">
        <div className="products-heading">
          <div><p className="eyebrow">Field notes collection</p><h2>Desk essentials</h2></div>
          <span>{products.length} products</span>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image" style={{ backgroundColor: product.color }}><span>{String(product.id).padStart(2, '0')}</span></div>
                <small>{product.category}</small>
                <div><strong>{product.name}</strong><span>{money.format(product.price)}</span></div>
              </article>
            ))}
          </div>
        ) : <div className="empty-state product-empty"><span>□</span><h3>No products to show</h3><p>Complete the pagination logic to reveal this page.</p></div>}

        <footer className="pagination-footer">
          <p>
            {visibleProducts.length > 0
              ? `Showing ${startIndex + 1}–${startIndex + visibleProducts.length} of ${products.length}`
              : `Showing 0 of ${products.length}`}
          </p>
          <nav className="pagination" aria-label="Product pages">
            <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} aria-label="Previous page">←</button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button className={page === currentPage ? 'active' : ''} aria-current={page === currentPage ? 'page' : undefined} key={page} onClick={() => goToPage(page)}>{page}</button>
            ))}
            <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)} aria-label="Next page">→</button>
          </nav>
        </footer>
      </section>
    </ExerciseLayout>
  )
}
