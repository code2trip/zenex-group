import '../styles/index.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: {
    default: 'Ns.Cards iGaming VIP - Gaming Card Solutions',
    template: 'Ns.Cards iGaming VIP - Gaming Card Solutions | %s',
  },
  description: 'Premium gaming card solutions for VIP players by Zenex Group. Unlimited transactions, transparent fees, seamless integration for iGaming businesses.',
  keywords: 'igaming, vip cards, gaming solutions, unlimited transactions, transparent fees, card issuance, zenex group',

  openGraph: {
    type: 'website',
    title: {
      default: 'Ns.Cards iGaming VIP - Gaming Card Solutions',
      template: 'Ns.Cards iGaming VIP - Gaming Card Solutions | %s',
    },
    description: 'Transform your iGaming business with premium VIP card solutions. Unlimited transactions, transparent fees, and seamless integration.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fnscardsi6319back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.9" />
        <script type="module" src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  )
}
