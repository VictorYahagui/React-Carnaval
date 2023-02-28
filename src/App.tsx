import './style/global.css'
import illustration1 from './assets/ilustra-01.png'
import illustration2 from './assets/ilustra-02.png'
import { CaretDown, MagnifyingGlass, MapPin } from 'phosphor-react'
import { Button } from './components/Button'
import { EventCard } from './components/EventCard'

export function App() {


  return (
    <main className="w-full min-h-screen flex items-center flex-col gap-24 bg-white-500">
      <section className="w-full lg:h-full h-fit lg:max-h-[50%] bg-white-500 relative flex items-center justify-center flex-col gap-10 p-10">
        <img src={illustration1} alt="Illustration" className=' absolute top-0 left-0 xl:flex ' />
        <img src={illustration2} alt="Illustration" className='absolute bottom-0 right-0 xl:flex' />

        <div className="flex flex-col items-center gap-4 px-8 w-full xl:w-2/4 z-0">
          <span className="uppercase font-medium text-red-500">Find your block</span>
          <h1 className="font-bold text-center text-5xl leading-tight text-black-500">Encontre os <span className='text-purple-500'>melhores blocos</span> de carnaval de 2023</h1>
        </div>

        <form className='flex flex-col w-full max-w-3xl lg:max-w-none lg:w-fit  lg:flex-row items-center gap-6 p-10 bg-white z-0'>
          <div className='w-full lg:w-fit xl:w-80 flex items-center px-4 py-3 gap-3 rounded-md bg-white-600 cursor-pointer'>
            <label htmlFor="search" className="sr-only">Search</label>
            <MagnifyingGlass className='text-red-500' size={24} />
            <input type="text" name="search" placeholder="Pesquise por nome" className=' w-full h-full bg-transparent border-none focus:outline-none focus:border-transparent' />
          </div>

          <div className='w-full lg:w-fit xl:w-80 flex items-center px-4 py-3 gap-3 rounded-md bg-white-600 cursor-pointer z-[2] relative'>
            <label htmlFor="search" className="sr-only">Search</label>
            <MapPin className='text-red-500' size={24} />
            <select name="" id="search" className='w-full h-full bg-transparent appearance-none focus:outline-none outline-none z-[1]'>
              <option value="placeholder" className='opacity-50'>Selecione uma cidade</option>
              <option value="saab" className=''>Saab</option>
              <option value="mercedes" className=''>Mercedes</option>
              <option value="audi" className=''>Audi</option>
            </select>
            <CaretDown size={28} className='text-gray-500 absolute right-[1rem]' />
          </div>

          <button type="submit" className='w-full lg:w-fit px-6 py-3 text-white-500 bg-purple-500 rounded-md uppercase text-sm font-bold transition-all hover:brightness-90'>Buscar agora</button>

        </form>
      </section>
      <header className='w-5/6 flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Blocos recomendados</h1>
        <div className='flex justify-center items-center'>
          <Button label={'Lista'} isActive={false} />
          <Button label={'Mapa'} isActive={true} />
        </div>

      </header>
      <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1'>
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
        <EventCard backgroundImage={'asda'} description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} location={'São Paulo - SP'} title={'O Python do vovô não sobe mais'} />
      </div>
    </main>
  )
}
