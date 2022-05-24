let stalkerMoment = {       //stalker
    names:[
        'Толя',
        'Стас',
        'Артём',
        'Глеб',
        'Григорой',
        'Вася',
        'Эдик',
        'Женя',
        'Ваня',
        'Саня',
        'Рома',
    ],
    klichka:[               //klichka (fam)
        'Кабан',
        'Пуля',
        'Обрез',
        'Баян',
        'Мышь',
        'Паращютист',
        'Летчик',
        'Свинец',
        'Тугой',
        'Свисток',
        'Щелбан',
    ]
}

let groupsMoment = {
    group:[
        "Одиночки",
        "Бандиты",
        "Чистое небо",
        "Долг",
        "Свобода",
        "Наемники",
        "Ученые",
        "Военные",
        "Монолит",
    ]
}

let rangsMoment = {
    rangi:[
        "Отмычка",
        "Новичок",
        "Опытный",
        "Мастер",
        "Бывалый",
        "Ветеран",
        "Легенда Зоны",
        "Сын Зоны",
        "Дитя Зоны",
        "Черная Зона",
    ]
}

let skil = {     //skil (sposobnosti)
    item: [
        "Обрез БМ-16, ПМ, Куртка Новичка",
        "СВУ-АС, ПБ, Комбинезон ЧН-1а",
        "Гроза, Desert Eagle, Экзоскелет 'Долга'",
        "ППШ-41, ТТ, Кожаный плащ",
        "АКМ, Glock 17, Комбинезон 'Заря'",
        "АК-74М 'Кобра', Glock 18, Комбинезон 'СЕВА'",
        "Винтовка Мосина, ПЛ-15, Комбинезон ЧН-3а",
        "STG-44, Mauser C96, Экзоскелет 'Бандитов'",
        "АКС-74у 'Гексагон', АПС, Комбинезон 'СКАТ-9М'",
        "АКМС 'Бубен', ПЯ 'Грач', Комбинезон ЧН-3б",
        "L-85, Desert Eagle, Экзоскелет 'Долга'",
        "Colt M4A1 'ACOG', Glock 17, Комбинезон 'Ветер Свободы'",
        "ВСС 'Кобра', Обрез БМ-16, ПС3-9д 'Броня Долга'",
        "Вепрь-12, Glock 17, ПС5-М 'Универсальная защита'",
        "FN SCAR-H 'Eotech', HK USP 'Match', Комбинезон 'Монолита'",
        "ПКП 'Печенег', HK USP 'Match', Экзоскелет 'Монолита'",
    ]}

let icon = {
    photo: [
        '<img src="css/img/1.png" width="200px" height="200px">',
        '<img src="css/img/2.png" width="200px" height="200px">',
        '<img src="css/img/3.png" width="200px" height="200px">',
        '<img src="css/img/4.png" width="200px" height="200px">',
        '<img src="css/img/5.png" width="200px" height="200px">',
        '<img src="css/img/6.png" width="200px" height="200px">',
        '<img src="css/img/7.png" width="200px" height="200px">',
        '<img src="css/img/8.png" width="200px" height="200px">',
        '<img src="css/img/9.png" width="200px" height="200px">',
        '<img src="css/img/10.png" width="200px" height="200px">',
        '<img src="css/img/11.png" width="200px" height="200px">',
        '<img src="css/img/12.png" width="200px" height="200px">',
        '<img src="css/img/13.png" width="200px" height="200px">',
        '<img src="css/img/14.png" width="200px" height="200px">',
    ]
}

let knopka = document.querySelector('#knopka')
let kart = document.querySelector('.kart')
let txt = document.querySelector('.txt')


knopka.addEventListener('click', function () {
    kart.innerHTML = ''
    txt.innerHTML = ''

    let randIndexNames = Math.floor(Math.random() * (stalkerMoment.names.length))
    let randicon = Math.floor(Math.random() * icon.photo.length)
    let randIndexklichka = Math.floor(Math.random() * (stalkerMoment.klichka.length))
    let randrangs = Math.floor(Math.random() * (rangsMoment.rangi.length))
    let randgroups = Math.floor(Math.random() * (groupsMoment.group.length))
    let randitem = Math.floor(Math.random() * (skil.item.length))
    kart.innerHTML = icon.photo[randicon]
    txt.innerHTML = 'Имя и Кличка: ' + stalkerMoment.names[randIndexklichka] + ' ' + stalkerMoment.klichka[randIndexNames] + '<br>' + 'Группировка: ' + groupsMoment.group[randgroups] + '<br>' + 'Ранг: ' + rangsMoment.rangi[randrangs] + '<br>' + 'Инвентарь: ' + skil.item[randitem]
    })





