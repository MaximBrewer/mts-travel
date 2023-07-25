"use client"

import Clouds from '../images/clouds.png'
import ImagesGroup from '../images/group.svg'
import MtcLogo from '../Icons/MtcLogo';
import BelkaCarLogo from '../Icons/BelkaCarLogo';
import Heart from '../Icons/Heart';
import Pin from '../Icons/Pin';
import { Scrollbar } from 'smooth-scrollbar-react';
import Photo1 from "../images/dabc2b2edd4adfe647c84e57b5fe73e5.jpeg"
import Photo2 from "../images/4bd196b5930b6dcc3df975e56db3e466.jpeg"
import Photo3 from "../images/e4d60906f759e82e1413db9829ee7485.jpeg"
import Photo4 from "../images/95cc4fffbee9cbdf7ad588c7cbc60461.jpg"
import Photo5 from "../images/a3104b2679ed27625829d608af6795c0.jpeg"
import Photo6 from "../images/ce86e5ef8d54f79313e683fa87c16289.jpeg"
import Photo7 from "../images/66eecf7269a308036061cb2e5d77f1b2.jpeg"
import Sochi from "../images/sochi.jpg"
import Kazan from "../images/spb.jpg"
import Kalin from "../images/kalini.jpg"
import LR1 from "../images/lr1.svg"
import LL1 from "../images/ll1.svg"
import Spb from "../images/kazan.jpg"
import Road1 from "../images/road1.svg"
import Road2 from "../images/road2.svg"
import Roadm1 from "../images/roadm1.svg"
import Roadm2 from "../images/roadm2.svg"
import Roadm3 from "../images/roadm3.svg"
import Photos from "../images/photos.png"
import MPhotos from "../images/mphotos.png"
import Girls from "../images/girls.jpg"

import { useEffect, useRef, useState } from 'react';


const Filter = (props) => {

    const { city, setAnswers, answers, findex, setFindex } = props

    return questions[city.code][findex] ? <div className="container mx-auto">
        <div className="bg-white rounded-[26px] px-4 xl:px-24 py-8 xl:py-12 xl:py-16 relative">
            <h4 className="text-center text-black text-2xl xl:text-[36px] font-bold leading-tight mb-6">{questions[city.code][findex].question}</h4>
            <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-x-5 gap-y-8">
                {questions[city.code][findex].answers.map((item, idx) => <a key={idx} href="#" onClick={e => {
                    setAnswers(prev => {
                        let arr = prev.slice()
                        arr.push(idx)
                        return arr
                    })
                    setFindex(prev => ++prev)
                }} className="xl:w-[calc(50%-10px)] h-[180px] xl:h-[119px] bg-cover bg-center flex items-center justify-center rounded-xl group px-8" style={{ backgroundImage: `url('${item.img}')` }}>
                    <div className="z-20 relative text-center text-black text-sm font-medium px-8 group-hover:scale-[102%] duration-500 transition py-3 bg-white rounded-full">{item.text}</div>
                </a>)}
            </div>
        </div>
    </div> : ``
}

export default function Welcome(props) {

    const [scale, setScale] = useState({
        transform: `scale(1)`
    })

    const [scale2, setScale2] = useState({
        transform: `scale(1)`
    })

    const [city, setCity] = useState(null);

    const [answers, setAnswers] = useState([]);

    const [findex, setFindex] = useState(0)

    const [route, setRoute] = useState(null);

    const citiesRef = useRef(null)

    const resultsRef = useRef(null)

    const smooth = useRef(null)

    const scroll = (e) => {
        setScale({
            transform: `scale(${(100 + e.offset.y / 50) / 100})`
        })
        setScale2({
            transform: window.innerHeight > 1280 ? `scale(${(100 + (e.offset.y - window.innerHeight * 3.5) / 50) / 100})` : `scale(${(100 + (e.offset.y - window.innerHeight * 6) / 50) / 100})`
        })
    }

    useEffect(() => {
        setFindex(0)
        setAnswers([])
        if (route) {
            setAnswers([]);
            setCity(null)
            setTimeout(() => {
                smooth.current.scrollIntoView(resultsRef.current, { offsetTop: 32 });
            }, 50)
        }
    }, [route])

    useEffect(() => {
        setFindex(0)
        setAnswers([])
        if (city && answers.length) {
            if (questions[city.code] && questions[city.code].length <= answers.length) {
                setRoute(routes[city.code][answers[0]])
            }
        }
    }, [answers, city])

    return (
        <>
            <div className="bg-indigo-300 bg-cover bg-top">
                <div className={`h-screen w-screen overflow-hidden`}>
                    <Scrollbar
                        ref={smooth}
                        damping={0.1}
                        thumbMinSize={100}
                        renderByPixels={false}
                        alwaysShowTracks={true}
                        continuousScrolling={true}
                        className={`h-screen w-screen`}
                        onScroll={scroll}
                    >
                        <div className="relative">
                            <div className={`w-screen overflow-hidden`}>
                                <div className="relative">
                                    <div className={`bg-cover xl:h-screen xl:min-h-[680px] xl:flex xl:flex-col xl:justify-between xl:items-center`} style={{ backgroundImage: `url('${Clouds.src}')` }}>
                                        <div className="w-full xl:mb-20">
                                            <div className={`xl:grow container mx-auto  flex flex-col items-center justify-start relative xl:py-6`}>
                                                <a href="#" className="absolute right-8 top-6 text-stone-900 text-sm hidden xl:block">Правила</a>
                                                <div className={`flex items-center space-x-2 sm:space-x-6 xl:space-x-10`}>
                                                    <MtcLogo className="w-[136px] xl:w-[174px] h-auto" />
                                                    <div className={`h-12 w-px border-l border-black`}></div>
                                                    <BelkaCarLogo className="w-[112px] xl:w-[148px] h-auto" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`xl:grow container mx-auto  flex flex-col items-center justify-start relative xl:py-6`}>

                                            <div className="text-[24px] sm:text-[36px] xl:text-[46px] font-bold uppercase flex items-center space-x-3 xl:space-x-8 mb-4 xl:mb-[4vh] leading-none">
                                                <Heart className="w-[58px] sm:w-[84px] xl:w-[130px] h-auto -my-8" />
                                                <span>Приключения<br />включены</span>
                                            </div>
                                            <img src={ImagesGroup.src} alt={``} className={`shrink-0 w-[16rem] sm:w-[346px] xs:w-auto mb-4 xl:mb-10`} />
                                            <div className="px-4 xl:px-0 text-center text-[24px] leading-tight font-medium max-w-lg xl:max-w-4xl">Отель, каршеринг, маршрут — все готово.<br />Не&nbsp;хватает только тебя.</div>
                                        </div>
                                        <div className={`xl:w-full z-10 relative shrink-0 overflow-hidden pt-12 pointer-events-none max-w-lg xl:max-w-[1920px] mx-auto flex flex-col items-center`}>
                                            <button onClick={e => {
                                                smooth.current.scrollIntoView(citiesRef.current, { offsetTop: 32 });
                                            }} className={`w-[12rem] h-[3rem] xl:w-[20rem] xl:h-[4rem] relative pointer-events-auto flex items-center justify-center mx-auto rounded-full bg-rose-600 hover:bg-rose-800 transition font-medium text-[1.125rem] xl:text-[1.5rem] text-white`}>го!</button>
                                            <div className={`w-full xl:w-[1920px] h-[26.5rem] relative -top-8 -mt-36 tall:-mt-16`}>
                                                <div className={`hidden xl:block absolute rotate-[11.518deg] w-[14.84%] left-[33.7%] top-[58.88%]`}>
                                                    <img src={Photo3.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`absolute w-[30%] xl:w-[17.5%] left-[40%] xl:left-0 -rotate-[8.55deg] xl:rotate-[1.55deg] top-[60%] xl:top-0 z-10 xl:z-1`}>
                                                    <img src={Photo2.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`absolute w-[36.12%] xl:w-[15.21%] -left-[4.3%] xl:left-[14.3%] rotate-[-5.81deg] xl:rotate-[-5.813deg] top-[50.12%] xl:top-[21.12%]`}>
                                                    <img src={Photo4.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`absolute rotate-[6.581deg] w-[23.5%] xl:w-[10.5%] left-[20.27%] xl:left-[26.27%] top-[51.9%] xl:top-[31.9%]`}>
                                                    <img src={Photo5.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`hidden xl:block absolute w-[29.5%] xl:w-[17.5%] left-[39.43%] xl:left-[49.43%] rotate-[-10.91deg] xl:rotate-[3.5deg] top-[48.88%] xl:top-[58.88%]`}>
                                                    <img src={Photo7.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`absolute rotate-[1.426deg] w-[52.84%] xl:w-[22.84%] left-[70.16%] xl:left-[80.16%] top-[50%] xl:top-[19%]`}>
                                                    <img src={Photo3.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`absolute w-[27.53%] xl:w-[13.53%] left-[61.1%] xl:left-[76.1%] rotate-[5deg] top-[48%] xl:top-[12%]`}>
                                                    <img src={Photo1.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className={`hidden xl:block absolute w-[15.71%] left-[63.7%] rotate-[-11.774deg] top-[41.12%]`}>
                                                    <img src={Photo6.src} alt={``} className="w-full" style={scale} />
                                                </div>
                                                <div className="container mx-auto relative z-10 text-right mt-72 pr-6 xl:mt-80">
                                                    <div className="text-white font-medium text-shadow drop-shadow relative xl:-right-[2vw]">*Путешествия</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full xl:overflow-hidden -mt-32 xl:-mt-12">
                                        <div className={`bg-gradient-to-t from-indigo-300 to-blue-100 xl:mb-20 px-4 xl:px-8 relative z-20 mt-32 xl:mt-24`}>
                                            <div className='h-px'></div>
                                            <div className="max-w-lg xl:container mx-auto relative">
                                                <div className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none">
                                                    <img src={Roadm1.src} className="absolute max-w-none -top-[8.05rem] -right-[43.7rem] xl:hidden" />
                                                    <img src={Roadm2.src} className="absolute max-w-none -bottom-[0.6rem] -left-[25.5rem] xl:hidden" />
                                                    <img src={Roadm3.src} className="absolute max-w-none -bottom-[87rem] -left-[2.8rem] xl:hidden" />
                                                </div>
                                                <div className="bg-yellow-200 rounded-[26px] flex flex-col xl:flex-row px-8 xl:px-16 xl:px-24 pt-6 pb-10 xl:py-16 relative justify-between -mt-32 xl:-mt-24">
                                                    <img src={LR1.src} className="absolute max-w-none pointer-events-nones top-[1.52rem] -right-[10.75rem] xl:hidden" />
                                                    <img src={LL1.src} className="absolute max-w-none pointer-events-nones -bottom-[0rem] -left-[2.375rem] xl:hidden" />
                                                    <div className="relative flex flex-col pt-12 items-center">
                                                        <div className="text-stone-900 text-2xl font-bold rotate-[-2.58deg] bg-white py-2 px-3 mb-6">
                                                            <Pin className={`rotate-[-169.04deg] absolute w-8 h-auto xl:w-10 right-6 -top-11 xl:-top-14 z-10`} />
                                                            <div className={`text-center rotate-[2.58deg] px-8`}>4&nbsp;города</div>
                                                        </div>
                                                        <div className="text-stone-900 text-sm font-medium max-w-[16rem]">Ждем тебя в Сочи, Санкт-Петербурге, Казани, Калининграде и их окрестностях.</div>
                                                    </div>
                                                    <div className="relative flex flex-col pt-12 items-center xl:ml-12">
                                                        <div className="text-stone-900 text-2xl font-bold rotate-[1.80deg] bg-white py-2 px-3 mb-6">
                                                            <Pin className={`rotate-[161.36deg] absolute right-20 w-8 h-auto xl:w-10 -top-11 xl:-top-14 z-10`} />
                                                            <div className={`text-center rotate-[-1.80deg] px-8`}>12&nbsp;маршрутов</div>
                                                        </div>
                                                        <div className="text-stone-900 text-sm font-medium max-w-[220px] xs:max-w-xxs sm:max-w-xs self-start">Устанавливай фильтр и получай маршрут, который подходит тебе больше всего. Хайкинг в горах? Понежиться в спа? А, может, дегустировать новые вина? Легко.</div>
                                                    </div>
                                                    <div className="relative flex flex-col pt-12 items-center xl:ml-12">
                                                        <div className="text-stone-900 text-2xl font-bold rotate-[-2.30deg] bg-white py-2 px-3 mb-6">
                                                            <Pin className={`rotate-[176.36deg] absolute right-16 w-8 h-auto xl:w-10 -top-11 xl:-top-14 z-10`} />
                                                            <div className={`text-center rotate-[2.30deg] px-8`}><span className="whitespace-nowrap">Много-много</span><br />впечатлений</div>
                                                        </div>
                                                        <div className="text-stone-900 text-sm font-medium max-w-[220px] xs:max-w-xxs sm:max-w-xs self-end">Успей увидеть больше на каршеринге. Получи маршрут бесплатно от МТС Travel и промокод на 500 рублей от BelkaCar.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full relative z-50 mt-16 sm:mt-0" ref={citiesRef}>
                                        <div className="flex flex-col items-center my-8">
                                            <div className="text-center text-black text-xl font-medium mb-2 xl:mb-6">Подобрать маршрут</div>
                                            <a href="#" className="block hover:scale-125 transition duration-500">
                                                <svg className="w-6 xl:w-8 h-auto" viewBox="0 0 48 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L24 20L47 1" stroke="black" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="relative mb-12 max-w-lg xl:max-w-[1920px] mx-auto px-4 xl:px-8 z-10 min-h-[480px]">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center pointer-events-none hidden xl:flex">
                                                <svg width="3060" height="2722" className="max-w-none absolute mt-[20rem] -ml-[24rem] -rotate-[2deg]" viewBox="0 0 3060 2722" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 3C46.8007 183.249 27.6749 439.669 310.559 414.65C512.252 396.811 736.553 298.172 955.752 490.651C1486.15 956.39 950.928 1112.03 1215.17 1321.84C1462.14 1517.94 1781.14 815.842 2145.43 852.524C2536.81 891.933 1997.15 1518.26 2456.58 1910.2C2574.66 1998.91 2722.68 2234.25 2370.14 2465.89C2299.42 2512.36 2182.48 2381.33 2087.92 2398.51C1942.81 2424.86 2093.93 2830.5 2456.58 2665.71C2870.76 2477.5 3041.32 2536.61 3057.33 2538.95" stroke="#F4FF70" stroke-width="33.3589" stroke-miterlimit="11.4737" stroke-linejoin="round" />
                                                    <path d="M17 3C46.8007 183.249 27.6749 439.669 310.559 414.65C512.252 396.811 736.553 298.172 955.752 490.651C1486.15 956.39 950.928 1112.03 1215.17 1321.84C1462.14 1517.94 1781.14 815.842 2145.43 852.524C2536.81 891.933 1997.15 1518.26 2456.58 1910.2C2574.66 1998.91 2722.68 2234.25 2370.14 2465.89C2299.42 2512.36 2182.48 2381.33 2087.92 2398.51C1942.81 2424.86 2093.93 2830.5 2456.58 2665.71C2870.76 2477.5 3041.32 2536.61 3057.33 2538.95" stroke="black" stroke-width="2.00154" stroke-miterlimit="11.4737" stroke-linejoin="round" stroke-dasharray="10.01 10.01" />
                                                </svg>

                                            </div>
                                            {!city ? <div className="container mx-auto">
                                                <div className="bg-white rounded-[26px] px-4 xl:px-24 py-8 xl:py-12 xl:py-16 relative">
                                                    <h4 className="text-center text-black text-2xl xl:text-[36px] font-bold leading-tight mb-6">В каком городе <br />ты хочешь исследовать новые места?</h4>
                                                    <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-x-5 gap-y-8">
                                                        {[
                                                            {

                                                                code: `sochi`,
                                                                text: `Сочи`,
                                                                img: Sochi.src
                                                            },
                                                            //{
                                                            //     code: `kazan`,
                                                            //     text: `Казань`,
                                                            //     img: Kazan.src
                                                            // }, 
                                                            {
                                                                code: `spb`,
                                                                text: `Санкт-Петербург`,
                                                                img: Spb.src
                                                            },
                                                            // {
                                                            //     code: `kalinin`,
                                                            //     text: `Калининград`,
                                                            //     img: Kalin.src
                                                            // }
                                                        ].map((item, index) => <a key={index} href="#" onClick={e => {
                                                            setCity(item)
                                                        }} className="xl:w-[calc(50%-10px)] h-[180px] xl:h-[119px] bg-cover bg-center flex items-center justify-center rounded-xl group px-8" style={{ backgroundImage: `url('${item.img}')` }}>
                                                            <div className="z-20 relative text-center text-black text-sm font-medium px-8 group-hover:scale-[102%] duration-500 transition py-3 bg-white rounded-full">{item.text}</div>
                                                        </a>)}
                                                    </div>
                                                </div>
                                            </div> : <Filter city={city} setAnswers={setAnswers} findex={findex} setFindex={setFindex} />}
                                        </div>
                                    </div>
                                    {route ? <div className="w-full relative z-50 mt-16 sm:mt-0" ref={resultsRef}>
                                        <div className="relative container mx-auto">
                                            <div className="max-w-lg xl:max-w-none mx-auto mb-8 xl:mb-20 px-4 xl:px-8">
                                                <h4 className="relative z-10 text-center text-black text-2xl xl:text-[36px] font-bold leading-tight mb-6 xl:max-w-4xl mx-auto pt-12 xl:pt-0">Предлагаем отправиться по&nbsp;маршруту &laquo;{route.title}&raquo;</h4>
                                                <div className="relative z-10 xl:max-w-2xl mx-auto text-center text-stone-900 text-sm mb-8 font-medium leading-relaxed">{route.text}</div>
                                                <div className="relative z-10 border border-black rounded-[30px] flex flex-col items-center overflow-hidden">
                                                    <ul className="relative grid grid-cols-1 xl:grid-cols-3 w-full xl:pl-20 pt-24 xl:pt-0 -my-px -mx-px">
                                                        {route.items.map((item, index) => <li key={index}>
                                                            <div className="bg-yellow-200 rounded-[30px] border border-black -mt-24 xl:-mt-0 xl:-ml-20 relative px-6 py-5">
                                                                <div className="flex items-center mb-2">
                                                                    <div className="shrink-0 w-10  h-10 flex items-center justify-center bg-rose-600 rounded-full border border-rose-600 mr-4 xl:mr-6">
                                                                        <div className="text-center text-white text-2xl font-light">{index + 1}</div>
                                                                    </div>
                                                                    <div className={`text-black text-xl font-bold ${index < 2 ? `pr-[56px]` : ``}`}>{item.title}</div>
                                                                </div>
                                                                <div className="flex items-center mb-2">
                                                                    <div className="shrink-0 w-10  h-10 flex items-center justify-center rounded-full border border-black mr-4">
                                                                        <img src={item.icon} className="w-5.5 h-5.5" alt="" />
                                                                    </div>
                                                                    <div className="text-black text-xs xl:pr-[56px] xl:min-h-[4rem]">{item.text}</div>
                                                                </div>
                                                                <div className="pb-6">
                                                                    <div className="pt-[54%] rounded-2xl bg-cover bg-center" style={{
                                                                        backgroundImage: `url('${item.image}')`
                                                                    }} />
                                                                </div>
                                                            </div>
                                                        </li>)}
                                                    </ul>
                                                    <div className="w-full absolute bottom-0 left-0 h-[278px] bg-grad flex flex-col items-center justify-end pb-10">
                                                        <a href={route.link} target="_blank" className="relative z-10 flex flex-col xl:flex-row gap-2 items-center group">
                                                            <div className="w-[318px] text-center text-black text-[22px] font-medium leading-loose">Скачать весь маршрут</div>
                                                            <svg className="group-hover:scale-110 transition duration-500" width="45" height="45" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="68" height="68" rx="34" fill="#F4FF70" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M33.1692 14.2459V44.0652L20.8173 31.5356L20.1051 32.2377L33.3131 45.6357L33.6692 45.9969L34.0252 45.6357L47.2332 32.2377L46.5211 31.5356L34.1692 44.0652V14.2459H33.1692ZM16.498 48.7562H51.4992V47.7562H16.498V48.7562Z" fill="black" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex relative z-10 items-center flex-col mb-16 xl:mb-20 px-4 xl:px-8 max-w-lg xl:max-w-none mx-auto">
                                            <div className="text-center text-stone-900 text-[30px] xl:text-[36px] font-bold max-w-3xl mb-8">Этот маршрут создан специально для поездок на машине</div>
                                            <svg className="w-[156px] xl:w-[214px] h-auto" viewBox="0 0 214 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.9349 145.93L41.3993 71.3797C41.8354 70.2377 42.9207 69.4744 44.1429 69.4503L185.697 66.6594C187.035 66.633 188.228 67.4957 188.623 68.7741L212.493 146.115C213.089 148.045 211.646 150 209.627 150L15.7375 150C13.6353 150 12.185 147.894 12.9349 145.93Z" fill="#B0C6FF" stroke="black" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M158.766 92.592C139.754 61.7949 115.703 0.999284 161.417 1C206.201 1.0007 182.747 57.1627 163.781 92.4119C162.714 94.3956 159.949 94.5088 158.766 92.592ZM165.715 20.427C157.685 16.9201 152.435 20.1081 151.823 26.8648C151.317 32.4514 153.024 38.1185 157.83 41.4937C162.636 44.8688 166.858 43.4561 169.641 37.4783C173.889 28.3507 170.884 24.0581 166.209 20.7076C166.056 20.5978 165.888 20.5024 165.715 20.427Z" fill="#F3F7FF" />
                                                <path d="M161.417 1L161.417 0.5L161.417 1ZM158.766 92.592L159.191 92.3293L158.766 92.592ZM163.781 92.4119L164.222 92.6488L163.781 92.4119ZM151.823 26.8648L152.321 26.9099L151.823 26.8648ZM165.715 20.427L165.515 20.8852L165.515 20.8852L165.715 20.427ZM157.83 41.4937L158.117 41.0845L157.83 41.4937ZM169.641 37.4783L170.094 37.6893L169.641 37.4783ZM166.209 20.7076L166.5 20.3012L166.209 20.7076ZM161.417 0.5C149.871 0.499819 142.614 4.34703 138.62 10.7144C134.651 17.0431 133.981 25.748 135.324 35.3163C138.013 54.4637 148.819 77.4307 158.34 92.8546L159.191 92.3293C149.701 76.9562 138.976 54.1268 136.315 35.1773C134.983 25.6972 135.684 17.2785 139.467 11.2458C143.227 5.25179 150.106 1.49982 161.417 1.5L161.417 0.5ZM164.222 92.6488C173.706 75.0217 184.351 52.1007 187 33.5585C188.325 24.2917 187.667 16.0208 183.765 10.0529C179.841 4.05004 172.719 0.500177 161.417 0.5L161.417 1.5C172.507 1.50017 179.248 4.97083 182.928 10.6001C186.632 16.2643 187.322 24.2371 186.01 33.417C183.388 51.7683 172.823 74.5529 163.341 92.175L164.222 92.6488ZM158.34 92.8546C159.732 95.1081 162.977 94.9622 164.222 92.6488L163.341 92.175C162.451 93.829 160.167 93.9095 159.191 92.3293L158.34 92.8546ZM152.321 26.9099C152.616 23.6513 154.015 21.3483 156.212 20.2437C158.423 19.1319 161.577 19.1652 165.515 20.8852L165.915 19.9688C161.824 18.1819 158.337 18.0557 155.763 19.3503C153.174 20.6522 151.642 23.3215 151.325 26.8196L152.321 26.9099ZM158.117 41.0845C153.5 37.8416 151.826 32.376 152.321 26.9099L151.325 26.8196C150.808 32.5269 152.548 38.3954 157.542 41.9029L158.117 41.0845ZM169.187 37.2673C167.824 40.1954 166.155 41.9032 164.334 42.5198C162.53 43.1302 160.44 42.7158 158.117 41.0845L157.542 41.9029C160.025 43.6467 162.449 44.2135 164.654 43.4669C166.842 42.7264 168.674 40.739 170.094 37.6893L169.187 37.2673ZM165.918 21.114C168.222 22.7655 170.036 24.5955 170.793 27.0727C171.548 29.5446 171.282 32.7666 169.187 37.2673L170.094 37.6893C172.248 33.0624 172.603 29.5743 171.749 26.7804C170.897 23.9917 168.871 22.0002 166.5 20.3012L165.918 21.114ZM165.515 20.8852C165.656 20.9465 165.793 21.0246 165.918 21.114L166.5 20.3012C166.319 20.1711 166.12 20.0583 165.915 19.9688L165.515 20.8852Z" fill="black" />
                                                <path d="M19.582 131.733C65.8443 149.956 125.121 129.048 134.145 124.309C152.329 114.759 157.276 108.587 158.614 105.793C159.097 104.784 159.679 103.666 160.674 103.154C169.107 98.8113 192.95 92.5873 197.288 92.5873" stroke="black" strokeLinejoin="round" strokeDasharray="6 6" />
                                                <path d="M135.522 79.5029L135.478 79.046C135.357 77.8078 134.8 76.9588 134.057 76.4315C133.304 75.8962 132.327 75.671 131.357 75.7568L131.181 75.7723L131.034 75.6737C130.14 75.0733 129.009 74.7989 127.709 75.1638C123.487 76.3502 119.145 76.7101 114.803 76.8294C112.964 76.8799 111.14 76.8874 109.325 76.895C106.82 76.9054 104.33 76.9158 101.836 77.0389L101.603 77.0504L101.444 76.8786C99.6384 74.9215 97.8741 72.9355 96.1138 70.954C90.7263 64.8894 85.3764 58.8672 78.9929 53.8462C77.6951 52.8267 76.3273 52.8144 75.1855 53.3366L75.1151 53.3688L75.0383 53.3782C71.2418 53.8424 67.4753 54.4681 63.6984 55.0956C62.2788 55.3314 60.8576 55.5675 59.4328 55.7954C54.227 56.6279 48.9885 57.3475 43.6683 57.5238L43.6682 57.5238C42.7081 57.5554 41.9933 57.8578 41.4824 58.2988C40.9682 58.7427 40.6321 59.3519 40.476 60.0401L40.4554 60.1309L40.4035 60.2082C38.5595 62.9546 36.7624 65.745 34.9624 68.5398C31.7514 73.5257 28.5313 78.5255 25.0203 83.314L24.8763 83.5105L24.6328 83.5181C23.6802 83.5479 22.8451 83.5728 22.0977 83.595C16.9654 83.7478 15.967 83.7775 9.47102 84.4524L9.47064 84.4524C8.53274 84.5491 7.82381 84.8964 7.30565 85.3729L7.18013 85.4883L7.01025 85.5029C6.24394 85.5691 5.5403 85.8436 5.00754 86.3292C4.47994 86.81 4.08853 87.5261 3.98645 88.5387L3.98642 88.5389C3.81625 90.2186 3.78827 91.9131 3.75987 93.633C3.75049 94.2012 3.74106 94.7722 3.72644 95.3463C3.66801 97.6412 3.52606 99.9634 2.95081 102.236C2.70097 103.226 2.83426 104.025 3.17006 104.654L3.33076 104.956L3.10874 105.215C2.22004 106.253 1.87404 107.753 2.18658 109.033C2.49063 110.278 3.4168 111.327 5.15102 111.545L5.16772 111.548L5.18425 111.551C6.07849 111.725 6.88793 111.894 7.64421 112.052C9.43205 112.425 10.9229 112.736 12.5349 112.912C14.8058 113.158 17.3094 113.132 21.152 112.587L21.5788 112.527L21.7015 112.94C23.7811 119.943 31.4603 124.341 38.5516 124.522C42.425 124.62 46.0044 123.357 48.5128 121.086C51.0125 118.823 52.4708 115.542 52.0956 111.531C52.0582 111.142 51.9944 110.758 51.92 110.367L51.8174 109.827L52.3644 109.776C59.4213 109.111 66.4888 108.591 73.5503 108.07L74.0705 108.032C81.3069 107.498 88.537 106.962 95.7538 106.268L96.2497 106.22L96.2992 106.716C97.0948 114.676 104.248 119.423 111.955 118.905L135.522 79.5029ZM135.522 79.5029L135.523 79.5029M135.522 79.5029L135.523 79.5029M135.523 79.5029C135.658 80.9225 135.779 82.3468 135.9 83.7736C136.316 88.6618 136.734 93.5777 137.714 98.4234C137.867 99.1826 137.651 100.023 137.178 100.762C136.705 101.501 136.008 102.085 135.284 102.345C132.213 103.448 129.077 103.702 125.796 103.967L125.784 103.968L125.339 104.004L125.325 104.45C125.092 111.821 119.543 118.393 111.955 118.905L135.523 79.5029ZM29.155 108.97C29.7542 108.155 30.8377 107.766 31.8503 107.552C32.7543 107.361 33.7183 107.287 34.4638 107.23C34.573 107.221 34.6775 107.213 34.7764 107.205L34.7774 107.205C35.2303 107.17 35.6222 107.055 35.9941 106.902L36.1294 106.847L36.2733 106.873C36.6379 106.939 37.0068 106.973 37.4056 106.937L37.4059 106.937C40.5329 106.654 43.6523 108.565 44.3349 111.717L29.155 108.97ZM29.155 108.97C29.1536 108.972 29.1524 108.974 29.1513 108.975L29.4116 109.165M29.155 108.97L44.3349 111.717C44.5371 112.648 44.4886 113.477 44.2129 114.191C43.937 114.905 43.4472 115.468 42.827 115.888C41.6018 116.719 39.8552 117.004 38.0777 116.87L37.8965 116.857L37.8929 116.853C34.6019 116.545 30.8881 114.56 29.3997 111.571L29.3993 111.571C29.1916 111.152 29.0635 110.89 28.9924 110.611C28.9327 110.376 28.9149 110.131 28.8902 109.791C28.8863 109.737 28.8822 109.68 28.8777 109.621L29.1968 109.597M29.4116 109.165C29.3942 109.165 29.3772 109.165 29.3606 109.167C29.2771 109.175 29.2126 109.203 29.1709 109.226C29.1293 109.249 29.0999 109.274 29.0822 109.291C29.0779 109.295 29.0739 109.299 29.0702 109.303M29.4116 109.165L29.5685 109.279C29.5685 109.279 29.5686 109.278 29.5686 109.278C29.5686 109.278 29.5686 109.278 29.5686 109.278L29.5562 109.268L29.4148 109.165C29.4142 109.165 29.4137 109.165 29.4131 109.165C29.4126 109.165 29.4121 109.165 29.4116 109.165ZM29.0702 109.303C29.0698 109.296 29.0695 109.291 29.0693 109.286C29.0684 109.259 29.07 109.239 29.0708 109.231C29.0718 109.221 29.0729 109.213 29.0734 109.21C29.0737 109.208 29.074 109.207 29.0741 109.206C29.0744 109.204 29.0743 109.205 29.0735 109.209C29.0728 109.212 29.0718 109.215 29.0707 109.22C29.0679 109.23 29.0639 109.244 29.0587 109.261C29.0514 109.284 29.043 109.308 29.0347 109.33C29.0258 109.353 29.0197 109.366 29.0175 109.37C29.0164 109.372 29.019 109.367 29.0255 109.357C29.0289 109.352 29.0347 109.344 29.0429 109.333C29.049 109.326 29.0581 109.315 29.0702 109.303ZM29.0702 109.303C29.0711 109.314 29.0725 109.328 29.0751 109.344C29.0788 109.367 29.0867 109.406 29.105 109.451C29.1145 109.474 29.1282 109.503 29.148 109.533C29.1608 109.553 29.1769 109.575 29.1968 109.597M29.1968 109.597L29.4735 109.576C29.4735 109.576 29.4734 109.576 29.4734 109.576C29.4734 109.576 29.4733 109.576 29.4733 109.576L29.3763 109.583L29.1972 109.597C29.1971 109.597 29.197 109.597 29.197 109.597C29.1969 109.597 29.1969 109.597 29.1968 109.597ZM112.688 97.9266L112.354 97.8944L112.197 98.191C111.715 99.1049 110.809 99.7916 109.332 99.8305C107.154 99.8864 105.639 100.713 104.783 101.974C103.937 103.219 103.79 104.807 104.172 106.289C104.935 109.253 107.87 111.996 112.084 111.142C115.412 110.468 117.334 107.327 117.576 104.355C117.697 102.857 117.401 101.345 116.6 100.152C115.79 98.9438 114.486 98.0999 112.688 97.9266Z" fill="#F3F7FF" stroke="black" />
                                                <path d="M89.8452 77.0869L89.9376 77.5782L89.8452 77.0869C89.2413 77.2005 88.5815 77.3299 87.8782 77.4679C84.0102 78.2267 78.8213 79.2446 74.3168 79.3168C71.6511 79.3594 69.2985 79.0676 67.6229 78.2444C66.793 77.8367 66.143 77.3055 65.6959 76.6314C65.2502 75.9593 64.9861 75.1154 64.9735 74.0481C64.9513 72.1528 64.7751 70.4761 64.6235 69.0328C64.5888 68.7027 64.5554 68.3848 64.5254 68.0793C64.3612 66.4058 64.3083 65.1594 64.617 64.2066C64.9052 63.3171 65.5295 62.6318 66.913 62.145C68.3268 61.6474 70.4865 61.377 73.7577 61.3373C75.2725 61.4793 77.3869 62.4629 79.6621 63.9555C81.9293 65.4428 84.2861 67.3882 86.2515 69.3513C88.2268 71.3241 89.7666 73.2752 90.4443 74.7692C90.7881 75.527 90.8673 76.0755 90.7732 76.425C90.6971 76.7073 90.4763 76.9682 89.8452 77.0869Z" fill="#B0C6FF" stroke="black" />
                                                <path d="M47.9611 64.5956L47.8506 64.1082L47.9611 64.5956C47.8456 64.6218 47.6676 64.6994 47.4237 64.8579C47.1854 65.0126 46.9096 65.2276 46.6016 65.5C45.9858 66.0447 45.2686 66.7943 44.5018 67.6858C42.9695 69.4675 41.2681 71.7823 39.8234 74.0742C38.3733 76.3747 37.2058 78.6147 36.7132 80.253C36.4621 81.0881 36.415 81.6774 36.5131 82.0245C36.5573 82.1808 36.6243 82.2654 36.6992 82.317C36.7792 82.3722 36.9199 82.4251 37.1693 82.4222C38.906 82.4018 40.5577 82.4057 42.1155 82.4105L42.3709 82.4113C43.8346 82.4159 45.2125 82.4203 46.5036 82.4048C49.2416 82.3721 51.5545 82.2504 53.4218 81.8651C55.2885 81.4798 56.6485 80.843 57.5423 79.8285C58.4296 78.8212 58.9213 77.3681 58.896 75.2104L59.3959 75.2046L58.896 75.2104C58.8881 74.5363 58.8838 73.8946 58.8798 73.2842C58.8677 71.4686 58.8575 69.9292 58.7585 68.6316C58.6255 66.8885 58.3369 65.7011 57.7571 64.9285C57.2054 64.1934 56.323 63.7518 54.766 63.6766C53.1925 63.6007 51.0075 63.9047 47.9611 64.5956Z" fill="#B0C6FF" stroke="black" />
                                                <path d="M42.7035 9.0526C43.1745 8.13561 43.3487 7.05173 43.9552 6.19246C44.5532 10.7899 47.2341 16.8292 50.4666 20.7081C51.6609 22.1413 54.5128 24.7497 56.8856 26.5595C56.8856 26.5595 51.7327 32.8455 51.5642 33.0129C51.5642 33.0129 48.8033 38.1053 48.0984 40.1989C47.9035 40.7777 47.6487 42.1024 47.3983 42.6662C47.3199 42.8429 47.2082 43.3289 47.0755 43.1633C46.4252 42.3519 44.2179 39.0801 43.8093 38.1563C42.136 35.9244 39.2459 33.0376 39.2459 33.0376C37.0636 31.1762 35.7434 29.9461 33.3442 28.2633C32.6351 27.766 30.9712 26.4536 29.6937 26.2984C31.7921 25.0319 34.9437 21.914 36.2925 20.0002C38.8014 16.4406 40.7519 12.8525 42.7035 9.0526Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.2564 61.4577C13.2741 56.934 10.763 56.4037 9.11551 52.0096C8.1743 53.8597 5.97278 55.8006 3.75625 58.4703C2.88381 59.5211 1.04064 62.7047 1.04064 62.7047C2.77945 64.1176 6.8658 70.479 7.59653 72.3346C8.89861 70.3398 10.4718 67.7421 12.2047 65.6496C12.6224 65.2687 16.2564 61.4577 16.2564 61.4577Z" fill="#F3F7FF" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="relative">
                                            <div className="relative z-10 container mx-auto">
                                                <div className="max-w-lg xl:max-w-[82.5rem] mx-auto mb-40 px-4 xl:px-8">
                                                    <div className="bg-white rounded-[30px] flex flex-col items-center px-4 pt-12 pb-[16rem] bg-bottom bg-contain bg-no-repeat relative">
                                                        <div className="absolute top-0 left-0 bottom-0 right-0 items-center justify-center hidden xl:flex">
                                                            <img src={Road1.src} className="absolute max-w-none pointer-events-none ml-[14rem] mt-[64rem] -rotate-[1.57deg]" />
                                                        </div>
                                                        <div className="absolute top-0 left-0 bottom-0 right-0 rounded-[30px] overflow-hidden">
                                                            <img src={Photos.src} className="absolute w-full bottom-0 left-0 hidden xl:block" />
                                                        </div>

                                                        <div className="flex items-end gap-2 sm:gap-6 mb-8">
                                                            <svg className="w-[122px] sm:w-[134px]" viewBox="0 0 203 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M112.034 18.6389C86.5813 19.0876 91.3622 38.2188 91.6162 52.6259C74.2076 52.9328 75.2418 77.5343 75.5171 93.142L75.5216 93.3992C75.6666 101.693 75.7899 108.75 87.1979 108.549C95.0019 108.411 94.9278 104.209 94.769 95.2046L180.011 93.7019C180.011 93.7019 179.043 106.929 189.248 106.75C194.651 106.654 201.855 106.527 201.579 90.9197C201.209 69.9093 203.272 50.6575 188.264 50.9221C188.264 50.9221 194.875 17.1785 169.662 17.623L112.034 18.6389Z" fill="#D9E3FF" stroke="black" />
                                                                <path d="M134.323 45.1138L102.915 46.38C103.285 40.1449 104.032 38.4498 106.127 35.7929C108.223 33.136 112.853 31.3258 123.797 31.9743C133.703 32.5613 134.933 40.2829 134.323 45.1138Z" fill="white" stroke="black" />
                                                                <path d="M161.262 51.9994C194.708 51.4087 191.445 78.0021 188.719 83.238C185.992 88.474 161.865 86.2162 136.653 86.6607C111.44 87.1052 90.2224 89.552 87.8816 85.0157C85.5408 80.4793 86.437 65.3275 93.5345 59.1993C102.998 51.0286 124.314 52.6519 161.262 51.9994Z" fill="white" stroke="black" />
                                                                <path d="M174.945 44.7769L145.404 45.2976C145.263 37.2692 147.141 34.4785 150.117 32.9803C154.174 30.9379 159.34 30.4413 166.894 30.8823C174.448 31.3233 176.002 39.2381 174.945 44.7769Z" fill="white" stroke="black" />
                                                                <path d="M6.75497 46.3733C6.93688 46.0139 7.00245 45.59 7.23744 45.2529C7.48168 47.0479 8.54305 49.4013 9.81499 50.9095C10.2849 51.4667 11.4052 52.4793 12.3365 53.181C12.3365 53.181 10.3376 55.6489 10.2722 55.7147C10.2722 55.7147 9.20517 57.7108 8.93455 58.5304C8.85974 58.757 8.76324 59.2752 8.66671 59.4961C8.63648 59.5653 8.59393 59.7554 8.5417 59.691C8.28577 59.3755 7.4158 58.1022 7.25402 57.7422C6.59507 56.874 5.45919 55.7527 5.45919 55.7527C4.60225 55.0305 4.08361 54.5529 3.14228 53.9009C2.8641 53.7082 2.21094 53.1993 1.71144 53.1416C2.52842 52.6419 3.75262 51.4164 4.27526 50.6655C5.24733 49.2689 6.00115 47.8625 6.75497 46.3733Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M73.8379 12.2541C70.682 7.64415 68.0434 7.11776 66.2891 2.63188C65.3119 4.53124 63.0123 6.53172 60.7012 9.27809C59.7916 10.3591 57.8753 13.6289 57.8753 13.6289C59.7083 15.0635 64.0336 21.5467 64.8112 23.4409C66.1664 21.3911 67.8027 18.7226 69.6095 16.57C70.0456 16.1775 73.8379 12.2541 73.8379 12.2541Z" fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M46.632 58.4648L31.0219 59.0652L23.6198 58.6298C22.042 58.537 20.6773 59.684 20.5647 61.2605C20.4 63.5666 20.2148 67.272 20.2148 72.2738C20.2148 79.0029 20.55 91.4302 20.7195 97.2836C20.7698 99.0205 22.2786 100.346 24.0129 100.24C33.3735 99.6668 46.3498 100.106 52.0967 100.354C53.7318 100.424 55.1299 99.1847 55.2311 97.5512C55.4066 94.7193 55.6378 90.4922 55.6378 87.8839C55.6378 84.0014 55.1254 69.0811 55.0473 60.4595C55.0373 59.355 54.142 58.4648 53.0374 58.4648L46.632 58.4648Z" fill="#D9E3FF" stroke="black" />
                                                                <path d="M32.6833 79.6788C33.4191 79.6033 34.1216 79.5311 34.7805 79.5027C34.6376 80.7014 34.3668 82.3229 34.1738 83.3729L34.172 83.3829L34.1706 83.3929C34.0565 84.1943 33.9821 84.6468 33.9065 84.9193C33.8697 85.052 33.8407 85.1098 33.826 85.133C33.8185 85.1449 33.8198 85.1416 33.8183 85.1425C33.801 85.1523 33.7671 85.1666 33.6629 85.1984C33.6489 85.2027 33.6338 85.2072 33.6177 85.2121C33.5277 85.2392 33.4079 85.2754 33.2723 85.326C32.9418 85.4493 32.525 85.6545 31.981 86.0656C31.559 86.3843 31.1199 86.97 30.8154 87.6187C30.512 88.2652 30.3013 89.0612 30.4362 89.8136C30.5091 90.3251 30.7334 90.7262 31.1345 90.951C31.5067 91.1597 31.938 91.1608 32.307 91.111C32.685 91.0599 33.0839 90.9424 33.4425 90.8287C33.5356 90.7991 33.6255 90.7701 33.7125 90.7419C33.8469 90.6985 33.9742 90.6573 34.0956 90.6202C34.6707 91.437 35.3047 91.9352 35.9724 92.1273C36.7377 92.3475 37.4529 92.1388 38.018 91.7195C38.5745 91.3068 38.9999 90.684 39.2489 90.0137C39.4982 89.3429 39.5863 88.5829 39.4179 87.8806L39.418 87.8806L39.4156 87.8716C39.325 87.5223 39.2408 87.2608 39.1786 87.0678C39.1608 87.0124 39.1448 86.9627 39.131 86.9181C39.0671 86.7123 39.0579 86.6401 39.0637 86.5691C39.0707 86.4834 39.1048 86.3527 39.233 86.0527C39.3197 85.8498 39.4363 85.5981 39.5929 85.26C39.6653 85.1037 39.7463 84.9289 39.8368 84.7319L39.8426 84.7193L39.8477 84.7064C40.1097 84.0411 40.4522 83.4891 40.8157 82.9314C40.8555 82.8702 40.8958 82.8088 40.9363 82.7469C41.1781 82.3781 41.4288 81.9955 41.6518 81.5824C42.0221 81.7456 42.3794 81.9396 42.7436 82.1485C42.8678 82.2198 42.9941 82.2936 43.1223 82.3685C43.4959 82.5869 43.8856 82.8147 44.2859 83.0158C45.3928 83.5717 46.6556 83.9653 48.366 83.6884L48.6545 83.6417L48.7554 83.3673C49.2562 82.0052 49.3574 80.9085 49.1529 79.9832C48.9475 79.0539 48.4473 78.3594 47.8629 77.7815C47.4573 77.3803 46.9816 77.0099 46.5316 76.6595C46.3544 76.5215 46.1811 76.3866 46.0176 76.2541C45.4892 75.8258 45.0258 75.3969 44.6857 74.8885C44.7669 74.7232 44.8561 74.5461 44.9497 74.3601C45.22 73.8235 45.5277 73.2125 45.7882 72.5968C46.1923 71.6416 46.5321 70.5724 46.5321 69.5027C46.5321 68.3771 46.2984 67.204 45.6564 66.3533C44.9839 65.4622 43.9193 64.9989 42.4631 65.2278C41.3279 65.3952 40.4615 65.8296 39.7855 66.4425C39.116 67.0495 38.6558 67.8109 38.2962 68.599C38.0031 69.2413 37.7658 69.9281 37.5407 70.5794C37.4917 70.7211 37.4433 70.8612 37.395 70.9988C37.1546 71.6838 36.916 72.312 36.6184 72.8512C35.5989 72.8781 34.3096 73.0408 33.077 73.2984C31.7347 73.579 30.3978 73.9846 29.5373 74.4861L29.5373 74.4861L29.5305 74.4902C28.9549 74.8381 28.1694 75.5722 27.5319 76.3748C27.2094 76.7807 26.9121 77.2197 26.6932 77.6548C26.4782 78.0824 26.3184 78.546 26.3184 78.9899L26.3184 79.3321L26.6373 79.456C27.9348 79.9601 29.5172 79.9486 31.0318 79.8333C31.5972 79.7903 32.149 79.7336 32.6833 79.6788Z" fill="white" stroke="black" />
                                                                <path d="M31.0215 22.0995L31.0215 59.0652L46.6316 58.4648L45.5144 22.7137C45.4668 21.19 44.2841 19.9443 42.765 19.8177L34.2706 19.1099C32.5216 18.9641 31.0215 20.3444 31.0215 22.0995Z" stroke="black" />
                                                                <path d="M29.9211 104.094C29.9211 105.23 29.7686 105.97 29.2945 106.512C28.8153 107.059 27.9204 107.502 26.1771 107.797C25.0551 107.793 24.1686 107.637 23.5564 107.154C22.9634 106.686 22.5156 105.815 22.5156 104.094C22.5156 103.025 22.8129 102.268 23.307 101.778C23.8015 101.286 24.5634 100.992 25.6344 100.992C26.7699 100.992 27.8575 101.142 28.6474 101.6C29.391 102.031 29.9211 102.762 29.9211 104.094Z" stroke="black" />
                                                                <path d="M54.3264 106.413C53.9809 107.34 53.3316 107.906 52.4862 108.08C51.6283 108.257 50.4885 108.045 49.1605 107.235C48.4182 106.558 47.9448 105.922 47.8598 105.214C47.7756 104.513 48.0576 103.586 49.2211 102.299C49.9464 101.497 50.6617 101.114 51.3211 101.05C51.971 100.988 52.6607 101.226 53.3644 101.862C54.7399 103.105 54.9254 104.805 54.3264 106.413Z" stroke="black" />
                                                            </svg>
                                                            <svg className="mb-12 w-4 xl:w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.3761 0.652832C10.3761 0.652832 10.6786 5.78609 10.3766 10.3154C10.0745 14.8448 10.3761 19.3741 10.3761 19.3741" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M18.9771 9.79109C18.9771 9.79109 13.3963 10.0137 10.075 10.3156C6.7537 10.6176 1.36418 10.669 1.36418 10.669" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            <svg className="w-[88px] sm:w-[94px]" viewBox="0 0 147 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M39.3779 141.64C38.0418 138.234 38.566 129.2 39.3973 121.818C34.4917 109.651 39.5394 97.9952 42.6765 93.688C44.7025 86.5415 48.7152 73.4558 56.0463 69.4794C63.3773 65.5029 117.424 65.9885 123.857 71.5945C127.789 75.0203 129.771 83.4651 132.822 92.2978C134.764 97.9192 136.782 104.401 137.154 107.45C137.889 113.48 136.798 118.849 136.798 118.849C136.798 118.849 137.099 147.691 131.061 148.704C128.693 149.101 121.424 149.608 119.699 147.151C117.974 144.695 117.379 138.068 117.654 135.674C98.8761 134.288 57.6433 133.802 57.6433 133.802C57.6433 133.802 57.3262 144.004 53.6501 146.291C51.1012 147.877 45.5668 147.869 44.0103 147.19C41.0489 145.898 40.7141 145.045 39.3779 141.64Z" fill="#D9E3FF" stroke="black" />
                                                                <path d="M49.7654 97.5141C50.1057 96.314 51.5961 89.2928 53.4988 82.7834C55.4164 76.2235 60.4515 71.853 67.2824 71.632C79.788 71.2273 100.701 72.4285 114.182 73.6932C122.636 74.4863 124.479 90.2339 125.979 99.8916C126.631 104.087 49.0899 99.8967 49.7654 97.5141Z" fill="white" stroke="black" />
                                                                <path d="M58.7337 119.87C58.1143 121.387 56.9947 122.314 55.5562 122.564C54.1056 122.817 52.25 122.392 50.1622 121.021C49.0103 119.907 48.2278 118.82 48.1193 117.594C48.0113 116.374 48.5608 114.861 50.472 112.874C51.6782 111.621 52.8792 111.008 54.0079 110.935C55.1271 110.862 56.2701 111.313 57.3836 112.385C59.5795 114.497 59.7838 117.299 58.7337 119.87Z" fill="white" stroke="black" />
                                                                <path d="M127.144 122.004C126.524 123.521 125.405 124.449 123.966 124.699C122.516 124.951 120.66 124.526 118.572 123.155C117.42 122.041 116.638 120.954 116.529 119.728C116.421 118.509 116.971 116.995 118.882 115.008C120.088 113.755 121.289 113.142 122.418 113.069C123.537 112.996 124.68 113.447 125.794 114.519C127.99 116.631 128.194 119.434 127.144 122.004Z" fill="white" stroke="black" />
                                                                <path d="M25.468 94.84L4.48645 58.3735C3.66826 56.9515 4.14415 55.1359 5.55469 54.2981L89.8144 4.24891C91.2281 3.40918 93.0543 3.86393 93.9092 5.26855L99.1322 13.8507C100.084 15.4139 99.3843 17.4916 98.1506 18.8432C96.2049 20.9747 94.8002 24.606 96.9246 29.9061C99.3071 35.8499 104.136 35.9424 107.742 34.719C109.387 34.1606 111.344 34.6301 112.181 36.153L116.585 44.1659C117.38 45.6131 116.856 47.4309 115.413 48.2331L29.5256 95.9661C28.0926 96.7625 26.2856 96.261 25.468 94.84Z" fill="#D9E3FF" stroke="black" />
                                                                <path d="M61.2754 36.6028L72.7344 54.38" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M58.8323 37.8659C61.7138 35.3529 68.6397 31.5649 70.9652 34.0402C73.8721 37.1343 72.5387 41.3691 63.3687 46.4892" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M65.6585 50.0929L74.8472 44.3727" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M30.1311 54.7573C30.1311 54.7573 23.2503 57.8292 22.966 58.2618C22.8979 58.3654 23.3433 59.0699 23.3831 59.1706C23.7379 60.0674 24.0367 60.9914 24.3562 61.9008C24.8467 63.297 25.263 64.7692 25.913 66.1037C25.9811 66.2434 26.1097 66.8566 26.2394 66.5426C26.3945 66.167 27.0258 65.8625 27.3629 65.6717C28.3451 65.1157 29.4736 64.9374 30.5879 64.8263C32.9348 64.5924 34.8473 65.4918 36.0147 67.3184C36.5936 68.2243 36.8138 70.0182 36.9292 71.07C36.678 72.3937 36.7333 72.8167 35.8165 73.9976C34.1796 75.5929 32.0715 76.8715 29.6394 76.5785C29.0408 76.5063 28.3464 76.2795 27.9554 75.8176C27.7026 75.5191 27.5396 75.1506 27.2833 74.8668" stroke="black" strokeLinecap="round" />
                                                                <path d="M40.2647 65.801C36.9724 62.6793 36.3058 58.3857 35.1859 54.0248C34.9844 53.2401 35.0142 51.9768 35.0142 51.9768C35.1683 51.167 35.5256 50.5319 36.1004 50.0258C37.0441 49.1949 38.302 48.9056 39.5052 49.1413C40.4672 49.3298 41.4389 50.0164 42.291 50.5832C43.251 51.2217 44.1201 51.8197 44.9238 52.7319C46.9803 55.066 48.0292 58.2967 48.5232 61.4185C48.7558 62.8889 48.9817 64.6573 48.1804 65.8693C47.5577 66.8111 46.8254 67.3439 45.8081 67.5939C43.94 68.0531 41.7865 67.2439 40.2647 65.801Z" stroke="black" strokeLinecap="round" />
                                                                <path d="M56.2915 43.6628C59.8652 46.3709 60.8117 50.4783 62.2283 54.6062C62.4832 55.3489 62.5295 56.5798 62.5295 56.5798C62.4205 57.3823 62.092 58.035 61.5321 58.5839C60.6128 59.485 59.3376 59.8909 58.0868 59.7809C57.0866 59.693 56.0462 59.122 55.1359 58.6555C54.1105 58.1299 53.1808 57.6348 52.2993 56.8278C50.0436 54.7627 48.7689 51.7264 48.071 48.741C47.7424 47.3348 47.4025 45.6382 48.1522 44.3808C48.7348 43.4036 49.455 42.8132 50.4852 42.4693C52.3771 41.8379 54.6396 42.411 56.2915 43.6628Z" stroke="black" strokeLinecap="round" />
                                                                <path d="M37.048 21.1353C34.5774 17.1192 32.3748 16.5668 31.0806 12.7129C30.1786 14.2738 28.1577 15.8655 26.0964 18.0856C25.285 18.9594 23.5349 21.6369 23.5349 21.6369C25.0211 22.9218 28.4003 28.5652 28.9778 30.194C30.2046 28.5218 31.6939 26.3397 33.3057 24.5995C33.6895 24.2866 37.048 21.1353 37.048 21.1353Z" fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M145.015 57.0623C142.544 53.0462 140.342 52.4938 139.047 48.6399C138.145 50.2009 136.125 51.7925 134.063 54.0126C133.252 54.8864 131.502 57.5639 131.502 57.5639C132.988 58.8488 136.367 64.4922 136.945 66.121C138.171 64.4488 139.661 62.2667 141.273 60.5265C141.656 60.2136 145.015 57.0623 145.015 57.0623Z" fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <div className="relative text-center text-stone-900 text-[24px] sm:text-[36px] font-bold mb-8 max-w-3xl mx-auto">Бронируй отель, получай промокод на&nbsp;BelkaCar и путешествуй выгодно</div>
                                                        <a target='_blank' href="https://travel.mts.ru/?utm_source=inhouse&utm_medium=special&utm_campaign=belkacar&utm_content=landing" className={`relative px-6 sm:w-[24rem] h-[4rem] pointer-events-auto flex items-center justify-center mx-auto rounded-full bg-rose-600 hover:bg-rose-800 transition font-medium text-[1.5rem] sm:text-2xl text-white`}>Забронировать</a>
                                                    </div>

                                                </div>
                                                <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-end block xl:hidden pointer-events-none">
                                                    <img src={MPhotos.src} className="relative max-w-none z-10 w-[110%] sm:w-auto -top-8 sm:top-0" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mb-16 xl:mb-20 flex flex-col items-center justify-center max-w-lg mx-auto xl:max-w-none">
                                            <h4 className="relative text-center text-black text-[24px] sm:text-[36px] font-bold leading-tight mb-12 xl:mb-4 max-w-4xl mx-auto">Новые места ближе <br />с&nbsp;МТС&nbsp;Travel и&nbsp;BelkaCar</h4>
                                            <div className={`relative rotate-[3deg] w-[48rem] -scale-x-100 mb-12 xl:mb-4`}>
                                                <div className="scale-[.75] sm:scale-[1] xl:scale-[1.2]">
                                                    <img src={Girls.src} alt={``} className="w-full" style={scale2} />
                                                </div>
                                            </div>
                                            <button onClick={e => {
                                                smooth.current.scrollIntoView(citiesRef.current, { offsetTop: 32 });
                                            }} className="relative flex items-center gap-4 hover:scale-105 transition duration-500 rounded-full border border-black px-6 xl:px-10 py-4 xl:py-5 font-medium text-[16px] xl:text-[22px]">
                                                <svg className="w-2.5 xl:w-4 h-auto" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 0.519043L1 17.0001L17 33.4811" stroke="black" />
                                                </svg>
                                                <div>
                                                    Выбрать еще один маршрут
                                                </div>
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-center pb-16 xl:pb-0 relative">
                                            <div className="text-black opacity-50 font-medium text-shadow drop-shadow absolute bottom-6 right-6">*Путешествия</div>
                                            <div className={`flex items-center space-x-4 xl:space-x-10 mb-8`}>
                                                <MtcLogo className="w-[163px] h-auto" />
                                                <div className={`h-16 w-px border-l border-black`}></div>
                                                <BelkaCarLogo className="w-[142px] h-auto" />
                                            </div>
                                            <a href="#" className="text-stone-900 text-sm font-normal underline mb-8">Правила</a>
                                        </div>
                                    </div> : ``}
                                </div>
                            </div>
                        </div>
                    </Scrollbar >
                </div>
            </div>
        </>
    );
}
