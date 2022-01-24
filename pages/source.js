import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Utils/Account";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import useEagerConnect from "../hooks/useEagerConnect";

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="w-full">
      <Head>
        <title>Anthromancer - Source</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-th-background font-futura mb-10">
        <Nav />

        {/* Shop Section */}
        <div
          id="shop"
          className="bg-th-background w-full mt-2 lg:mt-36 font-futura text-center justify-center "
        >
          <div className="py-8 ">
            <p className="text-th-primary-dark  decoration-th-accent-light underline font-futura font-medium text-6xl tracking-tighter ">
              Shop
            </p>
          </div>

          <div className="flex mx-auto px-4 py-2 lg:px-36">
            <div className="overflow-hidden relative max-w-7x border h-136 l w-full text-right  pb-4 flex mx-auto border rounded-lg">
              <img
                src="/ProductShot.jpg"
                className="object-cover w-full h-136 object-center rounded-lg  "
              />
              <div className="text-white absolute bottom-6 right-12 text-right  justify-end">
                <p className="text-5xl font-medium  my-2 mb-4 decoration-th-accent-light underline">
                  Anthromancer
                </p>
                <p className="text-2xl font-medium   my-2">First Printing</p>
                <p className="text-xl leading-snug  mt-2 ">
                  The Original Anthromancer Board Game
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  Born from the minds of Daniel James Drake and expressed
                  through the visual language of Sean Calen Blake
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Also Available for Purchase Here. Offers Discounts on
                  Anthromancer Hymn Tokens.
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  As well as a Free Class Card (gas-cost-only) in Anthromancer's
                  Upcoming On-Chain Card Game.
                </div>
                <div className="w-32 mr-1 font-futura text-xl text-white px-5 py-0.5 pt-0.5 font-light border-2 bg-th-primary-medium border-th-accent-light ">
                  Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tokens Section */}
        <div
          id="tokens"
          className="bg-th-background w-full mt-2 lg:mt-36 font-futura text-center justify-center"
        >
          <div className="py-8">
            <p className="text-th-primary-dark  decoration-th-accent-light underline font-futura font-medium text-6xl tracking-tighter ">
              Tokens
            </p>
          </div>

          <div className="flex mx-auto px-4 py-2 lg:px-36">
            <div className="relative max-w-7x border h-116 l w-full text-right  pb-4 flex mx-auto border rounded-lg">
              <div className="absolute bottom-6 right-12 text-right  justify-end">
                <p className="text-5xl font-medium  my-2 mb-4 decoration-th-accent-light underline">
                  Yggdrasil
                </p>
                <p className="text-2xl font-medium   my-2">300/777 Minted</p>
                <p className="text-xl leading-snug  mt-2 ">
                  Reward Token for Original Anthromancer
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  Board Game Kickstarter Backers
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Also Available for Purchase Here. Offers Discounts on
                  Anthromancer Hymn Tokens.
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  As well as a Free Class Card (gas-cost-only) in Anthromancer's
                  Upcoming On-Chain Card Game.
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto px-4 py-2 lg:px-36">
            <div className="relative max-w-7x border h-116 l w-full text-left  pb-4 flex mx-auto border rounded-lg">
              <div className="absolute bottom-6 left-12 text-left  justify-end">
                <p className="text-5xl font-medium  my-2 mb-4 decoration-th-accent-light underline">
                  Anthropos
                </p>
                <p className="text-2xl font-medium   my-2">1298/7777 Minted</p>
                <p className="text-xl leading-snug  mt-2 ">
                  Free-To-Mint Human Blueprint Token
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  Celebrating the Archetypal Diversity of Humanity
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Available for Free Mint 2/7/2022. Offers a discount on
                  Anthromancer Hymn Tokens
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  As well as a Free Character Card (gas-cost-only) in
                  Anthromancer's upcoming On-Chain Card Game.
                </div>
              </div>
            </div>
          </div>

          <div className="flex mx-auto px-4 py-2 lg:px-36">
            <div className="relative max-w-7x border h-116 l w-full text-right  pb-4 flex mx-auto border rounded-lg">
              <div className="absolute bottom-6 right-12 text-right  justify-end">
                <p className="text-5xl font-medium  my-2 mb-4 decoration-th-accent-light underline">
                  Hymns
                </p>
                <p className="text-2xl font-medium   my-2">
                  2078/10,101 Minted
                </p>
                <p className="text-xl leading-snug  mt-2 ">
                  Primary Token of the Anthromancer Ecosystem
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  13 Total Variants, with Differing Rewards
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Available for Purchase 3/7/2022. Offers a Free Class Card
                  (gas-cost-only)
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  in Anthromancer's Upcoming On-Chain Card Game, as well as
                  Future Rewards
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <div
          id="downloads"
          className="bg-th-background w-full mt-2 lg:mt-36 font-futura text-center justify-center"
        >
          <div className="py-8">
            <p className="text-th-primary-dark  decoration-th-accent-light underline font-futura font-medium text-6xl tracking-tighter ">
              Downloads
            </p>
          </div>

          <div className="flex mx-auto px-4 py-2 lg:px-36">
            <div className="relative max-w-7x border h-116 l w-full text-right  pb-4 flex mx-auto border rounded-lg">
              <div className="absolute bottom-6 right-12 text-right  justify-end">
                <p className="text-5xl font-medium  my-2 mb-4 decoration-th-accent-light underline">
                  Codex
                </p>
                <p className="text-2xl font-medium   my-2">300/777 Minted</p>
                <p className="text-xl leading-snug  mt-2 ">
                  Reward Token for Original Anthromancer
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  Board Game Kickstarter Backers
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Also Available for Purchase Here. Offers Discounts on
                  Anthromancer Hymn Tokens.
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  As well as a Free Class Card (gas-cost-only) in Anthromancer's
                  Upcoming On-Chain Card Game.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{``}</style>

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
