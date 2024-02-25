import React from "react";

const Footer = () => {
  return (
    <section>
      <footer>
        <div className="mx-auto px-6 pt-20 pb-5 md:pb-10 flex justify-center sm:justify-end">
          <p className="text-with-hover py-2 text-md sm:py-2 text-center sm:text-end">
            Made with React, TypeScript, and Tailwind. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
