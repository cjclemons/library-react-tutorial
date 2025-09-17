import React from 'react'

const Price = ({salePrice, originalPrice}) => {
    return (
        <div className="book__price">
        {salePrice ? (
          <>
            <label htmlFor="" className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </label>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
    )
}

export default Price