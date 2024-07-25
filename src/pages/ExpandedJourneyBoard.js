import { Button } from "@mui/material";
import GroupComponent from "../components/GroupComponent";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import StructurePointersContainer1 from "../components/StructurePointersContainer1";
import "./ExpandedJourneyBoard.css";

const ExpandedJourneyBoard = () => {
  return (
    <div className="expanded-journey-board">
      <section className="frame-group">
        <GroupComponent
          logo1="/logo-11.svg"
          group1098="/group-10981.svg"
          searchIcon="/vector1.svg"
          ellipseDiv
        />
        <div className="frame-container">
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="frame-wrapper">
                <div className="technical-project-management-parent">
                  <h1 className="technical-project-management">
                    Technical Project Management
                  </h1>
                  <div className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="journey-board-wrapper">
                      <div className="journey-board">Journey Board</div>
                    </div>
                    <img
                      className="screenshot-from-2024-06-19-11-"
                      alt=""
                      src="/screenshot-from-20240619-115844-11@2x.png"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="component-58"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#0029ff",
                  borderRadius: "10px",
                  "&:hover": { background: "#0029ff" },
                  width: 121,
                  height: 36,
                }}
              >
                Submit task
              </Button>
            </div>
            <div className="frame-parent2">
              <FrameComponent3 />
              <div className="frame-wrapper1">
                <div className="frame-parent3">
                  <div className="rectangle-group">
                    <div className="frame-item" />
                    <div className="rectangle-container">
                      <div className="frame-inner" />
                      <div className="technical-project-management1">
                        Technical Project Management
                      </div>
                      <div className="threadbuild-icons-parent">
                        <div className="threadbuild-icons" />
                        <div className="i">i</div>
                      </div>
                    </div>
                    <div className="description-story-of-alignmen-wrapper">
                      <div className="description-story-of-container">
                        <span className="description">Description</span>
                        <span className="span">
                          <span>:</span>
                        </span>
                        <span className="story-of-alignment-scope-of-ag">
                          <span className="span1">{` `}</span>
                          <span>
                            Story of Alignment Scope of Agility Specific
                            Accountable Staggering Approach
                          </span>
                        </span>
                      </div>
                    </div>
                    <img
                      className="image-13-icon"
                      loading="lazy"
                      alt=""
                      src="/image-13@2x.png"
                    />
                    <div className="rectangle-parent1">
                      <div className="rectangle-div" />
                      <div className="explore-the-world-container">
                        <ul className="explore-the-world-of-managemen">
                          <li>Explore the world of management</li>
                        </ul>
                      </div>
                      <div className="technical-project-management-container">
                        <ul className="technical-project-management2">
                          <li className="technical-project-management3">
                            {" "}
                            Technical Project Management
                          </li>
                          <li className="threadbuild"> Threadbuild</li>
                          <li className="structure-your-pointers">
                            {" "}
                            Structure your pointers
                          </li>
                          <li> 4SA Method</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <FrameComponent2 propBorderRadius="30px" />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      <div className="div">1</div>
      <div className="expanded-journey-board-child" />
      <StructurePointersContainer1 />
    </div>
  );
};

export default ExpandedJourneyBoard;