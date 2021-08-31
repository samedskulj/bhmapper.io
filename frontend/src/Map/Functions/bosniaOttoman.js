export const bosniaOttoman = (map) => {
  map.on("load", () => {
    // Add a data source containing GeoJSON data.
    map.addSource("maine", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          // These coordinates outline Maine.
          coordinates: [
            [
              [19.348297119140735, 44.21863119293713],
              [19.344863891601666, 44.22281396030826],
              [19.35035705566417, 44.23142460449404],
              [19.3469238281251, 44.24101783854436],
              [19.335250854492287, 44.24790432413107],
              [19.329757690429805, 44.25577360624326],
              [19.32872772216808, 44.26437942790992],
              [19.326667785644634, 44.27077150858341],
              [19.319801330566527, 44.27322981605989],
              [19.31087493896495, 44.27200067517511],
              [19.30297851562511, 44.26929647474006],
              [19.295425415039173, 44.27077150858341],
              [19.28924560546886, 44.27224650540868],
              [19.28512573242199, 44.274950570110434],
              [19.28169250488292, 44.276179649298],
              [19.277915954589954, 44.27445893123732],
              [19.270706176757916, 44.27027983474879],
              [19.26521301269542, 44.26782140387875],
              [19.25731658935557, 44.265608728177845],
              [19.251480102539162, 44.263150101935054],
              [19.239120483398548, 44.26192075025342],
              [19.231224060058697, 44.26364183540985],
              [19.2257308959962, 44.268067251592875],
              [19.22229766845713, 44.27445893123732],
              [19.220237731933693, 44.28109570897668],
              [19.21852111816418, 44.28674866911757],
              [19.214401245117287, 44.28969782368383],
              [19.20822143554698, 44.291172345438945],
              [19.200325012207138, 44.291172345438945],
              [19.19448852539073, 44.288223264909995],
              [19.191055297851662, 44.28478248380964],
              [19.187622070312614, 44.28134150116357],
              [19.18247222900401, 44.278883533021606],
              [19.176635742187603, 44.27986673261792],
              [19.166679382324325, 44.28404514735223],
              [19.162559509277454, 44.290926594383855],
              [19.15912628173839, 44.30075583451226],
              [19.152946472168075, 44.305915526949384],
              [19.148483276367305, 44.30935506997104],
              [19.140243530273548, 44.31279441144286],
              [19.13440704345714, 44.31647919650341],
              [19.130630493164162, 44.32188312939851],
              [19.130630493164162, 44.32654976182044],
              [19.13303375244152, 44.33170718680919],
              [19.136810302734492, 44.33465408319257],
              [19.136123657226676, 44.338337495433684],
              [19.130630493164162, 44.34030188735495],
              [19.124107360839954, 44.3420206762982],
              [19.114837646484478, 44.346194668235405],
              [19.111747741699332, 44.35036836298054],
              [19.11140441894543, 44.35380530020698],
              [19.110717773437607, 44.35871486089045],
              [19.116554260254013, 44.36288766405321],
              [19.118614196777447, 44.36558755479127],
              [19.115867614746204, 44.36853274822789],
              [19.110374450683697, 44.36730560229232],
              [19.1048812866212, 44.36853274822789],
              [19.1048812866212, 44.37540429036193],
              [19.108314514160266, 44.38153891454388],
              [19.109344482421996, 44.39576876734355],
              [19.121360778808707, 44.40263711327976],
              [19.138183593750103, 44.40827836571928],
              [19.148483276367305, 44.41367383725817],
              [19.14710998535167, 44.43010243440212],
              [19.149856567382916, 44.43966322343595],
              [19.148826599121204, 44.45608451678301],
              [19.14436340332042, 44.46294577903097],
              [19.141960144043082, 44.47152122299255],
              [19.13715362548839, 44.47519602759754],
              [19.133720397949322, 44.484749436619865],
              [19.13406372070323, 44.494546179900176],
              [19.12170410156261, 44.5009131806193],
              [19.13269042968762, 44.51560360577541],
              [19.134750366211055, 44.525884700409804],
              [19.14436340332042, 44.524905626703784],
              [19.156723022461048, 44.52196830685205],
              [19.17182922363293, 44.524416083679796],
              [19.175262451171978, 44.53714286528372],
              [19.19036865234386, 44.5430158265129],
              [19.200668334961048, 44.55475997175005],
              [19.198608398437603, 44.56258808544187],
              [19.187622070312614, 44.56503415498691],
              [19.18281555175792, 44.57090430226858],
              [19.195175170898555, 44.58313187304709],
              [19.206161499023544, 44.5880221814056],
              [19.22538757324229, 44.592423107178675],
              [19.228134155273537, 44.600735057768496],
              [19.2260742187501, 44.61148993477691],
              [19.23294067382823, 44.61442273746977],
              [19.23980712890635, 44.6154003054547],
              [19.24667358398448, 44.63299371514159],
              [19.252853393554794, 44.638857000172926],
              [19.25354003906262, 44.64569675060429],
              [19.260406494140728, 44.6491163234307],
              [19.257659912109492, 44.65595486430337],
              [19.26795959472667, 44.66523445141221],
              [19.280319213867294, 44.674512553303465],
              [19.27207946777354, 44.67646564865956],
              [19.27207946777354, 44.68427737181219],
              [19.273452758789176, 44.68769466949784],
              [19.284439086914166, 44.688671003237275],
              [19.299545288086048, 44.68769466949784],
              [19.30023193359385, 44.69452866007991],
              [19.312591552734485, 44.7052661589042],
              [19.309158325195416, 44.70917021022298],
              [19.336624145507923, 44.752097396080316],
              [19.329757690429805, 44.76964933446787],
              [19.34005737304698, 44.77452392661543],
              [19.336624145507923, 44.78427187661108],
              [19.34967041015636, 44.78817059580349],
              [19.3469238281251, 44.80327564555037],
              [19.35447692871104, 44.81058312113583],
              [19.3469238281251, 44.82373424434249],
              [19.36065673828135, 44.83736927811438],
              [19.351043701171992, 44.851001086203894],
              [19.377136230468857, 44.851001086203894],
              [19.370269775390724, 44.86657634562333],
              [19.36340332031261, 44.88506649401466],
              [19.3469238281251, 44.888958399780336],
              [19.309844970703224, 44.90549606158285],
              [19.28512573242199, 44.9025779962889],
              [19.27139282226574, 44.91035917458485],
              [19.22882080078136, 44.89576860124874],
              [19.206848144531367, 44.9025779962889],
              [19.188995361328235, 44.920084166257546],
              [19.17251586914073, 44.91911174115023],
              [19.156036376953224, 44.904523389609196],
              [19.13269042968762, 44.89965978287507],
              [19.128570556640735, 44.88993133507748],
              [19.09423828125011, 44.880201241509354],
              [19.07363891601573, 44.86462966860279],
              [18.989868164062607, 44.85197466334977],
              [18.85253906250011, 44.854895296041754],
              [18.76327514648448, 44.904523389609196],
              [18.7701416015626, 44.9210565749072],
              [18.752288818359478, 44.93661287504348],
              [18.761901855468864, 44.9439034403901],
              [18.791427612304787, 44.93418248087221],
              [18.80584716796886, 44.93855711632041],
              [18.80584716796886, 44.94487544582404],
              [18.785934448242305, 44.97354220216904],
              [18.804473876953235, 44.99394031891046],
              [18.77151489257823, 44.999767019181185],
              [18.730316162109478, 44.990055522906765],
              [18.738555908203228, 45.01141864227718],
              [18.726196289062607, 45.0216118684053],
              [18.722763061523544, 45.03325904788855],
              [18.70353698730479, 45.03762612919817],
              [18.68499755859386, 45.04635929200543],
              [18.668518066406353, 45.061881623212955],
              [18.6822509765626, 45.0696412088686],
              [18.68843078613293, 45.07885434878173],
              [18.67950439453136, 45.093398387688595],
              [18.671264648437614, 45.09533731309449],
              [18.658218383789166, 45.08564202775539],
              [18.655471801757926, 45.07546020688351],
              [18.661651611328235, 45.061881623212955],
              [18.659591674804798, 45.05606124274407],
              [18.643798828125114, 45.06139661413663],
              [18.633499145507923, 45.06139661413663],
              [18.611526489257923, 45.06139661413663],
              [18.609466552734478, 45.06721645149847],
              [18.62937927246105, 45.07836948371103],
              [18.63761901855481, 45.08564202775539],
              [18.63555908203135, 45.092913646051144],
              [18.62457275390636, 45.09533731309449],
              [18.62045288085949, 45.081278612418636],
              [18.609466552734478, 45.07933920973792],
              [18.599166870117298, 45.08418759300644],
              [18.5888671875001, 45.091459396451775],
              [18.57513427734385, 45.093883125211676],
              [18.569641113281367, 45.092913646051144],
              [18.57856750488292, 45.08564202775539],
              [18.584060668945416, 45.07691486381222],
              [18.58268737792979, 45.069156265623356],
              [18.573074340820423, 45.06673148768098],
              [18.5717010498048, 45.07691486381222],
              [18.551788330078224, 45.09194415043265],
              [18.54354858398448, 45.092913646051144],
              [18.532562255859492, 45.08758121648516],
              [18.553161621093857, 45.07546020688351],
              [18.546981811523548, 45.069156265623356],
              [18.540115356445412, 45.06236662817478],
              [18.540115356445412, 45.04635929200543],
              [18.532562255859492, 45.043448385856614],
              [18.527755737304798, 45.06091160094594],
              [18.51333618164074, 45.05606124274407],
              [18.495483398437617, 45.0599415622212],
              [18.470077514648555, 45.06382161837356],
              [18.452224731445362, 45.07885434878178],
              [18.450164794921925, 45.09921496641341],
              [18.463897705078175, 45.11084634642852],
              [18.480377197265682, 45.12247535653413],
              [18.522262573242237, 45.133133200567904],
              [18.55659484863286, 45.158800738352134],
              [18.579940795898484, 45.18881224681903],
              [18.583374023437553, 45.21735689928541],
              [18.641052246093803, 45.32463387246216],
              [18.601226806640625, 45.3627600954673],
              [18.63006591796875, 45.40037851725538],
              [18.716583251953146, 45.42544355958047],
              [18.76052856445315, 45.463983441272724],
              [18.71795654296877, 45.483724926032735],
              [18.73237609863283, 45.50009066820644],
              [18.78044128417971, 45.506828120969516],
              [18.80584716796877, 45.530883870188845],
              [18.812713623046896, 45.56021795715051],
              [18.680877685546896, 45.61019487586737],
              [18.546295166015646, 45.623642598278074],
              [18.517456054687514, 45.659167483312785],
              [18.472137451171886, 45.68603620740324],
              [18.365020751953146, 45.7502768643036],
              [18.28536987304689, 45.75602615586017],
              [18.201599121093764, 45.78380604900099],
              [18.153533935546893, 45.761774855141205],
              [18.057403564453146, 45.74644367422241],
              [17.99835205078126, 45.79529713006591],
              [17.845916748046896, 45.75602615586017],
              [17.609710693359393, 45.84793427349226],
              [17.351531982421896, 45.88809640024204],
              [16.879119873046896, 45.794339630460705],
              [16.774749755859396, 45.82114340079469],
              [16.6923522949219, 45.85558643964392],
              [16.576995849609396, 45.82497145796607],
              [16.54953002929692, 45.760337735846605],
              [16.530303955078146, 45.72535642341016],
              [16.5715026855469, 45.68315803253306],
              [16.533050537109396, 45.61211617651728],
              [16.461639404296896, 45.558294879426235],
              [16.41220092773443, 45.456759219007076],
              [16.302337646484396, 45.4890202453737],
              [16.214447021484396, 45.49864682342608],
              [16.121063232421896, 45.460130637920976],
              [15.967254638671893, 45.48131779814123],
              [15.818939208984393, 45.45820413751092],
              [15.593719482421895, 45.4524242413431],
              [15.599212646484393, 45.34828480683999],
              [15.552520751953143, 45.25555527789205],
              [15.601959228515645, 45.158800738352106],
              [15.574493408203145, 45.0502402697946],
              [15.588226318359395, 44.939529212272255],
              [15.459136962890675, 44.93564072971839],
              [15.280609130859423, 44.91230430458155],
              [15.211944580078173, 44.920084166257624],
              [15.140533447265673, 44.91230430458155],
              [15.077362060546923, 44.867549659447235],
              [15.071868896484423, 44.813018740612776],
              [15.170745849609425, 44.680371641890346],
              [15.244903564453173, 44.5826428195842],
              [15.346527099609423, 44.527842798455524],
              [15.387725830078173, 44.45534933372025],
              [15.48660278320316, 44.40680678709622],
              [15.634918212890673, 44.240279952989226],
              [15.582733154296923, 44.220599591069444],
              [15.508575439453173, 44.23437653539353],
              [15.4302978515625, 44.24323143968471],
              [15.37879943847656, 44.258478428784606],
              [15.330047607421873, 44.28306201767988],
              [15.3094482421875, 44.275688020707946],
              [15.30464172363281, 44.26388770060487],
              [15.307388305664062, 44.238312212932016],
              [15.291595458984373, 44.22748846630169],
              [15.264816284179688, 44.23536047945612],
              [15.240783691406248, 44.23880415411581],
              [15.22430419921875, 44.23782026763518],
              [15.206451416015625, 44.230440594623865],
              [15.198898315429688, 44.21617060273111],
              [15.203704833984425, 44.19894359225991],
              [15.416564941406298, 44.03725706010933],
              [15.492095947265675, 43.980957526084815],
              [15.58959960937505, 43.92163712834673],
              [16.094970703125043, 43.75671292857022],
              [16.53442382812504, 43.55949595288935],
              [16.509704589843796, 43.49925821066227],
              [16.582489013671918, 43.52515287643564],
              [16.62780761718754, 43.519178170476636],
              [16.644287109375046, 43.4942771934961],
              [16.626434326171918, 43.44145315153095],
              [16.692352294921914, 43.434472940141504],
              [16.72805786132817, 43.405546343486186],
              [16.88735961914067, 43.38758495325232],
              [16.972503662109414, 43.31968276747209],
              [17.060394287109414, 43.24970410411544],
              [17.15240478515631, 43.1726346056488],
              [17.30209350585945, 43.120031386787694],
              [17.335052490234453, 43.1095053111318],
              [17.357025146484453, 43.08694333811316],
              [17.373504638671953, 43.0749068866315],
              [17.43392944335948, 43.01067254527239],
              [17.497100830078228, 42.968482211280254],
              [17.55203247070322, 42.92425175387066],
              [17.65090942382823, 42.8880395605629],
              [17.70721435546882, 42.913692061579276],
              [17.789611816406318, 42.88149898076174],
              [17.814331054687557, 42.90162162590293],
              [17.86102294921881, 42.853316248207115],
              [17.904968261718814, 42.80497305809141],
              [17.98461914062506, 42.77675540379353],
              [18.04229736328131, 42.74045666033975],
              [18.142547607421974, 42.6763778807196],
              [18.21121215820324, 42.61374895431491],
              [18.21258544921885, 42.56623017635369],
              [18.264770507812607, 42.58139967966495],
              [18.360900878906357, 42.54802190204817],
              [18.429565429687614, 42.51968735985932],
              [18.436431884765728, 42.47614857025444],
              [18.612213134765625, 42.363617631805496],
              [18.633499145507812, 42.36919824433563],
              [18.6492919921875, 42.36158819524632],
              [18.653411865234375, 42.383401202818526],
              [18.68087768554687, 42.382894009614034],
              [18.696670532226562, 42.36970554816487],
              [18.735809326171875, 42.42497710184191],
              [18.754348754882812, 42.449301428414955],
              [18.7646484375, 42.46855149059522],
              [18.7646484375, 42.48577021400458],
              [18.762588500976562, 42.49032731830467],
              [18.749542236328125, 42.49032731830467],
              [18.776321411132812, 42.50804623455747],
              [18.809280395507812, 42.5171568649003],
              [18.86627197265625, 42.51412013568206],
              [18.976135253906318, 42.49387150323442],
              [19.061965942382812, 42.47310984904908],
              [19.160156250000064, 42.44322123194607],
              [19.263153076171974, 42.688492325508584],
              [19.482879638671974, 42.82965295224935],
              [19.614715576171985, 42.94637095514074],
              [19.676513671875057, 42.98807418217865],
              [19.72457885742198, 43.05082688999999],
              [19.79873657226568, 43.075408452653136],
              [19.8660278320313, 43.07239899494573],
              [19.907226562500064, 43.04430359661543],
              [20.072021484375057, 42.91771501488711],
              [20.291748046875057, 42.94385780966292],
              [20.368652343750053, 42.92173770556494],
              [20.418090820312553, 42.86740922288479],
              [20.65979003906256, 42.859356488383895],
              [20.86853027343755, 42.893573355685],
              [20.835571289062553, 43.01017044972423],
              [20.80810546875005, 43.11652289607472],
              [20.753173828125064, 43.29070137362409],
              [20.739440917968807, 43.33067209551494],
              [20.692749023437557, 43.36462654040089],
              [20.604858398437557, 43.396566313867474],
              [20.418090820312553, 43.426494569701234],
              [20.231323242187557, 43.47434901609405],
              [20.08575439453131, 43.49826204009938],
              [19.918212890625057, 43.524157133199],
              [19.753417968750053, 43.536104967254566],
              [19.596862792968803, 43.58387263463811],
              [19.491119384765696, 43.61221676817573],
              [19.53231811523446, 43.64601335623947],
              [19.529571533203203, 43.68972190701712],
              [19.502105712890703, 43.709578908237965],
              [19.469146728515703, 43.75324116151991],
              [19.4361877441407, 43.781009658142864],
              [19.39224243164071, 43.80281871904718],
              [19.37850952148446, 43.82461982131727],
              [19.344177246093825, 43.84839376489152],
              [19.32769775390634, 43.8771079757252],
              [19.298858642578207, 43.905808356157294],
              [19.285125732421957, 43.925593663550565],
              [19.26177978515633, 43.94636115619791],
              [19.256286621093828, 43.96514454266262],
              [19.237060546875078, 43.98194569774652],
              [19.239807128906328, 43.99676629896812],
              [19.252166748046957, 44.01158319944896],
              [19.281005859375085, 43.988862438848955],
              [19.3208312988282, 43.986886309343],
              [19.360656738281328, 43.97502815071954],
              [19.394989013671953, 43.9532820419801],
              [19.418334960937578, 43.959213588366794],
              [19.462966918945387, 43.9532820419801],
              [19.536437988281335, 43.94833863436945],
              [19.55017089843758, 43.970086552281025],
              [19.57489013671882, 43.977992912415324],
              [19.603729248046953, 44.00170567699181],
              [19.63119506835945, 44.01158319944896],
              [19.618148803711026, 44.027877515542635],
              [19.625701904296953, 44.047128661183706],
              [19.603729248046953, 44.06390660801777],
              [19.591369628906328, 44.05354431982035],
              [19.583129882812585, 44.04021871314202],
              [19.574203491211012, 44.04564802588261],
              [19.56459045410164, 44.06390660801777],
              [19.515838623046953, 44.07426708270817],
              [19.49798583984383, 44.09942068528641],
              [19.498672485351637, 44.10928192335562],
              [19.474639892578207, 44.11371894381062],
              [19.477386474609446, 44.125056482685125],
              [19.49043273925789, 44.137870211289744],
              [19.450607299804773, 44.12456359145008],
              [19.41764831542977, 44.143783302207424],
              [19.41146850585946, 44.164967014797035],
              [19.394989013671953, 44.16890733163993],
              [19.37850952148446, 44.17530978512211],
              [19.36134338378914, 44.18171154354903],
              [19.359970092773516, 44.19106670942551],
              [19.36134338378914, 44.201404902221284],
              [19.356536865234446, 44.20928040313665],
              [19.348297119140735, 44.21863119293713],
            ],
          ],
        },
      },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
      id: "maine",
      type: "fill",
      source: "maine", // reference the data source
      layout: {},
      paint: {
        "fill-color": "#30e880", // blue color fill
        "fill-opacity": 0.1,
      },
    });
    // Add a black outline around the polygon.
    map.addLayer({
      id: "outline",
      type: "line",
      source: "maine",
      layout: {},
      paint: {
        "line-color": "#555555",
        "line-width": 3,
      },
    });
  });
};
