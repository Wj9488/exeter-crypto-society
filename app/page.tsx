"use client";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import GenericHeader from "@/components/GenericHeader";
import Transition from "@/components/Transition";
import LinkButton from "@/components/LinkButton";
import Faq from "@/components/Faq";
import Image from "next/image";

export default function Home() {
  return (
    <Transition>
      <main>
        <GenericHeader
          headingOne="Make friends, trade, network and meet like-minded people."
          subheadingPreText="Welcome"
          subheading="
          Exeter's biggest group of crypto traders. If you're a trader or interested in trading, no matter the asset type, 
          we'll give you a warm welcome.  
          "
          buttonText="Find your people"
          buttonHref="https://my.exeterguild.com/groups/H6VXP/blockchain-and-crypto-society/memberships"
          imageSource="/cryptoSoc__img_city.webp"
          imageAlt="City Sky"
        />
        <section className="pt-10 pb-10 pl-[2.5%] pr-[2.5%]  lg:grid lg:grid-cols-2 lg:grid-rows-1 dark:text-neutral-200">
          <h2 className="font-medium text-3xl lg:text-4xl">A bit about us.</h2>
          <p className="lg:text-xl lg:mt-0 mt-4">
            Our society brings together a dynamic and diverse community of
            traders. Whether you're an experienced trader or just getting
            started, our doors are open to all who are passionate about the
            world of trading. Join us and be part of a thriving community where
            like-minded individuals come together to explore the exciting
            opportunities in crypto, NFTs and wider markets.
            <br />
            <br />
            We run frequent{" "}
            <Link href="/#events" className="underline">
              trade nights and socials
            </Link>{" "}
            as well as a free 8 week bootcamp teaching you all the basics about
            trading crypto using a variety of strategies.
          </p>
        </section>
        <section id="events" className="lg:pb-10">
          <Marquee />
        </section>
        <section className="lg:pt-10 lg:pb-20 flex items-center justify-center overflow-hidden">
          <svg
            width="1366"
            height="80"
            viewBox="0 0 1366 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M188.5 40C188.5 45.3515 185.94 50.4931 181.22 55.2164C176.498 59.9417 169.641 64.2201 161.127 67.8238C144.101 75.0305 120.545 79.5 94.5 79.5C68.4549 79.5 44.8992 75.0305 27.8733 67.8238C19.3594 64.2201 12.5017 59.9417 7.77996 55.2164C3.06017 50.4931 0.5 45.3515 0.5 40C0.5 34.6485 3.06017 29.5069 7.77996 24.7836C12.5017 20.0583 19.3594 15.7799 27.8733 12.1762C44.8992 4.96947 68.4549 0.5 94.5 0.5C120.545 0.5 144.101 4.96947 161.127 12.1762C169.641 15.7799 176.498 20.0583 181.22 24.7836C185.94 29.5069 188.5 34.6485 188.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M356.5 40C356.5 45.3506 353.927 50.4918 349.182 55.2155C344.435 59.941 337.54 64.2195 328.981 67.8235C311.865 75.0304 288.183 79.5 262 79.5C235.817 79.5 212.135 75.0304 195.019 67.8235C186.46 64.2195 179.565 59.941 174.818 55.2155C170.073 50.4918 167.5 45.3506 167.5 40C167.5 34.6494 170.073 29.5082 174.818 24.7845C179.565 20.059 186.46 15.7805 195.019 12.1765C212.135 4.96956 235.817 0.5 262 0.5C288.183 0.5 311.865 4.96956 328.981 12.1765C337.54 15.7805 344.435 20.059 349.182 24.7845C353.927 29.5082 356.5 34.6494 356.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M862.5 40C862.5 45.3506 859.927 50.4918 855.182 55.2155C850.435 59.941 843.54 64.2195 834.981 67.8235C817.865 75.0304 794.183 79.5 768 79.5C741.817 79.5 718.135 75.0304 701.019 67.8235C692.46 64.2195 685.565 59.941 680.818 55.2155C676.073 50.4918 673.5 45.3506 673.5 40C673.5 34.6494 676.073 29.5082 680.818 24.7845C685.565 20.059 692.46 15.7805 701.019 12.1765C718.135 4.96956 741.817 0.5 768 0.5C794.183 0.5 817.865 4.96956 834.981 12.1765C843.54 15.7805 850.435 20.059 855.182 24.7845C859.927 29.5082 862.5 34.6494 862.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M1029.5 40C1029.5 45.3506 1026.93 50.4918 1022.18 55.2155C1017.43 59.941 1010.54 64.2195 1001.98 67.8235C984.865 75.0304 961.183 79.5 935 79.5C908.817 79.5 885.135 75.0304 868.019 67.8235C859.46 64.2195 852.565 59.941 847.818 55.2155C843.073 50.4918 840.5 45.3506 840.5 40C840.5 34.6494 843.073 29.5082 847.818 24.7845C852.565 20.059 859.46 15.7805 868.019 12.1765C885.135 4.96956 908.817 0.5 935 0.5C961.183 0.5 984.865 4.96956 1001.98 12.1765C1010.54 15.7805 1017.43 20.059 1022.18 24.7845C1026.93 29.5082 1029.5 34.6494 1029.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M1198.5 40C1198.5 45.3506 1195.93 50.4918 1191.18 55.2155C1186.43 59.941 1179.54 64.2195 1170.98 67.8235C1153.86 75.0304 1130.18 79.5 1104 79.5C1077.82 79.5 1054.14 75.0304 1037.02 67.8235C1028.46 64.2195 1021.57 59.941 1016.82 55.2155C1012.07 50.4918 1009.5 45.3506 1009.5 40C1009.5 34.6494 1012.07 29.5082 1016.82 24.7845C1021.57 20.059 1028.46 15.7805 1037.02 12.1765C1054.14 4.96956 1077.82 0.5 1104 0.5C1130.18 0.5 1153.86 4.96956 1170.98 12.1765C1179.54 15.7805 1186.43 20.059 1191.18 24.7845C1195.93 29.5082 1198.5 34.6494 1198.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M1365.5 40C1365.5 45.3515 1362.94 50.4931 1358.22 55.2164C1353.5 59.9417 1346.64 64.2201 1338.13 67.8238C1321.1 75.0305 1297.55 79.5 1271.5 79.5C1245.45 79.5 1221.9 75.0305 1204.87 67.8238C1196.36 64.2201 1189.5 59.9417 1184.78 55.2164C1180.06 50.4931 1177.5 45.3515 1177.5 40C1177.5 34.6485 1180.06 29.5069 1184.78 24.7836C1189.5 20.0583 1196.36 15.7799 1204.87 12.1762C1221.9 4.96947 1245.45 0.5 1271.5 0.5C1297.55 0.5 1321.1 4.96947 1338.13 12.1762C1346.64 15.7799 1353.5 20.0583 1358.22 24.7836C1362.94 29.5069 1365.5 34.6485 1365.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M525.5 40C525.5 45.3506 522.927 50.4918 518.182 55.2155C513.435 59.941 506.54 64.2195 497.981 67.8235C480.865 75.0304 457.183 79.5 431 79.5C404.817 79.5 381.135 75.0304 364.019 67.8235C355.46 64.2195 348.565 59.941 343.818 55.2155C339.073 50.4918 336.5 45.3506 336.5 40C336.5 34.6494 339.073 29.5082 343.818 24.7845C348.565 20.059 355.46 15.7805 364.019 12.1765C381.135 4.96956 404.817 0.5 431 0.5C457.183 0.5 480.865 4.96956 497.981 12.1765C506.54 15.7805 513.435 20.059 518.182 24.7845C522.927 29.5082 525.5 34.6494 525.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M692.5 40C692.5 45.3506 689.927 50.4918 685.182 55.2155C680.435 59.941 673.54 64.2195 664.981 67.8235C647.865 75.0304 624.183 79.5 598 79.5C571.817 79.5 548.135 75.0304 531.019 67.8235C522.46 64.2195 515.565 59.941 510.818 55.2155C506.073 50.4918 503.5 45.3506 503.5 40C503.5 34.6494 506.073 29.5082 510.818 24.7845C515.565 20.059 522.46 15.7805 531.019 12.1765C548.135 4.96956 571.817 0.5 598 0.5C624.183 0.5 647.865 4.96956 664.981 12.1765C673.54 15.7805 680.435 20.059 685.182 24.7845C689.927 29.5082 692.5 34.6494 692.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
          </svg>
        </section>
        <section className="pt-10 pb-10 pl-[2.5%] lg:pr-[2.5%] dark:text-neutral-200">
          <h3 className="font-medium text-3xl lg:text-4xl">
            What's included in the membership?
          </h3>
          <div className="lg:grid grid-cols-3 grid-rows-1 place-items-end mt-10 lg:mt-20">
            <div className="border border-black dark:border-neutral-200 min-h-[20vh] lg:h-[min-content] p-5 border__radius_top_left lg:mb-0 mb-2">
              <div className="flex items-center justify-between">
                <p className="text-3xl mb-2 font-[200]">Weekly Socials</p>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="14.5" className="stroke-black dark:stroke-neutral-200" />
                </svg>
              </div>
              <div className="h-[1px] w-full bg-black dark:bg-neutral-200 mt-2 mb-4"></div>
              <p className="text-sm lg:text-base lg:mb-0 mb-10">
                Connect with like-minded individuals, exchange market insights,
                and explore new strategies in a friendly and welcoming
                environment. Expand your network and be part of a thriving
                community.
              </p>
            </div>
            <div className="border border-black dark:border-neutral-200 lg:ml-2.5 xl:ml-5 min-h-[20vh] lg:h-[min-content]  p-5 border__radius_top_left lg:mb-0 mb-2">
              <div className="flex items-center justify-between">
                <p className="text-3xl mb-2 font-[200]">Trade Nights</p>
                <svg
                  width="33"
                  height="29"
                  viewBox="0 0 33 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.799 1.25L32.0885 26C32.6658 27 31.9441 28.25 30.7894 28.25H2.21058C1.05588 28.25 0.334191 27 0.911542 26L15.201 1.25C15.7783 0.249997 17.2217 0.249998 17.799 1.25Z"
                    className="stroke-black dark:stroke-neutral-200"
                  />
                </svg>
              </div>
              <div className="h-[1px] w-full bg-black dark:bg-neutral-200 mt-2 mb-4"></div>
              <p className="text-sm lg:text-base lg:mb-0 mb-10">
                Experience real-time trading at our exclusive Trading Nights.
                Designed to enhance your skills and foster a collaborative
                environment, these events provide an opportunity to trade live
                alongside others or discuss trade ideas.
                <br />
                <br />
                Engage in live trading sessions, exchange strategies, and stay
                updated on market trends.
              </p>
            </div>
            <div className="border border-black dark:border-neutral-200 lg:ml-2.5 xl:ml-5 min-h-[20vh] lg:h-[min-content]  p-5 border__radius_top_left lg:mb-0 mb-2">
              <div className="flex items-center justify-between">
                <p className="text-3xl mb-2 font-[200]">Crypto Bootcamp</p>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="1.5"
                    className="dark:stroke-neutral-200 stroke-black"
                  />
                </svg>
              </div>
              <div className="h-[1px] w-full bg-black dark:bg-neutral-200 mt-2 mb-4"></div>
              <p className="text-sm lg:text-base lg:mb-0 mb-10">
                Learn cryptocurrency trading with our comprehensive crypto
                bootcamp. Specifically tailored for beginners, this program is
                led by a team of seasoned traders with a combined experience of
                over 14 years and crypto profits of over 1000%. Gain a solid
                foundation in trading principles, learn effective strategies,
                and develop the necessary skills to navigate the dynamic crypto
                market confidently.
                <br />
                <br />
                Whether you're new to trading or seeking to refine your
                techniques, our Trading Bootcamp provides the knowledge and
                expertise you need to make informed trading decisions.{" "}
                <Link href="/bootcamp" className="underline">
                  Find out more.
                </Link>
              </p>
            </div>
          </div>
          {/* <div className="w-[100%] h-[1px] bg-black dark:bg-neutral-200 mt-6"></div>
          <div className="mt-6">
            <p className="text-2xl">- Weekly socials</p>
            <p className="mt-2">
              We run socials every week at multiple clubs and bars all over Exeter.
            </p>
          </div>
          <div className="w-[100%] h-[1px] bg-black dark:bg-neutral-200 mt-6"></div>
          <div className="mt-6 lg:ml-[33%] lg:w-[30%]">
            <p className="text-2xl">- Trade Nights</p>
            <p className="mt-2">
              Discuss trading and trade alongside your fellow society members. Whoever makes the most wins a prize.
            </p>
          </div>
          <div className="w-[100%] h-[0.5px] bg-black dark:bg-neutral-200 mt-6"></div>
          <div className="mt-6 lg:ml-[66%]">
            <p className="text-2xl">- Trading Bootcamp</p>
            <p className="mt-2">
              Our highly experienced committee will teach you the basics of crypto trading for free.
            </p>
          </div> */}
        </section>
        <section className="lg:pt-20 lg:pb-20 flex items-center justify-center overflow-hidden">
          <svg
            width="1381"
            height="82"
            viewBox="0 0 1381 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1261.5"
              y="0.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="1121.5"
              y="1.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="981.5"
              y="0.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="841.5"
              y="1.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="701.5"
              y="1.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="561.5"
              y="2.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="421.5"
              y="1.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="281.5"
              y="2.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="140.5"
              y="1.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="0.5"
              y="2.5"
              width="119"
              height="79"
              rx="9.5"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="541.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="260.5"
              y="37.5"
              width="20"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="401.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="120.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="681.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="821.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="961.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="1101.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
            <rect
              x="1241.5"
              y="37.5"
              width="19"
              height="9"
              rx="2"
              className="stroke-black dark:stroke-neutral-200"
            />
          </svg>
        </section>
        <section className="pt-10 pb-10 pl-[2.5%] pr-[2.5%]  dark:text-neutral-200">
          <h4 className="font-medium text-3xl lg:text-4xl mb-4">
            Upcoming events
          </h4>
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-8 pt-5">
            <div className="pt-6 lg:pt-0">
              <div className="w-full">
                <Image
                  width={400}
                  height={800}
                  src="/cryptoSoc__img_bitcoin.webp"
                  alt="Crypto Society Course"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-2xl  font-[500] mt-4">
                First weekly trading session - 09/09/2023
              </p>
              <p className="mt-2 lg:text-xl">
                Join us for our first ever trade night, we’ll be tackling
                anything related to crypto and NFTs. You’ll be able to share
                your ideas and network with other traders.
              </p>
              <LinkButton text="Get tickets here" href="#" />
            </div>
            <div className="pt-6 lg:pt-0">
              <div className="w-full">
                <Image
                  width={400}
                  height={800}
                  src="/cryptoSoc__img_about.webp"
                  alt="Crypto Society Course"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-2xl font-[500] mt-4">
                First weekly social at The Ram - 14/09/2023
              </p>
              <p className="mt-2 lg:text-xl">
                Come meet the committee and other likeminded individuals to talk
                about everything trading.
              </p>
              <LinkButton text="Get tickets here" href="#" />
            </div>
            <div className="pt-6 lg:pt-0">
              <div className="w-full">
                <Image
                  width={400}
                  height={800}
                  src="/cryptoSoc__img_course.webp"
                  alt="Crypto Society Course"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-2xl font-[500] mt-4">
                Trading Bootcamp Lesson 1 - 24/09/2023
              </p>
              <p className="mt-2 lg:text-xl">
                The first lesson of the 8 week bootcamp. You'll learn the basics
                of what trading is and some of the advantages of knowing how to
                trade.
              </p>
              <LinkButton text="Enroll for free" href="#" />
            </div>
          </div>
        </section>
        <section className="lg:pt-10 lg:pb-20 flex items-center justify-center overflow-hidden">
          <svg
            width="1366"
            height="80"
            viewBox="0 0 1366 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M188.5 40C188.5 45.3515 185.94 50.4931 181.22 55.2164C176.498 59.9417 169.641 64.2201 161.127 67.8238C144.101 75.0305 120.545 79.5 94.5 79.5C68.4549 79.5 44.8992 75.0305 27.8733 67.8238C19.3594 64.2201 12.5017 59.9417 7.77996 55.2164C3.06017 50.4931 0.5 45.3515 0.5 40C0.5 34.6485 3.06017 29.5069 7.77996 24.7836C12.5017 20.0583 19.3594 15.7799 27.8733 12.1762C44.8992 4.96947 68.4549 0.5 94.5 0.5C120.545 0.5 144.101 4.96947 161.127 12.1762C169.641 15.7799 176.498 20.0583 181.22 24.7836C185.94 29.5069 188.5 34.6485 188.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M356.5 40C356.5 45.3506 353.927 50.4918 349.182 55.2155C344.435 59.941 337.54 64.2195 328.981 67.8235C311.865 75.0304 288.183 79.5 262 79.5C235.817 79.5 212.135 75.0304 195.019 67.8235C186.46 64.2195 179.565 59.941 174.818 55.2155C170.073 50.4918 167.5 45.3506 167.5 40C167.5 34.6494 170.073 29.5082 174.818 24.7845C179.565 20.059 186.46 15.7805 195.019 12.1765C212.135 4.96956 235.817 0.5 262 0.5C288.183 0.5 311.865 4.96956 328.981 12.1765C337.54 15.7805 344.435 20.059 349.182 24.7845C353.927 29.5082 356.5 34.6494 356.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M862.5 40C862.5 45.3506 859.927 50.4918 855.182 55.2155C850.435 59.941 843.54 64.2195 834.981 67.8235C817.865 75.0304 794.183 79.5 768 79.5C741.817 79.5 718.135 75.0304 701.019 67.8235C692.46 64.2195 685.565 59.941 680.818 55.2155C676.073 50.4918 673.5 45.3506 673.5 40C673.5 34.6494 676.073 29.5082 680.818 24.7845C685.565 20.059 692.46 15.7805 701.019 12.1765C718.135 4.96956 741.817 0.5 768 0.5C794.183 0.5 817.865 4.96956 834.981 12.1765C843.54 15.7805 850.435 20.059 855.182 24.7845C859.927 29.5082 862.5 34.6494 862.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M1029.5 40C1029.5 45.3506 1026.93 50.4918 1022.18 55.2155C1017.43 59.941 1010.54 64.2195 1001.98 67.8235C984.865 75.0304 961.183 79.5 935 79.5C908.817 79.5 885.135 75.0304 868.019 67.8235C859.46 64.2195 852.565 59.941 847.818 55.2155C843.073 50.4918 840.5 45.3506 840.5 40C840.5 34.6494 843.073 29.5082 847.818 24.7845C852.565 20.059 859.46 15.7805 868.019 12.1765C885.135 4.96956 908.817 0.5 935 0.5C961.183 0.5 984.865 4.96956 1001.98 12.1765C1010.54 15.7805 1017.43 20.059 1022.18 24.7845C1026.93 29.5082 1029.5 34.6494 1029.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M1198.5 40C1198.5 45.3506 1195.93 50.4918 1191.18 55.2155C1186.43 59.941 1179.54 64.2195 1170.98 67.8235C1153.86 75.0304 1130.18 79.5 1104 79.5C1077.82 79.5 1054.14 75.0304 1037.02 67.8235C1028.46 64.2195 1021.57 59.941 1016.82 55.2155C1012.07 50.4918 1009.5 45.3506 1009.5 40C1009.5 34.6494 1012.07 29.5082 1016.82 24.7845C1021.57 20.059 1028.46 15.7805 1037.02 12.1765C1054.14 4.96956 1077.82 0.5 1104 0.5C1130.18 0.5 1153.86 4.96956 1170.98 12.1765C1179.54 15.7805 1186.43 20.059 1191.18 24.7845C1195.93 29.5082 1198.5 34.6494 1198.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M1365.5 40C1365.5 45.3515 1362.94 50.4931 1358.22 55.2164C1353.5 59.9417 1346.64 64.2201 1338.13 67.8238C1321.1 75.0305 1297.55 79.5 1271.5 79.5C1245.45 79.5 1221.9 75.0305 1204.87 67.8238C1196.36 64.2201 1189.5 59.9417 1184.78 55.2164C1180.06 50.4931 1177.5 45.3515 1177.5 40C1177.5 34.6485 1180.06 29.5069 1184.78 24.7836C1189.5 20.0583 1196.36 15.7799 1204.87 12.1762C1221.9 4.96947 1245.45 0.5 1271.5 0.5C1297.55 0.5 1321.1 4.96947 1338.13 12.1762C1346.64 15.7799 1353.5 20.0583 1358.22 24.7836C1362.94 29.5069 1365.5 34.6485 1365.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M525.5 40C525.5 45.3506 522.927 50.4918 518.182 55.2155C513.435 59.941 506.54 64.2195 497.981 67.8235C480.865 75.0304 457.183 79.5 431 79.5C404.817 79.5 381.135 75.0304 364.019 67.8235C355.46 64.2195 348.565 59.941 343.818 55.2155C339.073 50.4918 336.5 45.3506 336.5 40C336.5 34.6494 339.073 29.5082 343.818 24.7845C348.565 20.059 355.46 15.7805 364.019 12.1765C381.135 4.96956 404.817 0.5 431 0.5C457.183 0.5 480.865 4.96956 497.981 12.1765C506.54 15.7805 513.435 20.059 518.182 24.7845C522.927 29.5082 525.5 34.6494 525.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
            <path
              d="M692.5 40C692.5 45.3506 689.927 50.4918 685.182 55.2155C680.435 59.941 673.54 64.2195 664.981 67.8235C647.865 75.0304 624.183 79.5 598 79.5C571.817 79.5 548.135 75.0304 531.019 67.8235C522.46 64.2195 515.565 59.941 510.818 55.2155C506.073 50.4918 503.5 45.3506 503.5 40C503.5 34.6494 506.073 29.5082 510.818 24.7845C515.565 20.059 522.46 15.7805 531.019 12.1765C548.135 4.96956 571.817 0.5 598 0.5C624.183 0.5 647.865 4.96956 664.981 12.1765C673.54 15.7805 680.435 20.059 685.182 24.7845C689.927 29.5082 692.5 34.6494 692.5 40Z"
              className="stroke-black dark:stroke-neutral-200"
            />
          </svg>
        </section>
        <section className="pt-10 pb-10 pl-[2.5%] pr-[2.5%]  lg:grid lg:grid-cols-2 lg:grid-rows-1 dark:text-neutral-200">
          <div>
            <h5 className="font-medium text-3xl lg:text-4xl ">FAQ</h5>
          </div>
          <Faq />
        </section>
        <div></div>
      </main>
    </Transition>
  );
}
