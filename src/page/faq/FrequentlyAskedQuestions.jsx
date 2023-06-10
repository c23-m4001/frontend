import React from 'react'
import Faq from 'react-faq-component'
import './faq.css'

export const FrequentlyAskedQuestions = () => {
  const faq = {
    rows: [
      {
        title: 'Bagaimana cara menggunakan Moneta?,',
        content:
          'Anda harus mendaftar menggunakan Google atau Email kemudian masuk menggunakan akun yang telah terdaftar untuk menggunakan Moneta.',
      },
      {
        title: 'Pembuatan dompet awal tidak memasukan saldo?',
        content:
          'Saldo awal dapat ditambahkan melalui Tambah Transaksi kemudian pilih jenis Income.',
      },
      {
        title: 'Bagaimana cara menambahkan transaksi?',
        content:
          'Pada halaman Transaction pilih menu Tambah Transaksi yang terletak di bagian pojok kanan atas di sebelah kiri icon profile, lalu isi kolom kemudian klik Tambah.',
      },
      {
        title: 'Bagaimana cara menambahkan wallet baru?',
        content:
          'Buka halaman Wallet kemudian pilih menu Tambah Wallet yang terletak di bagian pojok kanan atas, lalu masukan nama dan jenis wallet kemudian klik Tambah.',
      },
      {
        title: 'Apa itu Custom Category?',
        content:
          'Custom Category adalah jenis kategori yang dibuat oleh pengguna diluar dari Default Category.',
      },
      {
        title: 'Bagaimana cara menambahkan Custom Category?',
        content:
          'Buka halaman Category kemudian pilih menu Tambah Kategori yang terletak di bagian pojok kanan atas, lalu masukan nama Category dan jenis Category kemudian klik Tambah.',
      },
    ],
  }
  return (
    <div className="h-min-screen bg-background">
      <div className="h-full flex flex-col space-y-6 justify-center py-40px px-20px sm:px-100px lg:px-200px">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl sm:text-2xl xl:text-3xl text-headline">
            FAQ
          </h1>
        </div>
        <div className="grow">
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-20 pb-6 sm:flex-row">
            <img
              className="max-w-180px lg:max-w-300px"
              alt="faq"
              src="/svgs/faq-amico.svg"
            />
            <div className="flex items-center font-semibold text-headline sm:text-lg">
              <p>
                Selamat Datang di Moneta! Silahkan baca FAQ di bawah sebelum
                menggunakan aplikasi
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md">
            <Faq
              data={faq}
              styles={{
                bgColor: 'white',
                titleTextColor: '#48482a',
                rowTitleColor: '#78789a',
                rowTitleTextSize: 'medium',
                rowContentColor: '#48484a',
                rowContentTextSize: '16px',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '30px',
                rowContentPaddingRight: '30px',
                arrowColor: 'black',
              }}
            />
          </div>
        </div>
      </div>
      <div className="bottom-0 text-center py-4">
        <p>
          Illustration supported by <a href="https://storyset.com/">Storyset</a>
        </p>
      </div>
    </div>
  )
}
