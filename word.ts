interface iWord {
    readonly word: string;
    readonly definition: string;
}

class wordDTO implements iWord {
    word: string;
    definition: string;
}