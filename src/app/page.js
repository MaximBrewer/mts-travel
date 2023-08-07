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
import parse from "html-react-parser"

import RoadNew from "../images/nr.svg"
import RoadNewMob from "../images/nrm.svg"

import { useEffect, useRef, useState } from 'react';

const intro = [
    {
        title: `4&nbsp;города`,
        text: `Ждем тебя в Сочи, Санкт-Петербурге, Казани, Калининграде и их окрестностях.`
    },
    {
        title: `12&nbsp;маршрутов`,
        text: `Устанавливай фильтр и получай маршрут, который подходит тебе больше всего. Подняться к водопаду? Понежиться в спа? А, может, дегустировать сыры? Легко.`
    },
    {
        title: `<span className="whitespace-nowrap">Много-много</span><br />впечатлений`,
        text: `Успей увидеть больше на каршеринге. Получи маршрут бесплатно от МТС Travel и промокод на 500 рублей от BelkaCar.`
    },
];

const Filter = (props) => {

    const { city, setAnswers, answers, findex, setFindex } = props

    return window.questions[city.code][findex] ? <div className="container mx-auto">
        <div className="bg-white rounded-[26px] px-4 xl:px-24 py-8 xl:py-12 xl:py-16 relative">
            <h4 className="text-center text-black text-2xl xl:text-[36px] font-bold leading-tight mb-6">{window.questions[city.code][findex].question}</h4>
            <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-x-5 gap-y-8">
                {window.questions[city.code][findex].answers.map((item, idx) => <div key={idx} onClick={e => {
                    setAnswers(prev => {
                        let arr = prev.slice()
                        arr.push(idx)
                        return arr
                    })
                    setFindex(prev => ++prev)
                }} className="cursor-pointer xl:w-[calc(50%-10px)] h-[180px] xl:h-[119px] bg-cover bg-center flex items-center justify-center rounded-xl group px-8" style={{ backgroundImage: `url('${item.img}')` }}>
                    <div className="z-20 relative text-center text-black text-sm font-medium px-8 group-hover:scale-[102%] duration-500 transition py-3 bg-white rounded-full">{item.text}</div>
                </div>)}
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

    const pageRef = useRef(null)

    const smooth = useRef(null)

    const headerRef = useRef(null)

    const scroll = (e) => {
        if (e.offset.y > 5 && headerRef.current) {
            headerRef.current.classList.add(`bg-indigo-300`);
            headerRef.current.classList.add(`backdrop-blur`);
            headerRef.current.classList.add(`bg-opacity-50`);
        } else {
            headerRef.current.classList.remove(`bg-indigo-300`);
            headerRef.current.classList.remove(`backdrop-blur`);
            headerRef.current.classList.remove(`bg-opacity-50`);
        }
        if (pageRef.current) {
            let wh = pageRef.current.offsetHeight - window.innerHeight;
            setScale({
                transform: `scale(${(100 + e.offset.y / 50) / 100})`
            })
            setScale2({
                transform: `scale(${e.offset.y / wh})`
            })
        }
    }

    useEffect(() => {
        setFindex(0)
        setAnswers([])
        if (route) {
            setAnswers([]);
            smooth.current.scrollIntoView(resultsRef.current, { offsetTop: headerRef.current.offsetHeight });
            setTimeout(() => {
                setCity(null)
                smooth.current.scrollIntoView(resultsRef.current, { offsetTop: headerRef.current.offsetHeight });
            }, 50)
        }
    }, [route])

    useEffect(() => {
        setFindex(0)
        if (city && answers.length) {
            if (window.questions[city.code] && window.questions[city.code].length <= answers.length) {
                smooth.current.scrollIntoView(resultsRef.current, { offsetTop: headerRef.current.offsetHeight });
                setRoute(null)
                setRoute(window.routes[city.code][answers[0]])
                setTimeout(() => {
                    setAnswers([]);
                    setCity(null)
                    smooth.current.scrollIntoView(resultsRef.current, { offsetTop: headerRef.current.offsetHeight });
                }, 50)
            }
        }
    }, [answers, city])

    return (
        <>
            <div className="bg-indigo-300 bg-cover bg-top">
                <div className={`h-screen w-screen overflow-hidden`}>
                    <div className="w-full fixed w-full top-0 z-50" ref={headerRef}>
                        <div className={`xl:grow container mx-auto  flex flex-col items-center justify-start relative py-3 xl:py-6`}>
                            <a href="/pdf/rules.pdf" target="_blank" className="absolute right-8 top-6 text-stone-900 text-sm hidden xl:block">Правила</a>
                            <div className={`flex items-center space-x-2 sm:space-x-6 xl:space-x-10`}>
                                <MtcLogo className="w-[136px] xl:w-[174px] h-auto" />
                                <div className={`h-12 w-px border-l border-black`}></div>
                                <BelkaCarLogo className="w-[112px] xl:w-[148px] h-auto" />
                            </div>
                        </div>
                    </div>
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
                            <div className={`w-screen overflow-hidden`} ref={pageRef}>
                                <div className="relative">
                                    <div className={`bg-cover bg-top xl:h-screen max-h-[1600px] xl:min-h-[680px] xl:flex xl:flex-col xl:justify-between xl:items-center pt-[72px] xl:pt-[102px]`} style={{ backgroundImage: `url('${Clouds.src}')` }}>
                                        <div className={`xl:grow container mx-auto  flex flex-col items-center justify-start xl:justify-center relative pt-10`}>
                                            <div className="text-[24px] sm:text-[36px] xl:text-[46px] font-bold uppercase flex items-center space-x-3 xl:space-x-8 mb-4 xl:mb-[4vh] leading-none">
                                                <Heart className="w-[58px] sm:w-[84px] xl:w-[130px] h-auto -my-8" />
                                                <span>Приключения<br />включены</span>
                                            </div>
                                            <img src={ImagesGroup.src} alt={``} className={`shrink-0 w-[16rem] sm:w-[346px] xs:w-auto mb-4 xl:mb-10`} />
                                            <div className="px-4 xl:px-0 text-center text-[24px] leading-tight font-medium max-w-lg xl:max-w-4xl">Отель, каршеринг, маршрут — все готово.<br />Не&nbsp;хватает только тебя.</div>
                                        </div>
                                        <div className={`xl:w-full z-10 relative shrink-0 overflow-hidden pt-4 pointer-events-none max-w-lg xl:max-w-[1920px] mx-auto flex flex-col items-center`}>
                                            <button onClick={e => {
                                                smooth.current.scrollIntoView(citiesRef.current, { block: "start", offsetTop: 84 });
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
                                        <div className={`bg-gradient-to-t from-indigo-300 to-blue-100 xl:mb-20 px-4 xl:px-8 relative z-20 mt-32 xl:mt-12`}>
                                            <div className='h-px'></div>
                                            <div className="max-w-lg xl:container mx-auto relative">
                                                <div className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none">
                                                    <img src={Roadm1.src} className="absolute max-w-none -top-[4.8rem] -right-[28.5rem] xl:hidden" />
                                                    <img src={Roadm2.src} className="absolute max-w-none -bottom-[0.1rem] -left-[16.5rem] xl:hidden" />
                                                    <img src={Roadm3.src} className="absolute max-w-none -rotate-[10deg] -bottom-[56rem] left-[1.1rem] xl:hidden" />
                                                </div>
                                                <div className="z-20 bg-yellow-200 rounded-[26px] flex flex-col xl:flex-row px-8 xl:px-16 xl:px-24 pt-6 pb-10 xl:py-16 relative justify-between -mt-32 xl:-mt-12">
                                                    <img src={LR1.src} className="absolute max-w-none pointer-events-none top-[1.52rem] -right-px xl:hidden" />
                                                    <img src={LL1.src} className="absolute max-w-none pointer-events-none -bottom-px -left-px xl:hidden" />
                                                    <div className="relative flex flex-col pt-12 items-center">
                                                        <div className="text-stone-900 text-2xl font-bold rotate-[-2.58deg] bg-white py-2 px-3 mb-6">
                                                            <Pin className={`rotate-[-169.04deg] absolute w-8 h-auto xl:w-10 right-6 -top-11 xl:-top-14 z-10`} />
                                                            <div className={`text-center rotate-[2.58deg] px-8`}>{parse(intro[0].title)}</div>
                                                        </div>
                                                        <div className="text-stone-900 text-sm font-medium max-w-[16rem]">{parse(intro[0].text)}</div>
                                                    </div>
                                                    <div className="relative flex flex-col pt-12 items-center xl:ml-12">
                                                        <div className="text-stone-900 text-2xl font-bold rotate-[1.80deg] bg-white py-2 px-3 mb-6">
                                                            <Pin className={`rotate-[161.36deg] absolute right-20 w-8 h-auto xl:w-10 -top-11 xl:-top-14 z-10`} />
                                                            <div className={`text-center rotate-[-1.80deg] px-8`}>{parse(intro[1].title)}</div>
                                                        </div>
                                                        <div className="text-stone-900 text-sm font-medium max-w-[220px] xs:max-w-xxs sm:max-w-xs self-start">{parse(intro[1].text)}</div>
                                                    </div>
                                                    <div className="relative flex flex-col pt-12 items-center xl:ml-12">
                                                        <div className="text-stone-900 text-2xl font-bold rotate-[-2.30deg] bg-white py-2 px-3 mb-6">
                                                            <Pin className={`rotate-[176.36deg] absolute right-16 w-8 h-auto xl:w-10 -top-11 xl:-top-14 z-10`} />
                                                            <div className={`text-center rotate-[2.30deg] px-8`}>{parse(intro[2].title)}</div>
                                                        </div>
                                                        <div className="text-stone-900 text-sm font-medium max-w-[220px] xs:max-w-xxs sm:max-w-xs self-end">{parse(intro[2].text)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full relative z-50 mt-16 sm:mt-0" ref={citiesRef}>
                                        <div className="flex flex-col items-center my-8">
                                            <div className="text-center text-black text-xl font-medium mb-2 xl:mb-6">Подобрать маршрут</div>
                                            <div className="cursor-pointer block hover:scale-125 transition duration-500 mt-6 animate-bounce">
                                                <svg className="w-6 xl:w-8 h-auto" viewBox="0 0 48 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L24 20L47 1" stroke="black" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="relative mb-12 max-w-lg xl:max-w-[1920px] mx-auto px-4 xl:px-8 z-10 min-h-[480px]">
                                            <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center pointer-events-none hidden xl:flex -rotate-[1.5deg]">
                                                <img src={Road1.src} alt={``} className="max-w-none absolute mt-[78rem] ml-[1rem]" />
                                            </div>
                                            {!city ? <div className="container mx-auto relative z-10">
                                                <div className="bg-white rounded-[26px] px-4 xl:px-24 py-8 xl:py-12 xl:py-16 relative">
                                                    <h4 className="text-center text-black text-2xl xl:text-[36px] font-bold leading-tight mb-6">В каком городе <br />ты хочешь исследовать новые места?</h4>
                                                    <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-x-5 gap-y-8">
                                                        {[
                                                            {

                                                                code: `sochi`,
                                                                text: `Сочи`,
                                                                img: Sochi.src
                                                            },
                                                            {
                                                                code: `kazan`,
                                                                text: `Казань`,
                                                                img: Kazan.src
                                                            },
                                                            {
                                                                code: `spb`,
                                                                text: `Санкт-Петербург`,
                                                                img: Spb.src
                                                            },
                                                            {
                                                                code: `kalinin`,
                                                                text: `Калининград`,
                                                                img: Kalin.src
                                                            }
                                                        ].map((item, index) => <div key={index} onClick={e => {
                                                            setCity(item)
                                                        }} className="cursor-pointer xl:w-[calc(50%-10px)] h-[180px] xl:h-[119px] bg-cover bg-center flex items-center justify-center rounded-xl group px-8" style={{ backgroundImage: `url('${item.img}')` }}>
                                                            <div className="z-20 relative text-center text-black text-sm font-medium px-8 group-hover:scale-[102%] duration-500 transition py-3 bg-white rounded-full">{item.text}</div>
                                                        </div>)}
                                                    </div>
                                                </div>
                                            </div> : <Filter city={city} setAnswers={setAnswers} findex={findex} setFindex={setFindex} />}
                                        </div>
                                    </div>
                                    {route ? <div className="w-full relative z-40 mt-16 sm:mt-0" ref={resultsRef}>
                                        <div className="relative container mx-auto">
                                            <div className="max-w-lg xl:max-w-none mx-auto mb-8 xl:mb-20 px-4 xl:px-8">
                                                <h4 className="relative z-10 text-center text-black text-xl xl:text-[36px] font-bold leading-tight mb-6 xl:max-w-4xl mx-auto pt-4">Предлагаем отправиться по&nbsp;маршруту &laquo;{route.title}&raquo;</h4>
                                                <div className="relative z-10 xl:max-w-2xl mx-auto text-center text-stone-900 text-sm mb-8 font-medium leading-relaxed">{route.text}</div>
                                                <div className="flex items-center flex-col">
                                                    <div className="relative py-[5rem] xl:py-[9.5rem] px-0 xl:px-4 flex flex-col items-center gap-[1.35rem] xl:gap-[3.65rem]">
                                                        <img src={RoadNew.src} alt="" className="absolute top-0 max-w-none pointer-events-none hidden xl:block" />
                                                        <img src={RoadNewMob.src} alt="" className="absolute top-0 max-w-none pointer-events-none xl:hidden" />
                                                        {route.items.map((item, index) => <div key={index} className="bg-white rounded-[24px] xl:rounded-[29.33px] border border-black flex mx-auto h-[130px] xl:h-[210px] w-[310px] xl:w-[642px] p-2 xl:p-5">
                                                            <div className="w-3/5 xl:w-1/2" style={{
                                                                order: index % 2 ? 2 : 1,
                                                                padding: index % 2 ? `0 0 0 6px` : `0 6px 0 0`,
                                                            }} >
                                                                <div className="flex mb-2">
                                                                    <div className="shrink-0 w-5 h-5 xl:w-10 xl:h-10 flex items-center justify-center bg-rose-600 rounded-full border relative top-1.5 border-rose-600 mr-3">
                                                                        <div className="text-center text-white text-sm xl:text-2xl font-light">{index + 1}</div>
                                                                    </div>
                                                                    <div className={`text-black xl:text-xl font-bold leading-tight`}>{item.title}</div>
                                                                </div>
                                                                <div className="flex mb-2">
                                                                    <div className="shrink-0 w-5 h-5 xl:w-10 xl:h-10 flex items-center justify-center rounded-full relative top-1.5 mr-3 ">
                                                                        <img src={item.icon} className="w-full h-full" alt="" />
                                                                    </div>
                                                                    <div className="text-black text-xs xl:min-h-[4rem] line-clamp-4 xl:line-clamp-6">{item.text}</div>
                                                                </div>
                                                            </div>
                                                            <div className="w-2/5 xl:w-1/2 h-[100px] xl:h-full rounded-2xl bg-cover bg-center shrink-0" style={{
                                                                backgroundImage: `url('${item.image}')`,
                                                                order: index % 2 ? 1 : 2
                                                            }} />
                                                        </div>)}
                                                        <a href={route.link} target="_blank" className="absolute bottom-2 z-20">
                                                            <svg className="w-8 xl:w-[56px] h-8 xl:h-[56px]" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="28" cy="27.6667" r="27.3333" fill="#FF0032" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M27.4666 14.3334V33.6437L19.4742 25.5363L18.9994 26.0043L27.5625 34.6906L27.7999 34.9314L28.0373 34.6906L36.6004 26.0043L36.1256 25.5363L28.1332 33.6437V14.3334H27.4666ZM16.6666 36.7164H39.3588V36.0497H16.6666V36.7164Z" fill="white" />
                                                                <path d="M27.4666 33.6437L27.2292 33.8777L27.7999 34.4566V33.6437H27.4666ZM27.4666 14.3334V14H27.1332V14.3334H27.4666ZM19.4742 25.5363L19.7116 25.3023L19.4776 25.0649L19.2402 25.2989L19.4742 25.5363ZM18.9994 26.0043L18.7654 25.767L18.528 26.001L18.7621 26.2384L18.9994 26.0043ZM27.5625 34.6906L27.3251 34.9246L27.3251 34.9246L27.5625 34.6906ZM27.7999 34.9314L27.5625 35.1654L27.7999 35.4062L28.0373 35.1654L27.7999 34.9314ZM28.0373 34.6906L28.2747 34.9246L28.2747 34.9246L28.0373 34.6906ZM36.6004 26.0043L36.8377 26.2384L37.0718 26.001L36.8344 25.767L36.6004 26.0043ZM36.1256 25.5363L36.3596 25.2989L36.1222 25.0649L35.8882 25.3023L36.1256 25.5363ZM28.1332 33.6437H27.7999V34.4566L28.3706 33.8777L28.1332 33.6437ZM28.1332 14.3334H28.4666V14H28.1332V14.3334ZM39.3588 36.7164V37.0497H39.6921V36.7164H39.3588ZM16.6666 36.7164H16.3333V37.0497H16.6666V36.7164ZM39.3588 36.0497H39.6921V35.7164H39.3588V36.0497ZM16.6666 36.0497V35.7164H16.3333V36.0497H16.6666ZM27.7999 33.6437V14.3334H27.1332V33.6437H27.7999ZM19.2368 25.7703L27.2292 33.8777L27.7039 33.4097L19.7116 25.3023L19.2368 25.7703ZM19.2335 26.2417L19.7082 25.7737L19.2402 25.2989L18.7654 25.767L19.2335 26.2417ZM27.7999 34.4566L19.2368 25.7703L18.7621 26.2384L27.3251 34.9246L27.7999 34.4566ZM28.0373 34.6974L27.7999 34.4566L27.3251 34.9246L27.5625 35.1654L28.0373 34.6974ZM27.7999 34.4566L27.5625 34.6974L28.0373 35.1654L28.2747 34.9246L27.7999 34.4566ZM36.363 25.7703L27.7999 34.4566L28.2747 34.9246L36.8377 26.2384L36.363 25.7703ZM35.8916 25.7737L36.3663 26.2417L36.8344 25.767L36.3596 25.2989L35.8916 25.7737ZM28.3706 33.8777L36.363 25.7703L35.8882 25.3023L27.8959 33.4097L28.3706 33.8777ZM27.7999 14.3334V33.6437H28.4666V14.3334H27.7999ZM27.4666 14.6667H28.1332V14H27.4666V14.6667ZM39.3588 36.3831H16.6666V37.0497H39.3588V36.3831ZM39.0255 36.0497V36.7164H39.6921V36.0497H39.0255ZM16.6666 36.3831H39.3588V35.7164H16.6666V36.3831ZM17 36.7164V36.0497H16.3333V36.7164H17Z" fill="white" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <a href={route.link} target="_blank" className="mb-10">
                                                        <div className="w-[318px] text-center text-black text-sm font-medium leading-snug">Скачать весь маршрут</div>
                                                    </a>
                                                    <div className="text-center text-black text-xl font-bold max-w-lg"> Этот маршрут создан специально для поездок на машине.  Выбирай отель, из которого удобно выезжать на каршеринге</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="animate-bounce flex relative z-10 items-center flex-col my-10 px-4 xl:px-8 max-w-lg xl:max-w-none mx-auto">
                                            <svg width="44" height="23" viewBox="0 0 44 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.818359 0.503662L21.8601 21.5454L42.9018 0.503662" stroke="black" strokeWidth="0.667992" />
                                            </svg>

                                        </div>
                                        <div className="relative">
                                            <div className="relative z-10 container mx-auto">
                                                <div className="max-w-lg xl:max-w-[82.5rem] mx-auto mb-16 xl:mb-40 px-4 xl:px-8">
                                                    <div className="bg-white rounded-[30px] flex flex-col items-center px-4 pt-12 pb-[16rem] bg-bottom bg-contain bg-no-repeat relative">
                                                        <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center pointer-events-none hidden xl:flex">
                                                            <img src={Road2.src} alt={``} className="max-w-none absolute -bottom-[84rem] ml-[8rem] rotate-[5deg]" />
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
                                                        <div className="relative text-center text-stone-900 text-[18px] sm:text-[36px] font-bold mb-8 max-w-3xl mx-auto">Бронируй отель, получай промокод на&nbsp;BelkaCar и путешествуй выгодно</div>
                                                        <a target='_blank' href="https://travel.mts.ru/?utm_source=inhouse&utm_medium=special&utm_campaign=belkacar&utm_content=landing" className={`relative px-6 sm:w-[24rem] h-[3rem] xl:h-[4rem] pointer-events-auto flex items-center justify-center mx-auto rounded-full bg-rose-600 hover:bg-rose-800 transition font-medium text-[1rem] sm:text-2xl text-white`}>Забронировать</a>
                                                    </div>

                                                </div>
                                                <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-end block xl:hidden pointer-events-none">
                                                    <img src={MPhotos.src} className="relative max-w-none z-10 w-[110%] sm:w-auto -top-8 sm:top-0" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mb-16 xl:mb-20 flex flex-col items-center justify-center max-w-lg mx-auto xl:max-w-none">
                                            <h4 className="relative text-center text-black text-[24px] sm:text-[36px] font-bold leading-tight mb-6 xl:mb-4 max-w-4xl mx-auto">Новые места ближе <br />с&nbsp;МТС&nbsp;Travel и&nbsp;BelkaCar</h4>
                                            <div className={`relative rotate-[3deg] w-[48rem] mb-12 xl:mb-4`}>
                                                <div className="scale-[.75] sm:scale-[.9]">
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
                                            <a href="/pdf/rules.pdf" target="_blank" className="text-stone-900 text-sm font-normal underline mb-8">Правила</a>
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
