// src/app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    // The parent div
    <div
      style={{
        // use relative position for the parent div
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Image
        src="https://api.slingacademy.com/public/sample-photos/8.jpeg"
        fill={true}
        alt={"Background Image"}
      />

      {/* The child element */}
      <div
        style={{
          // use absolute position for the child element
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // use higher zIndex than the image
          zIndex: 1,
          background: "yellow",
          padding: "30px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1
          style={{
            fontSize: "25px",
            color: "black",
          }}
        >
          Welcome to Sling Academy!
        </h1>
      </div>



    <div
      style={{ backgroundImage: `url(${imagePath})` }}
      className="h-screen bg-cover bg-center text-skin-base border-b-8 border-b-solid border-b-slate-400"
    >
      {/* Your other components here */}
      </div>
      <div className={`bg - [url('${imageUrl}')`} >
        Some content
      </div>

    </div>
  );
}