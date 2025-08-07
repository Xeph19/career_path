import React from 'react';

function Navigation ()  {
return (
    <div className="navbar bg-blue-950">
  <div className="flex-1">
    <div>
        <div className="max-w-none">
          <img
            alt="myway logo"
            src="src\images\logo-myway.png" />
        </div>
      </div>
  </div>
  <div className="flex-1">
    <ul className="relative right-20 menu menu-horizontal px-1 justify-items-center text-center">
      <li><a className="text-white text-l px-8">Home</a></li>
      <li><a className="text-white text-l px-8">Career Path</a></li>
      <li><a className="text-white text-l px-8">Career Quiz</a></li>
      
    </ul>
  </div>
   <div className="flex-none justify-items-end m-2">
    <a className="text-white text-center hover:cursor-pointer p-5">Log In</a>
    <a className="text-white text-end btn btn-accent rounded-r-lg">Get Started</a>
   </div>
  </div>
);
}
export default Navigation;