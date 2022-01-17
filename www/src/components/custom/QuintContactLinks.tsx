import * as React from 'react';
import { FC } from 'react';
import { Box, IconButton, Theme } from '@mui/material';

const styles = {
  container: {
    boxShadow: '2px 5px 5px 1px rgb(0,0,0,.01)',
    background: 'white',
    padding: (theme: Theme) => theme.spacing(1, 2),
    borderRadius: 4,
  },
};

const QuintContactLinks: FC = () => {
  return (
    <Box display={'flex'} sx={styles.container} gap={1}>
      <IconButton
        component={'a'}
        href="https://www.linkedin.com/company/quintessentialsft/"
        target="_blank"
        id="quint-footer-icon-0"
        rel="noreferrer">
        <img
          src="https://images.prismic.io/quintessentialwebsite/3cab2d75-3545-4967-beb2-5ee36cd4d0e1_Group+1212.svg?auto=format%2Ccompress&amp;fit=max&amp;q=50"
          alt="icon"
        />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://www.behance.net/quintessentialgr/"
        target="_blank"
        id="quint-footer-icon-1"
        rel="noreferrer">
        <img
          src="https://images.prismic.io/quintessentialwebsite/a5b01b52-135c-4c66-999b-73e4fb293df2_behance.svg?auto=format%2Ccompress&amp;fit=max&amp;q=50"
          alt="icon"
        />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://www.facebook.com/quintessentialSFT/"
        target="_blank"
        id="quint-footer-icon-2"
        rel="noreferrer">
        <img
          src="https://images.prismic.io/quintessentialwebsite/dfd623f7-d670-4ad5-8776-9f6a109afa5b_Group+1408.svg?auto=format%2Ccompress&amp;fit=max&amp;q=50"
          alt="icon"
        />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://www.instagram.com/quintessentialsft/"
        target="_blank"
        id="quint-footer-icon-3"
        rel="noreferrer">
        <img
          src="https://images.prismic.io/quintessentialwebsite/028184c7-4044-4a0e-a4ee-056ad7c858fe_instagram.svg?auto=format%2Ccompress&amp;fit=max&amp;q=50"
          alt="icon"
        />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://medium.com/quintessential-sft/"
        target="_blank"
        id="quint-footer-icon-4"
        rel="noreferrer">
        <img
          src="https://images.prismic.io/quintessentialwebsite/5e41ed72-263a-4e96-85e8-80f6cff2427f_medium.svg?auto=format%2Ccompress&amp;fit=max&amp;q=50"
          alt="icon"
        />
      </IconButton>
      <IconButton
        component={'a'}
        href="https://github.com/Quintessential-SFT/"
        target="_blank"
        id="quint-footer-icon-5"
        rel="noreferrer">
        <img
          src="https://images.prismic.io/quintessentialwebsite/8ee19b92-14e4-4376-97a9-324febb14be7_github.svg?auto=format%2Ccompress&amp;fit=max&amp;q=50"
          alt="icon"
        />
      </IconButton>
    </Box>
  );
};

export default QuintContactLinks;
