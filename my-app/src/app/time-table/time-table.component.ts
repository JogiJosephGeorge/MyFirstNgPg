import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CreateSub(name: string, styleId: string, meetId: string){
    return {
      'name' : name,
      'stlId' : styleId,
      'link' : meetId
    }
  }
  subEng = this.CreateSub('English', 'box1', 'drr-hrnb-cwq')
  subMal = this.CreateSub('Malayalam', 'box2','ebp-nako-yjj')
  subHin = this.CreateSub('Hindi', 'box3', 'xhg-tyux-ygu')
  subMat = this.CreateSub('Maths', 'box4', 'fno-ckas-xsn')
  subEVS = this.CreateSub('EVS', 'box5', 'zfn-xvng-bph')
  subPT = this.CreateSub('PT', 'box6', '')
  subArt = this.CreateSub('Art', 'box7', '')
  subCom = this.CreateSub('Computer', 'box7', 'tff-mzwr-dmp')
  subMus = this.CreateSub('Music/Dance', 'box7', '')

  tableHeader = ['9:00 - 9:30', '9:45 - 10:15', '11:00 - 11:30', '12:15 - 12:45', '6:45 - 7:15']
  tableData = new Map([
    ['1.Monday', [this.subHin, this.subPT, this.subMat, this.subEVS]],
    ['2.Tuesday', [this.subMal, this.subEng, this.subMat, this.subMus]],
    ['3.Wednesday', [this.subCom, this.subMat, this.subEng, this.subMal]],
    ['4.Thursday', [this.subMal, this.subEVS, this.subHin, this.subEng, this.subArt]],
    ['5.Friday', [this.subEVS, this.subEng, this.subMat, this.subHin]]
    ])
  // ng build --prod --base-href "https://JogiJosephGeorge.github.io/MyFirstNgPg/"
  // npx angular-cli-ghpages --dir=dist/my-app
}
