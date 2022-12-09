import { SxObject } from '../../../models/SxObjects';

export const highlighterCustomStyle = {
  borderRadius: '4px',
  padding: '0.5em 1em 0.55em 1em',
  width: '100%',
  boxShadow:
    '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
};

export const styles: SxObject = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
  bottomContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'scroll',
    justifyContent: {
      md: 'center',
      xs: 'center',
    },
  },
  highlighterContainer: {
    flexGrow: '1',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: {
      md: 'center',
      xs: 'center',
    },
  },
  copyIcon: { marginLeft: 1 },
};
