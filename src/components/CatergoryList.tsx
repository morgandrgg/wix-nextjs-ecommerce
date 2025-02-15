import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatergoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-ligt text-cl tracking-wide">
            Catergory Name
          </h1>
        </Link>

        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-ligt text-cl tracking-wide">
            Catergory Name
          </h1>
        </Link>

        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-ligt text-cl tracking-wide">
            Catergory Name
          </h1>
        </Link>

        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-ligt text-cl tracking-wide">
            Catergory Name
          </h1>
        </Link>

        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-ligt text-cl tracking-wide">
            Catergory Name
          </h1>
        </Link>

        <Link
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-ligt text-cl tracking-wide">
            Catergory Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CatergoryList;
