//import axios from 'axios'

export default {
  getGenres () {
    //axios.get('/fakeURL');
    let genres = ['Folktale','Visual Art', 'Music/Dance', 'Tradition', 'Wearables', 'Food','History'];
    return genres;
  },
  getLocales() {
    // //North Africa
    // let Algeria = ['Amazigh', 'Mozabite','Tuarega'];
    // let Canary_Islands = ['Guanches'];
    // let Ceuta = ['Majkasa Berber'];
    // let Egypt = ['Nubian'];
    // let Libya = ['Misurata Ahali','Misurata Karagula','Geryan','Zawia','Misalata','Zwara Berber','Khumus', 'Warfalla','Tarhona','Al-Zintan','Al-Rijban'];
    // let Morocco = ['Riffian Berbers','Zayanes','Shilhah'];
    // let Sahrawi_Arab_Republic = ['Bedu', 'Berber'];
    // let Sudan = ['Nubian','Beja','Mapan','Angassana','Nilotic'];
    // let Tunisia = ['Amazigh','Berber'];
    // let North_Africa = [Algeria, Canary_Islands, Ceuta, Egypt, Libya, Morocco, Sahrawi_Arab_Republic, Sudan, Tunisia];
    // //Southern_Africa
    // let Botswana = [];
    // let Lesotho = [];
    // let Namibia = [];
    // let South_Africa = [];
    // let Swaziland = [];
    // let Southern_Africa = [Botswana, Lesotho, Namibia, South_Africa, Swaziland];
    // //West Africa
    // let Benin = [];
    // let Burkina_Faso = [];
    // let Cape_Verde = [];
    // let Cote_DIvoire = [];
    // let Gambia = [];
    // let Guinea = [];
    // let Guinea_Bissau = [];
    // let Liberia = [];
    // let Mali = [];
    // let Mauritania = [];
    // let Niger = [];
    // let Nigeria = [];
    // let Senegal = [];
    // let Sierra_Leone = [];
    // let Togo = [];
    // let West_Africa = [Benin, Burkina_Faso, Cape_Verde, Cote_DIvoire, Gambia, Guinea, Guinea_Bissau, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra_Leone, Togo];
    // //East Africa
    // let Djibouti = [];
    // let Eritrea = [];
    // let Ethiopia = [];
    // let Somalia = [];
    // let South_Sudan = [];
    // let Madagascar = [];
    // let Mauritius = [];
    // let Comoros = [];
    // let Seychelles = [];
    // let Uganda = [];
    // let Rwanda = [];
    // let Burundi = [];
    // let Kenya = [];
    // let Tanzania = [];
    // let Mozambique = [];
    // let Malawi = [];
    // let Zambia = [];
    // let Zimbabwe = [];
    // let East_Africa = [Djibouti, Eritrea, Ethiopia, Somalia, South_Sudan, Madagascar, Mauritius, Comoros, Seychelles, Uganda, Rwanda, Burundi, Kenya, Tanzania, Mozambique, Malawi, Zambia, Zimbabwe];

    //All
    let locales = [
      {name: 'North Africa', countries: [{name: 'Algeria', tribes: ['Amazigh', 'Mozabite','Tuarega']}, {name: 'Canary Islands', tribes: ['Guanches']}, {name: 'Ceuta', tribes: ['Majkasa Berber']}, {name: 'Egypt', tribes: ['Nubian']}, {name: 'Libya', tribes: ['Misurata Ahali','Misurata Karagula','Geryan','Zawia','Misalata','Zwara Berber','Khumus', 'Warfalla','Tarhona','Al-Zintan','Al-Rijban']}, {name: 'Morocco', tribes: ['Riffian Berbers','Zayanes','Shilhah']}, {name: 'Sahrawi Arab Republic', tribes: ['Bedu', 'Berber']}, {name: 'Sudan', tribes: ['Nubian','Beja','Mapan','Angassana','Nilotic']}, {name: 'Tunisia', tribes: ['Amazigh','Berber']}]},
      {name: 'West Africa', countries: []},
      {name: 'South America', countries: []},
      {name: 'Southern Africa', countries: []},
      {name: 'East Africa', countries: [{name: 'Djibouti', tribes: []}, {name: 'Eritrea', tribes: []}, {name: 'Ethiopia', tribes: []} ]},
      {name: 'Central Africa', countries: []},
      {name: 'Caribbean', countries: []},
      {name: 'North America', countries: [{name: 'Canada'}, {name: 'United States of America'}, {name: 'Mexico'}, {name: 'Greenland'}, {name: 'Cuba'}]}];
    return locales;
  },
  getRegions(){
    let regions = ['West Africa', 'Southern Africa','North Africa','East Africa','Central Africa','Carribean','North America','South America','Europe','Asia'];
    return regions;
  },
  getCountries () {
    let countries = ['Algeria','Angola','Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Cote d\'Ivoire', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia','Ghana', 'Guinea','Guinea-Bissau', 'Kenya','Lesotho', 'Lesotho','Liberia', 'Libya', 'Madagascar','Malawi', 'Mali','Mauritius','Morocco','Mozambique','Namibia','Niger','Nigeria','Rwanda','Sao Tome and Principe','Senegal','Seychelles','Sierra Leone','Somalia','South Africa','South Sudan','Sudan','Tanzania','Togo','Tunisia','Uganda','Zambia','Zimbabwe'];
    return countries;
  },
  getFolktales () {
    let folktales = ['Ananse', 'Anansi', 'Brer Rabbit']
    return folktales;
  }
}
