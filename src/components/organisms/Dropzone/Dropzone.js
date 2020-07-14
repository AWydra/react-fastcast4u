import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';

const useStyles = makeStyles({
  grid: {
    '& p': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  dropzone: {
    backgroundColor: 'transparent',
  },
});

const Dropzone = ({ ...props }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <DropzoneDialog
      acceptedFiles={['']}
      dropzoneClass={classes.dropzone}
      dialogProps={{
        maxWidth: 'xl',
        fullWidth: true,
        fullScreen: matches,
        disableEscapeKeyDown: true,
        disableBackdropClick: true,
      }}
      cancelButtonText="cancel"
      submitButtonText="add"
      maxFileSize={5000000}
      filesLimit={18}
      showPreviews
      showFileNamesInPreview
      previewGridProps={{
        container: {
          spacing: 2,
        },
        item: {
          xs: 6,
          md: 4,
        },
      }}
      previewGridClasses={{
        item: classes.grid,
      }}
      showAlerts={false}
      {...props}
    />
  );
};

export default Dropzone;
