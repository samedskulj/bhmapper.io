import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./Styles";
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
            <Typography>Bosnia in the X century...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>The Good Ol' Days of Kulin Ban</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>Tvrtko's reign</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>Dark Age of Bosnia a.k.a XV century</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>Ottoman Period in the Bosnia</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>Bosnia and The Austro-Hungarian Empire</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
            <Typography>Who started the war? - Modern Day of Bosnia</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
