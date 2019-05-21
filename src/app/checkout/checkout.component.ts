import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation:  ViewEncapsulation.None,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  step = 0;
  favoriteSeason: string;
    payment: string[] = ['Credit_Card', 'Debit_card', 'Net_banking', 'COD'];
    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }
  constructor() { }

  ngOnInit() {
  }

}
