import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Item {
    readonly id: number;
    readonly name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public readonly data = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'Backend' },
        { id: 3, name: 'Business Analyst' },
        { id: 4, name: 'C++ Developer' },
        { id: 5, name: 'Devops' },
        { id: 6, name: 'Frontend' },
        { id: 7, name: 'Fullstack Developer' }
    ];

    public labelHandler = (item: Item) => item.name;
}
