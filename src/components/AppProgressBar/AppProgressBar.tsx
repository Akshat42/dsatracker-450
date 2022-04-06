import ProgressBar from '@ramonak/react-progress-bar';
import styles from './AppProgressBar.module.css';

type AppProgressBarProps = {
  donePercent: number
};

function AppProgressBar(props: AppProgressBarProps): React.ReactElement {
  return (
    <div className={styles.progressBar}>
      <ProgressBar
        completed={props.donePercent}
        bgColor="#28a745"
        borderRadius="5px"
        baseBgColor="#dad3d3"
        isLabelVisible={false}
        animateOnRender
        maxCompleted={100}
      />
    </div>
  );
};
export default AppProgressBar;
