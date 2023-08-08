window.questions = {
    sochi: [{
        question: `Как ты любишь отдыхать?`,
        answers: [
            { img: `/routes/sochi/m0/image.jpg?v=1.1"`, text: `Гулять в природных заповедниках`, routeIndex: 0 },
            { img: `/routes/sochi/m1/image.jpg?v=1.1"`, text: `Наслаждаться видами на горы`, routeIndex: 1 },
            { img: `/routes/sochi/m2/image.jpg?v=1.1"`, text: `Пробовать продукты с местных ферм`, routeIndex: 2 },
        ]
    }],
    spb: [{
        question: `Как ты любишь отдыхать?`,
        answers: [
            { img: `/routes/spb/m0/image.jpg?v=1.1"`, text: `Гулять у реки и наслаждаться видами`, routeIndex: 0 },
            { img: `/routes/spb/m1/image.jpg?v=1.1"`, text: `За городом на дачах`, routeIndex: 1 },
            { img: `/routes/spb/m2/image.jpg?v=1.1"`, text: `Знакомиться с культурой разных народов`, routeIndex: 2 },
        ]
    }],
    kalinin: [{
        question: `Как ты любишь отдыхать?`,
        answers: [
            { img: `/routes/kalinin/m0/image.jpg?v=1.1"`, text: `Уехать туда, где поменьше людей`, routeIndex: 0 },
            { img: `/routes/kalinin/m1/image.jpg?v=1.1"`, text: `Уйти от суеты и замедлиться`, routeIndex: 1 },
            { img: `/routes/kalinin/m2/image.jpg?v=1.1"`, text: `Путешествовать во времени`, routeIndex: 2 },
        ]
    }],
    kazan: [{
        question: `Как ты любишь отдыхать?`,
        answers: [
            { img: `/routes/kazan/m0/image.jpg?v=1.1"`, text: `Погружаться в местный колорит`, routeIndex: 0 },
            { img: `/routes/kazan/m1/image.jpg?v=1.1"`, text: `Находить диковинные места рядом`, routeIndex: 1 },
            { img: `/routes/kazan/m2/image.jpg?v=1.1"`, text: `Прикасаться к истории`, routeIndex: 2 },
        ]
    }]
}

window.routes = {
    sochi: [
        {
            title: `Голубая река, белые берега — заповедники и природные парки Сочи за один день`,
            text: `Если в горах Красной Поляны вы уже побывали, а море и пляж уже поднадоели, то в Сочи можно отправиться в освежающие горные леса. И нет, они не будут иметь никакого отношения к горам Красной Поляны.`,
            link: "/pdf/Sochi_travel giude_zapovedniki.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Мы нашли несколько отелей в центре Сочи, расположенных в шаговой доступности от главных достопримечательностей. Но главное, оттуда удобно начинать маршрут.`,
                    icon: `/routes/sochi/m2/i0/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m2/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Реликтовый лес`,
                    text: `Прогуляйтесь по сказочному лесу: папоротниково-лиановый пейзаж дополняют тропические грибы-цветы, скалы, разломы и бирюзово-синяя вода горной реки.`,
                    icon: `/routes/sochi/m2/i1/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m2/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Белый каньон`,
                    text: `Здесь вас ждет невероятное сочетание чистейшей голубой воды и белых скал — цвета просто фантастические. Не забудьте сделать классные фото на память.`,
                    icon: `/routes/sochi/m2/i2/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m2/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `На выходные в горы`,
            text: `Посвятите горам Красной Поляны, таким высоким и могущественным, целый уикенд. Когда устанете от суеты морского побережья или просто захотите почувствовать прохладу в летний зной, смело берите машину BelkaCar на несколько дней и направляйтесь к подножию хребта Аибга.`,
            link: "/pdf/Sochi_travel giude_v gory.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Мы сделали подборку отелей в Адлере, где можно комфортно переночевать и начать путешествие на каршеринге.`,
                    icon: `/routes/sochi/m1/i0/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m1/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Аттракционы в ущелье`,
                    text: `Сюда едут не только за красивыми видами, но и за адреналином: место славится своими высотными аттракционами.`,
                    icon: `/routes/sochi/m1/i1/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m1/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Водопад`,
                    text: `В маршруте вас ждет водопад, достигающий 70 метров высоты! Отдельное удовольствие — сама прогулка к нему по горной извилистой дороге сквозь буковый лес.`,
                    icon: `/routes/sochi/m1/i2/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m1/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `Южный агротуризм: чайные плантации и обед на ферме за один день`,
            text: `В этом маршруте собраны лучшие локации для агротуризма (и не только), чтобы вы переключились от мирской и туристической суеты на что-то прекрасное. Длительность маршрута — один день.`,
            link: "/pdf/Sochi_travel giude _agritourism.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Начните свое путешествие комфортно: мы подобрали несколько отелей, из которых удобно будет начать наш маршрут.`,
                    icon: `/routes/sochi/m0/i0/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m0/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Чайные плантации`,
                    text: `Насладитесь спокойным утром на чайных террасах, которые тянутся до самого горизонта и ничуть не уступают видами легендарному острову Цейлон.`,
                    icon: `/routes/sochi/m0/i1/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m0/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Обед на ферме`,
                    text: `На высоте 400 метров над уровнем моря вас ждет отличный фермерский обед из органических продуктов, выращенных здесь же.`,
                    icon: `/routes/sochi/m0/i2/icon.svg?v=1.1"`,
                    image: `/routes/sochi/m0/i2/image.jpg?v=1.1"`
                }
            ]

        },
    ],
    spb: [
        {
            title: `Любуемся Невой с разных сторон. Главные смотровые площадки за два дня`,
            text: `Такой Неву ты еще не видел. Мы нашли точки, где ты откроешь не только панораму на водную гладь и мосты, но и исторические памятники. «Невский пятачок», крепость с милым названием Орешек — слышал ли ты о таких? А ведь это одни из самых впечатляющих мест, до которых легко добраться на каршеринге BelkaCar.`,
            link: "/pdf/SP_travel giude_Neva.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Перед большим путешествием надо как следует отдохнуть. Поэтому мы нашли несколько отелей, где можно расслабиться. А еще оттуда удобно начинать маршрут.`,
                    icon: `/routes/spb/m0/i0/icon.svg?v=1.1"`,
                    image: `/routes/spb/m0/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Стрелка двух рек`,
                    text: `Ты увидишь, как река Нева сливается с Ижорой, и темно-синяя вода приобретает более коричневый оттенок. Ну не волшебство ли?`,
                    icon: `/routes/spb/m0/i1/icon.svg?v=1.1"`,
                    image: `/routes/spb/m0/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Ореховый остров`,
                    text: `На Ореховом острове вы увидите, как исторические события влияли на древнюю крепость и оставляли следы. Например, там до сих пор есть вмятины от пуль и снарядов.`,
                    icon: `/routes/spb/m0/i2/icon.svg?v=1.1"`,
                    image: `/routes/spb/m0/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `Нескучные дачи: от «Амстердама» до пещер за два дня`,
            text: `А поехали на дачу? Нет-нет, не копать грядки, а просто в гости. Посмотрим, как раньше жили известные купцы, деятели искусств и герои книг, увидим заброшенный замок. А потом отправимся в прошлое и посетим лабиринты пещер, где раньше добывали кварц для императорского двора.`,
            link: "/pdf/SP_travel giude_dacha.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Мы подготовили отели, расположенные близко к выезду в сторону Гатчины, чтобы путешествие началось без пробок.`,
                    icon: `/routes/spb/m1/i0/icon.svg?v=1.1"`,
                    image: `/routes/spb/m1/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Кусочек Голландии`,
                    text: `Даже в русской провинции можно встретить концептуальную городскую архитектуру. Дом «Амстердам» в поселке Сиверский прямое тому доказательство.`,
                    icon: `/routes/spb/m1/i1/icon.svg?v=1.1"`,
                    image: `/routes/spb/m1/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Усадьба писателя`,
                    text: `Деревня Пустынька, где жил и работал граф Толстой. Здесь же можно увидеть графский грот и посетить «литературную» туристическую тропу.`,
                    icon: `/routes/spb/m1/i2/icon.svg?v=1.1"`,
                    image: `/routes/spb/m1/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `Открывая Карелию: вокруг Ладоги за два дня`,
            text: `Поездка в Карелию — идеальный вариант на уик-энд. Там все, что нужно для путешественника: виды на озеро, хорошие дороги, комфортное жилье и кафе, где вкусно кормят. Но главное, что Карелия — регион с богатым культурным колоритом. Поэтому вперед на Ладогу!`,
            link: "/pdf/SP_travel giude_Karelia.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Мы нашли места, где будет удобно переночевать перед большим путешествием, а с утра — позавтракать и удобно выехать. Никаких пробок по Мурманскому шоссе.`,
                    icon: `/routes/spb/m2/i0/icon.svg?v=1.1"`,
                    image: `/routes/spb/m2/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Маяки-близнецы`,
                    text: `Панорама на извилистую реку возле чугунного Белого маяка. Со смотровой площадки виден и его «близнец» — Красный маяк. Отличное место для кинематографичных фото.`,
                    icon: `/routes/spb/m2/i1/icon.svg?v=1.1"`,
                    image: `/routes/spb/m2/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Заброшенная ж/д`,
                    text: `Место, где в суровых скалах был пробурен живописный железнодорожный тоннель. Самое время посмотреть, пока здесь не пустили скоростные поезда!`,
                    icon: `/routes/spb/m2/i2/icon.svg?v=1.1"`,
                    image: `/routes/spb/m2/i2/image.jpg?v=1.1"`
                }
            ]
        }
    ],
    kalinin: [
        {
            title: `Зеленоградск и Куршская коса без толпы: секретные пляжи и видовые площадки за один день`,
            text: `Пришло время замедлиться и уехать из шумного города. Мы нашли самые малолюдные места рядом с Калининградом. Куршская коса, Зеленоградск. «Но там же всегда толпы людей!» — скажете вы. «Нет», — ответим мы. О таких тихих уголках популярных мест знают только самые искушенные путешественники. Поехали?`,
            link: "/pdf/Kaliningrad_travel giude_секретные места.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Уютные отели в самом сердце города — комфортно ночевать и начинать маршрут.`,
                    icon: `/routes/kalinin/m0/i0/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m0/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Куршская коса`,
                    text: `Нашли места на косе, о которых знают не все туристы и даже местные. Отличные локации для уединения.`,
                    icon: `/routes/kalinin/m0/i1/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m0/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Тевтонский замок`,
                    text: `Шаакен — настоящий портал в прошлое. Здесь можно пройти тест на ведьму, посетить пыточную, а еще попробовать домашние сыры и шоколад.`,
                    icon: `/routes/kalinin/m0/i2/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m0/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `Время замедлиться: уик-энд на побережье Балтийского моря`,
            text: `Садись в каршеринг — высадись у моря. Мы бы перефразировали Бродского именно так. Да, мы нашли самые красивые и умиротворяющие точки Балтийского побережья, которые можно объехать в спокойном темпе за 2 дня. В один из дней предлагаем сходить в спа под открытым небом.`,
            link: "/pdf/Kaliningrad_travel giude_время замедлиться.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Нашли отели, чтобы красивые виды были не только из окна каршеринга, но и из спальни.`,
                    icon: `/routes/kalinin/m1/i0/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m1/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Экоферма`,
                    text: `Семейная ферма, где можно попробовать домашние сыры, погладить альпийских козочек и вдоволь надышаться свежим воздухом. `,
                    icon: `/routes/kalinin/m1/i1/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m1/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Светлогорск`,
                    text: `Один из самых медленных городов мира, в котором уютные домики в стиле фахверк утопают в соснах и аромате соленого моря.`,
                    icon: `/routes/kalinin/m1/i2/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m1/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `Свидание с Пруссией: романтика портов и немецких замков за один день`,
            text: `Замки, крепости, корабли, форты, рыцари, ведьмы — ну кому из нас не хотелось хоть разок посмотреть, как все это выглядело в средневековье? Для таких любопытных мы сделали самый аутентичный маршрут по Калининградской области. Поехали — время не ждет.`,
            link: "/pdf/Kaliningrad_travel giude_свидание с Пруссией.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Погрузиться в другую эпоху можно сразу же в отеле. Мы подобрали варианты интерьерных отелей, откуда удобнее всего начинать маршрут.`,
                    icon: `/routes/kalinin/m2/i0/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m2/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Порт`,
                    text: `Начните день в городском порту: корабли, соленый запах моря и аромат местного кофе — что еще нужно для идеального утра?`,
                    icon: `/routes/kalinin/m2/i1/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m2/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Форт 11 Денхофф`,
                    text: `Самый сохранившийся из фортов Калининграда, в котором до сих пор можно посмотреть устройство боевой крепости.`,
                    icon: `/routes/kalinin/m2/i2/icon.svg?v=1.1"`,
                    image: `/routes/kalinin/m2/i2/image.jpg?v=1.1"`
                }
            ]
        }
    ],
    kazan: [
        {
            title: `Открытие Казани: исторический путь в сердце Татарстана за один день`,
            text: `Чтобы понять все разнообразие татарской культуры, лучше начать с ее символов. Учпочмак и чак-чак, мечеть Кул Шариф и Казанский Кремль, прогулки по набережной и на теплоходе — все это есть в нашем маршруте. Ну что, поехали? Или как, говорят в Татарстане, айда инде.`,
            link: "/pdf/Kazan_travel giude_сердце Казани.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Мы нашли отели, расположенные в самом сердце Казани. Отсюда можно легко добраться до самых главных мест, особенно если взять каршеринг.`,
                    icon: `/routes/kazan/m0/i0/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m0/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Туган Авылым`,
                    text: `Аутентичная деревня в самом центре современного города. Здесь можно посмотреть на традиционный быт казанских татар и попробовать местную кухню.`,
                    icon: `/routes/kazan/m0/i1/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m0/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Кул Шариф`,
                    text: `Главная мечеть Казани, включенная в список всемирного наследия ЮНЕСКО, поразит масштабом и красотой. Нет фотки на ее фоне — считай, не был в столице Татарстана.`,
                    icon: `/routes/kazan/m0/i2/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m0/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `Исследуем природу казанских окрестностей за один день`,
            text: `Мы знаем, как все любят залипать на фото с голубой водой на Мальдивах и на красные извилистые скалы Гранд Каньона. Поэтому нашли достойные альтернативы, для которых не надо делать 3 пересадки в аэропортах. Достаточно сесть в каршеринг в Казани.`,
            link: "/pdf/Kazan_travel giude_природа окрестностей.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Нашли отели, которые подойдут и ценителям комфорта, и тем, кто любит местный колорит. А еще у каждого из отелей удобно взять каршеринг и отправиться в путешествие.`,
                    icon: `/routes/kazan/m1/i0/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m1/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Раифский монастырь`,
                    text: `Место понравится не только верующим, ведь монастырь расположен на территории заповедника — можно отдохнуть и отвлечься от суеты.`,
                    icon: `/routes/kazan/m1/i1/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m1/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Каньоны`,
                    text: `Красные скалы каньона в Кукморе — наш ответ Гранд Каньону. Эффектные фото на фоне «марсианского» рельефа вам гарантированы.`,
                    icon: `/routes/kazan/m1/i2/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m1/i2/image.jpg?v=1.1"`
                }
            ]
        },
        {
            title: `От острова Свияжск до древнего Болгара`,
            text: `Пожалуй, один из наших самых аутентичных и исторических маршрутов. Мы проедем по местам, где ходили Амир Тимур, Иван Грозный, Сергий Радонежский и многие другие исторические личности. Прокатимся?`,
            link: "/pdf/Kazan_travel giude_древние города.pdf?v=1.1",
            items: [
                {
                    title: `Отель`,
                    text: `Погружение в историю начнем из современного отеля. Выбрали варианты, где можно комфортно провести время и набраться сил перед путешествием.`,
                    icon: `/routes/kazan/m2/i0/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m2/i0/image.jpg?v=1.1"`
                },
                {
                    title: `Город-остров`,
                    text: `Свияжск вырос на берегу Волги всего за один месяц по приказу Ивана Грозного. Именно здесь царь организовал опорную базу для взятия Казани.`,
                    icon: `/routes/kazan/m2/i1/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m2/i1/image.jpg?v=1.1"`
                },
                {
                    title: `Волжская Булгария`,
                    text: `Бо́лгар — один из древнейших городов Татарстана. Здесь можно увидеть развалины времен Золотой Орды, руническую письменность и необычную архитектуру храмов.`,
                    icon: `/routes/kazan/m2/i2/icon.svg?v=1.1"`,
                    image: `/routes/kazan/m2/i2/image.jpg?v=1.1"`
                }
            ]
        }
    ]
}

window.btns = {
    sochi: 'https://travel.mts.ru/s?title=%D0%A1%D0%BE%D1%87%D0%B8&locationId=9b9dec50-d554-43ed-842c-1c2f9bf04cea&checkInDate=2023-10-30&checkOutDate=2023-10-31&accommodations=%5B%7B%22adultsNumber%22%3A2%2C%22childrenNumber%22%3A0%2C%22childrenAges%22%3A%5B%5D%7D%5D&page=1&rating=%7B%22min%22%3A0%2C%22max%22%3A5%7D&sort=recommendation%2Cdesc&limit=30&utm_medium=special&utm_campaign=belkacar&utm_content=landing_sochi',
    spb: 'https://travel.mts.ru/s?page=1&title=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3&checkInDate=2023-10-30&checkOutDate=2023-10-31&locationId=99917a5a-e5ba-4997-a1ad-e53548dbb793&accommodations=%5B%7B%22adultsNumber%22%3A2%2C%22childrenNumber%22%3A0%2C%22childrenAges%22%3A%5B%5D%7D%5D?utm_source=inhouse&utm_medium=special&utm_campaign=belkacar&utm_content=landing_spb',
    kazan: 'https://travel.mts.ru/s?page=1&title=%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C&checkInDate=2023-10-30&checkOutDate=2023-10-31&locationId=8299ccb3-d2a1-46e8-b1e5-b33266be8d29&accommodations=%5B%7B%22adultsNumber%22%3A2%2C%22childrenNumber%22%3A0%2C%22childrenAges%22%3A%5B%5D%7D%5D?utm_source=inhouse&utm_medium=special&utm_campaign=belkacar&utm_content=landing_kazan',
    kalinin: 'https://travel.mts.ru/s?page=1&title=%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C&checkInDate=2023-10-30&checkOutDate=2023-10-31&locationId=mts-travel-area-12&accommodations=%5B%7B%22adultsNumber%22%3A2%2C%22childrenNumber%22%3A0%2C%22childrenAges%22%3A%5B%5D%7D%5D?utm_source=inhouse&utm_medium=special&utm_campaign=belkacar&utm_content=landing_kalinobl'
}