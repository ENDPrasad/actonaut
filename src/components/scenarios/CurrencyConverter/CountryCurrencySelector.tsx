import { useState } from 'react'
import { Autocomplete, TextField, Typography } from '@mui/material'

const countryCurrencyMap: Record<string, string> = {
  "United States": "USD",
  "India": "INR",
  "Japan": "JPY",
  "United Kingdom": "GBP",
  "Canada": "CAD",
  "Australia": "AUD",
  "Germany": "EUR",
  "France": "EUR",
  "Italy": "EUR",
  "Spain": "EUR",
  "Brazil": "BRL",
  "Russia": "RUB",
  "China": "CNY",
  "South Korea": "KRW",
  "Mexico": "MXN",
  "South Africa": "ZAR",
  "New Zealand": "NZD",
  "Switzerland": "CHF",
  "Sweden": "SEK",
  "Norway": "NOK",
  "Denmark": "DKK",
  "Saudi Arabia": "SAR",
  "United Arab Emirates": "AED",
  "Singapore": "SGD",
  "Turkey": "TRY",
  "Argentina": "ARS",
  "Indonesia": "IDR",
  "Thailand": "THB",
  "Malaysia": "MYR",
}

const countries = Object.keys(countryCurrencyMap)

export default function CountryCurrencySelector() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  return (
    <div className="p-4 max-w-md mx-auto">
      <Autocomplete
        options={countries}
        value={selectedCountry}
        onChange={(_e, newVal) => setSelectedCountry(newVal)}
        renderInput={(params) => <TextField {...params} label="Select Country" />}
      />
      <Typography variant="h6" className="mt-4">
        Currency: {selectedCountry ? countryCurrencyMap[selectedCountry] : '---'}
      </Typography>
    </div>
  )
}
