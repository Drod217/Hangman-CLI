var wordBank = ['Zeus', 'Cronus', 'Ares', 'Hermes', 'Apollo', 'Uranus', 'Helios','Atlas',
'Hephaestus','Prometheus','Kratos','Tyche','Athena','Poisedon','Aphrodite','Demeter','Hestia','Hera','Artemis','Hades'] ;
var random = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[random];

module.exports = randomWord;