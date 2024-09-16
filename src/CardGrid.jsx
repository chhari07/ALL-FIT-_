import React from 'react'

const CardGrid = () => {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
           
            <div className="p-4 w-full">
              <div className="relative h-72 max-w-full mx-auto px-5 py-8 group rounded-xl bg-gray-200 overflow-hidden shadow-xl">
                <img src="https://inda.rcb.ac.in/sewagedata/assets/img/mohfw.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                <div className="absolute inset-0 w-full h-full rounded-xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
                <div className="absolute inset-x-5 text-white">
                  <h2 className="text-4xl font-semibold mb-2">HEALTH MINISTRY</h2>
                  <p className="hidden group-hover:block text-black">Whether you're looking to save money spending abroad or sticking to your budget, get more from your money with our Standard account.</p>
                </div>
                
              </div>
            </div>

         
            <div className="p-4 w-full">
              <div className="relative h-72 max-w-full mx-auto px-5 py-8 group rounded-xl bg-gray-200 overflow-hidden shadow-xl">
                <img src="https://uxdt.nic.in/wp-content/uploads/2021/12/fit-india-fit-india-01-01.jpg?x69772" alt="" className="absolute w-full h-full inset-0 object-cover" />
                <div className="absolute inset-0 w-full h-full rounded-xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
                <div className="absolute inset-x-5 text-white">
                  <h2 className="text-4xl font-semibold mb-2">FIT INDIA</h2>
                  <p className="hidden group-hover:block text-black">Whether you're looking to save money spending abroad or sticking to your budget, get more from your money with our Standard account.</p>
                </div>
               
              </div>
            </div>

           
            <div className="p-4 w-full">
              <div className="relative h-72 max-w-full mx-auto px-5 py-8 group rounded-xl bg-gray-200 overflow-hidden shadow-xl">
                <img src="https://assets.revolut.com/media/plans-tiles/Cards-Tiles-Standard.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                <div className="absolute inset-0 w-full h-full rounded-xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
                <div className="absolute inset-x-5 text-white">
                  <h2 className="text-4xl font-semibold mb-2">STANDARD</h2>
                  <p className="hidden group-hover:block">Whether you're looking to save money spending abroad or sticking to your budget, get more from your money with our Standard account.</p>
                </div>
              
              </div>
            </div>

          
            <div className="p-4 w-full">
              <div className="relative h-72 max-w-full mx-auto px-5 py-8 group rounded-xl bg-gray-200 overflow-hidden shadow-xl">
                <img src="https://assets.revolut.com/media/plans-tiles/Cards-Tiles-Standard.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                <div className="absolute inset-0 w-full h-full rounded-xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
                <div className="absolute inset-x-5 text-white">
                  <h2 className="text-4xl font-semibold mb-2">STANDARD</h2>
                  <p className="hidden group-hover:block">Whether you're looking to save money spending abroad or sticking to your budget, get more from your money with our Standard account.</p>
                </div>
                
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardGrid
