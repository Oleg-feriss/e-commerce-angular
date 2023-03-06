import { MatDateFormats } from '@angular/material/core';

import { DATE_FORMAT } from '.';

export const DATE_FORMAT_SETTINGS: MatDateFormats = {
  parse: {
    dateInput: DATE_FORMAT,
  },
  display: {
    dateInput: DATE_FORMAT,
    monthYearLabel: 'MM/YYYY',
    dateA11yLabel: DATE_FORMAT,
    monthYearA11yLabel: 'MM/YYYY',
  },
};
