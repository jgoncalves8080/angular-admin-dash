import { Injectable } from '@angular/core';
import { DataType } from './DataType';

@Injectable({
  providedIn: 'root',
})
export class TableData {
  retrieveAll(): DataType[] {
    return DATA;
  }

  retrieveById(id: number): any {
    return DATA.find((item: DataType) => item?.id === id);
  }

  save(data: DataType): void {
    if (data.id) {
      const index = DATA.findIndex((item: DataType) => item?.id === data?.id);
      DATA[index] = data;
    }
  }
}

const DATA: DataType[] = [
  {
    id: 1,
    renderingEngine: 'Trident',
    browser: 'Internet Explorer 4.0	',
    platform: 'Win 95+	',
    engineVersion: 4,
    cssGrade: 'X',
  },
  {
    id: 2,
    renderingEngine: 'Trident',
    browser: 'Internet Explorer 5.0	',
    platform: 'Win 95+	',
    engineVersion: 5,
    cssGrade: 'C',
  },
  {
    id: 3,
    renderingEngine: 'Trident',
    browser: 'Internet Explorer 5.5	',
    platform: 'Win 95+	',
    engineVersion: 5.5,
    cssGrade: 'A',
  },
  {
    id: 4,
    renderingEngine: 'Trident',
    browser: 'Internet Explorer 6	',
    platform: 'Win 98+	',
    engineVersion: 6,
    cssGrade: 'A',
  },
  {
    id: 5,
    renderingEngine: 'Gecko',
    browser: 'Firefox 1.0',
    platform: 'Win 98+ / OSX.2+	',
    engineVersion: 1.7,
    cssGrade: 'A',
  },
  {
    id: 6,
    renderingEngine: 'Misc',
    browser: 'PSP browser	',
    platform: 'PSP',
    engineVersion: 0,
    cssGrade: 'C',
  },
];
