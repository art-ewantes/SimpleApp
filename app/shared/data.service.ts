import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const todos = [
            {
                id: 1,
                title: "LearnJS",
                completed: false
            },
            {
                id: 2,
                title: "Do some",
                completed: true
            },
            {
                id: 3,
                title: "Finish some",
                completed: true
            }
        ];
        return { todos };
    }
}

