
import React from 'react';
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const Cart = () => {
  const { handleCartClick } = useShoppingCart();

  return (
    <Button
      onClick={() => handleCartClick()}
      className="flex items-center justify-center h-10 w-10 bg-transparent p-2 mr-4"
    >
      <ShoppingBag className=" mt-2 w-16 h-16 text-white" />
    </Button >
  );
};

export default Cart;
// // import { ShoppingBag } from 'lucide-react'
// import React from 'react'
// import { Button } from "./ui/button";
// import { ShoppingBag } from "lucide-react";
// import { useShoppingCart } from "use-shopping-cart";


// const Cart = () => {
//   // const { handleCartClick } = useShoppingCart();
  

//   return (
//     <div>
//       <div className="flex divide-x ">
//         <Button
//           // onClick={() => handleCartClick()}
//           className="flex flex-col gap-y-1.5 h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10 bg-transparent "
//         >
//           <ShoppingBag className="w-10 h-10 text-white" />
//         </Button>
//       </div>
//     </div>
//   )
// }

// export default Cart