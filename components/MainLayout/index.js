import React from 'react';


const MainLayout = ({children}) => {
  return ( 
    <div className="max-w-screen-md h-full mx-auto pb-6 bg-gray-700" >
      {children}
      <h4 className="text-purple-400 text-center pt-4"> Windingo League &copy; </h4>
    </div>
   );
}
 
export default MainLayout;