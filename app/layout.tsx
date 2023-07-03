import './globals.css'

export const metadata = {
  title: 'Eat healthy, Live longer - Qitcheen',
  description: 'Get the best Nigerian delicacies at your door step in no time ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-primary'>{children}</body>
    </html>
  )
}
