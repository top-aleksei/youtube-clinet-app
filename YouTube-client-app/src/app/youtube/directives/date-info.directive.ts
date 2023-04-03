import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ISearchItem } from '../../shared/models/search-item.model';
import ColorPeriods from './date-info.model';

const zeroDate = Date.parse('2000-01-01');

const datePeriods = {
  week: Date.parse('2000-01-08') - zeroDate,
  month: Date.parse('2000-02-01') - zeroDate,
  halfYear: Date.parse('2000-06-01') - zeroDate,
};

@Directive({
  selector: '[appDateInfo]',
})
export default class DateInfoDirective implements OnInit {
  @Input() item!: ISearchItem;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.addColor();
  }

  addColor() {
    const itemExistDuration = Math.abs(
      Date.now() - Date.parse(this.item.snippet.publishedAt),
    );
    if (itemExistDuration < datePeriods.week) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        ColorPeriods.lessWeek,
      );
      return;
    }
    if (itemExistDuration < datePeriods.month) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        ColorPeriods.moreWeek,
      );
      return;
    }
    if (itemExistDuration < datePeriods.halfYear) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        ColorPeriods.moreMonth,
      );
      return;
    }
    if (itemExistDuration >= datePeriods.halfYear) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-bottom-color',
        ColorPeriods.moreHalfYear,
      );
    }
  }
}
