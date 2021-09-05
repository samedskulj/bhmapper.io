import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./Styles";
import "./MapAccordion.scss";

const MapAccordion = ({
  changeBosnia,
  changeBosniaPage,
  changeMap,
  setChangeMap,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className="accordion_div">
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniax")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniax" className="font_accordion">
              Bosnia in the X century...
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              The Early Slavs raided the Western Balkans, including Bosnia, in
              the 6th and early 7th century (amid the Migration Period), and
              were composed of small tribal units drawn from a single Slavic
              confederation known to the Byzantines as the Sclaveni (whilst the
              related Antes, roughly speaking, colonized the eastern portions of
              the Balkans). <br></br>
              <br></br>Tribes recorded by the ethnonyms of "Serb" and "Croat"
              are described as a second, latter, migration of different people
              during the second quarter of the 7th century who do not seem to
              have been particularly numerous; these early "Serb" and "Croat"
              tribes, whose exact identity is subject to scholarly debate,came
              to predominate over the Slavs in the neighbouring regions. The
              bulk of Bosnia proper, however, appears to have been a territory
              between Serb and Croat rule and is not enumerated as one of the
              regions settled by those tribes. Bosnia is first mentioned as a
              land (horion Bosona) in Byzantine Emperor Constantine
              Porphyrogenitus' De Administrando Imperio in the mid 10th century,
              at the end of a chapter (Chap. 32) entitled Of the Serbs and the
              country in which they now dwell.<br></br>
              <br></br>This has been scholarly interpreted in several ways and
              used especially by the Serb national ideologists to prove Bosnia
              as originally a "Serb" land.Other scholars have asserted the
              inclusion of Bosnia into Chapter 32 to merely be the result of
              Serbian Grand Duke Časlav's temporary rule over Bosnia at the
              time, while also pointing out Porphyrogenitus does not say
              anywhere explicitly that Bosnia is a "Serb land".In fact, the very
              translation of the critical sentence where the word Bosona
              (Bosnia) appears is subject to varying interpretation. In time,
              Bosnia formed a unit under its own ruler, who called himself
              Bosnian. Bosnia, along with other territories, became part of
              Duklja in the 11th century, although it retained its own nobility
              and institutions.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniakulin")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniakulin" className="font_accordion">
              The Good Ol' Days of Kulin Ban
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              In the High Middle Ages, political circumstance led to the area
              being contested between the Kingdom of Hungary and the Byzantine
              Empire. Following another shift of power between the two in the
              early 12th century, Bosnia found itself outside the control of
              both and emerged as the Banate of Bosnia (under the rule of local
              bans).The first Bosnian ban known by name was Ban Borić.The second
              was Ban Kulin, whose rule marked the start of a controversy
              involving the Bosnian Church – considered heretical by the Roman
              Catholic Church. In response to Hungarian attempts to use church
              politics regarding the issue as a way to reclaim sovereignty over
              Bosnia, Kulin held a council of local church leaders to renounce
              the heresy and embraced Catholicism in 1203. Despite this,
              Hungarian ambitions remained unchanged long after Kulin's death in
              1204, waning only after an unsuccessful invasion in 1254. During
              this time, the population was called Dobri Bošnjani ("Good
              Bosnians").The names Serb and Croat, though occasionally appearing
              in peripheral areas, were not used in Bosnia proper
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniatvrtko")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniatvrtko" className="font_accordion">
              Tvrtko's reign
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              Bosnian history from then until the early 14th century was marked
              by a power struggle between the Šubić and Kotromanić families.
              Kotromanić Dynasty, royal house that ruled Bosnia from the late
              13th to the mid-15th century. The dynasty was founded by Stephen
              Kotroman, a vassal of the Hungarian king and the ruler of a
              portion of Bosnia from 1287 to 1316. His son Stephen Kotromanić
              became the independent lord of all Bosnia in 1322. Extending his
              domain southward, Stephen Kotromanić incorporated both the land of
              Hum (1325; later called Hercegovina) and the Adriatic coastline
              between Split and the Neretva River. <br></br> <br></br>
              Although challenged by Hungarian aggression and internal
              uprisings, his nephew and successor, Tvrtko I (reigned 1353–91),
              established firm control over a reduced Bosnia by 1370; he then
              recovered Bosnia’s lost territory, extended his lands along the
              Adriatic coast and into Serbia, and in 1377 crowned himself “king
              of the Serbs, of Bosnia, and of the coast.” By 1390 he had also
              claimed the titles “king of Dalmatia and Croatia” and had made
              Bosnia the dominant power among the South Slavs. Under Tvrtko’s
              successors, however, constant dynastic quarrels and the increased
              influence of a few magnates diminished the authority of the
              throne; Hungarian and Turk intervention also reduced the size and
              undermined the independence of the Bosnian state until the Turks
              incorporated it into their empire (1463) and executed the last
              Kotromanić king, Stephen Tomašević (reigned 1461–63). Tvrtko’s
              successors were his brother Stephen Dabiša (reigned 1391–95),
              Dabiša’s widow Jelena Gruba (1395–98), Tvrtko’s illegitimate son
              Stephen Ostoja (1398–1404, 1409–18), Tvrtko’s son Tvrtko II
              (1404–09, 1420–43), Ostoja’s son Stephen Ostojić (1418–20),
              Ostoja’s illegitimate son Stephen Tomas Ostojić (1443–61), and
              Stephen Tomašević. This conflict came to an end in 1322, when
              Stephen II Kotromanić became Ban. By the time of his death in
              1353, he was successful in annexing territories to the north and
              west, as well as Zahumlje and parts of Dalmatia. He was succeeded
              by his ambitious nephew Tvrtko who, following a prolonged struggle
              with nobility and inter-family strife, gained full control of the
              country in 1367. By the year 1377, Bosnia was elevated into a
              kingdom with the coronation of Tvrtko as the first Bosnian King in
              Mile near Visoko in the Bosnian heartland.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniaxv")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniaxv" className="font_accordion">
              Dark Age of Bosnia a.k.a XV century
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              Following his death in 1391 however, Bosnia fell into a long
              period of decline. The Ottoman Empire had started its conquest of
              Europe and posed a major threat to the Balkans throughout the
              first half of the 15th century. Finally, after decades of
              political and social instability, the Kingdom of Bosnia ceased to
              exist in 1463 after its conquest by the Ottoman Empire.There was a
              general awareness in medieval Bosnia, at least amongst the nobles,
              that they shared a join state with Serbia and that they belong to
              the same ethnic group. That awareness diminished over time, due to
              differences in political and social development, but it was kept
              in Herzegovina and parts of Bosnia which were a part of Serbian
              state.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniaottoman")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniaottoman" className="font_accordion">
              Ottoman Period in the Bosnia
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              The Ottoman conquest of Bosnia marked a new era in the country's
              history and introduced drastic changes in the political and
              cultural landscape. The Ottomans incorporating Bosnia as an
              integral province of the Ottoman Empire with its historical name
              and territorial integrity.<br></br>
              <br></br> Within Bosnia, the Ottomans introduced a number of key
              changes in the territory's socio-political administration;
              including a new landholding system, a reorganization of
              administrative units, and a complex system of social
              differentiation by class and religious affiliation.<br></br>
              <br></br>The four centuries of Ottoman rule also had a drastic
              impact on Bosnia's population make-up, which changed several times
              as a result of the empire's conquests, frequent wars with European
              powers, forced and economic migrations, and epidemics. A native
              Slavic-speaking Muslim community emerged and eventually became the
              largest of the ethno-religious groups due to lack of strong
              Christian church organizations and continuous rivalry between the
              Orthodox and Catholic churches, while the indigenous Bosnian
              Church disappeared altogether (ostensibly by conversion of its
              members to Islam). The Ottomans referred to them as kristianlar
              while the Orthodox and Catholics were called gebir or kafir,
              meaning "unbeliever".The Bosnian Franciscans (and the Catholic
              population as a whole) were protected by official imperial decrees
              and in accordance and full extent of Ottoman laws, however in
              effect, these often merely affected arbitrary rule and behavior of
              powerful local elite.<br></br>
              <br></br>As the Ottoman Empire continued their rule in the Balkans
              (Rumelia), Bosnia was somewhat relieved of the pressures of being
              a frontier province, and experienced a period of general welfare.
              A number of cities, such as Sarajevo and Mostar, were established
              and grew into regional centers of trade and urban culture and were
              then visited by Ottoman traveler Evliya Çelebi in 1648. Within
              these cities, various Ottoman Sultans financed the construction of
              many works of Bosnian architecture such as the country's first
              library in Sarajevo, madrassas, a school of Sufi philosophy, and a
              clock tower (Sahat Kula), bridges such as the Stari Most, the
              Emperor's Mosque and the Gazi Husrev-beg Mosque. <br></br>
              <br></br>Furthermore, several Bosnian Muslims played influential
              roles in the Ottoman Empire's cultural and political history
              during this time.Bosnian recruits formed a large component of the
              Ottoman ranks in the battles of Mohács and Krbava field, while
              numerous other Bosnians rose through the ranks of the Ottoman
              military to occupy the highest positions of power in the Empire,
              including admirals such as Matrakçı Nasuh; generals such as
              Isa-Beg Ishaković, Gazi Husrev-beg, Telli Hasan Pasha and Sarı
              Süleyman Pasha; administrators such as Ferhad Pasha Sokolović and
              Osman Gradaščević; and Grand Viziers such as the influential
              Sokollu Mehmed Pasha and Damat Ibrahim Pasha. Some Bosnians
              emerged as Sufi mystics, scholars such as Muhamed Hevaji Uskufi
              Bosnevi, Ali Džabić; and poets in the Turkish, Albanian, Arabic,
              and Persian languages. Austro-Hungarian troops enter Sarajevo,
              1878. <br></br>
              <br></br>
              However, by the late 17th century the Empire's military
              misfortunes caught up with the country, and the end of the Great
              Turkish War with the treaty of Karlowitz in 1699 again made Bosnia
              the Empire's westernmost province. The 18th century was marked by
              further military failures, numerous revolts within Bosnia, and
              several outbreaks of plague.<br></br>
              <br></br>The Porte's efforts at modernizing the Ottoman state were
              met with distrust growing to hostility in Bosnia, where local
              aristocrats stood to lose much through the proposed Tanzimat
              reforms. This, combined with frustrations over territorial,
              political concessions in the north-east, and the plight of Slavic
              Muslim refugees arriving from the Sanjak of Smederevo into Bosnia
              Eyalet, culminated in a partially unsuccessful revolt by Husein
              Gradaščević, who endorsed a Bosnia Eyalet autonomous from the
              authoritarian rule of the Ottoman Sultan Mahmud II, who
              persecuted, executed and abolished the Janissaries and reduced the
              role of autonomous Pashas in Rumelia. Mahmud II sent his Grand
              vizier to subdue Bosnia Eyalet and succeeded only with the
              reluctant assistance of Ali Pasha Rizvanbegović.Related rebellions
              were extinguished by 1850, but the situation continued to
              deteriorate. <br></br>
              <br></br>New nationalist movements appeared in Bosnia by the
              middle of the 19th century. Shortly after Serbia's breakaway from
              the Ottoman Empire in the early 19th century, Serbian and Croatian
              nationalism rose up in Bosnia, and such nationalists made
              irredentist claims to Bosnia's territory. This trend continued to
              grow in the rest of the 19th and 20th centuries. <br></br>
              <br></br>Agrarian unrest eventually sparked the Herzegovinian
              rebellion, a widespread peasant uprising, in 1875. The conflict
              rapidly spread and came to involve several Balkan states and Great
              Powers, a situation that led to the Congress of Berlin and the
              Treaty of Berlin in 1878.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniaaustro")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniaaustro" className="font_accordion">
              Bosnia and The Austro-Hungarian Empire
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              Bosnia and Herzegovina was declared a “crown land” and was
              governed by a special joint commission under the Common Ministry
              of Finance. The Ottoman administrative division was preserved, and
              Ottoman laws were only gradually replaced or supplemented. This
              policy of gradualism was the most striking aspect of
              Austro-Hungarian rule in Bosnia and Herzegovina under Common
              Finance Minister Benjamin Kállay, a specialist in South Slav
              history who directed Bosnian policy from 1882 to 1903. Indeed, a
              common criticism of Austro-Hungarian rule was that little was done
              to resolve tensions between landlords and peasants. In other
              areas, however, Kállay’s rule was extremely active. A public works
              program was initiated, and by 1907 Bosnia and Herzegovina had a
              well-developed infrastructure, including an extensive railway and
              road network. Mines and factories were developed, and agriculture
              was promoted with model farms and training colleges. Three high
              schools and nearly 200 primary schools were built, although
              compulsory education was not introduced until 1909. <br></br>
              <br></br> While he succeeded in many of these areas of practical
              improvement, Kállay failed in his central political project:
              developing a Bosnian national consciousness to insulate the people
              of Bosnia and Herzegovina from the growing movements of Croatian,
              Serbian, and Yugoslav (“South Slav”) nationalism. Roman Catholic
              and Orthodox people of Bosnia and Herzegovina had begun by the
              mid-19th century to identify themselves as “Croats” and “Serbs,”
              respectively. At the same time, Muslim intellectuals were
              campaigning for greater powers over the Islamic institutions of
              Bosnia and Herzegovina, thereby becoming quasi-political
              representatives of a Muslim community with its own distinctive
              interests. During the first decade of the 20th century, new
              “national organizations” of Muslims, Serbs, and Croats functioned
              as embryonic political parties. In response, Kállay’s successor,
              István, Freiherr (baron) Burián, granted a degree of autonomy in
              religious affairs to both the Muslims and the Serbs of Bosnia and
              Herzegovina. <br></br>
              <br></br> In October 1908 nationalist feeling was strongly aroused
              by the sudden announcement that Bosnia and Herzegovina would be
              fully annexed by Austria-Hungary. The decision, which caught other
              great powers by surprise and created a diplomatic crisis lasting
              many months, was prompted by the revolution of the Young Turks in
              Constantinople. The Young Turks appeared ready to establish a more
              democratic regime in the Ottoman Empire, which could then
              plausibly reclaim Turkish rights over Bosnia and Herzegovina.
              Inside Bosnia and Herzegovina, one effect of this change was
              beneficial: Burián felt able to promote democratic institutions,
              and a parliament (with limited powers) was introduced there in
              1910. But the bitter resentment that the annexation caused among
              Serb and South Slav nationalists led to the growth of
              revolutionary groups and secret societies dedicated to the
              overthrow of Habsburg rule. One of these, Mlada Bosna (“Young
              Bosnia”), was especially active in Bosnian schools and
              universities. <br></br>
              <br></br> Tension was heightened by the First Balkan War of
              1912–13, in which Serbia expanded southward, driving Turkish
              forces out of Kosovo, Novi Pazar, and Macedonia. In May 1913 the
              military governor of Bosnia and Herzegovina, Gen. Oskar Potiorek,
              declared a state of emergency, dissolved the parliament, closed
              down Serb cultural associations, and suspended the civil courts.
              The following year the heir to the Habsburg throne, Archduke Franz
              Ferdinand, traveled to Bosnia and Herzegovina to review a military
              exercise. He was killed in Sarajevo on June 28, 1914, by a young
              assassin from the Mlada Bosna organization, Gavrilo Princip, who
              had received some assistance from inside Serbia. Austria-Hungary
              declared war on Serbia one month later, precipitating World War I.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={classes.accordion}
          onClick={() => changeBosnia("bosniamodern")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.svg} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p id="font_bosniamodern" className="font_accordion">
              Who started the war? - Modern Day of Bosnia
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="font_accordion">
              In 1946 the People’s Republic (from 1963, Socialist Republic) of
              Bosnia and Herzegovina became one of the constituent republics of
              the Federal People’s (from 1963, Socialist Federal) Republic of
              Yugoslavia, and life in Bosnia and Herzegovina underwent all the
              social, economic, and political changes that were imposed on the
              whole of Yugoslavia by its new communist government. Bosnia and
              Herzegovina was particularly affected by the abolition of many
              traditional Muslim institutions, such as Qurʾānic primary schools,
              rich charitable foundations, and Dervish religious orders.
              However, a change of official policy in the 1960s led to the
              acceptance of “Muslim” as a term denoting a national identity: the
              phrase “Muslim in the ethnic sense” was used in the 1961 census,
              and in 1968 the Bosnian Central Committee decreed that “the
              Muslims are a distinct nation.” By 1971 Muslims formed the largest
              single component of the Bosnian population. During the next 20
              years the Serb and Croat populations fell in absolute terms as
              many Serbs and Croats emigrated. In the 1991 census Muslims made
              up more than two-fifths of the Bosnian population, while Serbs
              made up slightly less than one-third and Croats one-sixth. From
              the mid-1990s the term Bosniak replaced Muslim as the name Bosnian
              Muslims use for themselves.
              <br></br>
              <br></br>
              In the 1980s the rapid decline of the Yugoslav economy led to
              widespread public dissatisfaction with the political system. That
              attitude, together with the manipulation of nationalist feelings
              by politicians, destabilized Yugoslav politics. Independent
              political parties appeared by 1989. In early 1990, multiparty
              elections were held in Slovenia and Croatia. When elections were
              held in Bosnia and Herzegovina in December, new parties
              representing the three national communities gained seats in rough
              proportion to their populations. A tripartite coalition government
              was formed, with the Bosniak politician Alija Izetbegović leading
              a joint presidency. Growing tensions both inside and outside
              Bosnia and Herzegovina, however, made cooperation with the Serb
              Democratic Party, led by Radovan Karadžić, increasingly difficult.
              <br></br>
              <br></br>
              In 1991 several self-styled “Serb Autonomous Regions” were
              declared in areas of Bosnia and Herzegovina with large Serb
              populations. Evidence emerged that the Yugoslav People’s Army was
              being used to send secret arms deliveries to the Bosnian Serbs
              from Belgrade (Serbia). In August the Serb Democratic Party began
              boycotting the Bosnian presidency meetings, and in October it
              removed its deputies from the Bosnian assembly and set up a “Serb
              National Assembly” in Banja Luka. By then full-scale war had
              broken out in Croatia, and the breakup of Yugoslavia was under
              way. Bosnia and Herzegovina’s position became highly vulnerable.
              The possibility of partitioning Bosnia and Herzegovina had been
              discussed during talks between the Croatian president, Franjo
              Tudjman, and the Serbian president, Slobodan Milošević, earlier in
              the year, and two Croat “communities” in northern and southwestern
              Bosnia and Herzegovina, similar in some ways to the “Serb
              Autonomous Regions,” were proclaimed in November 1991.
              <br></br>
              <br></br>
              Attempts by EC negotiators to promote a new division of Bosnia and
              Herzegovina into ethnic “cantons” during February and March 1992
              failed: different versions of those plans were rejected by each of
              the three main ethnic parties. When Bosnia and Herzegovina’s
              independence was recognized by the United States and the EC on
              April 7, Bosnian Serb paramilitary forces immediately began firing
              on Sarajevo, and the artillery bombardment of the city by Bosnian
              Serb units of the Yugoslav army began soon thereafter. During
              April many of the towns in eastern Bosnia and Herzegovina with
              large Bosniak populations, such as Zvornik, Foča, and Višegrad,
              were attacked by a combination of paramilitary forces and Yugoslav
              army units. Most of the local Bosniak population was expelled from
              these areas, the first victims in the country of a process
              described as ethnic cleansing. Although Bosniaks were the primary
              victims and Serbs the primary perpetrators, Croats were also among
              the victims and perpetrators. Within six weeks a coordinated
              offensive by the Yugoslav army, paramilitary groups, and local
              Bosnian Serb forces brought roughly two-thirds of Bosnian
              territory under Serb control. In May the army units and equipment
              in Bosnia and Herzegovina were placed under the command of a
              Bosnian Serb general, Ratko Mladić.
              <br></br>
              <br></br>
              From the summer of 1992, the military situation remained fairly
              static. A hastily assembled Bosnian government army, together with
              some better-prepared Bosnian Croat forces, held the front lines
              for the rest of that year, though its power was gradually eroded
              in parts of eastern Bosnia and Herzegovina. The Bosnian government
              was weakened militarily by an international arms embargo and by a
              conflict in 1993–94 with Croat forces. But later in 1994, Bosnian
              Croats and Bosniaks agreed to form a joint federation. The United
              Nations (UN) refused to intervene in the Bosnian War, but UN
              Protection Force (UNPROFOR) troops did facilitate the delivery of
              humanitarian aid. The organization later extended its role to the
              protection of a number of UN-declared “safe areas.” However, the
              UN failed to protect the safe area of Srebrenica in July 1995,
              when Bosnian Serb forces perpetrated the massacre of more than
              7,000 Bosniak men (see Srebrenica massacre).
              <br></br>
              <br></br>
              Several peace proposals during the war failed, largely because the
              Bosnian Serbs—who controlled about 70 percent of the land by
              1994—refused to concede any territory. In February 1994, in NATO’s
              first-ever use of force, its fighters shot down four Bosnian Serb
              aircraft that were violating the UN-imposed no-fly zone over the
              country. Later that year, at the UN’s request, NATO launched
              isolated and ineffective air strikes against Bosnian Serb targets.
              Following the Srebrenica massacre and another Bosnian Serb attack
              on a Sarajevo marketplace, NATO undertook more concentrated air
              strikes late in 1995. Combined with a large-scale Bosniak-Croat
              land offensive, this action led Bosnian Serb forces to agree to
              U.S.-sponsored peace talks in Dayton in November. Serbian Pres.
              Slobodan Milošević represented the Bosnian Serbs. The resulting
              Dayton Accords called for a federalized Bosnia and Herzegovina in
              which 51 percent of the land would constitute a Croat-Bosniak
              federation and 49 percent a Serb republic. To enforce the
              agreement, formally signed in December 1995, a 60,000-member
              international force was deployed.
              <br></br>
              <br></br>
              It was originally estimated that at least 200,000 people were
              killed and more than 2,000,000 displaced during the 1992–95 war.
              Subsequent studies, however, concluded that the death toll was
              actually about 100,000.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default MapAccordion;
