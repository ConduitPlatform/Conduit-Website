import React, { FC, ReactComponentElement } from 'react';
import { useTheme } from '@mui/material';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface TimelineItemProps {
  icon?: ReactComponentElement<any>;
  title: string;
  text: string;
}

const TimelineElement: FC<TimelineItemProps> = ({ title, text, icon }) => {
  const theme = useTheme();
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'transparent',
        color: '#fff',
        boxShadow: `0px 0px 0px 1px ${theme.palette.text.disabled}, 0 3px 0  ${theme.palette.text.primary}`,
      }}
      iconStyle={{ background: '#262840', color: '#5B44F2', transform: 'scale(0.8)' }}
      icon={icon}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <p>{text}</p>
    </VerticalTimelineElement>
  );
};
export default TimelineElement;
