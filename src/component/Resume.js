import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { BiSolidDiamond } from "react-icons/bi";

export default function Resume() {
  return (
    <div className="resume">
      <div>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="2017 - 2020"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdSchool color="white" />}
          >
            <h4 className="vertical-timeline-element-title">
              Graduation In B.com
            </h4>
            <p className="vertical-timeline-element-title">
              at <b>Veer Narmad South Gujarat University</b>
            </p>
            <p className="vertical-timeline-element-title">Surat, Gujarat</p>
            <p className="vertical-timeline-element-title">India</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="2020 - 2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<BiSolidDiamond color="white" />}
          >
            <h4 className="vertical-timeline-element-title">
              working in diamond industry
            </h4>
            <p className="vertical-timeline-element-title">
              Post : <b>Galaxy Planner</b>
            </p>
            <p className="vertical-timeline-element-title">Surat, Gujarat</p>
            <p className="vertical-timeline-element-title">India</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="jan 2023 - july 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdSchool color="white" />}
          >
            <h4 className="vertical-timeline-element-title">
              Learning Frontend Web Development
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element-education"
            date="august 2023 - Present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdWork color="white" />}
          >
            <h4 className="vertical-timeline-element-title">
              Working In Blackwolve Technologies, Surat
            </h4>
            <p className="vertical-timeline-element-title">
              Post : <b>Frontend Web Developer</b>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* <span>My Name is <strong> Gautam Purohit</strong>. I am <strong>22 Year Old</strong> and i Live in <strong>Surat</strong></span>
        <span>I cleared My Graduation in <strong>B.Com From VNSGU in September 2020</strong>. After My Graduation <strong>i Worked in Diamond Industry For 2 Years as a Diamond Planner</strong> But There is No Career Growth in This Field So i Started  to Search a Job Which Has Better Career Growth and Thats How i Found Web Development</span>
        <span>I started My Journey of Frontend Developer From February 2023 When i Quite My Previous Job.</span> */}
      </div>
    </div>
  );
}
