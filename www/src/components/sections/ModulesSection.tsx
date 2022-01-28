import * as React from 'react';
import { Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import Authentication from '../../../public/moduleIcons/authentication.svg';
import Chat from '../../../public/moduleIcons/chat.svg';
import Emails from '../../../public/moduleIcons/emails.svg';
import Forms from '../../../public/moduleIcons/forms.svg';
import Storage from '../../../public/moduleIcons/storage.svg';
import Notifications from '../../../public/moduleIcons/notifications.svg';
import { ViewModuleTwoTone } from '@mui/icons-material';
import CustomCarousel from '../custom/CustomCarousel';
import { ReactElement, useMemo } from 'react';

const cardContent = [
  {
    title: 'MAILS',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'STORAGE',
    href: '/docs/modules/storage',
    subtitle: 'Containers and folders make it so much easier to go through your files!!',
    icon: <Storage />,
  },
  {
    title: 'MAILS 3',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'MAILS 4',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'MAILS 5',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'MAILS 6',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'MAILS 7',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'MAILS 8',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'MAILS 9',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
];

export default function ModulesSection() {
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const preparedCards = useMemo(() => {
    const containers: ReactElement[] = [];

    const x = !lg && !md ? 3 : md ? 1 : 2;
    const gridSize = x === 3 ? 4 : x === 2 ? 6 : 12;
    const containerLength = Math.ceil(cardContent.length / x);

    for (let i = 0; i < containerLength; i++) {
      const gridItems = cardContent.slice(i * x, i * x + x);
      containers.push(
        <Grid container spacing={2}>
          {gridItems.map((item, index) => (
            <Grid key={`${i}-${index}`} item xs={gridSize}>
              <ModuleCard
                title={item.title}
                href={item.href}
                subtitle={item.subtitle}
                listItems={[]}
                icon={item.icon}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
    return containers;
  }, [md, lg]);

  return (
    <Box mt={[12, 16]}>
      <Box py={3}>
        <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
          <ViewModuleTwoTone sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
          <strong> Build a backend in minutes</strong>
        </Typography>
        <Typography variant={'body1'}>with various modules Conduit has to offer!</Typography>
      </Box>
      <Box>
        <CustomCarousel>{preparedCards}</CustomCarousel>
      </Box>
    </Box>
  );
}
