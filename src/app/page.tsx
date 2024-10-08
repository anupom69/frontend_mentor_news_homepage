import Image from "next/image";

export default function page() {
  return (
    <div className="">
      <section className="md:flex gap-4 my-12 mx-3">
        <div className="md:w-2/3 mb-10">
          <Image
            className="w-full hidden md:block"
            src="/image-web-3-desktop.jpg"
            width={300}
            height={300}
            alt="Hero Image"
          />
          <Image
            className="w-full md:hidden"
            src="/image-web-3-mobile.jpg"
            width={300}
            height={300}
            alt="Hero Image"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-2 mt-7">
            <h2 className="w-full font-[800] text-4xl text-very-dark-blue">
              The Bright Future of Web 3.0?
            </h2>
            <div className="mt-1">
              <p className="font-[400] text-dark-grayish-blue text-sm">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-soft-red text-very-dark-blue font-bold px-7 py-2 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-very-dark-blue px-4 py-4">
          <h2 className="text-soft-orange font-[700] text-4xl pb-3">New</h2>
          <div className="divide-y space-y-4 divide-dark-grayish-blue">
            <div>
              <h3 className="text-off-white font-bold text-xl">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-dark-grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div>
              <h3 className="text-off-white font-bold text-xl mt-4">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-dark-grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div>
              <h3 className="text-off-white font-bold text-xl mt-4">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-dark-grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:items-center gap-4 space-y-6 py-4 mx-3">
        <div className="flex items-center justify-between gap-5">
          <Image
            src="/image-retro-pcs.jpg"
            width={100}
            height={100}
            alt="image-retro-pcs"
          />
          <div className="flex flex-col gap-1.5 w-full">
            <h1 className="text-2xl font-[700] text-soft-red">01</h1>
            <h2 className="text-xl font-[700] leading-5">Top 10 Laptops of 2022</h2>
            <p className="text-sm text-gray-500 leading-4">What happens when old PCs are gived modern upgrades?</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <Image
            src="/image-top-laptops.jpg"
            width={100}
            height={100}
            alt="image-retro-pcs"
          />
          <div className="flex flex-col gap-1.5 w-full">
            <h1 className="text-2xl font-[700] text-soft-red">02</h1>
            <h2 className="text-xl font-[700] leading-5">The Growth of Gaming</h2>
            <p className="text-sm text-gray-500 leading-4">Our best pricks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <Image
            src="/image-gaming-growth.jpg"
            width={100}
            height={100}
            alt="image-retro-pcs"
          />
          <div className="flex flex-col gap-1.5 w-full">
            <h1 className="text-2xl font-[700] text-soft-red">03</h1>
            <h2 className="text-xl font-[700] leading-5">Reviving Retro PCs</h2>
            <p className="text-sm text-gray-500 leading-4">How the pandamic has sparked fresh opportunities.</p>
          </div>
        </div>
        
      </section>
    </div>
  );
}
