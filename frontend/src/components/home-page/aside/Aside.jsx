import React from 'react'

const Aside = () => {
  return (
    <div>
      
      <aside className="side-options py-5 px-3">
            <h5>Sort by:</h5>
            <select>
              <option>Lowest Price</option>
              <option>Arrival Time</option>
              <option>Stops</option>
            </select>

            <h6>Airlines Included:</h6>
            <div>
              <input type="checkbox" id="alitalia" />
              <label htmlFor="alitalia">Alitalia</label>
            </div>
            <div>
              <input type="checkbox" id="lufthansa" />
              <label htmlFor="lufthansa">Lufthansa</label>
            </div>
            {/* Add other checkboxes as needed */}
          </aside>
    </div>
  )
}

export default Aside
