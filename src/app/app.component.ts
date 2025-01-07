import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './item';
import { ItemComponent } from './components/item/item.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, ItemComponent],
})
export class AppComponent {
  componentTitle = 'TODO';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Buy Groceries', done: true },
    { description: 'Call Mom', done: false },
    { description: 'Hack CIA website', done: false },
  ];

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
