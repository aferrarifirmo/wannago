//External dependency
const dayjs = require('dayjs');

export default interface initialWannaGo {
  what: string,
  when: string,
  where: string,
  ownerName: string,
  _id: string,
};

// export default interface initialWannaGo {
//   what: '',
//   when: '',
//   where: '',
//   ownerName: '',
//   _id: '',
// }

const now = dayjs(Date.now()).format('YYYY-MM-DDTHH:mm');

export const steps = [
  {
    label: 'Who?',
    description: 'Let people know who sends the plan',
    formField: (
      <>
      <label htmlFor='owner-name'></label>
      <input
        data-text='Who?' // check if this works - it was complianing when just 'text was written
        type='text'
        id='owner-name'
        name='ownerName'
        autoFocus
        required
      ></input>
      </>
    ),
  },
  {
    label: 'What?',
    description: 'Add a title to your plan',
    formField: (
      <>
      <label htmlFor='plan-title'></label>
      <input
        data-text='What?'
        type='text'
        id='plan-title'
        name='what'
        autoFocus
        required
      ></input>
      </>
    ),
  },
  {
    label: 'Where?',
    description: 'Add an address',
    formField: (
      <>
      <label htmlFor='plan-location'></label>
      <input
        type='text'
        id='plan-location'
        name='where'
        autoFocus
        required
      ></input>
      </>
    ),
  },
  {
    label: 'When?',
    description: `When is it?`,
    formField: (
      <>
      <label htmlFor='plan-date'></label>
      <input
        type='datetime-local'
        min={now}
        id='plan-date'
        name='when'
        autoFocus
        required
      ></input>
      </>
    ),
  },
];

// export default initialWannaGo;