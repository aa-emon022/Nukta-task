import Image from "next/image";
import FirstCardImg from "../../public/image/first.svg";
import SecondCardImg from "../../public/image/seccondCard.svg";
import ThirdCardImg from "../../public/image/thirdCard.svg";
import Book from "../../public/image/book.svg";
import User from "../../public/image/user.svg";
import Clock from "../../public/image/clock.svg";
import Link from "next/link";
export default function card() {
  return (
    <>
      <div className="flex items-center justify-center mt-[14.625rem]">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:max-w-screen-sm sm:px-[5rem] md:px-0 lg:max-w-screen-md  gap-4 justify-items-center ">
          <h1 className="text-sm md:text-[1rem]  leading-[1.193rem] text-center w-[9.375rem] text-[#818181] hover:text-[#3559E0]">
            When course has
            <br />
            <span className="text-[#000000] hover:text-[#E3651D]">
              Discount
            </span>
          </h1>
          <h1 className="text-sm md:text-[1rem]  leading-[1.193rem]  text-center w-[9.375rem] text-[#818181] hover:text-[#3559E0]">
            When course has
            <br />
            <span className="text-[#000000] hover:text-[#E3651D]">
              No Discount
            </span>
          </h1>
          <h1 className="text-sm md:text-[1rem]  leading-[1.193rem]  text-center w-[9.375rem] text-[#818181] hover:text-[#3559E0]">
            When course is
            <br />
            <span className="text-[#000000] hover:text-[#E3651D]">FREE</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-[2.313rem] ">
        <div className="w-[12.875rem] sm:w-[15.875rem] h-[19rem] p-[0.625rem] hover:scale-100  hover:bg-[#186F65] hover:scale-[1.1] hover:duration-1000  hover:rounded-2xl">
          <div className="w-[11.625rem] sm:w-[14.625rem] h-[17.75rem] rounded-[0.625rem] shadow-md opacity-100 transition-opacity duration-1000 ease-in-out delay-0 bg-white ">
            <div className="hover:brightness-50">
              <Image src={FirstCardImg} width={234} height={157} />
            </div>

            <div className="mt-[0.625rem] hover:opacity-[.8] ">
              <div className="w-[13.375rem]  px-[0.625rem] ">
                <h1 className="text-[1rem] leading-[1.193rem] text-[#1E1E1E] ">
                  This is a one line title
                </h1>
                <p className="text-[0.75rem] leading-[1rem] text-[#353535] pr-[.6rem] sm:pr-0">
                  Two line paragraph Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              <div className="h-[3.625rem]  ">
                <div className=" flex flex-wrap justify-between h-[1rem] text-[0.75rem]   px-[0.625rem] my-[0.625rem]">
                  <p className="text-[0.75rem] leading-[0.895rem] text-[#1E1E1E] line-through ">
                    $1050
                  </p>
                  <h1 className="text-[0.75rem] leading-[0.895rem] text-[#1A9C9C]">
                    $750
                  </h1>
                  <p className="bg-[#95E3E3] text-[0.625rem] text-[#1E1E1E] leading-[0.895rem] px-[0.125rem] px-[0.313rem] rounded-[6.25rem]">
                    you Save $250
                  </p>
                </div>
                {/* end */}
                <div className="flex flex-wrap  border-t-[0.031rem] border-solid gap-[0.34rem] text-[#878787] p-[0.625rem] ">
                  <div className="h-[0.75rem] flex flex-wrap  pr-[0.688rem] ">
                    <Image
                      src={Clock}
                      width={10}
                      height={10}
                      className="pr-[0.34rem]"
                    />
                    <h1 className="h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      10 hrs
                    </h1>
                  </div>
                  <div className="h-[0.75rem] flex flex-wrap pr-[0.688rem] ">
                    <Image
                      src={User}
                      width={10}
                      height={10}
                      className="pr-[0.34rem]"
                    />
                    <h1 className="h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      308
                    </h1>
                  </div>
                  <div className=" h-[0.75rem] flex flex-wrap   ">
                    <Image
                      src={Book}
                      width={10}
                      height={10}
                      className="pr-[0.34rem]"
                    />
                    <h1 className=" h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      17
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  card 2 */}
        <div className="w-[12.875rem] sm:w-[15.875rem]  h-[19rem] p-[0.625rem] hover:bg-[#186F65] hover:scale-[1.1] hover:duration-1000  hover:rounded-2xl">
          <div className="w-[11.625rem] sm:w-[14.625rem] h-[17.75rem] rounded-[0.625rem] shadow-md opacity-100 transition-opacity duration-1000 ease-in-out delay-0 bg-white">
            <div className="hover:brightness-50">
              <Image src={SecondCardImg} width={234} height={157} />
            </div>

            <div className="mt-[0.625rem] hover:opacity-[.8] ">
              <div className="w-[13.375rem]  px-[0.625rem] ">
                <h1 className="text-[1rem] leading-[1.193rem] text-[#1E1E1E]">
                  This is a one line title
                </h1>
                <p className="text-[0.75rem] leading-[1rem] text-[#353535] pr-[.6rem] sm:pr-0">
                  Two line paragraph Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              <div className="h-[3.625rem]  ">
                <div className=" flex flex-wrap justify-between h-[1rem] text-[0.75rem]   px-[0.625rem] my-[0.625rem]">
                  <h1 className="text-[0.75rem] leading-[0.895rem] text-[#1A9C9C]">
                    $750
                  </h1>
                </div>
                {/* end */}
                <div className="flex flex-wrap  border-t-[0.031rem] border-solid gap-[0.34rem] text-[#878787] p-[0.625rem]">
                  <div className="h-[0.75rem] flex flex-wrap  pr-[0.688rem] ">
                    <Image
                      src={Clock}
                      width={10}
                      height={10}
                      className="pr-[0.34rem] "
                    />
                    <h1 className="h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      10 hrs
                    </h1>
                  </div>
                  <div className="h-[0.75rem] flex flex-wrap pr-[0.688rem] ">
                    <Image
                      src={User}
                      width={10}
                      height={10}
                      className="pr-[0.34rem] "
                    />
                    <h1 className="h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      308
                    </h1>
                  </div>
                  <div className=" h-[0.75rem] flex flex-wrap   ">
                    <Image
                      src={Book}
                      width={10}
                      height={10}
                      className="pr-[0.34rem] "
                    />
                    <h1 className=" h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      17
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 3*/}
        <div className="w-[12.875rem] sm:w-[15.875rem]  h-[19rem] p-[0.625rem] hover:bg-[#186F65] hover:scale-[1.1] hover:duration-1000  hover:rounded-2xl">
          <div className="w-[11.625rem] sm:w-[14.625rem] h-[17.75rem] rounded-[0.625rem] shadow-md opacity-100 transition-opacity duration-1000 ease-in-out delay-0 bg-white">
            <div className="hover:brightness-50">
              <Image src={ThirdCardImg} width={234} height={157} />
            </div>

            <div className="mt-[0.625rem] hover:opacity-[.8]">
              <div className="w-[13.375rem]  px-[0.625rem] ">
                <h1 className="text-[1rem] leading-[1.193rem] text-[#1E1E1E]">
                  This is a one line title
                </h1>
                <p className="text-[0.75rem] leading-[1rem] text-[#353535] pr-[.6rem] sm:pr-0">
                  Two line paragraph Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              <div className="h-[3.625rem]  ">
                <div className=" flex flex-wrap justify-between h-[1rem] text-[0.75rem]   px-[0.625rem] my-[0.625rem]">
                  <p className="text-[0.75rem] leading-[0.895rem] text-[#1A9C9C] uppercase ">
                    free
                  </p>
                </div>
                {/* end */}
                <div className="flex flex-wrap  border-t-[0.031rem] border-solid gap-[0.34rem] text-[#878787] p-[0.625rem]">
                  <div className="h-[0.75rem] flex flex-wrap  pr-[0.688rem] ">
                    <Image
                      src={Clock}
                      width={10}
                      height={10}
                      className="pr-[0.34rem]"
                    />
                    <h1 className="h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      10 hrs
                    </h1>
                  </div>
                  <div className="h-[0.75rem] flex flex-wrap pr-[0.688rem] ">
                    <Image
                      src={User}
                      width={10}
                      height={10}
                      className="pr-[0.34rem]"
                    />
                    <h1 className="h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      308
                    </h1>
                  </div>
                  <div className=" h-[0.75rem] flex flex-wrap   ">
                    <Image
                      src={Book}
                      width={10}
                      height={10}
                      className="pr-[0.34rem]"
                    />
                    <h1 className=" h-[0.75rem] text-[ #878787] text-[0.625rem] leading-[0.746rem]">
                      17
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  items-center md:w-[46.625rem] pl-[1rem] mx-auto">
        <div className="leading-[0.908rem] mt-[3.125rem] mb-[17.75rem] text-[#000000]">
          <h1 className="pb-[1.5rem] "> See prototype:</h1>
          <Link
            href="https://www.figma.com/proto/hrDh4RSfGcA1eJMNlFzFSv/Product-Card?page-id=0%3A1&type=design&node-id=2-2&viewport=178%2C514%2C0.81&t=1IjRLd7Zdd2tkJCz-1&scaling=min-zoom&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="flex justify-center items-center w-[12rem] h-[2rem] underline underline-offset-4  transition ease-in-out delay-150 bg-[#ED7D31] hover:-translate-y-1 hover:scale-110 hover:bg-[#5F0F40] duration-1000 hover:text-white">
              {" "}
              <button>Figma Prototype Link</button>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
