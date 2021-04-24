const IFS =[
["The scientific term for brain freeze is sphenopalatine ganglioneuralgia."],
["Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon."],
["The only letter that doesn’t appear on the periodic table is J."],
["There were two AI chatbots created by Facebook to talk to each other, but they were shut down after they started communicating in a language they made for themselves."],
["In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt."],
["The flashes of colored light you see when you rub your eyes are called “phosphenes”."],
["Iceland does not have a railway system."],
["The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1."],
["The tongue is the only muscle in one’s body that is attached from one end."],
["There is a company in Japan that has schools that teach you how to be funny. "],
["The Lego Group is the world’s most powerful brand. There are more Lego Minifigures than there are people on Earth."],
["An estimated 50% of all gold ever mined on Earth came from a single plateau in South Africa: Witwatersrand."],
["Octopuses and squids have beaks. The beak is made of keratin – the same material that a bird’s beak, and our fingernails are made of."],
["Although GPS is free for the world to use, it costs $2 million per day to operate. The money comes from American tax revenue."],
["The human eye is so sensitive that, if the Earth were flat and it was a dark night, a candle’s flame could be seen from 30 miles away."],
["The color red doesn’t really make bulls angry; they are color-blind."],
["A cluster of bananas is called a “hand”. Along that theme, a single banana is called a “finger”."],
["Mercury and Venus are the only two planets in our solar system that do not have any moons."],
["The reason the taste of artificial banana flavoring and artificial banana flavored products doesn’t taste like bananas is because it is based on a type of banana that was wiped out by a plague in the 1950s"],
["The national animal of Scotland is the Unicorn."],
["In 2002 alone, more people in the U.S. were killed by dogs than in shark attacks in the past 100 years."],
["Strong evidence says that at the galactic center (the rotational center) of the Milky Way lies a supermassive black hole."],
["The name Milky Way derives from the Greek galaxías kýklos or milky circle due to its appearance as a dim milky band in the sky."],
["Two-thirds of the galaxies in the known universe are spirals, and two-thirds of those are barred, the Milky Way ticks both of these boxes making it one of the most common galaxy designs."],
["The Milky Way has a diameter of about 9.5 x 1017 km . If our solar system was a U.S. quarter, the sun would be a microscopic speck of dust and the Milky Way would be as big as the U.S."],
["The Martian day is 24 hours and 37 minutes."],
["Mars has polar caps like Earth, containing frozen carbon dioxide and a small amount of water too."],
["The Sun appears about half the size on Mars as it does from Earth."],
["Rocks from Mars have landed on Earth from meteorite impacts blasting debris through space."],
["The largest volcano in the Solar System is on Mars. It is called Olympus Mons, which is Latin for Mount Olympus."],
["the largest country in world russia is 34150800 times larger than wolds smallest country"],
["we are travelling at a speed of approximately 1073059.3607305km/h due to earths revolution"]
];
function interestingFacts(){
    const synth = window.speechSynthesis;
    var ifIndex= Math.floor((Math.random() * 31) + 0);
    console.log(IFS[ifIndex]);
    let voce = new SpeechSynthesisUtterance(IFS[ifIndex]);

  var voices = window.speechSynthesis.getVoices();
    voce.text = IFS[ifIndex];

  voce.lang = "en-US";

  voce.volume = 1;

  voce.rate = 1;

  voce.pitch = 1; // Can be 0, 1, or 2

  synth.speak(voce);
    }
