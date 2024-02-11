import React from 'react'
import menu from './data'

function CardCollection({ data }) {
  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {data.map((filteredData) => {
        const { id, title, price, img, desc } = filteredData
        return (
          <div class="col" key={id}>
            <div class="card">
              <div className="img-container">
                <img src={img} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center my-2">
                  <h5 class="card-title">{title}</h5>
                  <span class="badge bg-success py-2 align-self-start">
                    ${price}
                  </span>
                </div>
                <p class="card-text">{desc}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardCollection
