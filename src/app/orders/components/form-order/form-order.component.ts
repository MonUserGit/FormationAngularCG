import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() init!: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter<Order>();
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.init);

    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}