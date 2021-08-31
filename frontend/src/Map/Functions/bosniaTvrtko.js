export const bosniaTvrtko = (map) => {
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
              [19.344177246093782, 44.224536189912925],
              [19.34074401855472, 44.22871853776347],
              [19.34623718261722, 44.23732831822532],
              [19.342803955078153, 44.246920589832214],
              [19.33113098144534, 44.253806384428614],
              [19.325637817382848, 44.26167487683231],
              [19.324607849121126, 44.27027983474884],
              [19.322547912597685, 44.27667127377516],
              [19.31568145751957, 44.2791293344632],
              [19.306755065917997, 44.27790031697272],
              [19.298858642578153, 44.275196388004574],
              [19.291305541992216, 44.27667127377516],
              [19.285125732421903, 44.2781461225274],
              [19.281005859375032, 44.28084991576161],
              [19.277572631835966, 44.28207887155467],
              [19.273796081542997, 44.28035832624635],
              [19.26658630371097, 44.2761796492981],
              [19.261093139648466, 44.27372146521579],
              [19.253196716308622, 44.27150901162336],
              [19.247360229492216, 44.26905063216731],
              [19.235000610351594, 44.26782140387877],
              [19.227104187011747, 44.269542316284756],
              [19.221611022949254, 44.273967288251235],
              [19.218177795410185, 44.28035832624635],
              [19.216117858886747, 44.28699443765373],
              [19.214401245117223, 44.29264683017535],
              [19.21028137207034, 44.29559568859147],
              [19.204101562500036, 44.297070062271146],
              [19.19620513916019, 44.297070062271146],
              [19.190368652343782, 44.2941212778928],
              [19.186935424804716, 44.29068084230053],
              [19.183502197265657, 44.287240205161574],
              [19.17835235595706, 44.28478248380969],
              [19.172515869140653, 44.285765584689955],
              [19.162559509277372, 44.28994357988048],
              [19.158439636230497, 44.29682433589528],
              [19.15500640869144, 44.306652588849786],
              [19.148826599121122, 44.31181176301726],
              [19.144363403320348, 44.31525096052463],
              [19.136123657226594, 44.31868995648111],
              [19.13028717041019, 44.322374371345624],
              [19.126510620117216, 44.327777761284445],
              [19.126510620117216, 44.332443924787604],
              [19.128913879394563, 44.337600831495635],
              [19.132690429687536, 44.34054743171767],
              [19.132003784179723, 44.34423047375606],
              [19.126510620117216, 44.34619466823548],
              [19.119987487793, 44.34791328441683],
              [19.110717773437532, 44.3520868567884],
              [19.107627868652372, 44.356260131966465],
              [19.107284545898473, 44.35969672366612],
              [19.10659790039066, 44.36460579073824],
              [19.112434387207067, 44.36877817432993],
              [19.1144943237305, 44.37147779358005],
              [19.111747741699247, 44.37442269084736],
              [19.106254577636747, 44.37319566831576],
              [19.100761413574254, 44.37442269084736],
              [19.100761413574254, 44.381293541917195],
              [19.10419464111331, 44.38742754907447],
              [19.105224609375036, 44.40165597036587],
              [19.11724090576175, 44.40852362522382],
              [19.134063720703157, 44.41416430998937],
              [19.144363403320348, 44.41955923853364],
              [19.142990112304716, 44.43598618199919],
              [19.14573669433597, 44.44554600843539],
              [19.144706726074247, 44.461965648074624],
              [19.140243530273466, 44.4688262192155],
              [19.13784027099613, 44.477400799288844],
              [19.133033752441435, 44.48107523365452],
              [19.129600524902372, 44.49062768005077],
              [19.129943847656282, 44.500423436016284],
              [19.117584228515653, 44.506789794977585],
              [19.128570556640664, 44.5214787391448],
              [19.130630493164098, 44.53175879707933],
              [19.140243530273466, 44.53077982210685],
              [19.15260314941409, 44.527842798455524],
              [19.167709350585973, 44.53029032844965],
              [19.171142578125032, 44.54301582651298],
              [19.186248779296907, 44.548888195335756],
              [19.196548461914094, 44.56063115575426],
              [19.194488525390657, 44.5684584795628],
              [19.183502197265657, 44.57090430226866],
              [19.178695678710973, 44.576773857135024],
              [19.191055297851598, 44.589000193709026],
              [19.202041625976594, 44.593890008383624],
              [19.22126770019534, 44.59829048984008],
              [19.22401428222659, 44.606601601162716],
              [19.221954345703153, 44.61735539205565],
              [19.22882080078128, 44.620287898534215],
              [19.235687255859403, 44.62126536778096],
              [19.24255371093753, 44.638857000172926],
              [19.248733520507844, 44.64471969276952],
              [19.249420166015664, 44.65155875202513],
              [19.25628662109378, 44.654977979262895],
              [19.253540039062536, 44.66181582895677],
              [19.263839721679716, 44.67109447803411],
              [19.276199340820348, 44.680371641890346],
              [19.26795959472659, 44.682324539764934],
              [19.26795959472659, 44.69013547299005],
              [19.26933288574222, 44.693552425081734],
              [19.28031921386722, 44.69452866007996],
              [19.295425415039094, 44.693552425081734],
              [19.296112060546903, 44.700385724474444],
              [19.30847167968753, 44.71112213714051],
              [19.305038452148466, 44.71502579349154],
              [19.33250427246097, 44.7579486346706],
              [19.325637817382848, 44.77549879567305],
              [19.33593750000003, 44.780372894101],
              [19.33250427246097, 44.79011985665548],
              [19.345550537109403, 44.794018180870715],
              [19.342803955078153, 44.809121700077334],
              [19.350357055664094, 44.816428435076865],
              [19.342803955078153, 44.82957822522573],
              [19.356536865234403, 44.84321187656337],
              [19.346923828125036, 44.85684230221507],
              [19.373016357421903, 44.85684230221507],
              [19.36614990234378, 44.872415981701344],
              [19.359283447265653, 44.89090425391711],
              [19.342803955078153, 44.89479576469785],
              [19.30572509765628, 44.91133174781209],
              [19.281005859375032, 44.90841397875737],
              [19.267272949218782, 44.91619436708162],
              [19.224700927734403, 44.90160527494202],
              [19.20272827148441, 44.90841397875737],
              [19.184875488281282, 44.92591837128864],
              [19.16839599609378, 44.92494604492795],
              [19.15191650390628, 44.9103591745849],
              [19.128570556640664, 44.90549606158292],
              [19.124450683593782, 44.89576860124871],
              [19.090118408203153, 44.88603949514269],
              [19.069519042968782, 44.870469502172696],
              [18.98574829101566, 44.857815780615184],
              [18.848419189453153, 44.860736117070026],
              [18.75915527343753, 44.9103591745849],
              [18.766021728515653, 44.92689068119163],
              [18.748168945312532, 44.94244540138089],
              [18.75778198242191, 44.94973522612673],
              [18.78730773925784, 44.940015254076485],
              [18.801727294921903, 44.944389445164354],
              [18.801727294921903, 44.95070713281383],
              [18.781814575195348, 44.97937097612595],
              [18.800354003906282, 44.999767019181235],
              [18.767395019531282, 45.00559312697014],
              [18.72619628906253, 44.99588261816541],
              [18.734436035156282, 45.017243565102575],
              [18.722076416015653, 45.02743575438776],
              [18.718643188476594, 45.03908174890804],
              [18.699417114257844, 45.04344838585672],
              [18.680877685546903, 45.052180659942316],
              [18.664398193359407, 45.06770141120143],
              [18.678131103515653, 45.07546020688356],
              [18.684310913085973, 45.084672408703916],
              [18.675384521484403, 45.09921496641341],
              [18.667144775390653, 45.101153694326484],
              [18.654098510742216, 45.09145939645185],
              [18.65135192871097, 45.08127861241874],
              [18.65753173828128, 45.06770141120143],
              [18.65547180175784, 45.061881623212976],
              [18.639678955078157, 45.06721645149847],
              [18.62937927246097, 45.06721645149847],
              [18.60740661621097, 45.06721645149847],
              [18.60534667968753, 45.073035696380096],
              [18.625259399414098, 45.08418759300649],
              [18.63349914550785, 45.09145939645185],
              [18.631439208984403, 45.09873027414909],
              [18.620452880859403, 45.101153694326484],
              [18.616333007812532, 45.08709642547446],
              [18.60534667968753, 45.08515722028685],
              [18.59504699707034, 45.090005109822634],
              [18.584747314453153, 45.097276172669424],
              [18.571014404296903, 45.09969965456332],
              [18.56552124023441, 45.09873027414909],
              [18.57444763183597, 45.09145939645185],
              [18.579940795898466, 45.08273312122757],
              [18.578567504882844, 45.07497531301174],
              [18.56895446777347, 45.07255078193601],
              [18.567581176757844, 45.08273312122757],
              [18.54766845703128, 45.097760877277075],
              [18.539428710937536, 45.09873027414909],
              [18.528442382812536, 45.093398387688644],
              [18.549041748046907, 45.08127861241874],
              [18.54286193847659, 45.07497531301174],
              [18.535995483398466, 45.06818636678988],
              [18.535995483398466, 45.052180659942316],
              [18.528442382812536, 45.049270050034],
              [18.523635864257844, 45.06673148768114],
              [18.509216308593782, 45.061881623212976],
              [18.49136352539066, 45.06576154770307],
              [18.465957641601598, 45.06964120886863],
              [18.43986511230472, 45.09145939645185],
              [18.432312011718786, 45.10696948308024],
              [18.421669006347685, 45.11278467935636],
              [18.402442932128935, 45.115449779642894],
              [18.18511962890628, 45.00170912094221],
              [17.970886230468786, 44.939529212272305],
              [17.86651611328128, 44.922028967099],
              [17.767639160156286, 44.95702412512115],
              [17.52044677734378, 44.939529212272305],
              [17.319946289062536, 44.89090425391706],
              [17.138671875000036, 44.896741421341964],
              [16.85852050781253, 44.999767019181235],
              [16.669006347656286, 45.036655695486196],
              [16.56463623046878, 45.05606124274412],
              [16.41632080078128, 45.0444187043641],
              [16.119689941406282, 44.85781578061523],
              [16.064758300781275, 44.83834308566651],
              [16.007080078125025, 44.80327564555043],
              [15.965881347656277, 44.78475923091046],
              [15.941162109375027, 44.75551069059172],
              [15.861511230468775, 44.69794535297576],
              [15.270996093750025, 44.08363928284644],
              [15.353393554687525, 44.00862011541533],
              [15.449523925781277, 43.9270772964114],
              [15.551147460937527, 43.87512812933669],
              [15.622558593750025, 43.84047016946789],
              [15.63869476318362, 43.83254552160586],
              [15.666503906250025, 43.8186748554532],
              [15.677146911621119, 43.81421574256916],
              [15.682296752929712, 43.8028187190472],
              [15.673370361328148, 43.807030915856686],
              [15.65242767333987, 43.81421574256916],
              [15.6526851654053, 43.81570215052901],
              [15.65165519714358, 43.816445340634495],
              [15.648736953735378, 43.81613567921463],
              [15.645818710327173, 43.8156402176027],
              [15.642642974853542, 43.81446347979846],
              [15.642642974853542, 43.81588794892255],
              [15.641784667968775, 43.81731238406707],
              [15.638008117675806, 43.81768397025561],
              [15.635261535644556, 43.81601181419706],
              [15.634231567382837, 43.812915105254014],
              [15.633373260498072, 43.80380985089954],
              [15.640068054199244, 43.79959742696459],
              [15.646934509277369, 43.79866817581801],
              [15.649681091308619, 43.80120809471635],
              [15.65071105957034, 43.79786281313409],
              [15.654487609863308, 43.79662377242394],
              [15.65723419189456, 43.79699548733474],
              [15.659980773925808, 43.79959742696459],
              [15.671310424804712, 43.788197614227414],
              [15.682640075683622, 43.78249689238115],
              [15.696716308593773, 43.76712702120528],
              [16.292724609375025, 43.10900402427308],
              [16.825561523437525, 42.83166720261409],
              [17.182617187500025, 42.9202292273379],
              [17.072753906250032, 43.04079076668198],
              [17.276000976562525, 43.12504316740127],
              [17.429809570312525, 43.01669737169668],
              [17.49298095703128, 42.974511174899156],
              [17.547912597656275, 42.93028505122964],
              [17.64678955078128, 42.894076403348976],
              [17.852783203125025, 42.7833070772496],
              [18.012084960937532, 42.74701217318065],
              [18.13842773437503, 42.682435398386204],
              [18.207092285156282, 42.619812573672185],
              [18.2084655761719, 42.57229842044638],
              [18.260650634765653, 42.58746644784856],
              [18.356781005859403, 42.554091917144],
              [18.425445556640653, 42.52576012965682],
              [18.43231201171878, 42.48222557002593],
              [18.679504394531275, 42.32200108060303],
              [19.061279296875025, 42.581399679665054],
              [19.259033203125025, 42.69454866207692],
              [19.478759765625025, 42.83569550641452],
              [19.61059570312503, 42.95240208568967],
              [19.72045898437503, 43.05684777584547],
              [19.918212890625032, 43.28520334369384],
              [19.79461669921875, 43.42300370191846],
              [19.654541015625, 43.492782808225],
              [19.51995849609375, 43.55651037504758],
              [19.48699951171875, 43.618182252818265],
              [19.5281982421875, 43.65197548731187],
              [19.52545166015625, 43.695679697898825],
              [19.49798583984375, 43.715534726205114],
              [19.46502685546875, 43.75919263886012],
              [19.43206787109375, 43.78695837311561],
              [19.38812255859375, 43.80876526350847],
              [19.3743896484375, 43.830564195198264],
              [19.340057373046875, 43.854335770789575],
              [19.323577880859375, 43.88304712020558],
              [19.29473876953125, 43.91174463910793],
              [19.281005859375, 43.93152797296857],
              [19.257659912109375, 43.95229339335166],
              [19.252166748046875, 43.971074904863265],
              [19.232940673828125, 43.98787438231982],
              [19.235687255859375, 44.00269350325321],
              [19.248046875, 44.017508923418916],
              [19.276885986328125, 43.99479043262446],
              [19.31671142578125, 43.99281450048989],
              [19.356536865234375, 43.98095752608484],
              [19.390869140625, 43.95921358836687],
              [19.414215087890625, 43.96514454266273],
              [19.458847045898438, 43.95921358836687],
              [19.532318115234375, 43.954270674161876],
              [19.546051025390625, 43.9760164210655],
              [19.570770263671875, 43.983921991727605],
              [19.599609375, 44.00763238784148],
              [19.6270751953125, 44.017508923418916],
              [19.614028930664062, 44.033801611135644],
              [19.62158203125, 44.053050832290815],
              [19.599609375, 44.06982710133289],
              [19.58724975585937, 44.0594658494226],
              [19.579010009765625, 44.04614157509527],
              [19.570083618164062, 44.05157034502869],
              [19.560470581054688, 44.06982710133289],
              [19.51171875, 44.080186539724004],
              [19.493865966796875, 44.10533762552548],
              [19.494552612304688, 44.1151978766043],
              [19.47052001953125, 44.119634452910205],
              [19.4732666015625, 44.13097085672744],
              [19.486312866210938, 44.143783302207424],
              [19.446487426757812, 44.13047801484297],
              [19.413528442382812, 44.14969580090781],
              [19.4073486328125, 44.17087739135609],
              [19.390869140625, 44.174817313376884],
              [19.3743896484375, 44.18121912526982],
              [19.357223510742184, 44.18762024210347],
              [19.355850219726562, 44.196974470259356],
              [19.357223510742184, 44.207311626616956],
              [19.3524169921875, 44.215186337858206],
              [19.344177246093782, 44.224536189912925],
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
        "fill-color": "#19b9e1", // blue color fill
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
