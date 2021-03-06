window.assets_dir = "https://www.estelzhao.com/app/codepen/img";

window.randRange = function (minNum, maxNum, decimals) {
  decimals = decimals || 0;
  return Math.round((minNum + Math.random() * (maxNum - minNum)) * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

var MainData = {
  path: [
  [{ x: 0, y: 3600 }, { x: 0, y: 380 }],
  [{ x: 0, y: 380 }, { x: 155, y: 700 }, { x: 155, y: 1210 }, { x: 680, y: 1210 }, { x: 680, y: 2530 }, { x: 1230, y: 2530 }, { x: 1230, y: 1970 }],
  [{ x: 0, y: 380 }, { x: -200, y: 650 }, { x: -640, y: 650 }, { x: -640, y: 50 }, { x: -3000, y: 50 }, { x: -3040, y: -850 }],
  [{ x: 0, y: 380 }, { x: -200, y: 160 }, { x: -200, y: -1060 }, { x: 10, y: -1060 }, { x: 10, y: -1060 }, { x: 10, y: -1850 }],
  [{ x: 10, y: -1850 }, { x: 140, y: -2100 }, { x: 140, y: -2700 }, { x: 1430, y: -2700 }, { x: 1430, y: -3380 }],
  [{ x: 10, y: -1850 }, { x: -100, y: -2100 }, { x: -100, y: -2600 }, { x: -1500, y: -2660 }, { x: -1500, y: -3320 }], // line 5
  [{ x: 1230, y: 1970 }, { x: 1450, y: 1750 }, { x: 1800, y: 1750 }, { x: 1800, y: 3400 }, { x: 2270, y: 3400 }, { x: 2270, y: 2940 }],
  [{ x: 1230, y: 1970 }, { x: 1230, y: 2430 }, { x: 2950, y: 2430 }, { x: 2950, y: 2670 }, { x: 3720, y: 2670 }, { x: 3720, y: 2190 }],
  [{ x: -3040, y: -850 }, { x: -2780, y: -450 }, { x: -2780, y: 1330 }, { x: -1540, y: 1330 }, { x: -1540, y: 2470 }, { x: -950, y: 2470 }, { x: -950, y: 2080 }],
  [{ x: -3040, y: -850 }, { x: -3550, y: -850 }, { x: -3550, y: 1250 }, { x: -4385, y: 1250 }, { x: -4385, y: 780 }],
  [{ x: 1430, y: -3380 }, { x: 1700, y: -3380 }, { x: 1700, y: -250 }, { x: 1420, y: -250 }, { x: 1420, y: -640 }], // line 10
  [{ x: 1430, y: -3380 }, { x: 1160, y: -3380 }, { x: 1160, y: -250 }, { x: 1420, y: -250 }, { x: 1420, y: -640 }],
  [{ x: -1500, y: -3320 }, { x: 300, y: -3320 }, { x: 300, y: -2320 }, { x: 1700, y: -2320 }, { x: 1700, y: -1590 }, { x: 2570, y: -1590 }, { x: 2570, y: -2110 }],
  [{ x: -1500, y: -3320 }, { x: -1500, y: -3820 }, { x: -1830, y: -3820 }, { x: -1830, y: -700 }, { x: -1190, y: -700 }],
  [{ x: 2270, y: 2940 }, { x: 2270, y: 1570 }, { x: 4020, y: 1570 }, { x: 4320, y: -230 }],
  [{ x: 2270, y: 2940 }, { x: 2270, y: 3690 }, { x: 2590, y: 3690 }, { x: 2590, y: 4510 }, { x: 1710, y: 4510 }, { x: 1710, y: 4230 }], // line 15
  [{ x: 2270, y: 2940 }, { x: 2650, y: 3180 }, { x: 3150, y: 3180 }, { x: 3150, y: 4140 }, { x: 4240, y: 4140 }, { x: 4240, y: 3740 }],
  [{ x: 3720, y: 2190 }, { x: 3600, y: 2590 }, { x: 3600, y: 4140 }, { x: 4240, y: 4140 }, { x: 4240, y: 3740 }],
  [{ x: 3720, y: 2190 }, { x: 3920, y: 1850 }, { x: 3920, y: 1400 }, { x: 2560, y: 1400 }, { x: 2560, y: 670 }],
  [{ x: -950, y: 2080 }, { x: -1200, y: 2250 }, { x: -1400, y: 2250 }, { x: -1400, y: 1690 }, { x: -1200, y: 1690 }, { x: -1200, y: -680 }],
  [{ x: -950, y: 2080 }, { x: -780, y: 1780 }, { x: -780, y: 1580 }, { x: -1870, y: 1580 }, { x: -1870, y: 2320 }, { x: -3060, y: 2320 }, { x: -3060, y: 1900 }], // line 20
  [{ x: -4385, y: 780 }, { x: -4245, y: 500 }, { x: -4245, y: 180 }, { x: -1200, y: 180 }, { x: -1200, y: -680 }],
  [{ x: -4385, y: 780 }, { x: -4490, y: 280 }, { x: -4850, y: 280 }, { x: -4850, y: 2440 }, { x: -3060, y: 2440 }, { x: -3060, y: 1900 }],
  [{ x: 1420, y: -640 }, { x: 3380, y: -640 }, { x: 3380, y: 340 }, { x: 4320, y: 340 }, { x: 4320, y: -230 }],
  [{ x: 1420, y: -640 }, { x: 200, y: -640 }, { x: 200, y: -290 }, { x: -1200, y: -290 }, { x: -1200, y: -680 }],
  [{ x: 2570, y: -2110 }, { x: 2570, y: -1310 }, { x: 3850, y: -1310 }, { x: 3850, y: -3540 }], // line 25
  [{ x: 2570, y: -2110 }, { x: 2070, y: -2110 }, { x: 2070, y: -480 }, { x: 2560, y: -480 }, { x: 2560, y: 670 }],
  [{ x: -1200, y: -680 }, { x: -860, y: -680 }, { x: -860, y: 120 }, { x: -2280, y: 120 }, { x: -2280, y: 790 }, { x: -1910, y: 790 }],
  [{ x: -1200, y: -680 }, { x: -1600, y: -490 }, { x: -2280, y: -490 }, { x: -2280, y: 790 }, { x: -1910, y: 790 }],
  [{ x: -3060, y: 1900 }, { x: -2820, y: 1400 }, { x: -2220, y: 2500 }, { x: -2220, y: 3780 }],
  [{ x: -3060, y: 1900 }, { x: -3660, y: 1900 }, { x: -3660, y: 3900 }, { x: -4420, y: 3900 }, { x: -4420, y: 3340 }], // line 30
  [{ x: -1910, y: 790 }, { x: -1580, y: 1040 }, { x: 920, y: 1040 }, { x: 920, y: 1400 }, { x: 2560, y: 1400 }, { x: 2560, y: 670 }],
  [{ x: -1910, y: 790 }, { x: -1480, y: 580 }, { x: -1480, y: -120 }, { x: -2480, y: -120 }, { x: -2480, y: -1460 }, { x: -3830, y: -1460 }, { x: -3830, y: -2240 }]],

  line: [
  {
    id: 0,
    width: 200,
    height: 2570,
    path: 'M100,5 L100,2565',
    copy: '' },

  {
    id: 1,
    width: 1280,
    height: 1845,
    path: 'M1180,1840 L1180,1420 L650,1420 L650,100 L100,100 L100,380',
    image: 'nationalbutton1.png',
    copy: 'Should I be?<br />I haven\'t made<br />plans yet.' },

  {
    id: 2,
    width: 2950,
    height: 1315,
    path: 'M100,100 L450,100 L450,700 L2850,700 L2850,1310',
    image: 'nationalbutton2.png',
    copy: 'It\'s gonna be<br />AWESOME. It\'s my fave<br />holiday&mdash;I can\'t wait to<br />celebrate.' },

  {
    id: 3,
    width: 420,
    height: 1690,
    path: 'M220,5 L320,0 L320,1240 L100,1240 L100,1685',
    image: 'nationalbutton3.png',
    copy: 'A little bit.<br />It\'s an excuse to<br />party, right?' },

  {
    id: 4,
    width: 1490,
    height: 930,
    path: 'M1390,5 L1390,615 L100,615 L100,925',
    image: 'nationalbutton4.png',
    copy: 'The adoption of the<br />Declaration of<br />Independence.' },

  {
    id: 5,
    width: 1610,
    height: 830,
    path: 'M100,5 L100,485 L1510,485 L1510,825',
    image: 'nationalbutton5.png',
    copy: 'The long weekend,<br />duh...' },

  {
    id: 6,
    width: 825,
    height: 1890,
    path: 'M820,1790 L520,1790 L520,100 L100,100 L100,450',
    image: 'nationalbutton6.png',
    copy: 'Good point.<br />But where should<br />I start?' },

  {
    id: 7,
    width: 2660,
    height: 440,
    path: 'M2650,420 L2650,340 L775,340 L775,100 L5,100 L5,265',
    image: 'nationalbutton7.png',
    copy: 'I was invited<br />to a cookout. I\'ll<br />RSVP now.   ' },

  {
    id: 8,
    width: 1940,
    height: 3545,
    path: 'M1840,3540 L1840,1340 L600,1340 L600,100 L5,100 L5,340',
    image: 'nationalbutton8.png',
    copy: 'I\'m proud to break out<br />my gear designed with<br />the stars and bars.' },

  {
    id: 9,
    width: 1010,
    height: 2305,
    path: 'M5,2300 L205,2300 L205,100 L1005,100 L1005,270',
    image: 'nationalbutton9.png',
    copy: 'It\'s the perfect time<br />to raise the USA flag<br />in the front yard!' },

  {
    id: 10,
    width: 550,
    height: 3410,
    path: 'M400,3405 L100,3405 L100,5 L545,5 L545,100',
    image: 'nationalbutton10.png',
    copy: 'Flattery will get you<br />everywhere...but I<br />just know the basics.' },

  {
    id: 11,
    width: 550,
    height: 3410,
    path: 'M150,3405 L450,3405 L450,5 L5,5 L5,100',
    image: 'nationalbutton11.png',
    copy: 'No, it was a<br />lucky guess.' },

  {
    id: 12,
    width: 3950,
    height: 2050,
    path: 'M3945,1950 L2465,1950 L2465,860 L1010,860 L1010,100 L5,100 L5,275',
    image: 'nationalbutton12.png',
    copy: 'Catching up with<br />friends.' },

  {
    id: 13,
    width: 820,
    height: 3110,
    path: 'M180,2855 L180,3105 L720,3105 L720,100 L5,100',
    image: 'nationalbutton13.png',
    copy: 'Firing up<br />the grill!' },

  {
    id: 14,
    width: 2410,
    height: 2420,
    path: 'M2310,5 L2310,1020 L100,1020 L100,2415',
    image: 'nationalbutton14.png',
    copy: 'Soaking up the sun<br />at the shore.' },

  {
    id: 15,
    width: 1020,
    height: 1600,
    path: 'M670,1595 L670,1220 L100,1220 L100,100 L1015,100 L1015,315',
    image: 'nationalbutton15.png',
    copy: 'Hosting a movie<br />marathon with<br />friends & family.' },

  {
    id: 16,
    width: 1610,
    height: 1170,
    path: 'M1605,1070 L1055,1070 L1055,100 L5,100 L5,290',
    image: 'nationalbutton16.png',
    copy: 'Baking USA-themed<br />desserts with red, white<br />& blue designs.' },

  {
    id: 17,
    width: 830,
    height: 1705,
    path: 'M730,1700 L730,100 L5,100 L5,290',
    image: 'nationalbutton17.png',
    copy: 'I\'ll probably head<br />inside to beat the<br />heat.' },

  {
    id: 18,
    width: 1470,
    height: 805,
    path: 'M100,5 L100,505 L1465,505 L1465,800',
    image: 'nationalbutton18.png',
    copy: 'I\'m not really a big<br />planner. I guess I\'ll keep<br />the celebration going<br />somehow.' },

  {
    id: 19,
    width: 460,
    height: 2665,
    path: 'M160,5 L360,5 L360,600 L100,600 L100,2660',
    image: 'nationalbutton19.png',
    copy: 'Thanksgiving<br />is a close second,<br />but BBQ is life.' },

  {
    id: 20,
    width: 2250,
    height: 1090,
    path: 'M5,745 L5,990 L1150,990 L1150,100 L2245,100 L2245,330',
    image: 'nationalbutton20.png',
    copy: 'Nope...<br />the fireworks alone<br />set it apart.' },

  {
    id: 21,
    width: 3140,
    height: 930,
    path: 'M3135,5 L3135,410 L100,410 L100,925',
    image: 'nationalbutton21.png',
    copy: 'I\'m always down to<br />eat until I\'m all the<br />way full at a back-<br />yard BBQ.' },

  {
    id: 22,
    width: 1885,
    height: 2310,
    path: 'M1415,2135 L1415,2305 L1785,2305 L1785,100 L5,100 L5,340',
    image: 'nationalbutton22.png',
    copy: 'I\'ll definitely watch<br />fireworks&mdash;somewhere,<br />somehow, some way!' },

  {
    id: 23,
    width: 2540,
    height: 1260,
    path: 'M2535,1160 L900,1160 L900,100 L5,100 L5,260',
    image: 'nationalbutton23.png',
    copy: 'I\'m heading to<br />the beach.' },

  {
    id: 24,
    width: 2270,
    height: 670,
    path: 'M5,570 L905,570 L905,100 L2265,100 L2265,240',
    image: 'nationalbutton24.png',
    copy: 'I\'ll be hitting up a<br />cookout or two.' },

  {
    id: 25,
    width: 1720,
    height: 2130,
    path: 'M1620,580 L1620,100 L100,100 L100,2125',
    image: 'nationalbutton25.png',
    copy: 'You know it. I love being<br />in the mix with the<br />masses.' },

  {
    id: 26,
    width: 760,
    height: 2540,
    path: 'M360,2535 L660,2535 L660,630 L100,630 L100,5',
    image: 'nationalbutton26.png',
    copy: 'Intimate gatherings<br />are more my speed.' },

  {
    id: 27,
    width: 1680,
    height: 1590,
    path: 'M100,1585 L100,630 L1580,630 L1580,5 L1435,5',
    image: 'nationalbutton27.png',
    copy: 'Aloha,<br />King\'s Hawaiian Original<br />Sweet Pineapple BBQ<br />Sauce! You can\'t go<br />wrong with a classic.' },

  {
    id: 28,
    width: 790,
    height: 1385,
    path: 'M5,1285 L690,1285 L690,5 L540,5',
    image: 'nationalbutton28.png',
    copy: 'What\'s summer<br />without the heat? King\'s<br />Hawaiian Big Island<br />Lava Sauce FTW!' },

  {
    id: 29,
    width: 720,
    height: 1805,
    path: 'M715,1705 L100,1705 L100,5',
    image: 'nationalbutton29.png',
    copy: 'Washington, D.C.' },

  {
    id: 30,
    width: 1120,
    height: 2460,
    path: 'M5,2360 L410,2360 L410,100 L1115,100 L1115,280',
    image: 'nationalbutton30.png',
    copy: 'New York' },

  {
    id: 31,
    width: 4170,
    height: 555,
    path: 'M4165,455 L1585,455 L1585,100 L5,100 L5,410',
    image: 'nationalbutton31.png',
    copy: 'That would help!<br />I\'ll check out Macy\'s<br />Culinary Council<br />for recipes.' },

  {
    id: 32,
    width: 2485,
    height: 2390,
    path: 'M300,5 L100,5 L100,735 L1185,735 L1185,2100 L2480,2100 L2480,2385',
    image: 'nationalbutton32.png',
    copy: 'I\'m ok with<br />sticking to the<br />basics.' }],


  dot: [
  {
    id: 0,
    image: 'nationalimage0.png',
    popup: [{ button: 0, nextDot: 1 }] },

  {
    id: 1,
    image: 'nationalimage1.png',
    copy: 'ARE YOU<br />FIRED UP?',
    sponsorcopy: 'brought to you by',
    popup: [{ button: 1, nextDot: 3 }, { deco: 'figure_blue.png' }, { button: 2, nextDot: 4 }, { deco: 'figure_red.png' }, { button: 3, nextDot: 2 }, { deco: 'figure_green.png' }] },

  {
    id: 2,
    image: 'nationalimage2.png',
    copy: 'WHAT ARE WE<br />CELEBRATING<br />ANYWAY?',
    popup: [{ deco: 'balloon_red.png' }, { deco: 'balloon_blue.png' }, { button: 4, nextDot: 5 }, { button: 5, nextDot: 6 }] },

  {
    id: 3,
    image: 'nationalimage3.png',
    copy: 'HOP TO IT, HOMIE!<br /><span>DON\'T YOU WANT TO</span><br />MAKE THIS HOLIDAY<br />MEMORABLE?',
    sponsorcopy: 'brought to you by',
    popup: [{ button: 6, nextDot: 7 }, { deco: 'figure_green2.png' }, { button: 7, nextDot: 8 }, { deco: 'figure_red.png' }] },

  {
    id: 4,
    image: 'nationalimage4.png',
    copy: 'HOW WILL YOU<br>SHOW YOUR LEVEL<br />OF EXCITEMENT?',
    popup: [{ deco: 'national_redheart.png' }, { button: 8, nextDot: 9 }, { button: 9, nextDot: 10 }] },

  {
    id: 5,
    image: 'nationalimage5.png',
    copy: 'AHA! I SEE YOU<br>KNOW YOUR<br />U.S. HISTORY.',
    popup: [{ button: 10, nextDot: 11 }, { button: 11, nextDot: 11 }] },

  {
    id: 6,
    image: 'nationalimage6.png',
    copy: '<span>COMPLETE THIS SENTENCE:</span><br />SUMMER FUN<br />DAYS ARE ALSO<br />MADE FOR...',
    popup: [{ deco: 'national_popsicle.png' }, { deco: 'national_drink.png' }, { button: 12, nextDot: 12 }, { button: 13, nextDot: 13 }] },

  {
    id: 7,
    image: 'nationalimage7.png',
    copy: 'WHAT<br />SOUNDS MOST<br />APPEALING?',
    popup: [{ deco: 'national_bigheart.png' }, { deco: 'national_thumb.png' }, { button: 16, nextDot: 16 }, { button: 15, nextDot: 15 }, { button: 14, nextDot: 14 }] },

  {
    id: 8,
    image: 'nationalimage8.png',
    copy: 'WHAT ARE YOU<br /><span>THINKING ABOUT DOING</span><br />THAT NIGHT?',
    popup: [{ button: 17, nextDot: 16 }, { button: 18, nextDot: 17 }, { deco: 'twinkle_star_blue.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_blue.png' }, { deco: 'twinkle_star_red.png' }] },

  {
    id: 9,
    image: 'nationalimage9.png',
    copy: 'DOES ANY<br />OTHER HOLIDAY<br />COMPARE TO<br />JULY 4TH?',
    popup: [{ button: 19, nextDot: 13 }, { button: 20, nextDot: 18 }] },

  {
    id: 10,
    image: 'nationalimage10.png',
    copy: 'GOT A<br />FAVORITE<br />JULY 4TH<br />ACTIVITY?',
    popup: [{ deco: 'balloon_red.png' }, { deco: 'balloon_blue.png' }, { button: 21, nextDot: 13 }, { button: 22, nextDot: 18 }] },

  {
    id: 11,
    image: 'nationalimage11.png',
    copy: 'WHERE\'S<br />THE PARTY AT<br />THIS YEAR?',
    popup: [{ deco: 'national_map.png' }, { button: 23, nextDot: 14 }, { button: 24, nextDot: 13 }, { deco: 'national_hotspot.png' }, { deco: 'national_hotspot.png' }] },

  {
    id: 12,
    image: 'nationalimage12.png',
    copy: 'IS IT SAFE TO SAY,<br />YOU DON\'T MIND<br />BIG CROWDS?',
    popup: [{ deco: 'national_people.png' }, { deco: 'national_people_blue.png' }, { deco: 'national_people_blue.png' }, { button: 25, nextDot: 19 }, { button: 26, nextDot: 17 }] },

  {
    id: 13,
    image: 'nationalimage13.png',
    sponsorcopy: 'brought to you by',
    copy: '<span>ALL SORTS OF JUICY MEATS ARE<br />ON THE GRILL.</span> WHICH BBQ<br />SAUCE FLAVOR WILL<br />YOU REACH FOR?',
    popup: [{ button: 27, nextDot: 20 }, { deco: 'national_beerbot.png' }, { button: 28, nextDot: 20 }, { deco: 'national_beertop.png' }] },

  {
    id: 14,
    type: 1,
    image: 'nationalresult14.png',
    subtitle: 'I\'M A DEVOUT',
    title: 'SUN WORSHIPPER.',
    copy: 'Since summer is here, the way<br />I celebrate the day is to tan and chill.<br />Who can be mad at that?',
    sharebg: 'nationalshare14.png',
    popup: [{ deco: 'national_lounge.png' }, { deco: 'national_umbrella.png' }] },

  {
    id: 15,
    type: 1,
    image: 'nationalresult15.png',
    subtitle: 'CALL ME A',
    title: 'SUMMER MOVIE HOUND!',
    copy: 'I\'ll keep my film obsession going by heading to a multiplex to catch the<br />latest holiday blockbuster and munch on my fave snacks&mdash;<br />a tub of popcorn and, of course, a box of Sour Patch Kids!',
    sponsorcopy: 'Discover all the sour and sweet flavors of Sour Patch Kids. <a href="http://www.sourpatch.com/?cm_sp=imp-_-fireworks-_-summermoviehound_sourpatch_findoutmore" target="_blank">Find Out More</a>',
    sharebg: 'nationalshare15.png',
    popup: [{ deco: 'national_popcorn.png' }] },

  {
    id: 16,
    type: 1,
    image: 'nationalresult16.png',
    subtitle: '',
    title: 'HUMBLE HOMEBODY<span>, here!</span>',
    copy: 'Staying in has its benefits&mdash;I\'ll tune<br />in to watch Macy\'s Fireworks on NBC<br />while the AC\'s on blast!',
    popup: [{ deco: 'national_table.png' }, { deco: 'national_cushion2.png' }, { deco: 'national_cushion1.png' }, { deco: 'national_bottle.png' }, { deco: 'national_cup.png' }] },

  {
    id: 17,
    type: 1,
    image: 'nationalresult17.png',
    subtitle: 'I\'M THE',
    title: 'HAPPY HOST(ESS)!',
    copy: 'It\'s the perfect opportunity to entertain with a full-on<br />spread and catch Macy\'s Fireworks on NBC.',
    sponsorcopy: 'Plan your summer menu with Macy\'s Culinary Council recipes. <a href="https://www.macys.com/social/culinary-council/?cm_sp=imp-_-fireworks-_-happyhost_culinarycouncil_findoutmore" target="_blank">Find Out More</a>',
    sharebg: 'nationalshare17.png',
    popup: [{ deco: 'national_lollipop.png' }] },

  {
    id: 18,
    image: 'nationalimage18.png',
    copy: 'WHICH CITY<br />HOSTS THE COUNTRY\'S<br />LARGEST SHOW?',
    popup: [{ button: 29, nextDot: 21 }, { button: 30, nextDot: 22 }] },

  {
    id: 19,
    type: 1,
    image: 'nationalresult19.png',
    subtitle: 'SCORE ONE FOR A',
    title: 'SOCIAL<br />BUTTERFLY!',
    copy: 'I\'ll gather my friends to watch the local<br />fireworks display and channel the party vibes<br />coming from the live show in NYC.',
    popup: [{ deco: 'national_butterfly.png' }, { deco: 'national_glasscup1.png' }, { deco: 'national_glasscup2.png' }] },

  {
    id: 20,
    image: 'nationalimage20.png',
    copy: 'NEED MORE<br />FOOD IDEAS?',
    popup: [{ deco: 'national_blockblue.png' }, { deco: 'national_blockgrey.png' }, { deco: 'national_blockred.png' }, { button: 31, nextDot: 17 }, { button: 32, nextDot: 23 }] },

  {
    id: 21,
    type: 1,
    image: 'nationalresult21.png',
    subtitle: 'LIKE MANY, I\'M THAT CASUAL',
    title: 'FIREWORKS FAN.',
    copy: 'I should\'ve known Macy\'s<br />Fireworks is the nation\'s biggest. But<br />I do know that if you can\'t make it to<br />the big city, then watching it on NBC is<br />the next best thing.',
    popup: [{ deco: 'national_fireworks1_inner.png' }, { deco: 'national_fireworks1_outer.png' }, { deco: 'twinkle_star_blue.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_blue.png' }, { deco: 'twinkle_star_red.png' }] },

  {
    id: 22,
    type: 1,
    image: 'nationalresult22.png',
    subtitle: 'I\'M A',
    title: 'FIREWORKS<br />FANATIC',
    copy: 'who knows my stuff! Macy\'s<br />Fireworks is indeed the biggest show!<br />Watch it on NBC!',
    popup: [{ deco: 'national_fireworks2_inner.png' }, { deco: 'national_fireworks2_outer.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_red.png' }, { deco: 'twinkle_star_red.png' }] },

  {
    id: 23,
    type: 1,
    image: 'nationalresult23.png',
    subtitle: 'CALL ME',
    title: 'BBQ BOSS!',
    copy: 'MANNING THE GRILL&mdash;<br />IT\'S MY AMERICAN DUTY.',
    sponsorcopy: 'Do your tastebuds a favor and try King\'s Hawaiian recipes. <a href="http://www.kingshawaiian.com/?cm_sp=imp-_-fireworks-_-yourideaof4julyfun_kingshawaiian_findoutmore" target="_blank">Find Out More</a>',
    sharebg: 'nationalshare23.png',
    popup: [{ deco: 'national_tool1.png' }, { deco: 'national_tool2.png' }] }] };




var AllAnimations = function () {
  function FigureJump(obj, settings) {
    var settings = $.extend({
      lastTop: -75,
      repeatDelay: randRange(5, 10),
      delay: randRange(2, 6) },
    settings);

    var tl = new TimelineMax({ delay: settings.delay, repeat: 100, repeatDelay: settings.repeatDelay });
    tl.to(obj, 0.25, { y: -125, ease: Power2.easeOut });
    tl.to(obj, 0.5, { y: settings.lastTop, ease: Bounce.easeOut }, "+0.25");
    return tl;
    // TweenMax.to(obj, .3, {y:-125, ease:Power2.easeOut, repeat:100, delay:settings.delay,repeatDelay:settings.repeatDelay});
    // TweenMax.to(obj, .5, {y:-75, ease:Bounce.easeOut, repeat:100, delay:settings.delay+0.3, repeatDelay:settings.repeatDelay});
  }

  function BalloonMove(obj, settings) {
    var settings = $.extend({
      newTop: [-250, -300] },
    settings);
    var newTop = randRange(settings.newTop[0], settings.newTop[1]);
    //var newLeft = randRange(-30, 30);
    //var newRot = randRange(-10, 10);
    var newDelay = randRange(0, 2);
    var newDur = randRange(0, 2);

    // newTop<0 ? newTop = "-="+newTop+'px' : newTop = "+="+newTop+'px';
    //newLeft.substr(0,1)=="-" ? newLeft = "-="+newLeft.substr(1,newTop.length-1) : newLeft = "+="+newLeft;

    // TweenMax.to(myBalloon, 3, {css:{rotation:10,paddingTop:"10px", transformOrigin:"50% 100%"}, ease:Ease.easeInOut, delay:0, autoRound:true, repeat:-1, yoyo:true});
    // TweenMax.to(myBalloon, 5, {css:{top:newTop, left:newLeft, rotation:newRot}, ease:Sine.easeInOut,repeat:-1,  autoRound:true, yoyo:true,overwrite:true});
    TweenMax.to(obj, 5 + newDur, { y: newTop, ease: Sine.easeInOut, repeat: 500, yoyo: true, delay: newDelay });
    return obj;
  }

  function HeartBeat(obj, settings) {
    var settings = $.extend({
      repeatDelay: randRange(5, 8),
      delay: randRange(2, 4) },
    settings);

    var tl = new TimelineMax({ delay: settings.delay, repeat: 100, repeatDelay: settings.repeatDelay });
    tl.to(obj, 0.4, { scale: 1.2, ease: Bounce.easeOut });
    tl.to(obj, 0.2, { scale: 1 }, "+0.4");
    // TweenMax.to(obj, 0.4, {scale:1.2, delay:settings.delay, ease:Bounce.easeOut, repeat:100,repeatDelay:settings.repeatDelay, onRepeat:function(){console.log("1");}})
    // TweenMax.to(obj, 0.2, {scale:1, delay:settings.delay+0.4, repeat:100,repeatDelay:settings.repeatDelay, onRepeat:function(){console.log("2");}})
    return tl;
  }

  function BubbleRise(obj, settings) {
    console.log("bubble rise");
    var settings = $.extend({
      xRange: [0.3, 0.7],
      yRange: [0.2, 0.6] },
    settings);
    var divW = $(obj).width();
    var divH = $(obj).height();
    var bubble1 = $(obj).children('.bubble1');
    var bubble2 = $(obj).children('.bubble2');
    var origX1 = randRange(2, 8) / 10 * divW;
    var origY1 = -settings.yRange[0] * divH;
    var endY1 = -settings.yRange[1] * divH;
    var origScale1 = 1;
    var delay1 = 0;
    var dur1 = 4;
    var origX2 = randRange(2, 8) / 10 * divW;
    var origY2 = -settings.yRange[0] * divH;
    var endY2 = -settings.yRange[1] * divH;
    var origScale2 = 1;
    var delay2 = 0;
    var dur2 = 4;

    bubbleAni();

    var tl = new TimelineMax({ repeat: 100, repeatDelay: 5, onRepeat: bubbleAni });
    //tl.set(bubble1,{x:origX, y:origY, autoAlpha:0, scale:1});
    // tl.to(bubble1,0.1,{autoAlpha:1},"+"+delay);
    // tl.to(bubble1,4,{y:endY, autoAlpha:0, scale:1.2},"+"+(delay+0.1));
    return tl;

    function bubbleAni() {
      origX1 = randRange(settings.xRange[0] * 10, settings.xRange[1] * 10) / 10 * divW;
      delay1 = randRange(0, 9) / 10;
      dur1 = randRange(4, 5);
      origScale1 = randRange(5, 10) / 10;
      origX2 = randRange(settings.xRange[0] * 100, settings.xRange[1] * 100) / 100 * divW;
      delay2 = randRange(0, 9) / 10;
      dur2 = randRange(4, 5);
      origScale2 = randRange(5, 10) / 10;
      TweenMax.set(bubble1, { x: origX1, y: origY1, autoAlpha: 0, scale: origScale1 });
      TweenMax.set(bubble2, { x: origX2, y: origY2, autoAlpha: 0, scale: origScale2 });
      TweenMax.to(bubble1, 0.1, { autoAlpha: 1, delay: delay1 });
      TweenMax.to(bubble2, 0.1, { autoAlpha: 1, delay: delay2 });
      TweenMax.to(bubble1, dur1, { y: endY1, autoAlpha: 0, scale: origScale1 * 1.2, delay: delay1 + 0.1 });
      TweenMax.to(bubble2, dur2, { y: endY2, autoAlpha: 0, scale: origScale2 * 1.2, delay: delay2 + 0.1 });
    }
  }

  function StarFlash(obj, settings) {
    var settings = $.extend({
      duration: 0.2,
      repeatDelay: 0.5 },
    settings);
    TweenMax.set(obj, { autoAlpha: 0.4, scale: 0.4 });
    TweenMax.to(obj, settings.duration, { autoAlpha: 1, scale: 1, repeat: 500, yoyo: true, repeatDelay: settings.repeatDelay });
    return obj;
  }

  function GlowingdotMove(obj) {
    var divW = $(obj).width();
    var divH = $(obj).height();
    var glowingdot = $(obj).children('.glowingdot');
    var tl = new TimelineMax({ repeat: 100, repeatDelay: 3 });
    tl.set(glowingdot, { x: 260, y: -60 });
    tl.to(glowingdot, 0.3, { autoAlpha: 1 });
    tl.to(glowingdot, 1.7, { x: 290, y: -150 }, "+0.3");
    tl.to(glowingdot, 3.5, { x: 415, y: -275 }, "+2");
    tl.to(glowingdot, 0.3, { autoAlpha: 0 }, "+5.5");
    tl.set(glowingdot, { x: 570, y: -70 }, "+6.8");
    tl.to(glowingdot, 0.3, { autoAlpha: 1 }, "+6.8");
    tl.to(glowingdot, 2.2, { x: 720, y: -160 }, "+7.1");
    tl.to(glowingdot, 0.3, { autoAlpha: 0 }, "+9.3");
    tl.set(glowingdot, { x: 395, y: -30 }, "+10.6");
    tl.to(glowingdot, 0.3, { autoAlpha: 1 }, "+10.6");
    tl.to(glowingdot, 2.5, { x: 310, y: -180 }, "+10.9");
    tl.to(glowingdot, 0.3, { autoAlpha: 0 }, "+13.4");
    return tl;
  }

  function BottleShake(obj, settings) {
    var settings = $.extend({
      rotation: -10 },
    settings);

    var tl = new TimelineMax({ repeat: 100, repeatDelay: 4 });
    tl.to(obj, .3, { rotation: settings.rotation });
    tl.to(obj, 2, { rotation: 0, ease: Elastic.easeOut }, "+0.3");
    return tl;
  }

  function CircleRotate(obj) {
    TweenMax.to(obj, 4, { rotation: 360, delay: 1.5, transformOrigin: "50% 50%", ease: Quint.easeOut, repeat: 100 });
    return obj;
  }

  return {
    FigureJump: FigureJump,
    BalloonMove: BalloonMove,
    HeartBeat: HeartBeat,
    BubbleRise: BubbleRise,
    StarFlash: StarFlash,
    GlowingdotMove: GlowingdotMove,
    BottleShake: BottleShake,
    CircleRotate: CircleRotate };

}();

var roundPathCorners = function (pathString, radius, useFractionalRadius) {
  function moveTowardsLength(movingPoint, targetPoint, amount) {
    var width = targetPoint.x - movingPoint.x;
    var height = targetPoint.y - movingPoint.y;

    var distance = Math.sqrt(width * width + height * height);

    return moveTowardsFractional(movingPoint, targetPoint, Math.min(1, amount / distance));
  }
  function moveTowardsFractional(movingPoint, targetPoint, fraction) {
    return {
      x: movingPoint.x + (targetPoint.x - movingPoint.x) * fraction,
      y: movingPoint.y + (targetPoint.y - movingPoint.y) * fraction };

  }

  // Adjusts the ending position of a command
  function adjustCommand(cmd, newPoint) {
    if (cmd.length > 2) {
      cmd[cmd.length - 2] = newPoint.x;
      cmd[cmd.length - 1] = newPoint.y;
    }
  }

  // Gives an {x, y} object for a command's ending position
  function pointForCommand(cmd) {
    return {
      x: parseFloat(cmd[cmd.length - 2]),
      y: parseFloat(cmd[cmd.length - 1]) };

  }

  // Split apart the path, handing concatonated letters and numbers
  var pathParts = pathString.
  split(/[,\s]/).
  reduce(function (parts, part) {
    var match = part.match("([a-zA-Z])(.+)");
    if (match) {
      parts.push(match[1]);
      parts.push(match[2]);
    } else {
      parts.push(part);
    }

    return parts;
  }, []);

  // Group the commands with their arguments for easier handling
  var commands = pathParts.reduce(function (commands, part) {
    if (parseFloat(part) == part && commands.length) {
      commands[commands.length - 1].push(part);
    } else {
      commands.push([part]);
    }

    return commands;
  }, []);

  // The resulting commands, also grouped
  var resultCommands = [];

  if (commands.length > 1) {
    var startPoint = pointForCommand(commands[0]);

    // Handle the close path case with a "virtual" closing line
    var virtualCloseLine = null;
    if (commands[commands.length - 1][0] == "Z" && commands[0].length > 2) {
      virtualCloseLine = ["L", startPoint.x, startPoint.y];
      commands[commands.length - 1] = virtualCloseLine;
    }

    // We always use the first command (but it may be mutated)
    resultCommands.push(commands[0]);

    for (var cmdIndex = 1; cmdIndex < commands.length; cmdIndex++) {
      var prevCmd = resultCommands[resultCommands.length - 1];

      var curCmd = commands[cmdIndex];

      // Handle closing case
      var nextCmd = curCmd == virtualCloseLine ?
      commands[1] :
      commands[cmdIndex + 1];

      // Nasty logic to decide if this path is a candidite.
      if (nextCmd && prevCmd && prevCmd.length > 2 && curCmd[0] == "L" && nextCmd.length > 2 && nextCmd[0] == "L") {
        // Calc the points we're dealing with
        var prevPoint = pointForCommand(prevCmd);
        var curPoint = pointForCommand(curCmd);
        var nextPoint = pointForCommand(nextCmd);

        // The start and end of the cuve are just our point moved towards the previous and next points, respectivly
        var curveStart, curveEnd;

        if (useFractionalRadius) {
          curveStart = moveTowardsFractional(curPoint, prevCmd.origPoint || prevPoint, radius);
          curveEnd = moveTowardsFractional(curPoint, nextCmd.origPoint || nextPoint, radius);
        } else {
          curveStart = moveTowardsLength(curPoint, prevPoint, radius);
          curveEnd = moveTowardsLength(curPoint, nextPoint, radius);
        }

        // Adjust the current command and add it
        adjustCommand(curCmd, curveStart);
        curCmd.origPoint = curPoint;
        resultCommands.push(curCmd);

        // The curve control points are halfway between the start/end of the curve and
        // the original point
        var startControl = moveTowardsFractional(curveStart, curPoint, .5);
        var endControl = moveTowardsFractional(curPoint, curveEnd, .5);

        // Create the curve 
        var curveCmd = ["C", startControl.x, startControl.y, endControl.x, endControl.y, curveEnd.x, curveEnd.y];
        // Save the original point for fractional calculations
        curveCmd.origPoint = curPoint;
        resultCommands.push(curveCmd);
      } else {
        // Pass through commands that don't qualify
        resultCommands.push(curCmd);
      }
    }

    // Fix up the starting point and restore the close path if the path was orignally closed
    if (virtualCloseLine) {
      var newStartPoint = pointForCommand(resultCommands[resultCommands.length - 1]);
      resultCommands.push(["Z"]);
      adjustCommand(resultCommands[0], newStartPoint);
    }
  } else {
    resultCommands = commands;
  }

  return resultCommands.reduce(function (str, c) {return str + c.join(" ") + " ";}, "");
};


/* ------------------------------------------------------------------------------------------------------------ */

var FlowchartButton = React.createClass({ displayName: "FlowchartButton",

  componentDidMount() {
    $(this.refs.getStarted).attr('track', 'Get Started');
  },

  _onClick: function (e) {
    this.props._onClick(this.props.line);
  },
  render: function () {
    if (this.props.line == 0) return /*#__PURE__*/(
      React.createElement("div", { className: "svgline line" + this.props.line }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { ref: "getStarted", className: "flowchart_button start buttonhover", onClick: this._onClick }, "GET STARTED")), /*#__PURE__*/



      React.createElement("svg", { style: { width: this.props.width, height: this.props.height } }, /*#__PURE__*/
      React.createElement("path", { d: this.props.path }))));else



    {
      var path = roundPathCorners(this.props.path, 50, false);
      //var path = this.props.path;
      return /*#__PURE__*/(
        React.createElement("div", { className: "svgline line" + this.props.line }, /*#__PURE__*/
        React.createElement("div", { className: "flowchart_button button" + this.props.line, onClick: this._onClick }, /*#__PURE__*/
        React.createElement("div", { className: "copy" }, /*#__PURE__*/
        React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.copy } }), /*#__PURE__*/
        React.createElement("div", { className: "sep" })), /*#__PURE__*/

        React.createElement("img", { className: "bg", src: window.assets_dir + '/flowchart/' + this.props.image })), /*#__PURE__*/

        React.createElement("svg", { style: { width: this.props.width, height: this.props.height } }, /*#__PURE__*/
        React.createElement("path", { d: path }))));



    }
  } });


function createLineTween(svg, stars) {
  var tl = new TimelineMax();

  var path = svg.children('path')[0];
  var pathObject = { length: 0, pathLength: path.getTotalLength() };


  var tween = TweenMax.to(pathObject, 1.5, { length: pathObject.pathLength, onStart: function () {
      var star = svg.children('polygon');
      tl.add(TweenMax.to(star, 0.1, { autoAlpha: 1 }), tween.time());
    }, onUpdate: function (pathObject, path) {
      drawLine(pathObject, path);
    }, onUpdateParams: [pathObject, path], immediateRender: true });

  tl.add(tween);
  return tl;
};

function drawLine(obj, path) {
  // console.log(Math.round(obj.length*100/obj.pathLength)/100);
  //var ratio = Math.round(obj.length*100/obj.pathLength)/100;
  path.style.stroke = '#1c75bc';
  path.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
  //return ratio;
};

function createRandomStars(svg) {
  // oripoints is on 100X100 svg. If the ratio is 0.25, the final one is on 25X25 svg
  var oripoints = '0 -45 -30 45 45 -12 -45 -12 30 45';
  var totalGroup = randRange(2, 4);
  for (var i = 0; i < totalGroup; i++) {
    var randPercentage = randRange(2, 9) / 10;
    var eachGroup = randRange(3, 6);
    for (var j = 0; j < eachGroup; j++) {
      //var ratio = randRange(15,25)/100;
      var ratio = [0.1, 0.2][Math.random() < 0.7 ? 0 : 1];
      var stop = svg.getPointAtLength(svg.getTotalLength() * randPercentage);
      var center = { x: stop.x + randRange(-75, 75), y: stop.y + randRange(-75, 75) };
      var color = ['#1d71b5', '#f32268'][Math.random() < 0.6 ? 0 : 1];
      var arr = oripoints.split(' ').map(function (e, ii) {
        if (ii % 2 == 0) return e * ratio + center.x;else
        return e * ratio + center.y;
      });
      var obj = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      obj.setAttributeNS(null, "class", "star");
      obj.setAttributeNS(null, "points", arr.join(' '));
      obj.setAttributeNS(null, "style", 'fill:' + color);
      $(svg).parent().append(obj);
    }
  }
}

window.showAll = function () {
  $('.flowchart_image').css({ 'opacity': 1, 'visibility': 'visible' });
  $('.flowchart_container .deco').css({ 'opacity': 1, 'visibility': 'visible' });
  $('.flowchart_container .flowchart_button').css({ 'opacity': 1, 'visibility': 'visible' });
  $('.page-flowchartnational .flowchart_container svg path').css('stroke', '#1c75bb');
};



var MainFlownational = React.createClass({ displayName: "MainFlownational",
  _headerHeightDesktop: 0,
  _headerHeightMobile: 0,
  _containerWidth: 10500,
  _containerHeight: 10500,
  _initZoom: 0.09, // so when the height of the outer div = 1050, _ratio = 1;
  _hasStarted: 0,
  _ratio: 1,
  _line: 0,
  _animationCollection: [],
  _clickTimeout: 0,

  getInitialState: function () {
    return {
      outerHeight: this._containerHeight * this._initZoom };

  },

  componentWillMount: function () {
  },

  componentDidMount: function () {
    window.addEventListener("resize", this._updateDimensions);
    this.tl = [];
    this._dotpath = [];
    this._updateDimensions();
    this._createAllStars();
    this._createAllAddons();


    var tl1 = new TimelineMax();
    //animation:
    var $star = $('.page-flowchartnational .flowchart_container .flowchart_image.image0 .bg');
    var $img = $('.page-flowchartnational .flowchart_container .flowchart_image.image0 .img');
    var $button = $('.page-flowchartnational .flowchart_button.start');
    tl1.to($star, .1, { autoAlpha: 1, scale: 0 }, "+1.9");
    tl1.to($img, .1, { autoAlpha: 1, scale: 0 }, "+1.9");
    tl1.to($button, .1, { autoAlpha: 1, scale: 0 }, "+1.9");
    tl1.to($star, .2, { scale: 1.2, ease: Power2.easeOut }, "+2");
    tl1.to($star, .2, { scale: 1 }, "+2.2");
    tl1.to($img, .2, { scale: 1.2, ease: Power2.easeOut }, "+2.4");
    tl1.to($img, .2, { scale: 1 }, "+2.6");
    tl1.to($button, .2, { scale: 1.2, ease: Power2.easeOut }, "+2.8");
    tl1.to($button, .2, { scale: 1 }, "+3");
    tl1.to($('.page-flowchartnational .flowchart_container .flowchart_image.image0 .sponsor'), .1, { autoAlpha: 1 });


    // var $button = $('.page-flowchartnational .flowchart_button.start');
    // tl.to($button,.5,{boxShadow:'0 0 40px #e11a2b',ease:Bounce.easeOut});
    // tl.to($button,.5,{boxShadow:'0 0 40px transparent'},"+0.5");
    // this._animationCollection.push($button);
    tl1.play(0);

    // startAnimations();
  },

  componentWillUnmount: function () {
    window.removeEventListener("resize", this._updateDimensions);
  },

  _createAllStars: function () {
    $('.page-flowchartnational .flowchart_container svg').each(function (i) {
      var path = $(this).children('path')[0];
      createRandomStars(path);

      // var path = $(this).children('path')[0];
      // if(MainData.line[i].stars) {
      //     for(var j=0; j<MainData.line[i].stars.length; j++) createStars(path,MainData.line[i].stars[j],j);
      // }
    });

  },

  _createAllAddons: function () {
    // bubbles
    var containers1 = ['.page-flowchartnational .deco.image6deco2', '.page-flowchartnational .deco.image16deco5', '.page-flowchartnational .deco.image19deco2'];
    $.each(containers1, function (i, e) {
      $(e).append('<div class="bubble bubble1"><div class="bubble_inner"></div></div>');
      $(e).append('<div class="bubble bubble2"><div class="bubble_inner"></div></div>');
    });
    // glowing dot:
    $('.page-flowchartnational .deco.image11deco1').append('<div class="glowingdot"></div>');
  },

  _updateDimensions: function () {
    var documentElement = document.documentElement,
    body = document.getElementsByTagName('body')[0],
    //width = window.innerWidth || documentElement.clientWidth || body.clientWidth;

    // if(width <750) {
    // 	console.log(">>>>>",this._hasStarted);
    // 	if(this._hasStarted) this.setState({ratio: 0.8});
    // 	else this.setState({ratio: 0.5});
    // }
    // else {
    // 	// when window.width = 1600, the container's ratio will be 1, with the width = 800.
    // 	// this.setState({ratio: Math.round(width*100/1600)/100});
    // 	// this.props.updateDimensions( Math.round(width*100/1600)/100 );
    // 	this.setState({ratio: 1});
    // }

    height = window.innerHeight || documentElement.clientHeight || body.clientHeight;
    var hh = this._headerHeightDesktop;
    var zoom = 100;
    this._ratio = Math.round((height - hh) * zoom / (this._containerHeight * this._initZoom)) / 100;

    if (this._hasStarted) var dimen = MainData.path[this._line][MainData.path[this._line].length - 1];else
    var dimen = MainData.path[0][0];
    var ra = Math.round((height - hh) * zoom / (this._containerHeight * this._initZoom)) / 100;
    this.setState({
      outerHeight: height - hh });

    //if(this._hasStarted){
    TweenMax.to($(this.refs.flowchart), .5, { x: dimen.x * ra, y: dimen.y * ra, scale: ra });
    //}

  },

  _onClick: function (line) {
    var that = this;

    var previousDot = this._dotpath.length > 0 ? this._dotpath[this._dotpath.length - 1] : 0;
    var previousDotObj = $.grep(MainData.dot, function (e) {return e.id == previousDot;});

    var nextDotComp = $.grep(previousDotObj[0].popup, function (e) {
      return e.button == line;
    });
    //var i = previousDotObj[0].lines.indexOf(line);

    if (nextDotComp.length) {
      var nextDot = nextDotComp[0].nextDot;
      this._dotpath.push(nextDot);
      this._line = line;
      var nextDotObj = $.grep(MainData.dot, function (e) {return e.id == nextDot;});
      console.log(">>>>current dot: ", nextDot);

      var tl = new TimelineMax();
      //var svgg = $(e).parent().siblings('svg').children('path')[0];
      var svgg = $('.page-flowchartnational .flowchart_container .line' + line + ' svg');

      var stars = $.grep(MainData.line, function (e) {return e.id == line;})[0].stars || [];
      tl.add(createLineTween(svgg, stars));

      var ra = this._ratio;
      var path = $.map(MainData.path[line], function (e, i) {
        return { x: e.x * ra, y: e.y * ra };
      });

      var start_tween = TweenMax.to($(this.refs.flowchart), 1.5, { scale: ra, bezier: path, ease: SlowMo.easeInOut });
      tl.add(start_tween, "0");


      if (line == 0) {
        this._hasStarted = 1;
        tl.to($(this.refs.backbutton), .1, { autoAlpha: 1 }, "0");
        tl.to($(this.refs.restartbutton), .1, { autoAlpha: 1 }, "0");
      } else
      {
        tl.to($('circle'), .1, {}, "0");
      }
      // tl.to($('.page-flowchartnational .flowchart_image.image'+nextDot),0.1,{autoAlpha:1});
      tl.to($('.page-flowchartnational .flowchart_image.image' + nextDot), .2, { autoAlpha: 1, scale: 1.2, ease: Power2.easeOut }, "+1.6");
      tl.to($('.page-flowchartnational .flowchart_image.image' + nextDot), .2, { scale: 1 }, "+1.8");

      //show children:
      var children = nextDotObj[0].popup;
      // jj is the classname of the deco
      var jj = 0;
      $.each(children, function (i, e) {
        jj++;
        var d = 2.1 + 0.2 * i;
        if (e.deco) {
          tl.set($('.page-flowchartnational .flowchart_container .deco.image' + nextDot + 'deco' + jj), { scale: 0.2 }, 0);
          // tl.to($('.page-flowchartnational .flowchart_container .deco.image'+nextDot+'deco'+jj),.1,{autoAlpha:1,scale:1.1, ease:Quint.easeOut},"+"+d);
          // tl.to($('.page-flowchartnational .flowchart_container .deco.image'+nextDot+'deco'+jj),.1,{scale:1, ease:Quint.easeInOut},"+"+(d+0.1));
          tl.to($('.page-flowchartnational .flowchart_container .deco.image' + nextDot + 'deco' + jj), .2, { autoAlpha: 1, scale: 1.2, ease: Power2.easeOut }, "+" + d);
          tl.to($('.page-flowchartnational .flowchart_container .deco.image' + nextDot + 'deco' + jj), .2, { scale: 1, ease: Bounce.easeOut }, "+" + (d + 0.2));
        } else
        {
          jj--;
          tl.set($('.page-flowchartnational .flowchart_container .flowchart_button.button' + e.button), { scale: 0.2 }, 0);
          tl.to($('.page-flowchartnational .flowchart_container .flowchart_button.button' + e.button), .2, { autoAlpha: 1, scale: 1.2, ease: Power2.easeOut }, "+" + d);
          tl.to($('.page-flowchartnational .flowchart_container .flowchart_button.button' + e.button), .2, { scale: 1, ease: Bounce.easeOut }, "+" + (d + 0.2));
        }
      });
      if (nextDot == 14 || nextDot == 15 || nextDot == 16 || nextDot == 17 || nextDot == 19 || nextDot == 21 || nextDot == 22 || nextDot == 23) {
        tl.to($('.page-flowchartnational .flowchart_container .flowchart_image.image' + nextDot + ' .subtitle'), 0.2, { autoAlpha: 1 });
        tl.to($('.page-flowchartnational .flowchart_container .flowchart_image.image' + nextDot + ' .title'), 0.2, { autoAlpha: 1 });
        tl.to($('.page-flowchartnational .flowchart_container .flowchart_image.image' + nextDot + ' .copy'), 0.2, { autoAlpha: 1 });
        tl.to($('.page-flowchartnational .flowchart_container .flowchart_image.image' + nextDot + ' .share'), 0.2, { autoAlpha: 1 });
      }
      this.tl.push(tl);
      tl.play(0);

      clearTimeout(this._clickTimeout);

      this._clickTimeout = setTimeout(function () {
        that._startAnimations();
      }, (2.1 + 0.4 * children.length) * 1000);
    }
  },

  _onBack: function () {
    var that = this;
    var tl = this.tl[this.tl.length - 1];
    tl.reverse();
    this.tl.pop();
    this._dotpath.pop();
    //var currentDotObj = $.grep(MainData.dot, function(e){ return e.id == this._dotpath[this._dotpath.length-1]; });
    //var children =currentDotObj[0].popup;
    //this._line--;
    setTimeout(function () {
      that._startAnimations();
    }, 2000);
    if (this.tl.length == 0) {
      this._hasStarted = 0;
    }
  },

  _onRestart: function () {
    AutoTracker.trackSp('imp-_-fireworks-_-yourideaof4julyfun_playagain');
    var that = this;
    this._hasStarted = 0;
    this.tl = [];
    this._dotpath = [];
    this._line = 0;

    TweenMax.killTweensOf($(this.refs.flowchart));
    TweenMax.killTweensOf($('.flowchart_button'));
    TweenMax.killTweensOf($('.flowchart_image'));

    TweenMax.killTweensOf(this._animationCollection);
    $.each(this._animationCollection, function (i, e) {
      if (e.kill) e.kill();
    });


    TweenMax.set($(this.refs.backbutton), { autoAlpha: 0 });
    TweenMax.set($(this.refs.restartbutton), { autoAlpha: 0 });
    TweenMax.set($(this.refs.flowchart), { x: 0, y: 0 });
    TweenMax.set($('.page-flowchartnational .flowchart_button:not(.start)'), { autoAlpha: 0 });
    TweenMax.set($('.page-flowchartnational .flowchart_image'), { autoAlpha: 0 });
    TweenMax.set($('.page-flowchartnational .flowchart_container .deco'), { autoAlpha: 0 });
    $('.page-flowchartnational .flowchart_container svg path').css('stroke', 'none');


    // var image0ScaleTarget = {t:1};
    // TweenMax.to(image0ScaleTarget,.5,{t:0.5,onUpdate:function(){
    // 	that.setState({
    // 		image0Scale:image0ScaleTarget.t
    // 	});
    // }});
    TweenMax.set($('.page-flowchartnational .flowchart_image.image0'), { autoAlpha: 1 });

    this._updateDimensions();
  },

  _startAnimations: function () {
    var that = this;

    var defineAnimation = [
    { image: 1, obj: ['.page-flowchartnational .deco.image1deco1', '.page-flowchartnational .deco.image1deco2', '.page-flowchartnational .deco.image1deco3'], action: AllAnimations.FigureJump },
    { image: 2, obj: ['.page-flowchartnational .deco.image2deco1', '.page-flowchartnational .deco.image2deco2', '.page-flowchartnational .flowchart_button.button4', '.page-flowchartnational .flowchart_button.button5'], action: AllAnimations.BalloonMove },
    { image: 3, obj: ['.page-flowchartnational .deco.image3deco1', '.page-flowchartnational .deco.image3deco2'], action: AllAnimations.FigureJump },
    { image: 4, obj: ['.page-flowchartnational .deco.image4deco1'], action: AllAnimations.HeartBeat },
    { image: 6, obj: ['.page-flowchartnational .deco.image6deco2'], action: AllAnimations.BubbleRise },
    { image: 7, obj: ['.page-flowchartnational .deco.image7deco1'], action: AllAnimations.HeartBeat },
    { image: 8, obj: ['.page-flowchartnational .deco.image8deco1', '.page-flowchartnational .deco.image8deco2', '.page-flowchartnational .deco.image8deco3', '.page-flowchartnational .deco.image8deco4'], action: AllAnimations.StarFlash },
    { image: 10, obj: ['.page-flowchartnational .deco.image10deco1', '.page-flowchartnational .deco.image10deco2', '.page-flowchartnational .flowchart_button.button21', '.page-flowchartnational .flowchart_button.button22'], action: AllAnimations.BalloonMove },
    { image: 11, obj: ['.page-flowchartnational .deco.image11deco1'], action: AllAnimations.GlowingdotMove },
    { image: 12, obj: ['.page-flowchartnational .deco.image12deco2', '.page-flowchartnational .deco.image12deco3'], action: AllAnimations.FigureJump },
    { image: 13, obj: ['.page-flowchartnational .deco.image13deco1', '.page-flowchartnational .deco.image13deco2'], action: AllAnimations.BottleShake },
    { image: 14, obj: ['.page-flowchartnational .deco.image14deco2'], action: AllAnimations.CircleRotate },
    { image: 16, obj: ['.page-flowchartnational .deco.image16deco5'], action: AllAnimations.BubbleRise },
    { image: 17, obj: ['.page-flowchartnational .deco.image17deco1'], action: AllAnimations.BottleShake },
    { image: 19, obj: ['.page-flowchartnational .deco.image19deco2'], action: AllAnimations.BubbleRise },
    { image: 21, obj: ['.page-flowchartnational .deco.image21deco3', '.page-flowchartnational .deco.image21deco4', '.page-flowchartnational .deco.image21deco5', '.page-flowchartnational .deco.image21deco6'], action: AllAnimations.StarFlash },
    { image: 22, obj: ['.page-flowchartnational .deco.image22deco3', '.page-flowchartnational .deco.image22deco4', '.page-flowchartnational .deco.image22deco5', '.page-flowchartnational .deco.image22deco6', '.page-flowchartnational .deco.image22deco7', '.page-flowchartnational .deco.image22deco8'], action: AllAnimations.StarFlash },
    { image: 23, obj: ['.page-flowchartnational .deco.image23deco1', '.page-flowchartnational .deco.image23deco2'], action: AllAnimations.BottleShake }];


    var curimage = this._dotpath[this._dotpath.length - 1];
    console.log("start animation for dot:", curimage);

    TweenMax.killTweensOf(this._animationCollection);
    $.each(this._animationCollection, function (i, e) {
      if (e.kill) e.kill();
    });
    this._animationCollection = [];

    var ani = $.grep(defineAnimation, function (e) {return e.image == curimage;});
    var result;

    if (ani.length && ani[0].obj) {
      $.each(ani[0].obj, function (i, e) {
        TweenMax.killTweensOf($(e));
        if (curimage == 1 || curimage == 3) {
          if (i == 0) result = ani[0].action($(e), { repeatDelay: 4.5, delay: 2 });else
          if (i == 1) result = ani[0].action($(e), { repeatDelay: 6, delay: 1.3 });else
          result = ani[0].action($(e), { repeatDelay: 7, delay: 2.5 });
        } else
        if (curimage == 2 && i > 1 || curimage == 10 && i > 1) {
          result = ani[0].action($(e), { newTop: [-170, -200] });
        } else

        if (curimage == 6) {
          result = ani[0].action($(e), { xRange: [0.15, 0.35] });
        } else
        if (curimage == 8 || curimage == 21 || curimage == 22) result = ani[0].action($(e), { duration: 0.1 + i * 0.03, repeatDelay: 0.3 + i * 0.05 });else
        if (curimage == 12) result = ani[0].action($(e), { lastTop: -65 });else
        if (curimage == 13 && i == 0) result = ani[0].action($(e), { rotation: 10 });else
        if (curimage == 16) result = ani[0].action($(e), { xRange: [0.35, 0.6], yRange: [0.2, 0.9] });else
        if (curimage == 17) result = ani[0].action($(e), { rotation: -20 });else
        if (curimage == 19) result = ani[0].action($(e), { xRange: [0.43, 0.67], yRange: [0.58, 0.78] });else

        result = ani[0].action($(e));

        if ($.isArray(result)) {
          for (var jj = 0; jj < result.length; jj++) that._animationCollection.push(result[jj]);
        } else
        that._animationCollection.push(result);
      });
    }

  },
  _onShareFacebook: function (e) {
  },
  _onShareTwitter: function (e) {
  },
  render: function () {
    var that = this;
    var imageslist = MainData.dot.map(function (e, i) {

      if (e.id == 0) return /*#__PURE__*/(
        React.createElement("div", { key: e.id, className: "flowchart_image image" + e.id }, /*#__PURE__*/
        React.createElement("div", { className: "copy", dangerouslySetInnerHTML: { __html: e.copy } }), /*#__PURE__*/
        React.createElement("img", { className: "bg", src: window.assets_dir + '/flowchart/national_bigstar.png' }), /*#__PURE__*/
        React.createElement("img", { className: "img", src: window.assets_dir + '/flowchart/' + e.image }), /*#__PURE__*/
        React.createElement("div", { className: "sponsor" }, /*#__PURE__*/
        React.createElement("span", null, "BROUGHT TO YOU BY Ting"))));else



      if (e.type) return /*#__PURE__*/(
        React.createElement("div", { key: e.id, className: "flowchart_image result image" + e.id }, /*#__PURE__*/
        React.createElement("div", { className: "subtitle", dangerouslySetInnerHTML: { __html: e.subtitle } }), /*#__PURE__*/
        React.createElement("div", { className: "title", dangerouslySetInnerHTML: { __html: e.title } }), /*#__PURE__*/
        React.createElement("div", { className: "copy", dangerouslySetInnerHTML: { __html: e.copy } }), /*#__PURE__*/
        React.createElement("img", { className: "bg", src: window.assets_dir + '/flowchart/' + e.image }), /*#__PURE__*/
        React.createElement("div", { className: "share" }, /*#__PURE__*/
        React.createElement("img", { className: "img", src: e.sharebg ? window.assets_dir + '/flowchart/' + e.sharebg : '' }), /*#__PURE__*/
        React.createElement("span", { className: "text" }, "SHARE THIS RESULT"), /*#__PURE__*/
        React.createElement("span", { className: "sep" }), /*#__PURE__*/
        React.createElement("span", { onClick: that._onShareFacebook, className: "result" + e.id + " share_facebook" }), /*#__PURE__*/
        React.createElement("span", { className: "sep" }), /*#__PURE__*/
        React.createElement("span", { onClick: that._onShareTwitter, className: "result" + e.id + " share_twitter" }))));else




      return /*#__PURE__*/(
        React.createElement("div", { key: e.id, className: "flowchart_image image" + e.id }, /*#__PURE__*/
        React.createElement("div", { className: "copy", dangerouslySetInnerHTML: { __html: e.copy } }), /*#__PURE__*/
        React.createElement("img", { className: "bg", src: window.assets_dir + '/flowchart/' + e.image })));


    });
    var decoslist = [];
    var decokey = 0;
    for (var k = 0; k < MainData.dot.length; k++) {
      if (MainData.dot[k].popup) {
        var jj = 0;
        for (var kk = 0; kk < MainData.dot[k].popup.length; kk++) {
          jj++;
          if (MainData.dot[k].popup[kk].deco) {
            decoslist.push( /*#__PURE__*/React.createElement("div", { key: decokey, className: "deco image" + k + "deco" + jj }, /*#__PURE__*/React.createElement("img", { src: window.assets_dir + '/flowchart/' + MainData.dot[k].popup[kk].deco })));
            decokey++;
          } else
          jj--;
        }
      }
    }

    var lineslist = MainData.line.map(function (e, i) {
      var image = e.image ? e.image : e.svg ? e.svg : '';
      return /*#__PURE__*/React.createElement(FlowchartButton, { line: i, key: i, _onClick: that._onClick, path: e.path, copy: e.copy, width: e.width, height: e.height, image: image });
    });

    return /*#__PURE__*/(
      React.createElement("div", { className: "flowchart_outer", style: { height: this.state.outerHeight } }, /*#__PURE__*/
      React.createElement("div", { className: "flowchart_container", ref: "flowchart", style: { width: this._containerWidth, height: this._containerHeight, marginLeft: -(this._containerWidth / 2), marginTop: -(this._containerHeight / 2) } },
      decoslist,
      lineslist,
      imageslist), /*#__PURE__*/

      React.createElement("div", { className: "center" }), /*#__PURE__*/
      React.createElement("div", { className: "flowchart_button back", onClick: this._onBack, ref: "backbutton" }, /*#__PURE__*/React.createElement("img", { src: window.assets_dir + '/flowchart/icon_national_previous.png' }), /*#__PURE__*/React.createElement("span", null, "PREVIOUS")), /*#__PURE__*/
      React.createElement("div", { className: "flowchart_button restart", onClick: this._onRestart, ref: "restartbutton" }, /*#__PURE__*/React.createElement("img", { src: window.assets_dir + '/flowchart/icon_national_restart.png' }), /*#__PURE__*/React.createElement("span", null, "PLAY AGAIN"))));


  } });


ReactDOM.render( /*#__PURE__*/React.createElement(MainFlownational, null), document.getElementById('flowchartnational'));