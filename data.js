// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка, загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).




/*         Запрос нескольких пользователей
Генератор случайных пользователей позволяет получать до 5000 сгенерированных пользователей за один запрос, используя параметр результатов .
Пример запроса 12-ти пользователей:
https://randomuser.me/api/?results=12         */

export const postcode = `[
    {
        "gender": "female",
        "name": {
        "title": "Miss",
        "first": "Beverley",
        "last": "Gregory"
        },
        "location": {
        "street": {
        "number": 3570,
        "name": "Groveland Terrace"
        },
        "city": "Garden Grove",
        "state": "South Carolina",
        "country": "United States",
        "postcode": 49941,
        "coordinates": {
        "latitude": "88.6325",
        "longitude": "70.4252"
        },
        "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
        },
        "email": "beverley.gregory@example.com",
        "login": {
        "uuid": "1517555c-7264-4d48-ac51-ee80f4b25ccd",
        "username": "bigtiger914",
        "password": "frog",
        "salt": "lxq1rFyW",
        "md5": "09ffba71235451c6cd4090257403429c",
        "sha1": "90110ed0d606b4d7de24f83026d3ed48ccbd4e05",
        "sha256": "d2388b970b8c774c935f94cfe333b2c28760c70556b4867f5f76600e3121499e"
        },
        "dob": {
        "date": "1974-05-30T19:18:18.871Z",
        "age": 49
        },
        "registered": {
        "date": "2002-08-29T07:46:07.860Z",
        "age": 21
        },
        "phone": "(471) 477-8165",
        "cell": "(251) 320-5488",
        "id": {
        "name": "SSN",
        "value": "248-26-9261"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/women/92.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
        },
        "nat": "US"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Omkaar",
        "last": "Kini"
        },
        "location": {
        "street": {
        "number": 7618,
        "name": "Shanmugham Rd"
        },
        "city": "Ajmer",
        "state": "Sikkim",
        "country": "India",
        "postcode": 84210,
        "coordinates": {
        "latitude": "-58.1697",
        "longitude": "42.1693"
        },
        "timezone": {
        "offset": "-1:00",
        "description": "Azores, Cape Verde Islands"
        }
        },
        "email": "omkaar.kini@example.com",
        "login": {
        "uuid": "81812308-7dd3-47d3-ae4a-281a66cd0ddc",
        "username": "tinysnake939",
        "password": "blink182",
        "salt": "WelyM0jO",
        "md5": "b25747c1db75a31e73dc9379929f0297",
        "sha1": "14a0903e7db3f2b4d36608e3b524bf121c77ce82",
        "sha256": "c2eb2b6a6f8ad36ebad52589463cf01670412bbf0139b96e3f5c33bd3d6f2949"
        },
        "dob": {
        "date": "1997-10-25T23:30:13.915Z",
        "age": 25
        },
        "registered": {
        "date": "2009-07-05T21:02:55.144Z",
        "age": 14
        },
        "phone": "9656008211",
        "cell": "8904055159",
        "id": {
        "name": "UIDAI",
        "value": "981250050394"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/76.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
        },
        "nat": "IN"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Juho",
        "last": "Suomi"
        },
        "location": {
        "street": {
        "number": 7496,
        "name": "Pyynikintie"
        },
        "city": "Veteli",
        "state": "Satakunta",
        "country": "Finland",
        "postcode": 79410,
        "coordinates": {
        "latitude": "-76.5336",
        "longitude": "-115.1335"
        },
        "timezone": {
        "offset": "+10:00",
        "description": "Eastern Australia, Guam, Vladivostok"
        }
        },
        "email": "juho.suomi@example.com",
        "login": {
        "uuid": "6af2a2ec-ee5c-4da8-b00d-3329e0608928",
        "username": "angrymeercat283",
        "password": "astros",
        "salt": "ezbDHLsR",
        "md5": "fef7b3dd81ae5eae2dc0cfbc5ef6e479",
        "sha1": "60123d518e0c4b186a5017cc5064ec8870f57757",
        "sha256": "55420ea9b1eb1819c1db7e2dadd5d97dd20c8a2cb7732c261b642eedf540ae33"
        },
        "dob": {
        "date": "1950-01-12T09:37:11.732Z",
        "age": 73
        },
        "registered": {
        "date": "2011-12-20T15:01:45.618Z",
        "age": 11
        },
        "phone": "09-040-495",
        "cell": "048-167-71-56",
        "id": {
        "name": "HETU",
        "value": "NaNNA551undefined"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
        },
        "nat": "FI"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Rosário",
        "last": "Caldeira"
        },
        "location": {
        "street": {
        "number": 1260,
        "name": "Rua Dom Pedro Ii "
        },
        "city": "Ubá",
        "state": "Amazonas",
        "country": "Brazil",
        "postcode": 78378,
        "coordinates": {
        "latitude": "87.2372",
        "longitude": "179.5575"
        },
        "timezone": {
        "offset": "+4:00",
        "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
        },
        "email": "rosario.caldeira@example.com",
        "login": {
        "uuid": "d2391090-5f75-446e-bbaf-ac1607894b10",
        "username": "bluewolf777",
        "password": "cabron",
        "salt": "v6CqMJvd",
        "md5": "e077f794694d867effa94c481693ee4b",
        "sha1": "34d04c867b945669d51aed181a218107eab7c283",
        "sha256": "201b714e925b0366eaf6c1e10b157fa61c327c4a3f4116e10e5b6913888fdd42"
        },
        "dob": {
        "date": "1948-10-01T08:18:29.733Z",
        "age": 75
        },
        "registered": {
        "date": "2017-09-10T13:18:10.444Z",
        "age": 6
        },
        "phone": "(75) 4594-0006",
        "cell": "(15) 6441-3179",
        "id": {
        "name": "CPF",
        "value": "170.941.426-83"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/53.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
        },
        "nat": "BR"
        },
        {
        "gender": "female",
        "name": {
        "title": "Miss",
        "first": "پرنیا",
        "last": "گلشن"
        },
        "location": {
        "street": {
        "number": 6851,
        "name": "استاد نجات‌اللهی"
        },
        "city": "ساوه",
        "state": "البرز",
        "country": "Iran",
        "postcode": 88454,
        "coordinates": {
        "latitude": "19.0113",
        "longitude": "-106.6057"
        },
        "timezone": {
        "offset": "-6:00",
        "description": "Central Time (US & Canada), Mexico City"
        }
        },
        "email": "prny.glshn@example.com",
        "login": {
        "uuid": "176e0707-f8d2-4acc-a8a9-8006d1924f2c",
        "username": "heavydog472",
        "password": "bmwbmw",
        "salt": "EBajE1t3",
        "md5": "cb183b315e7e3a24894100d1410a9e21",
        "sha1": "e90e7ec321afe119e99ca513418ccea5be03909f",
        "sha256": "374822f81a8fece76c8babe513fa322fb6e915157da0b15293e325e48560c7fa"
        },
        "dob": {
        "date": "1990-10-31T04:48:57.023Z",
        "age": 32
        },
        "registered": {
        "date": "2003-04-01T17:06:48.373Z",
        "age": 20
        },
        "phone": "018-00959424",
        "cell": "0998-443-5458",
        "id": {
        "name": "",
        "value": null
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/women/91.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
        },
        "nat": "IR"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Jack",
        "last": "Hunt"
        },
        "location": {
        "street": {
        "number": 3822,
        "name": "Grove Road"
        },
        "city": "Ballinasloe",
        "state": "Kerry",
        "country": "Ireland",
        "postcode": 12438,
        "coordinates": {
        "latitude": "-28.1868",
        "longitude": "153.3714"
        },
        "timezone": {
        "offset": "-3:30",
        "description": "Newfoundland"
        }
        },
        "email": "jack.hunt@example.com",
        "login": {
        "uuid": "74995132-fc1c-48c9-b9e7-000928b76152",
        "username": "silvergoose973",
        "password": "deeper",
        "salt": "tN0U0ytX",
        "md5": "925a31839b0c8bb4bf2d74d26d76f74a",
        "sha1": "5f0814c4b22dbe5a589cb01527268e0171cc7ed0",
        "sha256": "c04be7abd41d4fc88135784be322309652b4ac6ca0d0bb3e55e7a2edadb577bc"
        },
        "dob": {
        "date": "1989-08-31T19:58:17.609Z",
        "age": 34
        },
        "registered": {
        "date": "2006-07-06T10:01:20.952Z",
        "age": 17
        },
        "phone": "021-574-6000",
        "cell": "081-396-9779",
        "id": {
        "name": "PPS",
        "value": "4200131T"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/81.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
        },
        "nat": "IE"
        },
        {
        "gender": "male",
        "name": {
        "title": "Monsieur",
        "first": "Daniele",
        "last": "Louis"
        },
        "location": {
        "street": {
        "number": 2574,
        "name": "Quai Charles-De-Gaulle"
        },
        "city": "Ponte Tresa",
        "state": "Aargau",
        "country": "Switzerland",
        "postcode": 4145,
        "coordinates": {
        "latitude": "50.1139",
        "longitude": "168.7076"
        },
        "timezone": {
        "offset": "-8:00",
        "description": "Pacific Time (US & Canada)"
        }
        },
        "email": "daniele.louis@example.com",
        "login": {
        "uuid": "2b1e7374-bc69-4edf-93a1-82d77027d5e2",
        "username": "silvermouse850",
        "password": "xyzzy",
        "salt": "nJ1elPeC",
        "md5": "df12b55f99305d5ddb5da1e2531237ec",
        "sha1": "5aefdf4a8a035dfbb4fcdd5ad18b5e18f6f889f5",
        "sha256": "70dd1e3c1cd1f3ebcab1a3daaeb0caf2d65f03090af17f068c1dc7ac41adcf44"
        },
        "dob": {
        "date": "1975-11-27T17:38:37.781Z",
        "age": 47
        },
        "registered": {
        "date": "2007-07-02T00:22:31.362Z",
        "age": 16
        },
        "phone": "077 980 05 75",
        "cell": "077 441 90 51",
        "id": {
        "name": "AVS",
        "value": "756.0817.0756.00"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
        },
        "nat": "CH"
        },
        {
        "gender": "male",
        "name": {
        "title": "Monsieur",
        "first": "Cosimo",
        "last": "Leroy"
        },
        "location": {
        "street": {
        "number": 7590,
        "name": "Place du 22 Novembre 1943"
        },
        "city": "Stüsslingen",
        "state": "Uri",
        "country": "Switzerland",
        "postcode": 2122,
        "coordinates": {
        "latitude": "-8.0953",
        "longitude": "-117.4831"
        },
        "timezone": {
        "offset": "+1:00",
        "description": "Brussels, Copenhagen, Madrid, Paris"
        }
        },
        "email": "cosimo.leroy@example.com",
        "login": {
        "uuid": "6d0f2c10-f8f7-447e-9766-879d87774641",
        "username": "greenmeercat349",
        "password": "descent",
        "salt": "2QX5cGL8",
        "md5": "5842f719c5c2fede2a60421a184ad2d5",
        "sha1": "1e8b826d25c49c6fd7b89566087ef1c04ea82e2a",
        "sha256": "8cc42832ffd2ed0aa1f5ffe09194f543a0c58b76a3f5b0a683c91b42c02f0b0d"
        },
        "dob": {
        "date": "1946-06-06T07:03:03.805Z",
        "age": 77
        },
        "registered": {
        "date": "2020-01-20T06:02:07.848Z",
        "age": 3
        },
        "phone": "078 925 94 15",
        "cell": "077 735 54 25",
        "id": {
        "name": "AVS",
        "value": "756.3916.5198.29"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/61.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
        },
        "nat": "CH"
        },
        {
        "gender": "female",
        "name": {
        "title": "Mrs",
        "first": "Holly",
        "last": "Hall"
        },
        "location": {
        "street": {
        "number": 7949,
        "name": "Henderson Road"
        },
        "city": "Napier",
        "state": "Bay of Plenty",
        "country": "New Zealand",
        "postcode": 55852,
        "coordinates": {
        "latitude": "-26.0441",
        "longitude": "-170.2458"
        },
        "timezone": {
        "offset": "-7:00",
        "description": "Mountain Time (US & Canada)"
        }
        },
        "email": "holly.hall@example.com",
        "login": {
        "uuid": "5afcf65c-4c5f-4c3d-88b7-a0114f9fcbe7",
        "username": "heavymeercat216",
        "password": "marble",
        "salt": "Ij6dI2iT",
        "md5": "7e694cd18349b6927a14710bbe61ea74",
        "sha1": "b93ec0c2f5a6f9ba6357aedf34b3d9f696ef8cc1",
        "sha256": "0be29d9453f7d3b7bcee0559096c7866cb558716986fbe0a26d05e42a062a299"
        },
        "dob": {
        "date": "1958-12-20T09:04:18.697Z",
        "age": 64
        },
        "registered": {
        "date": "2014-02-25T00:46:17.331Z",
        "age": 9
        },
        "phone": "(055)-892-2993",
        "cell": "(778)-944-8182",
        "id": {
        "name": "",
        "value": null
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
        },
        "nat": "NZ"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Martin",
        "last": "Allen"
        },
        "location": {
        "street": {
        "number": 8870,
        "name": "Crockett St"
        },
        "city": "Port Macquarie",
        "state": "New South Wales",
        "country": "Australia",
        "postcode": 2999,
        "coordinates": {
        "latitude": "-52.3566",
        "longitude": "-171.5229"
        },
        "timezone": {
        "offset": "+11:00",
        "description": "Magadan, Solomon Islands, New Caledonia"
        }
        },
        "email": "martin.allen@example.com",
        "login": {
        "uuid": "02412229-245a-40b3-9d12-a17fcad84158",
        "username": "smallzebra513",
        "password": "downer",
        "salt": "tkXtkqcx",
        "md5": "eb79147344c7cee7bd3a229ac191b4a7",
        "sha1": "ddad8e5734a06c55d57b5de430315462f55b7d21",
        "sha256": "a56ce8290f1c0fddf690648c167587f5985ce4f0af01cd5a6540d55370161fc6"
        },
        "dob": {
        "date": "1965-08-12T19:55:59.558Z",
        "age": 58
        },
        "registered": {
        "date": "2017-06-24T07:37:08.828Z",
        "age": 6
        },
        "phone": "02-4699-2754",
        "cell": "0466-555-726",
        "id": {
        "name": "TFN",
        "value": "389693393"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/63.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
        },
        "nat": "AU"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "اميرمحمد",
        "last": "محمدخان"
        },
        "location": {
        "street": {
        "number": 6493,
        "name": "میدان سلماس"
        },
        "city": "ساوه",
        "state": "هرمزگان",
        "country": "Iran",
        "postcode": 56275,
        "coordinates": {
        "latitude": "73.4152",
        "longitude": "121.9933"
        },
        "timezone": {
        "offset": "+9:30",
        "description": "Adelaide, Darwin"
        }
        },
        "email": "myrmhmd.mhmdkhn@example.com",
        "login": {
        "uuid": "018b8866-2f19-421c-bb0b-8a0020297c4d",
        "username": "smallbird719",
        "password": "nitro",
        "salt": "VkSSf2St",
        "md5": "56eba574557f7b73d0fc959c2afcad37",
        "sha1": "d4345ecb0126adb25086cc7a728df5892356daa5",
        "sha256": "fb05eb9d3273df062134b04e09d7891d3db60da7f77f0056ef2fe14816be4017"
        },
        "dob": {
        "date": "1997-01-19T23:46:29.711Z",
        "age": 26
        },
        "registered": {
        "date": "2019-03-29T02:12:32.235Z",
        "age": 4
        },
        "phone": "010-68117197",
        "cell": "0980-718-5711",
        "id": {
        "name": "",
        "value": null
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
        },
        "nat": "IR"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Milovan",
        "last": "Jovanović"
        },
        "location": {
        "street": {
        "number": 1798,
        "name": "Stefana Anđelića"
        },
        "city": "Smederevo",
        "state": "Kolubara",
        "country": "Serbia",
        "postcode": 49464,
        "coordinates": {
        "latitude": "55.8195",
        "longitude": "-42.8245"
        },
        "timezone": {
        "offset": "-6:00",
        "description": "Central Time (US & Canada), Mexico City"
        }
        },
        "email": "milovan.jovanovic@example.com",
        "login": {
        "uuid": "dace089f-4694-40e9-9bf3-9f6198c59874",
        "username": "beautifulladybug644",
        "password": "porter",
        "salt": "r162wMxx",
        "md5": "a57a257745f81c8e4bb97946b1f3aeed",
        "sha1": "3c8dd16e9d12dd84fed1525842b0ccd2c7fb259a",
        "sha256": "e276257237d0b72950054521bb160d40d861fa8ef15cb8f70d859911ad2be6bc"
        },
        "dob": {
        "date": "1988-08-16T03:13:14.055Z",
        "age": 35
        },
        "registered": {
        "date": "2009-05-04T05:03:45.648Z",
        "age": 14
        },
        "phone": "025-2556-200",
        "cell": "061-4133-965",
        "id": {
        "name": "SID",
        "value": "817565623"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/19.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
        },
        "nat": "RS"
        }
]`;
