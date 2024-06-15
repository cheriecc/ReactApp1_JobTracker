const englandCities = ["Bath", "Birmingham", "Bradford", "Brighton & Hove", "Bristol", "Cambridge", "Canterbury", "Carlisle", "Chelmsford", "Chester", "Chichester", "Colchester", "Coventry", "Derby", "Doncaster", "Durham", "Ely", "Exeter", "Gloucester", "Hereford", "Kingston-upon-Hull", "Lancaster", "Leeds", "Leicester", "Lichfield", "Lincoln", "Liverpool", "London", "Manchester", "Milton Keynes", "Newcastle-upon-Tyne", "Norwich", "Nottingham", "Oxford", "Peterborough", "Plymouth", "Portsmouth", "Preston", "Ripon", "Salford", "Salisbury", "Sheffield", "Southampton", "Southend-on-Sea", "St Albans", "Stoke on Trent", "Sunderland", "Truro", "Wakefield", "Wells", "Westminster", "Winchester", "Wolverhampton", "Worcester", "York"]
const walesCities = ["Bangor", "Cardiff", "Newport", "St Asaph", "St Davids", "Swansea", "Wrexham"]
const scotlandCities = ["Aberdeen", "Dundee", "Dunfermline", "Edinburgh", "Glasgow", "Inverness", "Perth", "Stirling"]
const irelandCities = ["Armagh", "Bangor", "Belfast", "Lisburn", "Londonderry", "Newry"]

const citiesData = {
    england: englandCities,
    wales: walesCities,
    scotland: scotlandCities,
    ireland: irelandCities
}

Object.keys(citiesData).map(x => console.log(citiesData[x]))