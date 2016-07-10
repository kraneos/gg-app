import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core';

import { HomeOptions } from './home-options';
import { Policy } from '../shared/domain/policy';
import { Fee } from '../shared/domain/fee';
import { PolicyClientNamePipe } from './policy-client-name.pipe';
import { FeeClientLastNamePipe } from './fee-client-last-name.pipe';
import { FeePolicyIconPipe } from './fee-policy-icon.pipe';

import { PoliciesService } from '../shared/services/policies.service';
import { FeesService } from '../shared/services/fees.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [MdIconRegistry, MdUniqueSelectionDispatcher, PoliciesService, FeesService],
  pipes: [PolicyClientNamePipe, FeeClientLastNamePipe, FeePolicyIconPipe]
})
export class HomeComponent implements OnInit {
  options: HomeOptions;
  fees: Fee[];
  showOptions: boolean;
  test: number;
  dateStr: string;

  constructor(private policiesService: PoliciesService, private feesService: FeesService) { }

  ngOnInit() {
    this.options = new HomeOptions();
    this.options.date = new Date();
    this.dateStr = this.getDateForInput();
    this.options.limit = '5';
    this.options.page = 1;
    this.filter();
  }

  getDateForInput(): string {
    let year = this.options.date.getFullYear();
    let month = this.options.date.getMonth() + 1;
    let day = this.options.date.getDate();
    return this.options.date.getFullYear() + '-' +
      (month < 10 ? '0' : '') + month + '-' +
      (day < 10 ? '0' : '') + day;
  }

  onDateChange($event: string) {
    if ($event === this.dateStr) {
      return;
    }
    if ($event === '') {
      this.options.date = null;
      this.dateStr = '';
    } else {
      var parts = $event.split('-').map(function (e) {
        return parseInt(e);
      });
      this.options.date = new Date(parts[0], parts[1] - 1, parts[2]);
      this.dateStr = this.getDateForInput();
    }

    this.filter();
  }

  onError(error) {
    return Observable.throw(error.message);
  }

  filter() {
    this.feesService.query(this.options)
      .subscribe(
      fees => this.fees = fees,
      error => this.onError
      );
    this.showOptions = false;
  }

  previousDate() {
    this.options.date = this.addDays(this.options.date, -1);
    this.dateStr = this.getDateForInput();
    this.filter();
  }

  nextDate() {
    this.options.date = this.addDays(this.options.date, 1);
    this.dateStr = this.getDateForInput();
    this.filter();
  }

  private addDays(date, days) {
    let anotherDate = new Date(date.valueOf());
    anotherDate.setDate(anotherDate.getDate() + days);
    return anotherDate;
  }
}
