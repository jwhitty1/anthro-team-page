import Nav from "../components/Layout/Nav";

export default function Team() {
  return (
    <div className="w-full h-full text-center">
      <Nav />
      <div
        id="tokens"
        className="bg-th-background w-full h-screen font-futura text-center justify-center"
      >
        <div className="py-8">
          <p className="text-th-primary-dark decoration-th-accent-light underline font-futura font-medium text-6xl tracking-tighter ">
            The Anthromancer Team
          </p>
        </div>

        <div className="grid grid-cols-2 col-gap-4 justify-evenly w-full">
          <div className="relative h-116 w-10/12 max-w-116 text-left pb-4 flex md:flex-col mx-auto border rounded-lg">
            <div className="absolute top-6 left-12 text-left justify-end">
              <p className="text-5xl font-medium my-2 mb-4 decoration-th-accent-light underline">
                Alex Lapper
              </p>
              <p className="text-2xl font-medium  mb-2 my-2">WotC Game Judge</p>

              <p className="text-xl leading-snug mb-2">A real class act</p>
              <div className="text-lg leading-tight mt-4  ">
                Also available in yellow.
              </div>

              <div className="text-lg leading-tight -mt-1 mb-2  ">
                All Rights Reserved ©
              </div>
            </div>

            <div className="absolute top-2 right-12 h-1/12 w-4/12 border border-500">
              <img
                src="/anth4.svg"
                className="flex  object-contain"
                alt="jacob"
              />
            </div>
          </div>

          <div className="relative h-116 w-10/12 max-w-116 text-left pb-4 flex md:flex-col mx-auto border rounded-lg">
            <div className="absolute top-6 left-12 text-left justify-end">
              <p className="text-5xl font-medium  my-2 mb-4 decoration-th-accent-light underline">
                Richard Darling
              </p>
              <p className="text-2xl font-medium  mb-2 my-2">
                Graphic Designer, Videogame Designer
              </p>

              <p className="text-xl leading-snug mb-2">A real class act</p>
              <div className="text-lg leading-tight mt-4  ">
                Also available in yellow.
              </div>

              <div className="text-lg leading-tight -mt-1 mb-2  ">
                All Rights Reserved ©
              </div>
            </div>

            <div className="absolute top-2 right-12 h-1/12 w-4/12 border border-500">
              <img
                src="/anth4.svg"
                className="flex  object-contain"
                alt="jacob"
              />
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
