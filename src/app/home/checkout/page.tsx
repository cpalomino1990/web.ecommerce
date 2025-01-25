'use client'

    
    const Checkout = () => {
      
         
      return (
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-semibold mb-6 text-pink" > Checkout</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulario de Dirección */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dirección de Envío</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    id="address"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu dirección de envío"
                  />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
                  <input
                    id="city"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu ciudad"
                  />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Código Postal</label>
                  <input
                    id="zip"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu código postal"
                  />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    id="phone"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </form>
            </div>
    
            {/* Resumen del Pedido */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resumen del Pedido</h3>
              <ul>
               <li>
               {/*  {cart.map((product) => (
                  <li key={product.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                    Vista previa del producto 
                    <div className="flex items-center space-x-4">
                      <img
                        src='https://static.dafiti.com.co/p/mp-1841-5786842-1-zoom.jpg' // Asegúrate de tener una propiedad 'image' en cada producto
                        alt='Leather Handbag'
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                      <span>{'Leather Handbag'}</span>
                      <span>${1200}</span>
                      </div>
                     
                    </div>*/}
                    
                 </li>

                 
               
                  <li className="flex items-center justify-between py-2 border-b border-gray-200">
                     {/* Vista previa del producto */}
                    <div className="flex items-center space-x-4">
                      <img
                        src='https://static.dafiti.com.co/p/mp-1841-5786842-1-zoom.jpg' // Asegúrate de tener una propiedad 'image' en cada producto
                        alt='Leather Handbag'
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                      <span>{'Leather Handbag'}</span>
                      <span>${1200}</span>
                      </div>
                     
                    </div>
                    
                 </li>     

                 <li className="flex items-center justify-between py-2 border-b border-gray-200">
                     {/* Vista previa del producto */}
                    <div className="flex items-center space-x-4">
                      <img
                        src='https://static.dafiti.com.co/p/mp-1841-5786842-1-zoom.jpg' // Asegúrate de tener una propiedad 'image' en cada producto
                        alt='Leather Handbag'
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                      <span>{'Leather Handbag'}</span>
                      <span>${1200}</span>
                      </div>
                     
                    </div>
                    
                 </li>     
              
                 <li className="flex items-center justify-between py-2 border-b border-gray-200">
                     {/* Vista previa del producto */}
                    <div className="flex items-center space-x-4">
                      <img
                        src='https://static.dafiti.com.co/p/mp-1841-5786842-1-zoom.jpg' // Asegúrate de tener una propiedad 'image' en cada producto
                        alt='Leather Handbag'
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex flex-col">
                      <span>{'Leather Handbag'}</span>
                      <span>${1200}</span>
                      </div>
                     
                    </div>
                    
                 </li>     
              
                
              </ul>
    
              <div className="flex justify-between mt-4">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-semibold text-lg">${123}</span>
              </div>
    
              <button className="w-full mt-6 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition  " >
                Realizar Pago
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Checkout;

