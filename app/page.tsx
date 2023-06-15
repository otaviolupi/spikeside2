import { UserNav } from './components/navigation'

export default function Page() {
    let navLinks = [
        {
            name: "Teste 01",
            href: "test-1"
        },
        {
            name: "Teste 02",
            href: "test-2"
        }
    ];

    return (
        <div className='px-[64px] flex items-center bg-[#1F2326] justify-between'>
            <img className='w-auto h-auto border-r border-l-white' src="/logo-text.png" alt="Spike Side" />
            <img className='w-auto h-auto mx-[18px]' src="/logo-icon.png" alt="Spike Side" />
            <UserNav navLinks={navLinks} />
            <a className='bg-[#ff4655] text-white py-4 px-6'>Monte seu card!</a>
        </div>
    )
}