import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TypeScript from '../public/timelineIcons/ts.svg';
import NewFeatures from '../public/timelineIcons/new.svg';
import Documentation from '../public/timelineIcons/documentation.svg';
import Performance from '../public/timelineIcons/performance.svg';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from '@mui/material';
import { useTheme } from '@mui/system';

export default function Roadmap() {
  const theme = useTheme();
  return (
    <Container maxWidth="md">
      <VerticalTimeline lineColor={theme.palette.secondary.dark}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'transparent',
            color: '#fff',
            boxShadow: `0px 0px 0px 1px ${theme.palette.text.disabled}, 0 3px 0  ${theme.palette.text.primary}`,
          }}
          iconStyle={{
            background: '#262840',
            color: '#5B44F2',
            transform: 'scale(0.7)',
            backgroundColor: theme.palette.secondary.dark,
          }}
          icon={<TypeScript />}>
          <h3 className="vertical-timeline-element-title">Typescript</h3>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'transparent',
            color: '#fff',
            boxShadow: `0px 0px 0px 1px ${theme.palette.text.disabled}, 0 3px 0  ${theme.palette.text.primary}`,
          }}
          iconStyle={{ background: '#262840', color: '#5B44F2', transform: 'scale(0.7)' }}
          icon={<NewFeatures />}>
          <h3 className="vertical-timeline-element-title">New features</h3>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'transparent',
            color: '#fff',
            boxShadow: `0px 0px 0px 1px ${theme.palette.text.disabled}, 0 3px 0  ${theme.palette.text.primary}`,
          }}
          iconStyle={{ background: '#262840', color: '#5B44F2', transform: 'scale(0.7)' }}
          icon={<Documentation />}>
          <h3 className="vertical-timeline-element-title">Documentation</h3>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'transparent',
            color: '#fff',
            boxShadow: `0px 0px 0px 1px ${theme.palette.text.disabled}, 0 3px 0  ${theme.palette.text.primary}`,
          }}
          iconStyle={{ background: '#262840', color: '#5B44F2', transform: 'scale(0.7)' }}
          icon={<Performance />}>
          <h3 className="vertical-timeline-element-title">Performance</h3>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
