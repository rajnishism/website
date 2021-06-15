import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import GEImages1 from "./images/smeevent1.jpg";
import GEImages2 from "./images/smeevent2.jpg";
import GEImages3 from "./images/smeevent3.jpg";
import GEImages4 from "./images/smeevent4.jpg";
import GEImages5 from "./images/smeevent5.jpg";
import GEImages6 from "./images/smeevent6.jpg";
import GEImages7 from "./images/smeevent7.jpg";
import GEImages8 from "./images/smeevent8.jpg";
import GEImages9 from "./images/smeevent9.jpg";
import EventCard from "./EventCard";
import EventPage from "./EventPage";
import Fade from "react-reveal/Fade";

const tabs = ["Upcoming", "Past"];

const eventData = [
  {
    id: 0,
    src: GEImages1,
    title: "Poster Competion",
    head: "A virtual “WOMINE” event was organized on 10 April 2020 by SME IIT(ISM) Student Chapter for all the budding female engineers, who look up to a career in the mining field. The event witnessed the huge participation of girls from different institutions all over India. As event speakers, we invited some phenomenal women with extensive knowledge and years of experience in the Mining and Mineral Industry.",
    struct: [
      "Few things in life affects us as deeply and deeply as drug abuse by altering our perceptions and relationships to every aspect of life. It is a devastating state that has been running a riot for decade and there is an urgent need to put an end to it.",
      "The SME IIT (ISM) Dhanbad student chapter is glad to announce a poster making competition on this particular topic. The door we opened is a door to unlimited possibilities and expectation to all those parents whose kid has become addicted. By your poster you are free to express, influence and crush down fears and worries.",
      "Deadline for submission 17th june ( 11:59 pm).",
      "Prize of worth Rs 1000 (1st prize Rs 500, 2nd prize Rs 300, 3rd prize Rs 200).",
      "Top 10 winners will be awarded a ranked certificate and the participating candidates will be awarded a participation certificate.",
    ],
    date: "15 June 2021-17 June 2021",
    time: "24*7",
    contact1: "Sumit Kumar Mudi-8210987906",
    contact2: "Abhaya Adri-6206688440",
    tab: "Upcoming",
  },
  {
    id: 1,
    src: GEImages2,
    title: "UPSC Career Insight",
    head: "SME IIT(ISM) Student Chapter, in collaboration with Udaan(@udaan.iitism ), the career club of IIT(ISM) Dhanbad is organizing an event on the most prestigious examination of the country for entry into the elite civil services, UPSC. The guest speaker for the event is Mr. Jay Shivani (@jayshivani ) - IAS of batch 2019, AIR-81 in UPSC CSE 2018, currently posted as Assistant Commissioner at Dibrugarh, Assam.",
    struct: ["one", "two", "three"],
    date: "27 May 2021",
    time: "4 pm",
    contact1: "Jai Anand-7482049368",
    contact2: "Saurabh tiwari-9326105716",
    tab: "Upcoming",
  },
  {
    id: 2,
    src: GEImages3,
    title: "INTERN TALKS",
    head: "SME IIT(ISM) DHANBAD is going to organize an INTERN TALK session on 16th May. Seniors nailing their internship season with commendable achievements, will share their experiences and resolve all your doubts.",
    struct: ["one", "two", "three"],
    date: "16 May 2021",
    time: "6 pm",
    contact1: "Abhaya Adri-6206688440",
    contact2: "Sudeshna Kundu-7595033047",
    tab: "Upcoming",
  },
  {
    id: 3,
    src: GEImages4,
    title: "PLACEMENT TALKS",
    head: "The placement season is near, and everyone will obviously be having a hundred questions eating their head. Well, SME IIT(ISM) Student Chapter is here to relieve you from this bewilderment. Seniors nailing their placement season with commendable achievements, will share their experiences and resolve all your doubts.",
    struct: ["one", "two", "three"],
    date: "8 May 2021",
    time: "6 pm",
    contact1: "Sumit Kumar Mudi-8210987906",
    contact2: "Sudeshna Kundu-7595033047",
    tab: "Upcoming",
  },
  {
    id: 4,
    src: GEImages5,
    title: "WOMINE",
    head: "SME IIT(ISM) Student Chapter brings to you an exceptional event, WOMINE, where established and successful women speakers from earth science branches would share their experiences and success stories on a virtual platform.",
    struct: ["one", "two", "three"],
    date: "10 April 2021",
    time: " ",
    contact1: "Aryan Raj Singh-9460655228",
    contact2: "Anjali-9608328431",
    tab: "Upcoming",
  },
  {
    id: 5,
    src: GEImages6,
    title: "VIRTUAL PLACEMENTS",
    head: "SME IIT(ISM) Student Chapter brings you an extraordinary opportunity, where you will be exposed to the real virtual placement process. So put on your winning hats and tune in to the placement battle this weekend!",
    struct: ["one", "two", "three"],
    date: "3 & 4 April 2021",
    time: "11 am",
    contact1: "Mehul Raj-9576046151",
    contact2: "Jai Anand-7482049368",
    tab: "Past",
  },
  {
    id: 6,
    src: GEImages7,
    title: "INGENIUM",
    head: "Bored in this quarantine? Want something to stimulate your brain? Look no further for SME, IIT(ISM) Dhanbad Chapter is here with a refreshing quiz for you to have some fun, as well as learn a thing or two about this great nation of ours.",
    struct: ["one", "two", "three"],
    date: " ",
    time: " ",
    contact1: "Jai Anand-7482049368",
    contact2: "Mehul Raj-9576046151",
    tab: "Past",
  },
  {
    id: 7,
    src: GEImages8,
    title: "ONLINE CV MAKING COMPETITION",
    head: "Resumes are the heart and soul of what you do in your academic years. They are what makes you or breaks you. SME welcomes you to improve your resume making skills with the CV making competition, organised keeping in mind the essential requirement of the students.",
    struct: ["one", "two", "three"],
    date: "Latest by 4th March",
    time: "4 pm",
    contact1: "Jai Anand-7482049368",
    contact2: "Sudeshna Kundu-7595033047",
    tab: "Past",
  },
  {
    id: 8,
    src: GEImages9,
    title: "BREAKING BAD",
    head: "This 25th of February, take part in a quiz related to GENERAL KNOWLEDGE AND MINING, and get a chance to prove just how much of an expert you are and win exciting prizes, goodies and certificates.",
    struct: ["one", "two", "three"],
    date: "25 Feb 2021",
    time: "6:30pm",
    contact1: "Jai Anand-7482049368",
    contact2: "Anjali-9608328431",
    tab: "Past",
  },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <div className="ge-heading-bg mt-4 d-flex align-items-center justify-content-center">
        <h1 className="page-heading text-center py-3 text-uppercase">
          SME General Events
        </h1>
      </div>
      <Container className="my-5">
        <Nav tabs className="justify-content-center">
          {tabs.map((item, index) => {
            return (
              <NavItem className="p-1">
                <NavLink
                  className={`tabs-navi ${activeTab === index ? "active" : ""}`}
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {item}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabs.map((it, id) => {
            return (
              <TabPane tabId={id}>
                <Row className="pt-4">
                  {eventData
                    .filter((item) => item.tab === tabs[id])
                    .map((item, index) => {
                      return (
                        <Col key={index} className="my-4" xs="12" lg="6">
                          <Fade
                            timeout={500}
                            right={index & 1 ? true : false}
                            left={index & 1 ? false : true}
                          >
                            <EventCard
                              head={item.head}
                              title={item.title}
                              src={item.src}
                              id={item.id}
                            />
                          </Fade>
                        </Col>
                      );
                    })}
                </Row>
              </TabPane>
            );
          })}
        </TabContent>
      </Container>
    </div>
  );
};

const SMEGeneralEvents = (props) => {
  return (
    <Router>
      <Route exact path="/events/general" component={HomePage} />
      <Route
        path={`/events/general/:eventId`}
        component={(props) => (
          <EventPage
            eventData={eventData[parseInt(props.match.params.eventId)]}
          />
        )}
      />
    </Router>
  );
};

export default SMEGeneralEvents;
