import '../css/globals.css'

export default function RootLayout({ children, } : { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className='h-full'>
      <head /> 
      { children }
    </html>
  )
}
