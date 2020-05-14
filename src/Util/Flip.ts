import { HKT } from 'Primitive/HKT';
import { Stuck } from 'Primitive/Stuck';
import { Apply } from 'Util/Apply';
import { Reverse } from 'Promoted/List';

interface Flipped<f extends HKT> extends HKT {
  result: Apply<f, Apply<Reverse, this['param']>>;
}
export interface Flip extends HKT {
  result: this['param'] extends HKT ?
    Flipped<this['param']>
    : Stuck;
}