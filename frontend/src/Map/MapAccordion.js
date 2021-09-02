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
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="font_bosniax" className="font_accordion">
              Bosnia in the X century...
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font_accordion">
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
            </Typography>
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
            <Typography id="font_bosniakulin" className="font_accordion">
              The Good Ol' Days of Kulin Ban
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font_accordion">
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
            </Typography>
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
            <Typography className="font_accordion">Tvrtko's reign</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="font_bosniatvrtko" className="font_accordion">
              Bosnian history from then until the early 14th century was marked
              by a power struggle between the Šubić and Kotromanić families.
              This conflict came to an end in 1322, when Stephen II Kotromanić
              became Ban. By the time of his death in 1353, he was successful in
              annexing territories to the north and west, as well as Zahumlje
              and parts of Dalmatia. He was succeeded by his ambitious nephew
              Tvrtko who, following a prolonged struggle with nobility and
              inter-family strife, gained full control of the country in 1367.
              By the year 1377, Bosnia was elevated into a kingdom with the
              coronation of Tvrtko as the first Bosnian King in Mile near Visoko
              in the Bosnian heartland.
            </Typography>
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
            <Typography className="font_accordion">
              Dark Age of Bosnia a.k.a XV century
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="font_bosniaxv" className="font_accordion">
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
            </Typography>
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
            <Typography className="font_accordion">
              Ottoman Period in the Bosnia
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="font_bosniaottoman" className="font_accordion">
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
            </Typography>
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
            <Typography id="font_bosniaaustro" className="font_accordion">
              Bosnia and The Austro-Hungarian Empire
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font_accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
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
            <Typography id="font_bosniamodern" className="font_accordion">
              Who started the war? - Modern Day of Bosnia
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font_accordion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default MapAccordion;
