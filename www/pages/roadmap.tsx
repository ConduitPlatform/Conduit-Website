import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TypeScript from '../public/timelineIcons/ts.svg';
import NewFeatures from '../public/timelineIcons/new.svg';
import Documentation from '../public/timelineIcons/documentation.svg';
import Performance from '../public/timelineIcons/performance.svg';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from '@mui/material';

export default function Roadmap() {
  return (
    <Container maxWidth="md">
      <VerticalTimeline lineColor="#5B44F2">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#07D9C4', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: '#262840', color: '#5B44F2' }}
          icon={<TypeScript />}>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: '#07D9C4', color: '#fff' }}
          iconStyle={{ background: '#262840', color: '#5B44F2' }}
          icon={<NewFeatures />}>
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          contentStyle={{ background: '#07D9C4', color: '#fff' }}
          iconStyle={{ background: '#262840', color: '#5B44F2' }}
          icon={<Documentation />}>
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          contentStyle={{ background: '#07D9C4', color: '#fff' }}
          iconStyle={{ background: '#262840', color: '#5B44F2' }}
          icon={<Performance />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
