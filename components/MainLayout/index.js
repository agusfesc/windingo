import React from 'react';


const MainLayout = ({children}) => {
  return ( 
    <div className="bg-gray-700 w-full">
       <div className="max-w-screen-md min-h-screen h-full  mx-auto pb-6 bg-gray-700" >
        {children}
      </div>
      <h4 className="text-purple-400 text-center py-4 place-self-end"> Windingo League &copy; </h4>
    </div>
   );
}
 
export default MainLayout;