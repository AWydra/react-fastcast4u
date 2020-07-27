import React from 'react';
import { useSelector } from 'react-redux';
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
  const content = useSelector(state => state.language.components.dropzone);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <DropzoneDialog
      acceptedFiles={['']}
      dropzoneClass={classes.dropzone}
      dialogTitle={content.upload}
      dialogProps={{
        maxWidth: 'xl',
        fullWidth: true,
        fullScreen: matches,
        disableEscapeKeyDown: true,
        disableBackdropClick: true,
      }}
      dropzoneText={content.dragzone}
      cancelButtonText={content.cancel}
      submitButtonText={content.add}
      maxFileSize={5000000}
      filesLimit={18}
      showPreviews
      showFileNamesInPreview
      previewText={content.preview}
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
