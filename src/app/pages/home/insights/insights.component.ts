import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  imports: [],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss'
})
export class InsightsComponent {
  insights = [
    {
      number: '01',
      name: 'Luke Voiles',
      position: 'Chief Executive Officer',
      description: 'Should vertical software companies develop in-house embedded financing or partner?',
      link: '#',
      additionalClass: 'insights__article',
      personalClass: 'insights__personal',
      textClass: 'insights__text'
    },
    {
      number: '02',
      name: 'Ben Goodyear',
      position: 'Chief Financial Officer',
      description: 'How to unlock financial data as a growth tool, no matter your business size.',
      link: '#',
      additionalClass: 'insights__article insights__article--second',
      personalClass: 'insights__personal insights__personal--white',
      textClass: 'insights__text insights__text--white'
    },
    {
      number: '03',
      name: 'Amy Loh',
      position: 'Chief Marketing Officer',
      description: 'Increasing your embedded finance success with embedded Go-to-Market support.',
      link: '#',
      additionalClass: 'insights__article insights__article--third',
      personalClass: 'insights__personal',
      textClass: 'insights__text'
    },
    {
      number: '04',
      name: 'Manpreet Dhot',
      position: 'Chief Risk Officer',
      description: 'Can embedded capital democratize credit access with unbiased data?',
      link: '#',
      additionalClass: 'insights__article insights__article--fourth',
      personalClass: 'insights__personal',
      textClass: 'insights__text'
    }
  ];
}
