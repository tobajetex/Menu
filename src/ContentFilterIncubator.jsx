import React, { useState } from 'react'
import CardCollection from './CardCollection'
import menu from './data'

function ContentFilterIncubator() {
  const [itemToShow, setItemToShow] = useState(menu)

  const handleBreakFast = () => {
    setItemToShow(() => menu.filter((data) => data.category === 'breakfast'))
  }
  const handleLunch = () => {
    setItemToShow(() => menu.filter((data) => data.category === 'lunch'))
  }
  const handleStake = () => {
    setItemToShow(() => menu.filter((data) => data.category === 'shakes'))
  }

  const handleAll = () => {
    setItemToShow(menu)
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-auto  d-flex gap-3 mb-3">
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handleBreakFast}
          >
            BreakFast
          </button>
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handleLunch}
          >
            Lunch
          </button>
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handleStake}
          >
            Stake
          </button>
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handleAll}
          >
            All
          </button>
        </div>
      </div>
      <CardCollection data={itemToShow} />
    </div>
  )
}

export default ContentFilterIncubator
