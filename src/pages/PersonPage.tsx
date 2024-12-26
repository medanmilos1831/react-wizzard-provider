import { ComponentOne } from '../components/ComponentOne';
import { ComponentTwo } from '../components/ComponentTwo';

export function PersonPage({
  fname,
  lname,
  clickMeCallback,
}: {
  fname: string;
  lname: string;
  clickMeCallback: any;
}) {
  function clickMe() {
    console.log('clicke me functin');
  }
  return (
    <div>
      <h1>ovo je person page</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ComponentOne fname={fname} />
        <ComponentTwo lname={lname} />
        <button
          onClick={clickMeCallback}
          // onClick={() => {
          //   clickMe();
          // }}
        >
          click me
        </button>
      </div>
    </div>
  );
}
