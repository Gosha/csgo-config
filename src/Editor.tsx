import * as React from "react"

import classNames from "classnames"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import { withStyles, WithStyles } from "@material-ui/core/styles"
import CopyToClipboard from "react-copy-to-clipboard"

import Button from "@material-ui/core/Button"
import CopyIcon from "@material-ui/icons/Assignment"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    maxWidth: 1024,
    margin: "30px auto",
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})

// For some reason react-scripts chokes on this line
type Theme = ReturnType<typeof styles>
type EditorProps = WithStyles<Theme>

const Editor: React.FC<EditorProps> = ({ classes }) => {
  const [state, setState] = React.useState({
    content: `#sensitivity 1.8
bind F3 "buy ak47; buy m4a1; buy vest; buy vesthelm; buy defuser;"
bind kp_pgup " buy smokegrenade; buy flashbang; buy hegrenade; buy flashbang;"

bind alt +voicerecord

bind mwheelup +jump
bind mwheeldown +jump

bind f slot7
bind g slot8
bind h drop

cl_radar_scale 0.4
`.trim(),
    copied: false,
  })

  const formattedContent = state.content
    .split("\n")
    .filter((line) => !line.match(/^#/))
    .filter((line) => !line.match(/^\s*$/))
    .join(";")

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            multiline
            style={{ width: "100%" }}
            onChange={(e) => setState((state) => ({ ...state, content: e.currentTarget.value }))}
            value={state.content}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <pre
            style={{
              backgroundColor: "#eee",
              whiteSpace: "pre-line",
            }}
          >
            {formattedContent}
          </pre>

          <CopyToClipboard
            text={formattedContent}
            onCopy={() => setState((state) => ({ ...state, copied: true }))}
          >
            <Button disableRipple className={classes.button} size="small" variant="contained">
              <CopyIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              Copy
            </Button>
          </CopyToClipboard>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(Editor)
