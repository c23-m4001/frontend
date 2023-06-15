import { Button } from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './LandingPage.css'

import { Autoplay, Pagination, Navigation } from 'swiper'

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen overflow-y-auto">
      <div className="px-20px sm:px-40px md:px-50px w-full py-20px bg-white flex items-center justify-between">
        <div className="flex items-center">
          <img
            alt="Moneta logo"
            src="/svgs/moneta-logo-sidebar.svg"
            className="cursor-pointer"
            width="50px"
          />
          <h1 className="brand-name text-primary cursor-pointer font-extrabold text-xl ml-15px">
            MONETA
          </h1>
        </div>
        <Button
          type="button"
          onClick={() => {
            navigate('/auth/login')
          }}
          className="rounded-xl btn btn-primary font-bold text-base"
        >
          Login
        </Button>
      </div>

      <section className="bg-white">
        <div className="py-24 text-center px-20px sm:px-40px md:px-50px">
          <h1 className="mb-6 text-4xl font-bold text-headline md:text-5xl">
            A powerful way to ensure your financial stability
          </h1>
          <p className="mb-6 text-lg font-normal text-paragraph lg:text-xl sm:px-16 lg:px-48 ">
            Manage your money with care by using Moneta. Make it under your
            control, wherever you may be. Moneta helps you making financial
            decisions easier.
          </p>
          <div className="flex justify-center mb-6">
            <img
              width="200px"
              alt="checklist illustration"
              src="/svgs/checklist-illustration.svg"
            />
          </div>
          <Button
            type="button"
            onClick={() => {
              navigate('/auth/login')
            }}
            className="rounded-xl btn btn-primary font-medium text-lg"
          >
            Get started
          </Button>
        </div>
      </section>

      <section className="bg-background">
        <div className="py-24 px-20px sm:px-40px md:px-50px">
          <h2 className="mb-12 text-3xl font-bold text-headline text-center md:text-4xl">
            Our Main Features
          </h2>
          <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
            <div className="bg-white p-20px rounded-xl">
              <div className="flex justify-center items-center mb-4">
                <img
                  width="200px"
                  alt="transaction illustration"
                  src="/svgs/transaction-illustration.svg"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-headline">
                Transaction
              </h3>
              <p className="text-paragraph">
                Track your daily transactions and discover your transaction
                summary in one place.
              </p>
            </div>
            <div className="bg-white p-20px rounded-xl">
              <div className="flex justify-center items-center mb-4">
                <img
                  width="200px"
                  alt="wallet illustration"
                  src="/svgs/wallet-illustration.svg"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-headline">Wallet</h3>
              <p className="text-paragraph">
                Keep track of your saving process and reach your financial goals
                by separating your demands into different wallets.
              </p>
            </div>
            <div className="bg-white p-20px rounded-xl">
              <div className="flex justify-center items-center mb-4">
                <img
                  width="200px"
                  alt="category illustration"
                  src="/svgs/category-illustration.svg"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-headline">Category</h3>
              <p className="text-paragraph">
                Utilize any default category and make as many custom categories
                as you like.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="pt-24 px-20px sm:px-40px md:px-50px">
          <h2 className="text-3xl font-bold text-headline text-center md:text-4xl">
            Testimonials
          </h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden ">
              <blockquote className="p-4 sm:p-8">
                <Icon
                  className="text-primary"
                  icon="icon-park-outline:quote"
                />
                <p className="text-base px-10px">
                  Mantap!! UI/UX nya bagus mudah dimengerti oleh pengguna!
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-primary">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white">
                    <img src="/svgs/avatar.svg" />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Maulana Dimyati</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon
                  className="text-primary"
                  icon="icon-park-outline:quote"
                />
                <p className="text-base px-10px">
                  Moneta telah membantu saya melihat alur keuangan setiap bulan
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-primary">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white">
                    <img src="/svgs/avatar.svg" />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>David Yappeter</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon
                  className="text-primary"
                  icon="icon-park-outline:quote"
                />
                <p className="text-base px-10px">
                  Mudah digunakan.. suka banget sama fitur - fiturnya 🥰
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-primary">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white">
                    <img src="/svgs/avatar.svg" />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Annisa Syasqia Zain</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon
                  className="text-primary"
                  icon="icon-park-outline:quote"
                />
                <p className="text-base px-10px">
                  Good Job! Walaupun sudah bagus jangan berpuas hati, ditunggu
                  pengembangan ke depannya.
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-primary">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white">
                    <img src="/svgs/avatar.svg" />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Fioreza Radhin Naufal</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="bg-white border-2 border-dashed border-primary rounded-xl drop-shadow-lg overflow-hidden">
              <blockquote className="p-4 sm:p-8">
                <Icon
                  className="text-primary"
                  icon="icon-park-outline:quote"
                />
                <p className="text-base px-10px">
                  Keren nih semua fungsional sudah dapat dijalankan. Desainnya
                  juga cukup baik
                </p>
              </blockquote>
              <div className="w-full flex items-center justify-between px-8 py-4 bg-primary">
                <div className="flex items-center gap-5">
                  <div className="rounded-full border-2 w-10 h-10 border-white">
                    <img src="/svgs/avatar.svg" />
                  </div>
                  <figcaption className="text-white text-sm text-left">
                    <div>Egy Yuda Nugraha</div>
                    <div className="opacity-70">
                      Student at Dicoding Academy
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="bg-white">
        <div className="py-24 text-center px-20px sm:px-40px md:px-50px">
          <h2 className="mb-4 text-4xl font-bold text-headline md:text-5xl">
            Start spending wisely and saving cleverly with Moneta
          </h2>
          <p className="mb-4 text-lg font-normal text-paragraph lg:text-xl sm:px-16 lg:px-48 ">
            Financial stability is within your reach.
          </p>
          <Button
            type="button"
            onClick={() => {
              navigate('/auth/login')
            }}
            className="rounded-xl btn btn-primary font-medium text-lg"
          >
            Join us
          </Button>
        </div>
      </section>

      <div className="bottom-0 text-center py-4">
        <p>&copy; Moneta — 2023. All rights reserved.</p>
      </div>
    </div>
  )
}
