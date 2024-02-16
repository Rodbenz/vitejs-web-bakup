'use client';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import LocalizedFormat from 'dayjs/plugin/buddhistEra';
import OverwriteAdapterDayjs from '../dataAdapter';

dayjs.locale('th');
dayjs.extend(LocalizedFormat);



export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState(null);
  const dateFormat = 'D MMM YYYY';


  const handleChange = () => {

  };

  return (
    <div style={{ width: '100%', height: '10px' }}>
      <LocalizationProvider dateAdapter={OverwriteAdapterDayjs} adapterLocale='th' dateFormats={{ monthAndYear: "MMMM BBBB" }}>
        <DesktopDatePicker
          sx={{ width: '100%', size: 'small',}}
          //   label={namLabel}
          format={dateFormat}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
}