interface MyEventResult {
    name: string;
    value: number;
}

interface MyEventMap {
    myeventname: MyEventResult;
}
declare global {
    interface Window {
        test: number;
        //adds definition to Document, but you can do the same with HTMLElement
        addEventListener<K extends keyof MyEventMap>(
            type: K,
            listener: (this: Document, ev: MyEventMap[K]) => void
        ): void;
    }
}

export {};
