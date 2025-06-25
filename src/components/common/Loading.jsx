// loading.jsx
import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./loader2.json";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie 
        animationData={loadingAnimation} 
        loop={true} 
        style={{ width: 300, height: 300 }} // bu yerda kichikroq o'lcham berildi
      />
    </div>
  );
};

export default Loading;
