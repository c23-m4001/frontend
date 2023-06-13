import React from 'react'
import Faq from 'react-faq-component'
import './faq.css'
import { useIntl } from 'react-intl'

export const FrequentlyAskedQuestions = () => {
  const intl = useIntl()
  const faq = {
    rows: [
      {
        title: intl.formatMessage({ id: 'firstQuestion' }),
        content: intl.formatMessage({ id: 'firstAnswer' }),
      },
      {
        title: intl.formatMessage({ id: 'secondQuestion' }),
        content: intl.formatMessage({ id: 'secondAnswer' }),
      },
      {
        title: intl.formatMessage({ id: 'thirdQuestion' }),
        content: intl.formatMessage({ id: 'thirdAnswer' }),
      },
      {
        title: intl.formatMessage({ id: 'fourthQuestion' }),
        content: intl.formatMessage({ id: 'fourthAnswer' }),
      },
      {
        title: intl.formatMessage({ id: 'fifthQuestion' }),
        content: intl.formatMessage({ id: 'fifthAnswer' }),
      },
      {
        title: intl.formatMessage({ id: 'sixthQuestion' }),
        content: intl.formatMessage({ id: 'sixthAnswer' }),
      },
    ],
  }
  return (
    <div className="h-min-screen bg-background">
      <div className="h-full flex flex-col space-y-6 justify-center py-40px px-20px sm:px-100px lg:px-200px">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl sm:text-2xl xl:text-3xl text-headline">
            {intl.formatMessage({ id: 'faqTitle' })}
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
              <p>{intl.formatMessage({ id: 'welcomeMessage' })}</p>
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
          {intl.formatMessage({ id: 'illustrationCredit' })}
          <a href="https://storyset.com/">Storyset</a> &{' '}
          <a href="https://themeisle.com/">Themeisle</a>
        </p>
      </div>
    </div>
  )
}
