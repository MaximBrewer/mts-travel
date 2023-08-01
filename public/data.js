window.questions = {
    sochi: [{
        question: `Как ты любишь отдыхать?`,
        answers: [
            { img: `/routes/sochi/m0/image.jpg`, text: `Гулять в природных заповедниках`, routeIndex: 0 },
            { img: `/routes/sochi/m1/image.jpg`, text: `Наслаждаться видами на горы`, routeIndex: 1 },
            { img: `/routes/sochi/m2/image.jpg`, text: `Пробовать продукты с местных ферм`, routeIndex: 2 },
        ]
    }],
    spb: [{
        question: `Как ты любишь отдыхать?`,
        answers: [
            { img: `/routes/spb/m0/image.jpg`, text: `Гулять у реки и наслаждаться видами`, routeIndex: 0 },
            { img: `/routes/spb/m1/image.jpg`, text: `За городом на дачах`, routeIndex: 1 },
            { img: `/routes/spb/m2/image.jpg`, text: `Знакомиться с культурой разных народов`, routeIndex: 2 },
        ]
    }]
}

window.routes = {
    sochi: [
        {
            title: `Голубая река, белые берега — заповедники и природные парки Сочи за один день`,
            text: `Если в горах Красной Поляны вы уже побывали, а море и пляж уже поднадоели, то в Сочи можно отправиться в освежающие горные леса. И нет, они не будут иметь никакого отношения к горам Красной Поляны.`,
            link: "/pdf/Sochi_travel giude_zapovedniki.pdf",
            items: [
                {
                    title: `Отель`,
                    text: `Мы нашли несколько отелей в центре Сочи, расположенных в шаговой доступности от главных достопримечательностей. Но главное, оттуда удобно начинать маршрут.`,
                    icon: `/routes/sochi/m2/i0/icon.svg`,
                    image: `/routes/sochi/m2/i0/image.jpg`
                },
                {
                    title: `Реликтовый лес`,
                    text: `Прогуляйтесь по сказочному лесу: папоротниково-лиановый пейзаж дополняют тропические грибы-цветы, скалы, разломы и бирюзово-синяя вода горной реки.`,
                    icon: `/routes/sochi/m2/i1/icon.svg`,
                    image: `/routes/sochi/m2/i1/image.jpg`
                },
                {
                    title: `Белый каньон`,
                    text: `Здесь вас ждет невероятное сочетание чистейшей голубой воды и белых скал — цвета просто фантастические. Не забудьте сделать классные фото на память.`,
                    icon: `/routes/sochi/m2/i2/icon.svg`,
                    image: `/routes/sochi/m2/i2/image.jpg`
                }
            ]
        },
        {
            title: `На выходные в горы`,
            text: `Посвятите горам Красной Поляны, таким высоким и могущественным, целый уикенд. Когда устанете от суеты морского побережья или просто захотите почувствовать прохладу в летний зной, смело берите машину BelkaCar на несколько дней и направляйтесь к подножию хребта Аибга.`,
            link: "/pdf/Sochi_travel giude_v gory.pdf",
            items: [
                {
                    title: `Отель`,
                    text: `Мы сделали подборку отелей в Адлере, где можно комфортно переночевать и начать путешествие на каршеринге.`,
                    icon: `/routes/sochi/m1/i0/icon.svg`,
                    image: `/routes/sochi/m1/i0/image.png`
                },
                {
                    title: `Аттракционы в ущелье`,
                    text: `Сюда едут не только за красивыми видами, но и за адреналином — место славится своими высотными аттракционами. Попробуйте прыгнуть в пропасть с банджи или прокатиться на огромных качелях через все ущелье.`,
                    icon: `/routes/sochi/m1/i1/icon.svg`,
                    image: `/routes/sochi/m1/i1/image.png`
                },
                {
                    title: `Водопад`,
                    text: `В маршруте будет несколько водопадов, один из них достигает 70 метров высоты. Отдельное удовольствие — сама прогулка к нему по горной извилистой дороге сквозь буковый лес.`,
                    icon: `/routes/sochi/m1/i2/icon.svg`,
                    image: `/routes/sochi/m1/i2/image.png`
                }
            ]
        },
        {
            title: `Южный агротуризм: чайные плантации и обед на ферме за один день`,
            text: `В этом маршруте собраны лучшие локации для агротуризма (и не только), чтобы вы переключились от мирской и туристической суеты на что-то прекрасное. Длительность маршрута — один день.`,
            link: "/pdf/Sochi_travel giude _agritourism.pdf",
            items: [
                {
                    title: `Отель`,
                    text: `Начните свое путешествие комфортно: мы подобрали несколько отелей, из которых удобно будет начать наш маршрут.`,
                    icon: `/routes/sochi/m0/i0/icon.svg`,
                    image: `/routes/sochi/m0/i0/image.jpg`
                },
                {
                    title: `Чайные плантации`,
                    text: `Насладитесь спокойным утром на зелёных чайных террасах , которые тянутся до самого горизонта и ничуть не уступают видами легендарному острову Цейлон.`,
                    icon: `/routes/sochi/m0/i1/icon.svg`,
                    image: `/routes/sochi/m0/i1/image.jpg`
                },
                {
                    title: `Обед на ферме`,
                    text: `На высоте 400 метров над уровнем моря вас ждет отличный фермерский обед из органических продуктов, выращенных здесь же.`,
                    icon: `/routes/sochi/m0/i2/icon.svg`,
                    image: `/routes/sochi/m0/i2/image.jpg`
                }
            ]

        },
    ],
    spb: [
        {
            title: `Любуемся Невой с разных сторон. Главные смотровые площадки за два дня`,
            text: `Такой Неву ты еще не видел. Мы нашли точки, где ты откроешь не только панораму на водную гладь и мосты, но и исторические памятники. «Невский пятачок», крепость с милым названием Орешек — слышал ли ты о таких? А ведь это одни из самых впечатляющих мест, до которых легко добраться на каршеринге BelkaCar.`,
            link: "/pdf/SP_travel giude_Neva.pdf",
            items: [
                {
                    title: `Отель`,
                    text: `Перед большим путешествием надо как следует отдохнуть. Поэтому мы нашли несколько отелей, где можно расслабиться. А еще оттуда удобно начинать маршрут.`,
                    icon: `/routes/spb/m0/i0/icon.svg`,
                    image: `/routes/spb/m0/i0/image.jpg`
                },
                {
                    title: `Стрелка двух рек`,
                    text: `Ты увидишь, как река Нева сливается с Ижорой, и темно-синяя вода приобретает более коричневый оттенок. Ну не волшебство ли?`,
                    icon: `/routes/spb/m0/i1/icon.svg`,
                    image: `/routes/spb/m0/i1/image.jpg`
                },
                {
                    title: `Ореховый остров`,
                    text: `На Ореховом острове вы увидите, как исторические события влияли на древнюю крепость и оставляли следы. Например, там до сих пор есть вмятины от пуль и снарядов.`,
                    icon: `/routes/spb/m0/i2/icon.svg`,
                    image: `/routes/spb/m0/i2/image.jpg`
                }
            ]
        },
        {
            title: `Нескучные дачи: от «Амстердама» до древних пещер за два дня`,
            text: `А поехали на дачу? Нет-нет, не копать грядки, а просто в гости. Посмотрим, как раньше жили известные купцы, деятели искусств и герои книг, увидим заброшенный замок. А потом отправимся в прошлое и посетим лабиринты пещер, где раньше добывали кварц для императорского двора.`,
            link: "/pdf/SP_travel giude_dacha.pdf",
            items: [
                {
                    title: `Отель`,
                    text: `Мы подготовили отели, расположенные близко к выезду в сторону Гатчины, чтобы путешествие началось без пробок.`,
                    icon: `/routes/spb/m1/i0/icon.svg`,
                    image: `/routes/spb/m1/i0/image.jpg`
                },
                {
                    title: `Кусочек Голландии`,
                    text: `Даже в русской провинции можно встретить концептуальную городскую архитектуру. Дом «Амстердам» в поселке Сиверский прямое тому доказательство.`,
                    icon: `/routes/spb/m1/i1/icon.svg`,
                    image: `/routes/spb/m1/i1/image.jpg`
                },
                {
                    title: `Усадьба писателя`,
                    text: `Деревня Пустынька, где жил и работал граф Толстой. Здесь же можно увидеть графский грот и посетить «литературную» туристическую тропу.`,
                    icon: `/routes/spb/m1/i2/icon.svg`,
                    image: `/routes/spb/m1/i2/image.jpg`
                }
            ]
        },
        {
            title: `Открывая Карелию: вокруг Ладоги за два дня`,
            text: `Поездка в Карелию — идеальный вариант на уик-энд. Там все, что нужно для путешественника: виды на озеро, хорошие дороги, комфортное жилье и кафе, где вкусно кормят. Но главное, что Карелия — регион с богатым культурным колоритом. Поэтому вперед на Ладогу!`,
            link: "/pdf/SP_travel giude_Karelia.pdf",
            items: [
                {
                    title: `Отель`,
                    text: `Мы нашли места, где будет удобно переночевать перед большим путешествием, а с утра — позавтракать и удобно выехать. Никаких пробок по Мурманскому шоссе.`,
                    icon: `/routes/spb/m2/i0/icon.svg`,
                    image: `/routes/spb/m2/i0/image.jpg`
                },
                {
                    title: `Маяки-близнецы`,
                    text: `Панорама на извилистую реку возле чугунного Белого маяка. Со смотровой площадки виден и его «близнец» — Красный маяк. Отличное место для кинематографичных фото.`,
                    icon: `/routes/spb/m2/i1/icon.svg`,
                    image: `/routes/spb/m2/i1/image.jpg`
                },
                {
                    title: `Заброшенная ж/д`,
                    text: `Место, где в суровых скалах был пробурен живописный железнодорожный тоннель. Самое время посмотреть, пока здесь не пустили скоростные поезда!`,
                    icon: `/routes/spb/m2/i2/icon.svg`,
                    image: `/routes/spb/m2/i2/image.jpg`
                }
            ]
        }
    ]
}