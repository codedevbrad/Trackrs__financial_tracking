import Sidebar from './Sidebar'

export async function generateMetadata({ params }) {
  return {
    title: 'authed app 2',
    description: 'new data',
  };
} 

export default function AuthedLayout({ children, }: { children: React.ReactNode, }) {
    return (
      <body className='h-full scrollbar-hide'>
        <Sidebar>
            <main className={'flex-col flex min-h-screen'}>
                {children}
            </main>
        </Sidebar>
      </body>
    );
}
