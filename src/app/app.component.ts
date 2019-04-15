import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dabeng Org Chart Angular app';

  ngOnInit() {

    // tslint:disable-next-line:only-arrow-functions
    $(function() {

      const datascource = {
        'name': 'SGS Rama',
        'title': 'general manager',
        'children': [
          { 'name': 'Bo Miao', 'title': 'department manager' },
          { 'name': 'Su Miao', 'title': 'department manager',
            'children': [
              { 'name': 'Tie Hua', 'title': 'senior engineer' },
              { 'name': 'Hei Hei', 'title': 'senior engineer' }
            ]
          },
          { 'name': 'Hong Miao', 'title': 'department manager' },
          { 'name': 'Chun Miao', 'title': 'department manager' }
        ]
      };

      $('#chart-container').orgchart({
        // tslint:disable-next-line:object-literal-key-quotes
        'data' : datascource,
        'nodeContent': 'title',
        'direction': 't2b',
        'zoom': true,
        'pan': true
      });
    });

  }

}
