import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";

import Head from "next/head";
import Link from "next/link";
import Account from "../../../components/Utils/Account";
import Nav from "../../../components/Layout/Nav";
import Alert from "../../../components/Layout/Alert";
import Footer from "../../../components/Layout/Footer";

import useEagerConnect from "../../../hooks/useEagerConnect";

import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="400px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default function Yggdrasil() {
  const [redeemCode, setRedeemCode] = useState("");
  const [error, setError] = useState("");

  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const handleInput = (e) => {
    let input = e.target.value;
    setRedeemCode(input);
  };

  const handleRedeem = async () => {
    // reset error message
    setError("");

    let response = await fetch("/api/yggcodes", {
      method: "PUT",
      body: redeemCode
    });
    console.log("res", response);

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      console.log("success", data);
      setRedeemCode("");
    } else {
      // set the error
      console.log("error", data.message);
      return setError(data.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Anthromancer - Yggdrasil</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <div className=" bg-black text-white">
        <div className="w-screen h-screen flex">
          {/* //TODO LEFT SIDE */}
          <div
            id="scroller"
            className="snap-y snap-mandatory w-full lg:w-8/12 h-screen lg:h-156 overflow-scroll"
          >
            <div className="snap-center  bg-black w-full h-screen lg:h-156 flex flex-col text-center items-center justify-center text-base px-3 lg:px-36">
              <div className="mt-16 w-full ">
                <p className="text-3xl leading-tight lg:leading-relaxed font-bold text-left yggdrasil">
                  <span className="infinity">∞</span>. YGGDRASIL
                </p>
                <p className="pt-6">
                  <span className="italic">"What IS this place?"</span> Roxas
                  asks, gazing up into the branches of the pale tree...
                </p>
                <p className="pt-6">
                  <span className="italic">
                    "It is the place beyond the place,"
                  </span>{" "}
                  the Fox replies,{" "}
                  <span className="italic">
                    "The time from which ALL times begin..."
                  </span>
                </p>
                <p className="pt-6 ">THANK YOU MESSAGE TEXT</p>
              </div>

              <div className="mt-3 w-full">
                <YoutubeEmbed embedId="rokGy0huYEA" />
              </div>

              <p className="mt-6 warning">
                <span className="bold">IMPORTANT</span>: When MetaMask reveals
                your secret words, <span className="bold">DO NOT FORGET</span>{" "}
                to write them down. This section is bolded so that you don't
                accidentally skim and lose access to your wallet forever. Click
                the <span className="blue">"Reveal Secret Words"</span> button.
                You will see a 12 words seed phrase.{" "}
                <span className="bold">DO NOT</span> store these online, as that
                can always be a potential security risk. Instead, write these
                down in a notebook or something you will not misplace. Store it
                somewhere safe.
              </p>
            </div>

            <div className=" snap-center bg-black w-full h-screen lg:h-156 flex flex-col text-center items-center justify-center text-base px-3 lg:px-36">
              <div className="-mt-12 w-full ">
                <p className="text-3xl font-bold text-left underline underline-offset-2 decoration-yggpurple-300">
                  Congratulations! Now What?
                </p>

                <div className="mt-3 w-full">
                  <YoutubeEmbed embedId="rokGy0huYEA" />
                </div>
              </div>
            </div>
          </div>

          {/* //TODO RIGHT SIDE */}
          <div className=" hidden lg:flex flex-col lg:w-4/12 text-center mx-auto">
            <div className="w-8/12 flex mx-auto rounded-lg mt-4">
              <img id="NFT" src="/yggdrasil.png" />
            </div>

            <div className="flex flex-col text-center items-center">
              <a
                href="https://www.one37pm.com/nft/tech/how-to-set-up-metamask-wallet"
                className="button font-mono text-white w-1/2 mt-2 mb-2 px-6 py-1 border-2 bg-yggpurple-400 border-yggpurple-300"
              >
                <p>Setup Your Metamask</p>
              </a>

              {/* <button className="button font-mono text-white px-6 py-1 border-2 bg-yggpurple-400 border-yggpurple-300 w-1/4 mt-2">
                Connect your wallet above
              </button> */}
              <Account triedToEagerConnect={triedToEagerConnect} />

              <input
                type="text"
                className="mt-4 w-1/2 text-lg input"
                style={{ color: "#000" }}
                placeholder="Paste Code Here"
                onChange={handleInput}
              />

              <button
                onClick={handleRedeem}
                className="button font-mono text-white px-6 py-1 border-2 bg-yggpurple-400 border-yggpurple-300 w-1/2 mt-2"
              >
                <p>Redeem Your Code</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }

        .blue {
          color: #57bfe6;
        }

        .bold {
          font-size: 20px;
          font-weight: bold;
          color: red;
        }

        .button:active {
          background-color: #57bfe6;
        }

        .button p:active {
          color: #000;
        }

        p {
          font-size: 18px;
        }

        .infinity {
          font-size: 60px;
        }

        .yggdrasil {
          font-family: "Jost", sans-serif;
          font-size: 48px;
        }

        .warning {
          text-align: left;
        }

        @font-face {
          font-family: myFirstFont123;
          src: url(/fonts/BlankRiver.ttf);
        }

        #depict,
        #depict3 {
          font-family: myFirstFont123;
          text-shadow: 1px 1px white;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        #scroller {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        #NFT {
          -moz-animation: spinHorizontal 10s infinite linear;
          -o-animation: spinHorizontal 10s infinite linear;
          -webkit-animation: spinHorizontal 10s infinite linear;
          animation: spinHorizontal 10s infinite linear;
        }

        @keyframes spinHorizontal {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
        }

        html {
          font-family: sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
