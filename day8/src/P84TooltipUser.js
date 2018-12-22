// import React from 'react';
// import {widthStyle} from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Tolltip from '@material-ui/core/Tolltip';

// const styles = theme => ({
//     button: {
//         margin: theme.spacing.unit,
//     },
//     customWidth: {
//         maxWidth: 500,
//     },
//     noMaxWidth: {
//         maxWidth: 'none',
//     },
// });

// const longText = `
// Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
// Praesent non nunc mollis, fermentum neque at, semper arcu.
// Nullam eget est sed sem iaculis gravida eget vitae justo.
// `;

// function P84TooltipUser ({classes}) {
//     return (
//         <div>
//             <Tooltip title={longText}>
//                 <Button>저장버튼</Button>
//             </Tooltip>
//         </div>
//     );
// };

// export default withStyles(styles)(P84TooltipUser);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  customWidth: {
    maxWidth: 500,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;

function P84TooltipUser({ classes }) {
  return (
    <div>
      <Tooltip title={longText}>
        <Button>저장버튼</Button>
      </Tooltip>      
      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
        <Button className={classes.button}>Custom Width [500px]</Button>
      </Tooltip>
      <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>
        <Button className={classes.button}>No wrapping</Button>
      </Tooltip>
    </div>
  );
}


export default withStyles(styles)(P84TooltipUser);