import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import heroImage from "images/hero-image.svg";
import logoImage from "images/devgram-logo-png.png";
import { useSelector } from "react-redux";
import { getAuthState } from "features";
import { Footer } from "components";

const LandingPage = () => {
  const { isAuth } = useSelector(getAuthState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/home", { replace: true });
    }
  }, []);

  return (
    <>
      <section className="hero flex flex-col items-center justify-center max-w-5xl mx-auto min-h-[90vh] p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto gap-6">
          <div className="hero-text-content self-center shrink grow basis-full text-center flex flex-col items-center justify-center gap-5">
            <div className="flex flex-row gap-2 md:gap-4 items-center justify-center flex-wrap md:flex-nowrap">
              <img
                className="h-9 md:h-12 w-auto"
                src={logoImage}
                alt="Devgram Logo"
              />
              <h3 className="font-semibold text-3xl md:text-5xl text-pink-400 logo-text">
                Devgram
              </h3>
            </div>
            <h1 className="hero-text text-lg md:text-2xl">
              Connect with Developer accross the worls!
            </h1>
            <div className="auth-buttons-container flex flex-col justify-center items-center gap-3">
              <Link
                to="/signup"
                className="btn-primary min-w-[120px] md:mb-0 mt-6 mb-4"
              >
                Join Now
              </Link>
              <Link to="/login" className="btn-primary-link mt-2">
                Already have an account?{" "}
                <span className="underline">Login</span>
              </Link>
            </div>
          </div>
          <div className="hero-image shrink grow basis-full">
            <img
              src={heroImage}
              alt="Hero image"
              className="hero-image w-full"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { LandingPage };
