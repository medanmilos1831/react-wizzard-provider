import { Button } from 'antd';
import { useWizzardClient } from '../Wizzard';

export const WizzFooter = () => {
  const wizzardClient = useWizzardClient();
  return (
    <div>
      <Button
        onClick={() => {
          console.log(wizzardClient.getDataBySteps());
        }}
      >
        submit
      </Button>
    </div>
  );
};
