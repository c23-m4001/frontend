import { useMemo } from 'react'
import SVG from 'react-inlinesvg'
import { useLanguage } from '../../../core/i18n/LanguageProvider'
import { Select } from '../Select/Select'

export const ActiveLanguageSelect = ({ className }) => {
  const { language, setLanguage } = useLanguage()

  const options = [
    {
      label: (
        <div className="flex items-center gap-x-4">
          <SVG
            className="text-primary active:text-white"
            width="24"
            alt="icon"
            src={'/svgs/id.svg'}
          />
          Indonesia
        </div>
      ),
      value: 'id',
    },
    {
      label: (
        <div className="flex items-center gap-x-4">
          <SVG
            className="text-primary active:text-white"
            width="24"
            alt="icon"
            src={'/svgs/en.svg'}
          />
          English
        </div>
      ),
      value: 'en',
    },
  ]

  const value = useMemo(
    () => options.find((option) => language === option.value) || options[0],
    [language]
  )

  return (
    <div className={className}>
      <Select
        value={value}
        onChange={(val) => setLanguage(val.value)}
        options={options}
      />
    </div>
  )
}
