import mapboxgl from "mapbox-gl";
import { useRef } from "react";

export const bosniaKulinBan = (map) => {
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
              [19.346923828125, 44.21863119293724],
              [19.343490600585938, 44.222813960308336],
              [19.348983764648438, 44.231424604494165],
              [19.34555053710937, 44.241017838544515],
              [19.33387756347656, 44.24790432413117],
              [19.328384399414062, 44.25577360624334],
              [19.327354431152344, 44.26437942790998],
              [19.325294494628906, 44.270771508583536],
              [19.31842803955078, 44.27322981605989],
              [19.30950164794922, 44.272000675175235],
              [19.301605224609375, 44.26929647474019],
              [19.294052124023438, 44.270771508583536],
              [19.287872314453125, 44.27224650540873],
              [19.28375244140625, 44.274950570110505],
              [19.280319213867188, 44.27617964929813],
              [19.27654266357422, 44.27445893123747],
              [19.269332885742188, 44.27027983474887],
              [19.263839721679684, 44.2678214038788],
              [19.25594329833984, 44.265608728177924],
              [19.250106811523434, 44.26315010193516],
              [19.237747192382812, 44.26192075025349],
              [19.22985076904297, 44.2636418354099],
              [19.22435760498047, 44.26806725159305],
              [19.220924377441403, 44.27445893123747],
              [19.218864440917965, 44.28109570897683],
              [19.217147827148438, 44.2867486691176],
              [19.21302795410156, 44.28969782368396],
              [19.20684814453125, 44.29117234543905],
              [19.198951721191406, 44.29117234543905],
              [19.193115234375, 44.28822326491012],
              [19.189682006835934, 44.284782483809714],
              [19.186248779296875, 44.281341501163716],
              [19.18109893798828, 44.278883533021684],
              [19.175262451171875, 44.27986673261797],
              [19.165306091308594, 44.28404514735239],
              [19.16118621826172, 44.290926594383954],
              [19.157752990722656, 44.30075583451234],
              [19.151573181152344, 44.305915526949434],
              [19.147109985351562, 44.30935506997107],
              [19.138870239257812, 44.31279441144291],
              [19.133033752441406, 44.31647919650349],
              [19.129257202148434, 44.321883129398586],
              [19.129257202148434, 44.32654976182051],
              [19.13166046142578, 44.33170718680922],
              [19.13543701171875, 44.33465408319267],
              [19.134750366210938, 44.338337495433734],
              [19.129257202148434, 44.340301887355075],
              [19.12273406982422, 44.342020676298326],
              [19.11346435546875, 44.34619466823551],
              [19.110374450683594, 44.350368362980596],
              [19.110031127929688, 44.35380530020703],
              [19.109344482421875, 44.3587148608905],
              [19.11518096923828, 44.36288766405336],
              [19.11724090576172, 44.365587554791375],
              [19.11449432373047, 44.36853274822797],
              [19.10900115966797, 44.367305602292426],
              [19.10350799560547, 44.36853274822797],
              [19.10350799560547, 44.37540429036203],
              [19.10694122314453, 44.38153891454401],
              [19.10797119140625, 44.39576876734357],
              [19.11998748779297, 44.40263711327981],
              [19.136810302734375, 44.40827836571936],
              [19.147109985351562, 44.4136738372583],
              [19.145736694335938, 44.43010243440225],
              [19.148483276367188, 44.439663223436106],
              [19.14745330810547, 44.45608451678311],
              [19.142990112304684, 44.46294577903107],
              [19.140586853027344, 44.47152122299265],
              [19.135780334472656, 44.47519602759756],
              [19.132347106933594, 44.484749436619964],
              [19.1326904296875, 44.49454617990028],
              [19.120330810546875, 44.50091318061943],
              [19.131317138671875, 44.51560360577554],
              [19.133377075195312, 44.52588470040996],
              [19.142990112304684, 44.524905626703834],
              [19.155349731445312, 44.52196830685208],
              [19.170455932617188, 44.524416083679924],
              [19.17388916015625, 44.53714286528377],
              [19.188995361328125, 44.54301582651298],
              [19.199295043945312, 44.55475997175016],
              [19.197235107421875, 44.562588085441945],
              [19.186248779296875, 44.56503415498704],
              [19.181442260742188, 44.57090430226871],
              [19.193801879882812, 44.583131873047186],
              [19.204788208007812, 44.5880221814057],
              [19.224014282226562, 44.5924231071787],
              [19.22676086425781, 44.600735057768546],
              [19.22470092773437, 44.61148993477701],
              [19.2315673828125, 44.61442273746987],
              [19.23843383789062, 44.61540030545483],
              [19.24530029296875, 44.632993715141666],
              [19.251480102539062, 44.638857000172976],
              [19.252166748046875, 44.645696750604394],
              [19.259033203125, 44.64911632343077],
              [19.25628662109375, 44.655954864303425],
              [19.266586303710938, 44.66523445141229],
              [19.278945922851562, 44.674512553303565],
              [19.270706176757812, 44.67646564865964],
              [19.270706176757812, 44.68427737181225],
              [19.272079467773438, 44.687694669498015],
              [19.283065795898438, 44.68867100323748],
              [19.298171997070312, 44.687694669498015],
              [19.29885864257812, 44.69452866008004],
              [19.31121826171875, 44.70526615890436],
              [19.307785034179688, 44.70917021022306],
              [19.335250854492188, 44.752097396080465],
              [19.328384399414062, 44.76964933446794],
              [19.33868408203125, 44.77452392661551],
              [19.335250854492188, 44.78427187661121],
              [19.348297119140625, 44.78817059580359],
              [19.34555053710937, 44.80327564555043],
              [19.353103637695312, 44.810583121135906],
              [19.34555053710937, 44.823734244342546],
              [19.35928344726562, 44.83736927811443],
              [19.34967041015625, 44.85100108620399],
              [19.375762939453125, 44.85100108620399],
              [19.368896484374996, 44.8665763456234],
              [19.362030029296875, 44.88506649401471],
              [19.34555053710937, 44.88895839978044],
              [19.308471679687496, 44.90549606158295],
              [19.28375244140625, 44.902577996288876],
              [19.27001953125, 44.91035917458495],
              [19.227447509765625, 44.89576860124879],
              [19.205474853515625, 44.902577996288876],
              [19.1876220703125, 44.920084166257624],
              [19.171142578125, 44.91911174115028],
              [19.154663085937496, 44.904523389609324],
              [19.131317138671875, 44.8996597828752],
              [19.127197265625, 44.889931335077634],
              [19.092864990234375, 44.880201241509404],
              [19.072265625, 44.864629668602866],
              [18.988494873046875, 44.85197466334984],
              [18.851165771484375, 44.85489529604183],
              [18.76190185546875, 44.904523389609324],
              [18.76876831054687, 44.921056574907226],
              [18.75091552734375, 44.93661287504354],
              [18.760528564453125, 44.94390344039018],
              [18.79005432128906, 44.93418248087229],
              [18.804473876953125, 44.93855711632049],
              [18.804473876953125, 44.94487544582412],
              [18.784561157226562, 44.97354220216915],
              [18.8031005859375, 44.99394031891056],
              [18.7701416015625, 44.999767019181284],
              [18.72894287109375, 44.990055522906864],
              [18.7371826171875, 45.01141864227728],
              [18.724822998046875, 45.02161186840545],
              [18.721389770507812, 45.03325904788863],
              [18.702163696289062, 45.0376261291983],
              [18.683624267578125, 45.04635929200553],
              [18.667144775390625, 45.061881623213026],
              [18.68087768554687, 45.06964120886863],
              [18.687057495117188, 45.07885434878183],
              [18.678131103515625, 45.093398387688694],
              [18.669891357421875, 45.09533731309455],
              [18.656845092773438, 45.08564202775547],
              [18.654098510742188, 45.07546020688359],
              [18.6602783203125, 45.061881623213026],
              [18.658218383789062, 45.05606124274415],
              [18.642425537109375, 45.06139661413673],
              [18.632125854492188, 45.06139661413673],
              [18.610153198242188, 45.06139661413673],
              [18.60809326171875, 45.06721645149852],
              [18.628005981445312, 45.07836948371111],
              [18.636245727539062, 45.08564202775547],
              [18.63418579101562, 45.092913646051144],
              [18.623199462890625, 45.09533731309455],
              [18.61907958984375, 45.08127861241874],
              [18.60809326171875, 45.079339209738094],
              [18.597793579101562, 45.08418759300652],
              [18.58749389648437, 45.09145939645185],
              [18.57376098632812, 45.0938831252118],
              [18.568267822265625, 45.092913646051144],
              [18.577194213867188, 45.08564202775547],
              [18.582687377929688, 45.07691486381232],
              [18.581314086914062, 45.069156265623505],
              [18.571701049804688, 45.06673148768116],
              [18.570327758789062, 45.07691486381232],
              [18.550415039062496, 45.091944150432724],
              [18.54217529296875, 45.092913646051144],
              [18.53118896484375, 45.08758121648526],
              [18.551788330078125, 45.07546020688359],
              [18.545608520507812, 45.069156265623505],
              [18.538742065429684, 45.06236662817483],
              [18.538742065429684, 45.04635929200553],
              [18.53118896484375, 45.04344838585674],
              [18.526382446289062, 45.06091160094602],
              [18.511962890625, 45.05606124274415],
              [18.494110107421875, 45.059941562221226],
              [18.468704223632812, 45.06382161837364],
              [18.442611694335938, 45.08564202775547],
              [18.43505859375, 45.101153694326484],
              [18.424415588378906, 45.1069694830803],
              [18.405189514160156, 45.10963485491892],
              [17.785491943359375, 44.642276976185016],
              [17.720947265625, 44.60024615241099],
              [17.583618164062496, 44.584599008752015],
              [17.2760009765625, 44.61979915773973],
              [17.1551513671875, 44.64911632343077],
              [16.86676025390625, 44.64911632343077],
              [16.72119140625, 44.645208223744035],
              [16.6387939453125, 44.63934558051711],
              [16.611328125, 44.60024615241099],
              [16.61956787109375, 44.4808302785626],
              [16.6607666015625, 44.351350365612326],
              [16.70196533203125, 44.27470475118813],
              [16.76788330078125, 44.148710425584085],
              [16.82281494140625, 44.11322595798781],
              [16.8804931640625, 44.05601169578525],
              [16.96014404296875, 43.98491011404692],
              [17.01507568359375, 43.949327348785225],
              [17.105712890625, 43.91372326852401],
              [17.22930908203125, 43.866218006556394],
              [17.33642578125, 43.810747313446996],
              [17.43804931640625, 43.765143524274066],
              [17.554779052734375, 43.75125720420175],
              [17.645416259765625, 43.74728909225908],
              [17.71270751953125, 43.717519867330765],
              [17.8033447265625, 43.689721907017194],
              [17.8802490234375, 43.652969118285434],
              [17.914581298828125, 43.64104446159409],
              [18.0010986328125, 43.62215891380659],
              [18.095855712890625, 43.57939602461448],
              [18.26751708984375, 43.5326204268101],
              [18.415832519531246, 43.504736854976954],
              [18.5943603515625, 43.48680489735277],
              [18.7152099609375, 43.48481212891603],
              [18.80859375, 43.48680489735277],
              [18.834686279296875, 43.5734266934657],
              [18.903350830078125, 43.590338261467494],
              [19.00634765625, 43.62613531177414],
              [19.06402587890625, 43.65197548731187],
              [19.080505371093746, 43.681777265168094],
              [19.083251953125, 43.723474896114794],
              [19.15740966796875, 43.75125720420175],
              [19.16839599609375, 43.77109381775651],
              [19.131317138671875, 43.79984522482957],
              [19.09149169921875, 43.82461982131735],
              [19.0557861328125, 43.88601647043421],
              [19.0557861328125, 43.92757183247526],
              [19.07501220703125, 43.971074904863265],
              [19.105224609375, 43.98886243884903],
              [19.149169921875, 44.040218713142146],
              [19.15740966796875, 44.10730980734024],
              [19.201354980468746, 44.15462243076731],
              [19.275512695312496, 44.190082025040525],
              [19.33868408203125, 44.203866109361435],
              [19.346923828125, 44.21863119293724],
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
        "fill-color": "#f96a0b", // blue color fill
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
